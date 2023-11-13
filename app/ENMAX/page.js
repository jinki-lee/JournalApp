import React from "react";
import DemoSection from "./DemoSection"; // Adjust the path as necessary
import TeamSection from "./TeamSection"; // Adjust the path as necessary
import TimelineSection from "./TimelineSection"; // Adjust the path as necessary


export default function Page() {
  return (
    <main>
      <DemoSection />
      <TeamSection />
      <TimelineSection />
    </main>
  );
}