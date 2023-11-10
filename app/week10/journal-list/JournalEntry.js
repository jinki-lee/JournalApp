import React from "react";

export default function JournalEntry({ entry, onSelect }) {
  return (
    <tr
      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer"
      onClick={() => onSelect(entry.id)}
    >
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {entry.date} {/* Display the date of the journal entry */}
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {entry.title} {/* Display the title of the journal entry */}
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {/* Display a brief summary of the journal content */}
        {entry.content.length > 50
          ? `${entry.content.substring(0, 50)}...`
          : entry.content}
      </td>
    </tr>
  );
}
