"use client";
import React from "react";
import AddRubric from "./AddRubric";
import RubricCard from "./RubricCard";

async function getAllRubrics() {
  const response = await fetch("http://0.0.0.0:8000/api/rubrics/", {
    cache: "no-store",
  });
  const jsonData = await response.json();
  return jsonData as object[];
}

export default async function Rubric() {
  const allRubrics = await getAllRubrics();

  return (
    <>
      <AddRubric />
      <div className="flex flex-wrap gap-5 mt-5">
        {allRubrics.map((rubric: any, index) => {
          return (
            <RubricCard
              key={index}
              _id={rubric._id}
              rubricName={rubric.rubricName}
              mappedToPLO={rubric.mappedToPLO}
              maxScore={rubric.maxScore}
              academicYear={rubric.academicYear}
            />
          );
        })}
      </div>
    </>
  );
}
