"use client";
import React from "react";
import StudentCard from "./studentCard";
import AddStudent from "./AddStudent";

async function getAllStudents() {
  const response = await fetch("http://0.0.0.0:8000/api/students/", {
    cache: "no-store",
  });
  const jsonData = await response.json();
  console.log(jsonData);
  return jsonData as object[];
}

// useState<Object[]>([])

export default async function Page() {
  const allStudents = await getAllStudents();

  return (
    <div>
      <AddStudent />
      <h1 className="text-white text-3xl my-10">All Students</h1>
      <div className="flex flex-wrap gap-5">
        {allStudents.map((student: any, index) => {
          return (
            <StudentCard
              key={index}
              _id={student._id}
              regNumber={student.regNumber}
              batch={student.batch}
              contact={student.batch}
            />
          );
        })}
      </div>
    </div>
  );
}
