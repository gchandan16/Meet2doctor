import React from "react";
import Slider from "react-slick";
import { FaEye } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./DoctorCarousel.css";


const doctors = [
  {
    id: 1,
    name: "Dr. Yogesh Singh",
    speciality: "Pediatrician - Cardiologist",
    degree: "MBBS",
    image: "/img/doctor_1_carousel.jpg",
  },
  {
    id: 2,
    name: "Dr. Rahul Sharma",
    speciality: "Orthopedic Surgeon",
    degree: "MBBS, MS",
    image: "/img/doctor_2_carousel.jpg",
  },
  {
    id: 3,
    name: "Dr. Neha Verma",
    speciality: "Dermatologist",
    degree: "MBBS, MD",
    image: "/img/doctor_3_carousel.jpg",
  },
  {
    id: 4,
    name: "Dr. Aman Kumar",
    speciality: "ENT Specialist",
    degree: "MBBS, DLO",
    image: "/img/doctor_4_carousel.jpg",
  },
  {
    id: 5,
    name: "Dr. Julia Holmes",
    speciality: "Pediatrician",
    degree: "MBBS, DLO",
    image: "/img/doctor_5_carousel.jpg",
  },
  {
    id: 6,
    name: "Dr. Yogesh Singh",
    speciality: "Pediatrician - Cardiologist",
    degree: "MBBS",
    image: "/img/doctor_1_carousel.jpg",
  },
];

export default function DoctorCarousel() {
  const settings = {
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 2500,
    infinite: true,
    arrows: true, // show next/prev buttons
    dots: true, // show dots under slider
    focusOnSelect: false,
     accessibility: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="bg_color_1">
			<div className="container margin_120_95">
				<div className="main_title">
					<h2>Most Viewed doctors</h2>
				</div>
            <div className="doctor-carousel-container">
              <Slider {...settings}>
                {doctors.map((doc) => (
                  <div key={doc.id} className="doctor-slide">
                    <div className="doctor-card">
                      {/* Top-right eye icon */}
                      <div className="doctor-views">
                        <FaEye className="eye-icon" /> {doc.views}
                      </div>

                      {/* Doctor Image */}
                      <img src={doc.image} alt={doc.name} className="doctor-image" />

                      {/* Bottom Info Overlay */}
                      <div className="doctor-info">
                        <h3>{doc.name}</h3>
                        <p>{doc.speciality}</p>
                        <span>{doc.degree}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
      </div>
    </div>
  );
}
