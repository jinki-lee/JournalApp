import React, { useState } from "react";

export default function JounralInfoSection() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Visualize Your Emotions
          </h2>
          <div className={expanded ? "" : "mb-4"}>
            <p className="mb-4">
              2023 was an incredibly wild year for me. I embarked on my first
              full-time job, took a full course load at school. I picked up the habit of
              going to the gym every morning to clear my head and prepare
              for the day, which was somewhat helpful, but my mind remained
              overwhelmed with thoughts.
            </p>
            {expanded && (
              <div>
                <p className="mb-4">
                  I found myself navigating life, striving to determine my path,
                  staying connected with friends and family, and attempting to
                  maintain a healthy balance between work and personal life.
                </p>
                <p className="mb-4">
                  I often found myself overthinking every situation, feeling a
                  lack of creativity and motivation, and being exhausted from
                  managing relationships. Eventually, I was diagnosed with
                  Generalized Anxiety Disorder.
                </p>
                <p className="mb-4">
                  This realization prompted a shift in my perspective. I learned
                  to be content with my achievements and what I possess. Rather
                  than constantly seeking the next big thing and stressing over
                  not achieving it, I began to appreciate what I have and my
                  accomplishments. This shift in mindset inspired me to develop
                  an app and plan a solo backpacking trip to Peru.
                </p>
              </div>
            )}
            {!expanded && (
              <p
                className="text-blue-500 cursor-pointer"
                onClick={toggleExpand}
              >
                Read more
              </p>
            )}
          </div>
          {expanded && (
            <p className="text-blue-500 cursor-pointer" onClick={toggleExpand}>
              Read less
            </p>
          )}
          <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
        <img className="w-10 h-10 rounded-full" src="/jinki-2.jpg" alt="profile picture"/>
        <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
            <cite className="pe-3 font-medium text-gray-900 dark:text-white">Jinki Lee</cite>
            <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">An Overthinker</cite>
        </div>
    </figcaption>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="office content 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
}
