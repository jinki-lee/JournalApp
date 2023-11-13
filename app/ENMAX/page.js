import React from "react";
import DemoSection from "./DemoSection"; 
import TeamSection from "./TeamSection"; 
import TimelineSection from "./TimelineSection"; 
import AchievementSection from "./AchievementSection"; 
import QuestionSection from "./QuestionSection";


export default function Page() {
  return (
    <main>
      <DemoSection />
      <TeamSection />
      <TimelineSection />
      <AchievementSection />
      <QuestionSection />
    </main>
  );
}