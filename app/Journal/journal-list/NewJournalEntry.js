import React, { useState } from "react";

export default function NewJournalEntry({ onAddEntry }) {
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split("T")[0]; // Format as yyyy-MM-dd
  const [date, setDate] = useState(formattedDate); // Set the initial state to today's date
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [songTitle, set] = useState([]);
  const [currentLink, setCurrentLink] = useState("");

  const addSong = () => {
    if (songTitle.length < 3 && currentLink) {
      set([...songTitle, currentLink]);
      setCurrentLink(""); // Reset the input field after adding
    }
  };

  const removeSong = (index) => {
    set(songTitle.filter((_, idx) => idx !== index));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation
    if (!date || !title || !content) {
      // Show an alert for missing fields
      setShowAlert(true);
      return;
    }

    const newEntry = {
      date,
      title,
      content,
      songTitle,
    };

    onAddEntry(newEntry);

    // Reset form fields
    setDate(formattedDate);
    setTitle("");
    setContent("");
    set([]);

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
        <h1 className="mb-8 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Journal
          </span>{" "}
          App
        </h1>

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
                maxLength={30}
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                  }
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="content"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Thoughts *
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
            <div className="sm:col-span-2">
              <label
                htmlFor="add"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Add up to 3 songs that remind you of this moment
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="add"
                  value={currentLink}
                  onChange={(e) => setCurrentLink(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addSong();
                    }
                  }}
                  className="block w-full p-4 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Song name"
                />
                <button
                  onClick={addSong}
                  type="button"
                  className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add
                </button>
              </div>
            </div>

            <div className="sm:col-span-2">
              {songTitle.map((link, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-gray-100 p-3 rounded-lg mb-2 shadow-sm"
                >
                  <span className="text-gray-800 truncate">{link}</span>
                  <button
                    onClick={() => removeSong(index)}
                    type="button"
                    className="ml-4 text-red-500 hover:text-red-700 flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    Remove
                  </button>
                </div>
              ))}
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
