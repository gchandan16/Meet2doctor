import React from "react";
export default function DoctorCard({ doctor }) {
  return (
    <div className="col-md-3 col-sm-6 mb-4">
      <div className="card h-100 text-center">
        <img src={doctor.image} alt={doctor.name} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{doctor.name}</h5>
          <p className="card-text">{doctor.specialization}</p>
          <button className="btn btn-outline-primary btn-sm">Book</button>
        </div>
      </div>
    </div>
  );
}
