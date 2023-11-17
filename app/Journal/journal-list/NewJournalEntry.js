import React, { useState } from "react";
import Alert from "./alert";

export default function NewJournalEntry({ onAddEntry }) {
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split("T")[0]; // Format as yyyy-MM-dd
  const [date, setDate] = useState(formattedDate); // Set the initial state to today's date

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation
    if (!date || !title || !content) {
      // Show an alert for missing fields
      setShowAlert(true);
      return;
    }

    const newEntry = {
      date: date,
      title: title,
      content: content,
    };

    onAddEntry(newEntry);

    setDate("");
    setTitle("");
    setContent("");

    // Automatically hide the alert after 3 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <section className="dark:bg-gray-900">
      {showAlert && (
        <Alert type="info" onClose={() => setShowAlert(false)}>
          Journal entry added successfully!
        </Alert>
      )}

<main className="py-8 px-4 mx-auto max-w-4xl lg:py-8">

<h1 class="mb-8 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Journal</span> App</h1>

  <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
    Add a New Journal Entry
  </h2>

  <form
    onSubmit={handleSubmit}
    className="flex flex-col items-center sm:items-start w-full max-w-4xl"
  >
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 w-full">
      <div className="sm:col-span-2">
        <label
          htmlFor="date"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Date *
        </label>
        <input
          type="date"
          id="date"
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        />
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Title *
        </label>
        <input
          type="text"
          id="title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        />
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="content"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Content *
        </label>
        <textarea
          id="content"
          rows="6"
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
        ></textarea>
      </div>
      <div className="sm:col-span-2 flex justify-end">
        <button
          type="submit"
          className="inline-flex items-center px-6 py-3 mt-4 sm:mt-6 text-base font-medium text-center text-white rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 bg-blue-500 hover:bg-blue-700 ml-auto"
        >
          Add Journal Entry
        </button>
      </div>
    </div>
  </form>
</main>

    </section>
  );
}
