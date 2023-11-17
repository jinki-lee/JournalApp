import React, { useState, useMemo } from "react";
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
<div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
  <div className="flex">
    {/* <!-- Filter by Month --> */}
    <div className="flex-grow sm:w-1/2 w-full mr-4">
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

    {/* <!-- Filter by Year --> */}
    <div className="flex-grow sm:w-1/2 w-full">
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
        <option value="2024">2023</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        {/* Add options for other years */}
      </select>
    </div>
  </div>
</div>



<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Date
                </th>
                <th scope="col" className="px-6 py-3">
                    Title
                </th>
                <th scope="col" className="px-6 py-3">
                    Content
                </th>
            </tr>
        </thead>
        <tbody>
            {filteredEntries.length === 0 ? (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td colSpan="3" className="px-6 py-4 text-center">
                        No journal entries found.
                    </td>
                </tr>
            ) : (
                filteredEntries.map((entry) => (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {entry.date}
                        </th>
                        <td className="px-6 py-4">
                            {entry.title}
                        </td>
                        <td className="px-6 py-4">
                            {entry.content}
                        </td>
                    </tr>
                ))
            )}
        </tbody>
    </table>
</div>

    </>
  );
}
