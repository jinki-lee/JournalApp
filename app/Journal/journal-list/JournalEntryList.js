import React, { useState, useMemo } from "react";
import axios from "axios";

const fetchYouTubeTitle = async (url) => {
  const videoId = extractYouTubeVideoId(url);
  if (!videoId) return "Invalid URL";

  const apiKey = "AIzaSyCWNa-2gnu2tYlZik59nRkepBXRhFQQruI"; // Replace with your actual API key
  const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet`;

  try {
    const response = await axios.get(apiUrl);
    const videoTitle = response.data.items[0].snippet.title; // Fetches the video title
    return videoTitle;
  } catch (error) {
    console.error("Error fetching YouTube video details:", error);
    return "Error fetching title";
  }
};

const extractYouTubeVideoId = (url) => {
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

export default function JournalEntryList({ entries, onEntrySelect }) {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  // Helper function to determine if a URL is a YouTube link
  const isYoutubeLink = (url) => {
    return extractYouTubeVideoId(url) !== null;
  };
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
                Content
              </th>
              <th scope="col" className="px-6 py-3">
                Songs
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredEntries.length === 0 ? (
              <tr>
                <td colSpan="4" className="px-6 py-4 text-center">
                  No journal entries found.
                </td>
              </tr>
            ) : (
              filteredEntries.map((entry) => (
                <tr className="border-b hover:bg-gray-100 dark:hover:bg-gray-700">
                  <td className="px-6 py-4">{entry.date}</td>
                  <td className="px-6 py-4">{entry.title}</td>
                  <td className="px-6 py-4">
                    {entry.content.length > 50
                      ? `${entry.content.substring(0, 50)}...`
                      : entry.content}
                  </td>
                  <td className="px-6 py-4">
                    {entry.youtubeLinks && entry.youtubeLinks.length > 0 ? (
                      entry.youtubeLinks.map((link, index) => (
                        <div
                          key={index}
                          className="text-blue-600 hover:text-blue-800 mb-1 truncate"
                        >
                          {isYoutubeLink(link) ? (
                            <span
                              onClick={async () => {
                                const title = await fetchYouTubeTitle(link);
                                alert(`Video Title: ${title}`);
                              }}
                              className="cursor-pointer"
                            >
                              Link {index + 1}
                            </span>
                          ) : (
                            <span>{link}</span> // Display the input text if not a YouTube link
                          )}
                        </div>
                      ))
                    ) : (
                      <span className="text-gray-500">No links</span>
                    )}
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
