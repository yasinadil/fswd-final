"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function StudentCard(props: any) {
  const router = useRouter();
  async function deleteStudent() {
    console.log("clicked");

    const response = await fetch(
      `http://0.0.0.0:8000/api/students/${props._id}`,
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
      <div className="card w-96 bg-primary text-primary-content">
        <div className="card-body">
          <h3 className="card-title">Reg Number: {props.regNumber}</h3>
          <h3>Batch: {props.batch}</h3>
          <h3>Contact Number: {props.contact}</h3>
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
