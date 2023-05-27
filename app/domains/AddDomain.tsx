"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Add() {
  const router = useRouter();
  const addDomain = async (event: any) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = Object.fromEntries(form);
    console.log(data.domainName);

    const config = {
      headers: { "content-type": "application/json" },
    };

    axios
      .post("http://0.0.0.0:8000/api/domains/addDomain", data, config)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    router.refresh();
  };
  return (
    <form onSubmit={addDomain}>
      <label className="label">
        <span className="label-text">Project Domain</span>
      </label>
      <input
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
