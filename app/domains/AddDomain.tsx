"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Add() {
  const router = useRouter();
  const [newName, setNewName] = useState("");
  const addDomain = async (event: any) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = Object.fromEntries(form);
    console.log(data.domainName);

    fetch("http://0.0.0.0:8000/api/domains/addDomain", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      body: JSON.stringify({
        domainName: data.domainName,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));

    router.refresh();
  };
  return (
    <form onSubmit={addDomain}>
      <label className="label">
        <span className="label-text">Project Domain</span>
      </label>
      <input
        onChange={(event) => setNewName(event.target.value)}
        type="text"
        name="domainName"
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
