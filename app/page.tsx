import React from "react";
import Link from "next/link"; // Import the Link component from Next.js
import StudentInfo from "./week2/StudentInfo"; // Update the import path as needed
import '../styles/globals.css';
import 'flowbite';

export default function Home() {
  return (
<section className="bg-white dark:bg-gray-900">
<StudentInfo />
</section>
  );
}

