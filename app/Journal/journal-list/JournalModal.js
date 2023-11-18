import React from 'react';

const JournalModal = ({ isOpen, content, onClose, url }) => {
  if (!isOpen) return null;

  const isYoutubeLink = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11;
  };

  const goToLink = () => {
    if (isYoutubeLink(url)) {
      window.open(url, '_blank');
    }
  };

  return (
    <div
      id="popup-modal"
      tabIndex="-1"
      className="fixed inset-0 flex items-center justify-center z-50 backdrop-filter backdrop-blur-sm"
    >
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg dark:bg-gray-700">
        {/* Close Icon Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-3 right-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-700"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <span className="sr-only">Close</span>
        </button>
        <div className="p-4 md:p-5 text-center">
          <h3 className="mb-5 text-lg font-semibold text-gray-700 dark:text-gray-300">
            {content}
          </h3>
          {isYoutubeLink(url) && (
            <button
              onClick={goToLink}
              type="button"
              className="text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 mr-2"
            >
              Go to Video
            </button>
          )}
          {/* Optional: Include a Close button as text in addition to the icon */}
        </div>
      </div>
    </div>
  );
};

export default JournalModal;
