import React from "react";

import UserProfile from "./UserProfile";
import UserDescription from "./UserDescription";
import UserProjects from "./UserProjects";

export default function Page() {
  return (
    <div>
      <UserProfile />
      <UserDescription />
      <UserProjects />
    </div>
  );
}
