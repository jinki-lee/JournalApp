import React from "react";
import UserProfileHeader from "./UserProfileHeader";


const UserProfile = () => {
  const yourName = "Jinki Lee";
  const personalBio = "Software & Web Developer | Business Graduate";

  return (
    <main className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
      <UserProfileHeader name={yourName} bio={personalBio} />

    </main>
  );
};

export default UserProfile;
