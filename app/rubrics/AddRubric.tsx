"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function AddRubric() {
  const router = useRouter();

  const addRubric = async (event: any) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = Object.fromEntries(form);
    console.log(data);

    const config = {
      headers: { "content-type": "application/json" },
    };

    axios
      .post("http://0.0.0.0:8000/api/rubrics/addRubric", data, config)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    router.refresh();
  };
  return (
    <form onSubmit={addRubric}>
      <h1 className="text-center font-bold text-white text-3xl">Rubrics</h1>
      <label className="label">
        <span className="label-text">Rubric name</span>
      </label>
      <input
        type="text"
        name="rubricName"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      />
      <label className="label">
        <span className="label-text">Mapped to PLO</span>
      </label>
      <input
        type="text"
        name="mappedToPLO"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      />
      <label className="label">
        <span className="label-text">Max Score</span>
      </label>
      <input
        type="number"
        name="maxScore"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      />
      <label className="label">
        <span className="label-text">Academic Year</span>
      </label>
      <input
        type="date"
        name="academicYear"
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
