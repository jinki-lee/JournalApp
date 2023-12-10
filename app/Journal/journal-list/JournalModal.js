import React from "react";

const JournalModal = ({ isOpen, entry, onClose }) => {
  if (!isOpen || !entry) return null;

  return (
    <div className="overflow-y-auto overflow-x-hidden fixed inset-0 z-50 flex items-center justify-center backdrop-filter backdrop-blur-sm">
      <div className="relative p-4 w-full max-w-xl">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-800 p-4 sm:p-5">
          <div className="flex justify-between mb-4 rounded-t sm:mb-5">
            <div>
              <h3 className="text-lg text-gray-900 dark:text-white md:text-xl font-semibold">
                {entry.title}
              </h3>

            </div>
            <button
              onClick={onClose}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <p className="font-bold">{entry.date}</p>
                          {/* Songs List */}
            {entry.songTitle && entry.songTitle.length > 0 && (
              <div className="mb-5 mt-5">
                <h4 className="font-semibold">Songs:</h4>
                <ul>
                  {entry.songTitle.map((song, index) => (
                    <li key={index}>{song}</li>
                  ))}
                </ul>
              </div>
            )}
          <div className="overflow-auto max-h-80">
            {" "}
            {/* Set a maximum height as needed */}
            <h4 className="font-semibold">Journal:</h4>

            <p className="text-base leading-relaxed text-gray-900 dark:text-gray-400">
              {entry.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalModal;
