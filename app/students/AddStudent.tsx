"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddStudent() {
  const router = useRouter();
  const [regno, setRegNo] = useState("");
  const [batch, setBatch] = useState("");
  const [contactNo, setContactNo] = useState("");

  const addStudent = async (event: any) => {
    event.preventDefault();

    fetch("http://0.0.0.0:8000/api/students/addStudent", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      body: JSON.stringify({
        regNumber: regno,
        batch: batch,
        contact: contactNo,
      }),
    })
      .then((response) => {
        console.log(response.status);

        response.json();
      })
      .then((data) => {
        console.log(data);
        router.refresh();
      });
  };
  return (
    <form onSubmit={addStudent}>
      <label className="label">
        <span className="label-text">Student Registration No.</span>
      </label>
      <input
        onChange={(event) => setRegNo(event.target.value)}
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      />
      <label className="label">
        <span className="label-text">Batch</span>
      </label>
      <input
        onChange={(event) => setBatch(event.target.value)}
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      />
      <label className="label">
        <span className="label-text">Contact</span>
      </label>
      <input
        onChange={(event) => setContactNo(event.target.value)}
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      />
      <br />

      <button className="btn btn-outline btn-accent mt-5" type="submit">
        Add
      </button>
    </form>
  );
}
