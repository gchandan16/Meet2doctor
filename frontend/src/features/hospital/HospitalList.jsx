import React from "react";
import HospitalCard from "./HospitalCard";

export default function HospitalList({ hospitals = [] }) {
  return (
    <section className="hospitals py-5 bg-light">
      <div className="container">
        <h3 className="mb-4 text-center">Hospitals Near You</h3>
        <div className="row">
          {hospitals.map(h => <HospitalCard key={h.id} hospital={h} />)}
        </div>
      </div>
    </section>
  );
}
