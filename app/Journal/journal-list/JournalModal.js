import React from "react";

const JournalModal = ({ isOpen, entry, onClose }) => {
  if (!isOpen || !entry) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-filter backdrop-blur-sm">
      <div className="relative p-4 w-full max-w-lg bg-white rounded-lg shadow dark:bg-gray-700">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {entry.date}
            <br />
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-2 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 inline-block align-text-top"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>{" "}
          </button>
        </div>
        {/* Modal Body */}
        <div className="p-4 space-y-4">
          <p className="text-base leading-relaxed text-gray-900 dark:text-gray-400">
            Title: {entry.title}
            <br />
            Content: {entry.content}
          </p>
          {entry.songTitle && entry.songTitle.length > 0 && (
            <div>
              <h4 className="font-semibold">Songs:</h4>
              <ul>
                {entry.songTitle.map((link, index) => (
                  <li key={index}>{link}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {/* Modal Footer */}
        <div className="flex items-center p-4 border-t border-gray-200 rounded-b dark:border-gray-600">
          <button
            onClick={onClose}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default JournalModal;
