import React from "react";
import DemoSection from "./DemoSection"; 
import TeamSection from "./TeamSection"; 
import TimelineSection from "./TimelineSection"; 
import AchievementSection from "./AchievementSection"; 
import ProjectInfo from "./ProjectInfo";
import ProjectGallery from "./ProjectGallery";  


export default function Page() {
  return (
    <main>
      <DemoSection />
      <TeamSection />
      <ProjectInfo />
      <TimelineSection />
      <AchievementSection />
      <ProjectGallery/>
    </main>
  );
}