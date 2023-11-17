import React from "react";

export default function TeamSection() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Meet the team
          </h2>
          <p className="mb-4">
            In the group photo, from left to right, you will find the capstone
            team members:
            </p> 

            <ul className="text-center">
              <li>Eric Gagne</li>
              <li>John Holloway</li>
              <li>Avery Johnson-Dhillon</li>
              <li>Joshua Lokhorst</li>
              <li>Jinki Lee</li>
            </ul>
          <br/>
          <p className="mb-4">
            The Digital Experience Team at ENMAX played a pivotal role in
            providing invaluable guidance during the project management, design,
            and development phases throughout our project.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src="/jinki-1.jpg"
            alt="office content 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="/CapstoneGroup.png"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
}
