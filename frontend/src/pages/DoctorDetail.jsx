import CalendarBootstrap from "../components/CalendarBootstrap";

export default function DoctorDetail() {           
  return (
   <main>
		<div id="breadcrumb">
			<div className="container">
				<ul>
					<li><a href="#">Home</a></li>
					<li><a href="#">Category</a></li>
					<li>Page active</li>
				</ul>
			</div>
		</div>
		<div className="container margin_60">
			<div className="row">
				
				<aside className="col-xl-3 col-lg-4" id="sidebar">
					<div className="box_profile">
						<figure>
							<img src="img/doctor_listing_2.jpg" alt="" className="img-fluid" />
						</figure>
						<small>Cardiologists </small>
						<h1>DR. Sunita Singh</h1>
						<span className="rating">
							<i className="icon_star voted"></i>
							<i className="icon_star voted"></i>
							<i className="icon_star voted"></i>
							<i className="icon_star voted"></i>
							<i className="icon_star"></i>
							<small>(145)</small>
							<a href="badges.html" data-toggle="tooltip" data-placement="top" data-original-title="Badge Level" className="badge_list_1"><img src="img/badges/badge_1.svg" width="15" height="15" alt=""/></a>
						</span>
						<ul className="statistic">
							<li>854 Views</li>
							<li>124 Patients</li>
						</ul>
						<ul className="contacts">
							<li><h6>Address</h6>Ashok Nagar, Gorakhpur 274301</li>
							<li><h6>Phone</h6><a href="tel://000434323342">+00043 4323342</a></li>
						</ul>
						<div className="text-center"><a href="https://www.google.com/maps/dir//Assistance+–+Hôpitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x0:0xa6a9af76b1e2d899!2sAssistance+–+Hôpitaux+De+Paris!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361" className="btn_1 outline" target="_blank"><i className="icon_pin"></i> View on map</a></div>
					</div>
				</aside>
				<div className="col-xl-9 col-lg-8">

					<div className="tabs_styled_2">
						<ul className="nav nav-tabs" role="tablist">
							<li className="nav-item">
								<a className="nav-link active" id="book-tab" data-toggle="tab" href="#book" role="tab" aria-controls="book">Book an appointment</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" id="general-tab" data-toggle="tab" href="#general" role="tab" aria-controls="general" aria-expanded="true">General info</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" id="reviews-tab" data-toggle="tab" href="#reviews" role="tab" aria-controls="reviews">Reviews</a>
							</li>
						</ul>
						<div className="tab-content">

							<div className="tab-pane fade show active" id="book" role="tabpanel" aria-labelledby="book-tab">
								<p className="lead add_bottom_30"> Dr. Sunita Singh is a Dermatologist and Cosmetologist in Swaroop Nagar, Kanpur and has an experience of 12 years in these fields. Dr. Mamta Bhura practices at SKIN@Mantraa Kanpur in Swaroop Nagar, Kanpur. She completed MBBS from Institute of Medical Sciences, <a href="#">More..</a></p>
								<form  method="post" action="http://www.ansonika.com/findoctor/assets/booking.php" id="booking" >
								
									<div className="form-group add_bottom_45">
										  <CalendarBootstrap />
									</div>
									<div className="main_title_3">
										<h3><strong>2</strong>Select your time</h3>
									</div>
									<div className="row justify-content-center add_bottom_45">
										<div className="col-md-3 col-6 text-center">
											<ul className="time_select">
												<li>
													<input type="radio" id="radio1" name="radio_time" value="09.30am" />
													<label htmlFor="radio1">09.30am</label>
												</li>
												<li>
													<input type="radio" id="radio2" name="radio_time" value="10.00am" />
													<label htmlFor="radio2">10.00am</label>
												</li>
												<li>
													<input type="radio" id="radio3" name="radio_time" value="10.30am" />
													<label htmlFor="radio3">10.30am</label>
												</li>
												<li>
													<input type="radio" id="radio4" name="radio_time" value="11.00am" />
													<label htmlFor="radio4">11.00am</label>
												</li>
												<li>
													<input type="radio" id="radio5" name="radio_time" value="11.30am" />
													<label htmlFor="radio5">11.30am</label>
												</li>
												<li>
													<input type="radio" id="radio6" name="radio_time" value="12.00am" />
													<label htmlFor="radio6">12.00am</label>
												</li>
											</ul>
										</div>
										<div className="col-md-3 col-6 text-center">
											<ul className="time_select">
												<li>
													<input type="radio" id="radio7" name="radio_time" value="01.30pm" />
													<label htmlFor="radio7">01.30pm</label>
												</li>
												<li>
													<input type="radio" id="radio8" name="radio_time" value="02.00pm" />
													<label htmlFor="radio8">02.00pm</label>
												</li>
												<li>
													<input type="radio" id="radio9" name="radio_time" value="02.30pm" />
													<label htmlFor="radio9">02.30pm</label>
												</li>
												<li>
													<input type="radio" id="radio10" name="radio_time" value="03.00pm" />
													<label htmlFor="radio10">03.00pm</label>
												</li>
												<li>
													<input type="radio" id="radio11" name="radio_time" value="03.30pm" />
													<label htmlFor="radio11">03.30pm</label>
												</li>
												<li>
													<input type="radio" id="radio12" name="radio_time" value="04.00pm" />
													<label htmlFor="radio12">04.00pm</label>
												</li>
											</ul>
										</div>
									</div>
									
									<div className="main_title_3">
										<h3><strong>3</strong>Book an appoitment</h3>
									</div>
								</form>			

                               
						<div id="message-booking"></div>
							<form method="post" action="http://www.ansonika.com/findoctor/assets/booking.php" id="booking">
							<input type="hidden" value="Dr. Julia Jhones" name="doctor_name_booking" id="doctor_name_booking" />
							<div className="row">
								<div className="col-md-6 ">
									<div className="form-group">
										<input type="text" className="form-control" placeholder="Name" name="name_booking" id="name_booking" />
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
										<input type="text" className="form-control" placeholder="Last Name" name="lastname_booking" id="lastname_booking" />
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-12">
									<div className="form-group">
										<input type="email" className="form-control" placeholder="Email Address" name="email_booking" id="email_booking" />
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-6">
									<div className="form-group">
										<input className="form-control" type="text" id="booking_date" name="booking_date" data-lang="en" data-min-year="2017" data-max-year="2020" data-disabled-days="10/17/2017,11/18/2017" />
									</div>
								</div>
								<div className="col-6">
									<div className="form-group">
										<input className="form-control" type="text" id="booking_time" name="booking_time" />
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-12">
									<div className="form-group">
										<select className="form-control" name="booking_visit" id="booking_visit">
											<option value="">Select visit</option>
											<option value="General visit">General visit</option>
											<option value="Cardiothoracic Radiology">Cardiothoracic Radiology</option>
											<option value="Abdominal Radiology">Abdominal Radiology</option>
										</select>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-12">
									<div className="form-group">
										<textarea rows="5" id="booking_message" name="booking_message" className="form-control" style={{height: "80px"}} placeholder="Additional message"></textarea>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12">
									<div className="form-group">
										<input type="text" id="verify_booking" className="form-control" placeholder="Human verify: 3 + 1 =?" />
									</div>
								</div>
							</div>
						



								</form>					
								<hr/>
								<p className="text-center"><a href="confirm.html" className="btn_1 medium">Book Now</a></p>
							</div>
							
							<div className="tab-pane fade" id="general" role="tabpanel" aria-labelledby="general-tab">
								<p className="lead add_bottom_30">Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
								<div className="indent_title_in">
									<i className="pe-7s-user"></i>
									<h3>Professional statement</h3>
									<p>Mussum ipsum cacilds, vidis litro abertis.</p>
								</div>
								<div className="wrapper_indent">
									<p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Nullam mollis. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapi.</p>
									<h6>Specializations</h6>
									<div className="row">
										<div className="col-lg-6">
											<ul className="bullets">
												<li>Abdominal Radiology</li>
												<li>Addiction Psychiatry</li>
												<li>Adolescent Medicine</li>
												<li>Cardiothoracic Radiology </li>
											</ul>
										</div>
										<div className="col-lg-6">
											<ul className="bullets">
												<li>Abdominal Radiology</li>
												<li>Addiction Psychiatry</li>
												<li>Adolescent Medicine</li>
												<li>Cardiothoracic Radiology </li>
											</ul>
										</div>
									</div>

                                    <h6>Services</h6>
									<div className="row">
										<div className="col-lg-6">
											<ul className="bullets">
												<li>Abdominal Radiology</li>
												<li>Addiction Psychiatry</li>
												<li>Adolescent Medicine</li>
												<li>Cardiothoracic Radiology </li>
											</ul>
										</div>
										<div className="col-lg-6">
											<ul className="bullets">
												<li>Abdominal Radiology</li>
												<li>Addiction Psychiatry</li>
												<li>Adolescent Medicine</li>
												<li>Cardiothoracic Radiology </li>
											</ul>
										</div>
									</div>

								</div>
								
								<hr/>
								
								<div className="indent_title_in">
									<i className="pe-7s-news-paper"></i>
									<h3>Education</h3>
									<p>Mussum ipsum cacilds, vidis litro abertis.</p>
								</div>
								<div className="wrapper_indent">
									<p>Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Nullam mollis. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapi.</p>
									<h6>Curriculum</h6>
									<ul className="list_edu">
										<li><strong>New York Medical College</strong> - Doctor of Medicine</li>
										<li><strong>Montefiore Medical Center</strong> - Residency in Internal Medicine</li>
										<li><strong>New York Medical College</strong> - Master Internal Medicine</li>
									</ul>

								</div>

								<hr/>

								<div className="indent_title_in">
									<i className="pe-7s-cash"></i>
									<h3>Experience</h3>
									
								</div>
								<div className="wrapper_indent">
									<p>Zril causae ancillae sit ea. Dicam veritus mediocritatem sea ex, nec id agam eius. Te pri facete latine salutandi, scripta mediocrem et sed, cum ne mundi vulputate. Ne his sint graeco detraxit, posse exerci volutpat has in.</p>
									<table className="table table-responsive table-striped">
										
										<tbody>
											<tr>
												<td>2001 - 2004 Senior Resident at Himalayan Institute Of Medical Sciences</td>
												
											</tr>
											<tr>
												<td>2004 - 2004 Assistant Professor at Himalayan Institute Of Medical Sciences</td>
												
											</tr>
											<tr>
												<td>2004 - 2007 Consultant at Kaya Skin Clinic,Delhi</td>
												
											</tr>
											
										</tbody>
									</table>
								</div>


                                	<div className="indent_title_in">
									
									<h3>Registrations</h3>
									
								</div>
								<div className="wrapper_indent">
									
									<table className="table table-responsive table-striped">
										
										<tbody>
											<tr>
												<td>41665 Uttar Pradesh Medical Council, 1998</td>
												
											</tr>
											
											
										</tbody>
									</table>
								</div>


                                	<div className="indent_title_in">
									
									<h3>Memberships </h3>
									
								</div>
								<div className="wrapper_indent">
									
									<table className="table table-responsive table-striped">
										
										<tbody>
											<tr>
												<td>Indian Medical Association (IMA)</td>
                                                												
											</tr>
											<tr>
												<td>Indian Association of Dermatologists, Venereologists and Leprologists (IADVL)</td>
                                                												
											</tr>
                                            <tr>
												<td>Indian Association of Dermatologists, Venereologists and Leprologists (IADVL)</td>
                                                												
											</tr>
											
										</tbody>
									</table>
								</div>




							</div>

							<div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
								<div className="reviews-container">
									<div className="row">
										<div className="col-lg-3">
											<div id="review_summary">
												<strong>4.7</strong>
												<div className="rating">
													<i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
												</div>
												<small>Based on 4 reviews</small>
											</div>
										</div>
										<div className="col-lg-9">
											<div className="row">
												<div className="col-lg-10 col-9">
													<div className="progress">
														<div className="progress-bar" role="progressbar" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
													</div>
												</div>
												<div className="col-lg-2 col-3"><small><strong>5 stars</strong></small></div>
											</div>
											<div className="row">
												<div className="col-lg-10 col-9">
													<div className="progress">
														<div className="progress-bar" role="progressbar" style={{width: "95%"}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
													</div>
												</div>
												<div className="col-lg-2 col-3"><small><strong>4 stars</strong></small></div>
											</div>
											<div className="row">
												<div className="col-lg-10 col-9">
													<div className="progress">
														<div className="progress-bar" role="progressbar" style={{width: "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
													</div>
												</div>
												<div className="col-lg-2 col-3"><small><strong>3 stars</strong></small></div>
											</div>
											<div className="row">
												<div className="col-lg-10 col-9">
													<div className="progress">
														<div className="progress-bar" role="progressbar" style={{width: "20%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
													</div>
												</div>
												<div className="col-lg-2 col-3"><small><strong>2 stars</strong></small></div>
											</div>
											<div className="row">
												<div className="col-lg-10 col-9">
													<div className="progress">
														<div className="progress-bar" role="progressbar" style={{width: "0%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
													</div>
												</div>
												<div className="col-lg-2 col-3"><small><strong>1 stars</strong></small></div>
											</div>
										</div>
									</div>
									
									<hr/>
									
									<div className="review-box clearfix">
										<figure className="rev-thumb"><img src="img/avatar1.jpg" alt=""/>
										</figure>
										<div className="rev-content">
											<div className="rating">
												<i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
											</div>
											<div className="rev-info">
												Admin – April 03, 2016:
											</div>
											<div className="rev-text">
												<p>
													Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis
												</p>
											</div>
										</div>
									</div>

									<div className="review-box clearfix">
										<figure className="rev-thumb"><img src="img/avatar2.jpg" alt=""/>
										</figure>
										<div className="rev-content">
											<div className="rating">
												<i className="icon-star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
											</div>
											<div className="rev-info">
												Ahsan – April 01, 2016
											</div>
											<div className="rev-text">
												<p>
													Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis
												</p>
											</div>
										</div>
									</div>

									<div className="review-box clearfix">
										<figure className="rev-thumb"><img src="img/avatar3.jpg" alt=""/>
										</figure>
										<div className="rev-content">
											<div className="rating">
												<i className="icon-star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
											</div>
											<div className="rev-info">
												Sara – March 31, 2016
											</div>
											<div className="rev-text">
												<p>
													Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis
												</p>
											</div>
										</div>
									</div>
									
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
  );
}