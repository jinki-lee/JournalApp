import React, { useState, useMemo } from "react";
import Heading from "./heading";
import JournalEntry from "./JournalEntry";

export default function JournalEntryList({ entries, onEntrySelect }) {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  let filteredEntries = useMemo(() => {
    let tempEntries = [...entries];

    if (selectedMonth) {
      tempEntries = tempEntries.filter((entry) => {
        const entryDate = new Date(entry.date);
        return entryDate.getMonth() + 1 === selectedMonth;
      });
    }

    if (selectedYear) {
      tempEntries = tempEntries.filter((entry) => {
        const entryDate = new Date(entry.date);
        return entryDate.getFullYear() === selectedYear;
      });
    }

    return tempEntries;
  }, [entries, selectedMonth, selectedYear]);

  return (
    <>
      <div className="mx-4 sm:mx-0 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center">
        <div className="flex-grow sm:w-1/3 w-full">
          <label htmlFor="selectMonth" className="self-center">
            Filter by Month:
          </label>
          <select
            id="selectMonth"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">All Months</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>

        <div className="flex-grow sm:w-1/3 w-full">
          <label htmlFor="selectYear" className="self-center">
            Filter by Year:
          </label>
          <select
            id="selectYear"
            value={selectedYear}
            onChange={(e) => setSelectedYear(parseInt(e.target.value))}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">All Years</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            {/* Add options for other years */}
          </select>
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
