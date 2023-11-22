import React from 'react';

const UserProfileHeader = ({ name, bio }) => {
  return (
    <section>

      <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
        {name}
      </h1>
      <p className="mb-8 text-base font-normal text-gray-500 sm:text-lg md:text-xl lg:text-xl sm:px-8 md:px-16 xl:px-48 dark:text-gray-400">
        {bio}
      </p>
      <a href="/Projects" class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
            <span class="text-xs bg-red-600 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span class="text-sm font-medium">View My Projects!</span> 
            <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </a>
    </section>
  );
};

export default UserProfileHeader;
