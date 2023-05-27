"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function DomainCard(props: any) {
  const router = useRouter();
  async function deleteDomain() {
    console.log("clicked");

    const response = await fetch(
      `http://0.0.0.0:8000/api/domains/${props._id}`,
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
          <h3 className="card-title">Domain Name: {props.name}</h3>

          <div className="card-actions justify-end">
            <button onClick={deleteDomain} className="btn">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
