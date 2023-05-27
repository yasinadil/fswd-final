"use client";
import React from "react";
import DomainCard from "./DomainCard";
import Add from "./AddDomain";

async function getAllDomains() {
  const response = await fetch("http://0.0.0.0:8000/api/domains/", {
    cache: "no-store",
  });
  const jsonData = await response.json();
  return jsonData as object[];
}

export default async function Page() {
  const allDomains = await getAllDomains();

  return (
    <div>
      <h1 className="text-white font-bold text-3xl text-center">Domains</h1>
      <Add />
      <h1 className="text-white text-3xl my-10">All Domains</h1>
      <div className="flex flex-wrap gap-5">
        {allDomains.map((domain: any, index) => {
          return (
            <DomainCard key={index} _id={domain._id} name={domain.domainName} />
          );
        })}
      </div>
    </div>
  );
}
