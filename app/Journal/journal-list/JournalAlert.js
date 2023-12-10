import React from 'react';

const JournalAlert = ({ message, onClose }) => {
  return (
    <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
      <span className="font-medium">Success alert!</span> {message}
      <button 
        onClick={onClose} 
        className="ml-4 text-green-800 dark:text-green-400 hover:text-green-600 dark:hover:text-green-500"
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
      >
        X
      </button>
    </div>
  );
};

export default JournalAlert;
