"use client";

import React, { useState, useEffect } from "react";
import NewJournalEntry from "./journal-list/NewJournalEntry"; // Renamed import
import JournalEntryList from "./journal-list/JournalEntryList"; // Renamed import
import Login from "./login";
import { useUserAuth } from "./_utils/auth-context";
import { db } from "./_utils/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

// getJournalEntries function to fetch journal entries from Firestore
async function getJournalEntries(userId) {
  const journalCollectionRef = collection(
    db,
    "users",
    userId,
    "journalEntries"
  );
  const journalSnapshot = await getDocs(journalCollectionRef);
  const journalEntries = journalSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return journalEntries;
}

// addJournalEntry function to add a new journal entry to Firestore
async function addJournalEntry(userId, newEntry) {
  const journalCollectionRef = collection(
    db,
    "users",
    userId,
    "journalEntries"
  );
  const docRef = await addDoc(journalCollectionRef, newEntry);
  return { id: docRef.id, ...newEntry };
}

export default function Page() {
  const [journalEntries, setJournalEntries] = useState([]); // Rename state
  const [selectedEntry, setSelectedEntry] = useState(null); // New state
  const { user, firebaseSignOut } = useUserAuth();

  // Use getJournalEntries to fetch journal entries
  async function loadJournalEntries() {
    const entriesFromService = await getJournalEntries(user.uid);
    setJournalEntries(entriesFromService);
  }

  // Updated handleAddJournalEntry function to add an entry to the journal
  const handleAddJournalEntry = async (newEntry) => {
    try {
      const newEntryWithId = await addJournalEntry(user.uid, newEntry);
      setJournalEntries([...journalEntries, newEntryWithId]);
    } catch (error) {
      console.error("Error adding journal entry to Firestore: ", error);
      // Handle the error appropriately
    }
  };

  // useEffect hook to load journal entries when the component mounts
  useEffect(() => {
    if (user) {
      loadJournalEntries();
    }
  }, [user?.uid]);

  // New function to handle selecting a journal entry
  const handleEntrySelect = (entry) => {
    setSelectedEntry(entry);
  };

  if (!user) {
    return <Login />;
  }

  return (
    <main>
      <div
        style={{
          textAlign: "right",
          paddingRight: "20px",
        }}
      >
        <p>
          Welcome, {user.displayName}
          <br />({user.email})
        </p>
        <br />
        <button
          onClick={() => firebaseSignOut()}
          style={{
            backgroundColor: "transparent",
            color: "red",
            cursor: "pointer",
            border: "2px solid red",
            padding: "10px 20px",
            borderRadius: "5px",
            transition: "all 0.3s",
            outline: "none",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "red";
            e.target.style.color = "white";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = "red";
          }}
        >
          Sign out
        </button>
      </div>
      <NewJournalEntry onAddEntry={handleAddJournalEntry} />{" "}
      {/* Rename component */}
      <JournalEntryList
        entries={journalEntries}
        onEntrySelect={handleEntrySelect}
      />{" "}
      {/* Rename component */}
      {/* Render the selected entry's content */}
      {selectedEntry && (
        <div className="journal-entry-content">
          <h3>{selectedEntry.title}</h3>
          <p>Date: {selectedEntry.date}</p>
          <p>{selectedEntry.content}</p>
        </div>
      )}
    </main>
  );
}
