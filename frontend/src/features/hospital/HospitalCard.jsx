import React from "react";
export default function HospitalCard({ hospital }) {
  return (
    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card h-100 text-center">
        <div className="card-body">
          <h5 className="card-title">{hospital.name}</h5>
          <p className="card-text">{hospital.location}</p>
          <a className="btn btn-outline-secondary btn-sm" href={`/hospital/${hospital.id}`}>View</a>
        </div>
      </div>
    </div>
  );
}
