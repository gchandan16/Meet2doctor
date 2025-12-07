import React from "react";
import DoctorCard from "./DoctorCard";

export default function DoctorList({ doctors = [] }) {
  return (
    <section className="doctors py-5">
      <div className="container">
        <h3 className="mb-4 text-center">Our Top Doctors</h3>
        <div className="row">
          {doctors.map((d) => <DoctorCard key={d.id} doctor={d} />)}
        </div>
      </div>
    </section>
  );
}
