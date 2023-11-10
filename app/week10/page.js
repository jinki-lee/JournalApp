"use client";

import React, { useState, useEffect } from 'react'; // Only one import for both
import NewItem from './shopping-list/new-item';
import ItemList from './shopping-list/item-list';
import MealIdeas from './shopping-list/meal-ideas';
import Login from './login';
import { useUserAuth } from './_utils/auth-context'; // Only one import
import { db } from "./_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";
import getItems from "./_services/shopping-list-service";

// getShoppingList function to fetch items from Firestore
async function getShoppingList(userId) {
  const itemsCollectionRef = collection(db, 'users', userId, 'items');
  const itemsSnapshot = await getDocs(itemsCollectionRef);
  const itemsList = itemsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return itemsList;
}

// addItem function to add a new item to Firestore
async function addItem(userId, newItem) {
  const itemsCollectionRef = collection(db, 'users', userId, 'items');
  const docRef = await addDoc(itemsCollectionRef, newItem);
  return { id: docRef.id, ...newItem };
}


export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState('');
  const { user, firebaseSignOut } = useUserAuth();

  // You should replace this with getShoppingList since it's the new function you've created
  async function loadItems() {
    const itemsFromService = await getShoppingList(user.uid); // Use getShoppingList to fetch items
    setItems(itemsFromService);
  }

  // Updated handleAddItem function to add item to the shopping list
  const handleAddItem = async (newItem) => {
  try {
    const newItemWithId = await addItem(user.uid, newItem); // Use addItem to add to Firestore
    setItems([...items, newItemWithId]); // Update state with new item including Firestore ID
  } catch (error) {
    console.error("Error adding item to Firestore: ", error);
    // Handle the error appropriately
  }
};

  // useEffect hook to load items when the component mounts
  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user?.uid]); // Dependency array includes user.uid
  
  const handleItemSelect = (itemName) => {
    const cleanedName = itemName.split(',')[0].trim().replace(/[^\w\s]/gi, ''); // Remove size, emojis, and any special characters
    setSelectedItemName(cleanedName);
  };

  if (!user) {
    // If the user is not logged in, show the Login component
    return <Login />;
  }

  // User is logged in, display the main content and welcome message
  return (
<main>
  <div style={{ 
    textAlign: 'right', // Aligns text to the right
    paddingRight: '20px', // Adds some space on the right
  }}>
    <p>Welcome, {user.displayName}
    <br />
    ({user.email})</p>
    <br />
    <button 
      onClick={() => firebaseSignOut()}
      style={{ 
        backgroundColor: 'transparent', // Transparent background
        color: 'red', // Red text color
        cursor: 'pointer', // Changes the cursor on hover
        border: '2px solid red', // Red border
        padding: '10px 20px', // Adds padding for a bigger click area
        borderRadius: '5px', // Rounded corners
        transition: 'all 0.3s', // Smooth transition for color and background
        outline: 'none', // Removes the outline on focus
      }}
      onMouseOver={e => {
        e.target.style.backgroundColor = 'red'; // Red background on hover
        e.target.style.color = 'white'; // White text on hover
      }}
      onMouseOut={e => {
        e.target.style.backgroundColor = 'transparent'; // Transparent background when not hovered
        e.target.style.color = 'red'; // Red text when not hovered
      }}
    >
      Sign out
    </button>
  </div>
  <NewItem onAddItem={handleAddItem} />
  <ItemList items={items} onItemSelect={handleItemSelect} />
  <MealIdeas ingredient={selectedItemName} />
</main>


  );
}
