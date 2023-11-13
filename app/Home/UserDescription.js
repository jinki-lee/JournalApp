import React from "react";

const UserDescription = () => {
  const personalBio =
    "Specializes in strategizing and implementing tech solutions to elevate customer engagement and drive digital adoption. With a focus on emerging technologies and market trends, my approach aligns digital transformations with business goals, fostering growth and enhancing user experiences.";

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 ">
        <div className="max-w-screen-md mb-8 lg:mb-16 mx-auto text-center">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white ">
            Leaving a Digital Footprint
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            {personalBio}
          </p>
        </div>
        {/* Rest of the code for this section */}
      </div>
    </div>
  );
};

export default UserDescription;
