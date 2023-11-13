import React from "react";
import ProjectCard1 from "./ProjectCard1"; // Adjust the path as necessary
import ProjectCard2 from "./ProjectCard2"; // Adjust the path as necessary
import ProjectCard3 from "./ProjectCard3"; // Adjust the path as necessary
import ProjectCard4 from "./ProjectCard4"; // Adjust the path as necessary


export default function Page() {
  return (
    <main>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              My Projects
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              I excel in merging technical expertise with creative vision to
              create digital experiences that resonate with users and meet
              varied business objectives. My proficiency extends across software
              development, web app creation, and capturing media through both
              video and photography, ensuring a dynamic and comprehensive
              digital impact.
            </p>
          </div>

          {/* First 2 Cards */}
          <div className="grid gap-8 lg:grid-cols-2 mb-10">
            {/* Vlogs */}
            <ProjectCard1 />

            {/* ENMAX IT Recognition Portal */}
            <ProjectCard2 />
          </div>

          {/* Second 2 Cards */}
          <div className="grid gap-8 lg:grid-cols-2 mb-10">
            {/* Journal App */}
            <ProjectCard3 />

            {/* QP Cleaners */}
            <ProjectCard4 />

          </div>

        </div>
      </section>
    </main>
  );
}
