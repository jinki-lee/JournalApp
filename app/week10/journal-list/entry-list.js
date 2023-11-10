import React, { useState, useMemo } from "react";
import Heading from "./heading";
import JournalEntry from "./JournalEntries"; // Assuming you have a JournalEntry component

export default function JournalEntryList({ entries, onEntrySelect }) {
  const [startDateFilter, setStartDateFilter] = useState(""); // Add date filters
  const [endDateFilter, setEndDateFilter] = useState("");

  let filteredEntries = useMemo(() => {
    let tempEntries = [...entries];

    // Apply date filters
    if (startDateFilter) {
      tempEntries = tempEntries.filter((entry) => entry.date >= startDateFilter);
    }

    if (endDateFilter) {
      tempEntries = tempEntries.filter((entry) => entry.date <= endDateFilter);
    }

    return tempEntries;
  }, [entries, startDateFilter, endDateFilter]);

  return (
    <>
      <div className="mx-4 sm:mx-0 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center">
        <div className="flex-grow sm:w-1/3 w-full">
          <label htmlFor="startDate" className="self-center">
            Filter by Start Date:
          </label>
          <input
            id="startDate"
            type="date"
            value={startDateFilter}
            onChange={(e) => setStartDateFilter(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="flex-grow sm:w-1/3 w-full">
          <label htmlFor="endDate" className="self-center">
            Filter by End Date:
          </label>
          <input
            id="endDate"
            type="date"
            value={endDateFilter}
            onChange={(e) => setEndDateFilter(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </div>

      <Heading title="Journal Entries" />

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 font-bold text-left text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 bg-gray-50 font-bold text-left text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 bg-gray-50 font-bold text-left text-gray-500 uppercase tracking-wider">
                Content
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredEntries.length === 0 ? (
              <tr>
                <td colSpan="3" className="text-center py-4">
                  No journal entries found.
                </td>
              </tr>
            ) : (
              filteredEntries.map((entry) => (
                <JournalEntry
                  entry={entry}
                  key={entry.id}
                  onSelect={onEntrySelect}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
