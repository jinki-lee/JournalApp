import React from "react";
import Link from "next/link"; // Import the Link component from Next.js
import UserProfile from "./Home/UserProfile"; // Update the import path as needed
import '../styles/globals.css';
import 'flowbite';

export default function Home() {
  return (
<section className="bg-white dark:bg-gray-900">
<UserProfile />
</section>
  );
}

