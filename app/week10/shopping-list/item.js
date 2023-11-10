import React from "react";
export default function Item({ item, onSelect }) {
  return (
    <tr
      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer"
      onClick={() => onSelect(item.name)}
    >
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {item.id}
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {item.name}
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {item.quantity}
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {item.category}
      </td>
    </tr>
  );
}
