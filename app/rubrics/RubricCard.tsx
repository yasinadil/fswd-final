"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function RubricCard(props: any) {
  const router = useRouter();
  async function deleteStudent() {
    console.log("clicked");

    const response = await fetch(
      `http://0.0.0.0:8000/api/rubrics/${props._id}`,
      {
        method: "DELETE",
      }
    );
    const jsonData = await response.json();
    console.log(jsonData);
    router.refresh();
  }

  return (
    <div>
      <div className="card w-80 bg-primary text-primary-content">
        <div className="card-body">
          <h3 className="card-title">Rubric Name: {props.rubricName}</h3>
          <h3>mappedToPLO: {props.mappedToPLO}</h3>
          <h3>maxScore: {props.maxScore}</h3>
          <h3>academicYear: {props.academicYear}</h3>

          <div className="card-actions justify-end">
            <button onClick={deleteStudent} className="btn">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
