export default function ContactUs() {           
  return (
		<div className="container margin_60_35">
			<div className="row">
				<aside className="col-lg-3 col-md-4">
					<div id="contact_info">
						<h3>Contacts info</h3>
						<p>
							11 Fifth Ave - Gorakhpur ,India<br/> + 91 (2) 8093 3400<br/>
							<a href="#"><span className="__cf_email__" data-cfemail="6d04030b022d0902000c0403430e0200">[email&#160;protected]</span></a>
						</p>
						<h4>Get directions</h4>
						<form action="http://maps.google.com/maps" method="get" target="_blank">
							<div className="form-group">
								<input type="text" name="saddr" placeholder="Enter your location" className="form-control styled"/>
								<input type="hidden" name="daddr" value="New York, NY 11430"/>
							</div>
							<input type="submit" value="Get directions" className="btn_1 add_bottom_45"/>
						</form>
						<ul>
							<li><strong>Administration</strong>
								<a href="#">0038 23932342</a><br/><a href="tel://003823932342"><span className="__cf_email__" data-cfemail="28494c454146684e41464c474b5c475a064b4745">[email&#160;protected]</span></a><br/>
								<small>Monday to Friday 9am - 7pm</small>
							</li>
							<li><strong>General questions</strong>
								<a href="#">0038 23932342</a><br/><a href="tel://003823932342"><span className="__cf_email__" data-cfemail="6b1a1e0e181f020405182b0d02050f04081f041945080406">[email&#160;protected]</span></a><br/>
								<p><small>Monday to Friday 9am - 7pm</small></p>
							</li>
						</ul>
					</div>
				</aside>
				<div className=" col-lg-8 col-md-8 ml-auto">
					<div className="box_general">
						<h3>Contact us</h3>
						<p>
							Mussum ipsum cacilds, vidis litro abertis.
						</p>
						<div>
							<div id="message-contact"></div>
							<form method="post" action="http://www.ansonika.com/findoctor/assets/contact.php" id="contactform">
								<div className="row">
									<div className="col-md-6 col-sm-6">
										<div className="form-group">
											<input type="text" className="form-control" id="name_contact" name="name_contact" placeholder="Name"/>
										</div>
									</div>
									<div className="col-md-6 col-sm-6">
										<div className="form-group">
											<input type="text" className="form-control" id="lastname_contact" name="lastname_contact" placeholder="Last name"/>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-6 col-sm-6">
										<div className="form-group">
											<input type="email" id="email_contact" name="email_contact" className="form-control" placeholder="Email"/>
										</div>
									</div>
									<div className="col-md-6 col-sm-6">
										<div className="form-group">
											<input type="text" id="phone_contact" name="phone_contact" className="form-control" placeholder="Phone number"/>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-12">
										<div className="form-group">
											<textarea rows="5" id="message_contact" name="message_contact" className="form-control" style={{height: "100px"}} placeholder="Hello world!"></textarea>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-6">
										<div className="form-group">
											<input type="text" id="verify_contact" className=" form-control" placeholder=" 3 + 1 ="/>
										</div>
									</div>
								</div>
								<input type="submit" value="Submit" className="btn_1 add_top_20" id="submit-contact"/>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
  );
}
