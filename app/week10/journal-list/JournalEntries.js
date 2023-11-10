import React from "react";

function JournalEntries({ entries, onSelect }) {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Journal Entries
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Explore your journal entries.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {entries && entries.length > 0 ? (
            entries.map((entry) => (
              <article
                key={entry.id}
                className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="flex justify-between items-center mb-5 text-gray-500">
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                    <svg
                      className="mr-1 w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"></path>
                      <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
                    </svg>
                    Journal Entry
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    {entry.date}
                  </span>
                </div>
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {entry.title}
                </h2>
                <div className="mb-4 text-gray-600 dark:text-gray-300">
                  {entry.content}
                </div>
                <button
                  onClick={() => onSelect(entry.id)}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  View Details
                </button>
              </article>
            ))
          ) : (
            <p className="text-red-600">No journal entries to be found.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default JournalEntries;
