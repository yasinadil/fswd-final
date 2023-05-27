"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function AddStudent() {
  const router = useRouter();
  const addStudent = async (event: any) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = Object.fromEntries(form);
    const config = {
      headers: { "content-type": "application/json" },
    };

    axios
      .post("http://0.0.0.0:8000/api/students/addStudent", data, config)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    router.refresh();
  };
  return (
    <>
      <h1 className="text-white font-bold text-3xl text-center">Students</h1>
      <form onSubmit={addStudent}>
        <label className="label">
          <span className="label-text">Student Registration No.</span>
        </label>
        <input
          // onChange={(event) => setRegNo(event.target.value)}
          type="text"
          name="regNumber"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <label className="label">
          <span className="label-text">Batch</span>
        </label>
        <input
          // onChange={(event) => setBatch(event.target.value)}
          type="text"
          name="batch"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <label className="label">
          <span className="label-text">Contact</span>
        </label>
        <input
          // onChange={(event) => setContactNo(event.target.value)}
          type="text"
          name="contact"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <br />

        <button className="btn btn-outline btn-accent mt-5" type="submit">
          Add
        </button>
      </form>
    </>
  );
}
