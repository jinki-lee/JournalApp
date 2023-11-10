import React, { useState } from "react";

export default function Alert({ type, children, onClose }) {
    const alertClasses = {
      info: "bg-blue-100 text-blue-800 border-blue-300",
      danger: "bg-red-100 text-red-800 border-red-300",
    };
  
    const [isClosed, setIsClosed] = useState(false);
  
    const handleClose = () => {
      setIsClosed(true);
      onClose();
    };
  
    return (
      !isClosed && (
        <div className={`p-4 mb-4 text-sm rounded-lg border ${alertClasses[type]}`} role="alert">
          <div className="flex justify-between">
            <div className="flex items-center">
              <svg
                className="flex-shrink-0 w-4 h-4 mr-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                {/* Add your close icon path data here */}
              </svg>
              {children}
            </div>
            <button
              onClick={handleClose}
              className="focus:outline-none"
              aria-label="Close alert"
            >
              <svg
                className="w-4 h-4 fill-current text-gray-500 hover:text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.293 3.293a1 1 0 011.414 0L10 8.586l5.293-5.293a1 1 0 111.414 1.414L11.414 10l5.293 5.293a1 1 0 11-1.414 1.414L10 11.414l-5.293 5.293a1 1 0 01-1.414-1.414L8.586 10 3.293 4.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      )
    );
  }