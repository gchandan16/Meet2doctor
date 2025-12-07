import { useNavigate } from "react-router-dom";
import DoctorMap from "./DoctorMap";
export default function DoctorResult() {   
	const navigate = useNavigate();
	const goToDoctorDetail = () => {
		navigate('/doctordetail');
	}        
  return (
   <div className="container margin_60_35">
			<div className="row">
				<div className="col-lg-7">

           <div className="strip_list wow fadeIn">

						<a href="#0" className="wish_bt"></a>
						<figure>
							<a href="detail-page.html"><img src="img/doctor_listing_1.jpg" alt="" /></a>
						</figure>
						
						<h4>Dr. Sunita Yadav <span style={{fontSize:"15px", color:"Blue"}}> (MBBS.MS)</span></h4>
                       <span> Cardiologists</span>
						<p> <b> Experience:</b>&nbsp; 27 years &nbsp;&nbsp; <b> Fee:</b>&nbsp; Rs/.500 &nbsp; &nbsp;<b> Address:</b> &nbsp;Ashok Nagar, Gorakhpur </p>
						<p> OPD Timing:&nbsp; 08:00 AM &nbsp;To&nbsp; 12:00 AM ,&nbsp; 03:00 PM &nbsp;To&nbsp; 07:30 PM </p>
                        
                        <span className="rating"><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i><i className="icon_star"></i> <small>(145)</small></span>
						<a href="badges.html" data-toggle="tooltip" data-placement="top" data-original-title="Badge Level" className="badge_list_1"><img src="img/badges/badge_1.svg" width="15" height="15" alt="" /></a>
						<ul>
							<li><a href="#" onClick="onHtmlClick('Doctors', 0)" className="btn_listing">View on Map</a></li>
							<li><a href="#" target="_blank">Directions</a></li>
							<li><a onClick={goToDoctorDetail}>Book Appointment</a></li>
						</ul>

					</div>





                    
                <div className="strip_list wow fadeIn">

						<a href="#0" className="wish_bt"></a>
						<figure>
							<a href="detail-page.html"><img src="img/doctor_listing_1.jpg" alt="" /></a>
						</figure>
						
						<h4>Dr. Suman Singh  <span style={{fontSize:"15px", color:"Blue"}}> (MBBS.MS)</span></h4>
                       <span> Cardiologists</span>
						<p> <b> Experience:</b>&nbsp; 27 years &nbsp;&nbsp; <b> Fee:</b>&nbsp; Rs/.500 &nbsp; &nbsp;<b> Address:</b> &nbsp;Ashok Nagar, Gorakhpur </p>
						<p> OPD Timing:&nbsp; 08:00 AM &nbsp;To&nbsp; 12:00 AM ,&nbsp; 03:00 PM &nbsp;To&nbsp; 07:30 PM </p>
                        
                        <span className="rating"><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i><i className="icon_star"></i> <small>(145)</small></span>
						<a href="badges.html" data-toggle="tooltip" data-placement="top" data-original-title="Badge Level" className="badge_list_1"><img src="img/badges/badge_1.svg" width="15" height="15" alt=""/></a>
						<ul>
							<li><a href="#" onclick="onHtmlClick('Doctors', 0)" className="btn_listing">View on Map</a></li>
							<li><a href="#" target="_blank">Directions</a></li>
							<li><a href="DoctorProfile.html">Book Appointment</a></li>
						</ul>

					</div>




                    
                <div className="strip_list wow fadeIn">

						<a href="#0" className="wish_bt"></a>
						<figure>
							<a href="detail-page.html"><img src="img/doctor_listing_1.jpg" alt="" /></a>
						</figure>
						
						<h4>Dr. Rita Yadav <span style={{fontSize:"15px", color:"Blue"}}> (MBBS.MS)</span></h4>
                       <span> Cardiologists</span>
						<p> <b> Experience:</b>&nbsp; 27 years &nbsp;&nbsp; <b> Fee:</b>&nbsp; Rs/.500 &nbsp; &nbsp;<b> Address:</b> &nbsp;Ashok Nagar, Gorakhpur </p>
						<p> OPD Timing:&nbsp; 08:00 AM &nbsp;To&nbsp; 12:00 AM ,&nbsp; 03:00 PM &nbsp;To&nbsp; 07:30 PM </p>
                        
                        <span className="rating"><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i><i className="icon_star"></i> <small>(145)</small></span>
						<a href="badges.html" data-toggle="tooltip" data-placement="top" data-original-title="Badge Level" className="badge_list_1"><img src="img/badges/badge_1.svg" width="15" height="15" alt="" /></a>
						<ul>
							<li><a href="#" onclick="onHtmlClick('Doctors', 0)" className="btn_listing">View on Map</a></li>
							<li><a href="#" target="_blank">Directions</a></li>
							<li><a href="DoctorProfile.html">Book Appointment</a></li>
						</ul>

					</div>



                    
                <div className="strip_list wow fadeIn">

						<a href="#0" className="wish_bt"></a>
						<figure>
							<a href="detail-page.html"><img src="img/doctor_listing_1.jpg" alt="" /></a>
						</figure>
						
						<h4>Dr. Chandan Yadav <span style={{fontSize:"15px", color:"Blue"}}> (MBBS.MS)</span></h4>
                       <span> Cardiologists</span>
						<p> <b> Experience:</b>&nbsp; 27 years &nbsp;&nbsp; <b> Fee:</b>&nbsp; Rs/.500 &nbsp; &nbsp;<b> Address:</b> &nbsp;Ashok Nagar, Gorakhpur </p>
						<p> OPD Timing:&nbsp; 08:00 AM &nbsp;To&nbsp; 12:00 AM ,&nbsp; 03:00 PM &nbsp;To&nbsp; 07:30 PM </p>
                        
                        <span className="rating"><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i><i className="icon_star"></i> <small>(145)</small></span>
						<a href="badges.html" data-toggle="tooltip" data-placement="top" data-original-title="Badge Level" className="badge_list_1"><img src="img/badges/badge_1.svg" width="15" height="15" alt="" /></a>
						<ul>
							<li><a href="#" onclick="onHtmlClick('Doctors', 0)" className="btn_listing">View on Map</a></li>
							<li><a href="#" target="_blank">Directions</a></li>
							<li><a href="DoctorProfile.html">Book Appointment</a></li>
						</ul>

					</div>



                    
                <div className="strip_list wow fadeIn">

						<a href="#0" className="wish_bt"></a>
						<figure>
							<a href="detail-page.html"><img src="img/doctor_listing_1.jpg" alt="" /></a>
						</figure>
						
						<h4>Dr. Chandan Yadav <span style={{fontSize:"15px", color:"Blue"}}> (MBBS.MS)</span></h4>
                       <span> Cardiologists</span>
						<p> <b> Experience:</b>&nbsp; 27 years &nbsp;&nbsp; <b> Fee:</b>&nbsp; Rs/.500 &nbsp; &nbsp;<b> Address:</b> &nbsp;Ashok Nagar, Gorakhpur </p>
						<p> OPD Timing:&nbsp; 08:00 AM &nbsp;To&nbsp; 12:00 AM ,&nbsp; 03:00 PM &nbsp;To&nbsp; 07:30 PM </p>
                        
                        <span className="rating"><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i><i className="icon_star"></i> <small>(145)</small></span>
						<a href="badges.html" data-toggle="tooltip" data-placement="top" data-original-title="Badge Level" className="badge_list_1"><img src="img/badges/badge_1.svg" width="15" height="15" alt="" /></a>
						<ul>
							<li><a href="#" onclick="onHtmlClick('Doctors', 0)" className="btn_listing">View on Map</a></li>
							<li><a href="#" target="_blank">Directions</a></li>
							<li><a href="detail-page.html">Book Appointment</a></li>
						</ul>

					</div>

                       <div className="strip_list wow fadeIn">

						<a href="#0" className="wish_bt"></a>
						<figure>
							<a href="detail-page.html"><img src="img/doctor_listing_1.jpg" alt="" /></a>
						</figure>
						
						<h4>Dr. Chandan Yadav <span style={{fontSize:"15px", color:"Blue"}}> (MBBS.MS)</span></h4>
                       <span> Cardiologists</span>
						<p> <b> Experience:</b>&nbsp; 27 years &nbsp;&nbsp; <b> Fee:</b>&nbsp; Rs/.500 &nbsp; &nbsp;<b> Address:</b> &nbsp;Ashok Nagar, Gorakhpur </p>
						<p> OPD Timing:&nbsp; 08:00 AM &nbsp;To&nbsp; 12:00 AM ,&nbsp; 03:00 PM &nbsp;To&nbsp; 07:30 PM </p>
                        
                        <span className="rating"><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i><i className="icon_star"></i> <small>(145)</small></span>
						<a href="badges.html" data-toggle="tooltip" data-placement="top" data-original-title="Badge Level" className="badge_list_1"><img src="img/badges/badge_1.svg" width="15" height="15" alt="" /></a>
						<ul>
							<li><a href="#" onclick="onHtmlClick('Doctors', 0)" className="btn_listing">View on Map</a></li>
							<li><a href="#" target="_blank">Directions</a></li>
							<li><a href="detail-page.html">Book Appointment</a></li>
						</ul>

					</div>

                       <div className="strip_list wow fadeIn">

						<a href="#0" className="wish_bt"></a>
						<figure>
							<a href="detail-page.html"><img src="img/doctor_listing_1.jpg" alt="" /></a>
						</figure>
						
						<h4>Dr. Chandan Yadav <span style={{fontSize:"15px", color:"Blue"}}> (MBBS.MS)</span></h4>
                       <span> Cardiologists</span>
						<p> <b> Experience:</b>&nbsp; 27 years &nbsp;&nbsp; <b> Fee:</b>&nbsp; Rs/.500 &nbsp; &nbsp;<b> Address:</b> &nbsp;Ashok Nagar, Gorakhpur </p>
						<p> OPD Timing:&nbsp; 08:00 AM &nbsp;To&nbsp; 12:00 AM ,&nbsp; 03:00 PM &nbsp;To&nbsp; 07:30 PM </p>
                        
                        <span className="rating"><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i><i className="icon_star"></i> <small>(145)</small></span>
						<a href="badges.html" data-toggle="tooltip" data-placement="top" data-original-title="Badge Level" className="badge_list_1"><img src="img/badges/badge_1.svg" width="15" height="15" alt="" /></a>
						<ul>
							<li><a href="#" onclick="onHtmlClick('Doctors', 0)" className="btn_listing">View on Map</a></li>
							<li><a href="#" target="_blank">Directions</a></li>
							<li><a href="detail-page.html">Book Appointment</a></li>
						</ul>

					</div>

                       <div className="strip_list wow fadeIn">

						<a href="#0" className="wish_bt"></a>
						<figure>
							<a href="detail-page.html"><img src="img/doctor_listing_1.jpg" alt="" /></a>
						</figure>
						
						<h4>Dr. Chandan Yadav <span style={{fontSize:"15px", color:"Blue"}}> (MBBS.MS)</span></h4>
                       <span> Cardiologists</span>
						<p> <b> Experience:</b>&nbsp; 27 years &nbsp;&nbsp; <b> Fee:</b>&nbsp; Rs/.500 &nbsp; &nbsp;<b> Address:</b> &nbsp;Ashok Nagar, Gorakhpur </p>
						<p> OPD Timing:&nbsp; 08:00 AM &nbsp;To&nbsp; 12:00 AM ,&nbsp; 03:00 PM &nbsp;To&nbsp; 07:30 PM </p>
                        
                        <span className="rating"><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i><i className="icon_star"></i> <small>(145)</small></span>
						<a href="badges.html" data-toggle="tooltip" data-placement="top" data-original-title="Badge Level" className="badge_list_1"><img src="img/badges/badge_1.svg" width="15" height="15" alt="" /></a>
						<ul>
							<li><a href="#" onclick="onHtmlClick('Doctors', 0)" className="btn_listing">View on Map</a></li>
							<li><a href="#" target="_blank">Directions</a></li>
							<li><a href="detail-page.html">Book Appointment</a></li>
						</ul>

					</div>

                       <div className="strip_list wow fadeIn">

						<a href="#0" className="wish_bt"></a>
						<figure>
							<a href="detail-page.html"><img src="img/doctor_listing_1.jpg" alt="" /></a>
						</figure>
						
						<h4>Dr. Chandan Yadav <span style={{fontSize:"15px", color:"Blue"}}> (MBBS.MS)</span></h4>
                       <span> Cardiologists</span>
						<p> <b> Experience:</b>&nbsp; 27 years &nbsp;&nbsp; <b> Fee:</b>&nbsp; Rs/.500 &nbsp; &nbsp;<b> Address:</b> &nbsp;Ashok Nagar, Gorakhpur </p>
						<p> OPD Timing:&nbsp; 08:00 AM &nbsp;To&nbsp; 12:00 AM ,&nbsp; 03:00 PM &nbsp;To&nbsp; 07:30 PM </p>
                        
                        <span className="rating"><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i><i className="icon_star"></i> <small>(145)</small></span>
						<a href="badges.html" data-toggle="tooltip" data-placement="top" data-original-title="Badge Level" className="badge_list_1"><img src="img/badges/badge_1.svg" width="15" height="15" alt=""/></a>
						<ul>
							<li><a href="#" onclick="onHtmlClick('Doctors', 0)" className="btn_listing">View on Map</a></li>
							<li><a href="#" target="_blank">Directions</a></li>
							<li><a href="detail-page.html">Book Appointment</a></li>
						</ul>

					</div>

                       <div className="strip_list wow fadeIn">

						<a href="#0" className="wish_bt"></a>
						<figure>
							<a href="detail-page.html"><img src="img/doctor_listing_1.jpg" alt="" /></a>
						</figure>
						
						<h4>Dr. Chandan Yadav <span style={{fontSize:"15px", color:"Blue"}}> (MBBS.MS)</span></h4>
                       <span> Cardiologists</span>
						<p> <b> Experience:</b>&nbsp; 27 years &nbsp;&nbsp; <b> Fee:</b>&nbsp; Rs/.500 &nbsp; &nbsp;<b> Address:</b> &nbsp;Ashok Nagar, Gorakhpur </p>
						<p> OPD Timing:&nbsp; 08:00 AM &nbsp;To&nbsp; 12:00 AM ,&nbsp; 03:00 PM &nbsp;To&nbsp; 07:30 PM </p>
                        
                        <span className="rating"><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i><i className="icon_star"></i> <small>(145)</small></span>
						<a href="badges.html" data-toggle="tooltip" data-placement="top" data-original-title="Badge Level" className="badge_list_1"><img src="img/badges/badge_1.svg" width="15" height="15" alt="" /></a>
						<ul>
							<li><a href="#" onclick="onHtmlClick('Doctors', 0)" className="btn_listing">View on Map</a></li>
							<li><a href="#" target="_blank">Directions</a></li>
							<li><a href="detail-page.html">Book Appointment</a></li>
						</ul>

					</div>
					
					<nav aria-label="" className="add_top_20">
						<ul className="pagination pagination-sm">
							<li className="page-item disabled">
								<a className="page-link" href="#" tabindex="-1">Previous</a>
							</li>
							<li className="page-item active"><a className="page-link" href="#">1</a></li>
							<li className="page-item"><a className="page-link" href="#">2</a></li>
							<li className="page-item"><a className="page-link" href="#">3</a></li>
							<li className="page-item">
								<a className="page-link" href="#">Next</a>
							</li>
						</ul>
					</nav>
				</div>
				
				<aside className="col-lg-5" id="sidebar">
				  <DoctorMap />
				</aside>
				
			</div>
		
		</div>
  );
} 