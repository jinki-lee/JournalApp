import React, { useState, useMemo } from "react";
import JournalModal from "./JournalModal"; // Adjust the path as necessary

export default function JournalEntryList({ entries }) {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);

  let filteredEntries = useMemo(() => {
    let tempEntries = entries
      .filter((entry) =>
        (selectedMonth ? new Date(entry.date).getMonth() + 1 === parseInt(selectedMonth) : true) &&
        (selectedYear ? new Date(entry.date).getFullYear() === parseInt(selectedYear) : true)
      )
      .sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date in descending order

    return tempEntries;
  }, [entries, selectedMonth, selectedYear]);

  const showModalWithContent = (entry) => {
    setSelectedEntry(entry);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <div className="flex">
          {/* Filter by Month */}
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

          {/* Filter by Year */}
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
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>
          </div>
        </div>
      </div>

      <div className="px-4 mx-auto max-w-2xl lg:py-16">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-900 dark:text-white bg-white dark:bg-gray-800 rounded-lg">
            <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredEntries.length === 0 ? (
              <tr>
                <td colSpan="3" className="px-6 py-4 text-center">
                  No journal entries found.
                </td>
              </tr>
            ) : (
              filteredEntries.map((entry) => (
                <tr className="border-b hover:bg-gray-100 dark:hover:bg-gray-700" key={entry.id}>
                  <td className="px-6 py-4">{entry.date}</td>
                  <td className="px-6 py-4">{entry.title}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => showModalWithContent(entry)}
                      className="text-blue-600 hover:text-blue-800 mb-1 truncate"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))
            )}
           </tbody>
          </table>
        </div>
      </div>

      <JournalModal
        isOpen={isModalOpen}
        entry={selectedEntry}
        onClose={closeModal}
      />
    </>
  );
}