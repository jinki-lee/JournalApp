import React from "react";

const StudentInfo = () => {
  const yourName = "Jinki Lee"; // Replace with your actual name
  const courseSection = "CPRG 306 F"; // Replace with your course section
  const githubRepoUrl = "https://github.com/jinki-lee"; // Replace with your GitHub repository URL
  const linkedInUrl = "https://www.linkedin.com/in/jinkilee/";
  const vercelAppUrl = "https://cprg306-assignments-coral.vercel.app/";
  const porfolioUrl = "https://jinkilee.ca";

  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
      <a
        href={porfolioUrl}
        target="_blank"
        className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
        role="alert"
      >
        <span className="text-xs bg-red-600 rounded-full text-white px-4 py-1.5 mr-3">
          New
        </span>{" "}
        <span className="text-sm font-medium">
          My Portfolio
        </span>
        <svg
          className="ml-2 w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a>
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        {yourName}
      </h1>
      <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        Course Section: {courseSection}
      </p>
      <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
        <span className="font-semibold text-gray-400 uppercase">
          Profile Links
        </span>
        <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
          {/* Github */}
          <a
            href={githubRepoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-5 mb-5 text-4xl lg:mb-0 hover:text-gray-900 dark:hover:text-gray-400"
          >
            <text>Github</text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
            >
              <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
            </svg>
          </a>
          {/* Vercel App */}
          <a
            href={vercelAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-5 mb-5 text-4xl lg:mb-0 hover:text-gray-900 dark:hover:text-gray-400"
          >
            <text>Vercel App</text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="210"
              height="100"
              viewBox="0 0 512 116"
            >
              <path d="M255.42 28.976c-19.993 0-34.408 13.039-34.408 32.597c0 19.559 16.226 32.598 36.22 32.598c12.079 0 22.727-4.781 29.32-12.84l-13.855-8.004c-3.658 4.002-9.218 6.338-15.466 6.338c-8.674 0-16.045-4.527-18.78-11.771h50.744c.399-2.029.634-4.13.634-6.339c0-19.54-14.415-32.58-34.409-32.58Zm-17.13 26.259c2.263-7.226 8.457-11.772 17.113-11.772c8.675 0 14.869 4.546 17.114 11.772H238.29Zm212.138-26.26c-19.993 0-34.409 13.04-34.409 32.598c0 19.559 16.226 32.598 36.22 32.598c12.079 0 22.727-4.781 29.32-12.84l-13.855-8.004c-3.658 4.002-9.217 6.338-15.465 6.338c-8.675 0-16.046-4.527-18.78-11.771H484.2c.399-2.029.634-4.13.634-6.339c0-19.54-14.415-32.58-34.408-32.58Zm-17.114 26.26c2.264-7.226 8.457-11.772 17.114-11.772c8.674 0 14.868 4.546 17.113 11.772h-34.227Zm-70.683 6.338c0 10.866 7.1 18.11 18.11 18.11c7.461 0 13.057-3.386 15.937-8.91l13.908 8.023c-5.759 9.598-16.552 15.375-29.845 15.375c-20.011 0-34.408-13.04-34.408-32.598s14.415-32.597 34.408-32.597c13.293 0 24.068 5.777 29.845 15.375l-13.908 8.023c-2.88-5.524-8.476-8.91-15.937-8.91c-10.992 0-18.11 7.243-18.11 18.11ZM512 9.055V92.36h-16.299V9.055H512ZM66.916 0l66.915 115.903H0L66.916 0Zm167.298 9.055l-50.182 86.927l-50.183-86.927h18.817l31.366 54.33l31.366-54.33h18.816Zm106.685 21.732v17.548c-1.811-.525-3.73-.887-5.795-.887c-10.522 0-18.11 7.244-18.11 18.11V92.36h-16.299V30.787h16.299v16.66c0-9.2 10.703-16.66 23.905-16.66Z" />
            </svg>
          </a>
          {/* LinkedIn */}
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-5 mb-5 text-4xl lg:mb-0 hover:text-gray-900 dark:hover:text-gray-400"
          >
            <text>LinkedIn</text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 48 48"
            >
              <path
                fill="#0288D1"
                d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
              ></path>
              <path
                fill="#FFF"
                d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default StudentInfo;
