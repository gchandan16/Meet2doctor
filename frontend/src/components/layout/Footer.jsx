import { Link,useNavigate } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
export default function Footer() {   
	const {isAuthenticated}=useSelector((state)=>state.auth);
  return (
<footer style={{ backgroundColor: "#3f4079" }}>
		<div className="container margin_60_35" >
			<div className="row">
				<div className="col-lg-3 col-md-4">
					<h5 style={{ color: "Yellow" }}>Meet2Doctor</h5>
					<ul className="links">
						<li><Link to="/aboutus">About Us</Link></li>
						{
							!isAuthenticated?(
								<>
						<li><Link to="/login">Login</Link></li>
						<li><Link to="/register">Register</Link></li>
								</>
							):(
								<>	</>
							)
         	}
					</ul>
				</div>
				<div className="col-lg-3 col-md-4">
					<h5 style={{color:"Yellow"}}>For Patients</h5>
					<ul className="links">
						<li><a href="#">Ask free health questions</a></li>
						<li><a href="#">Search for doctors</a></li>
						<li><a href="#">Search for clinics</a></li>
						<li><a href="#">Search for hospitals</a></li>
						<li><a href="#">Read health articles</a></li>
                        <li><a href="#">Meet2Doctor drive</a></li>
					</ul>
				</div>
				<div className="col-lg-3 col-md-4">
					<h5 style={{color:"Yellow"}}>Doctors</h5>
					<ul className="links">
						<li><a href="#0">Doctors Profile</a></li>
						<li><a href="#0">Clinics Profile</a></li>
						<li><a href="#0">Doctors OPD</a></li>
						<li><a href="#0">PMS Software</a></li>
						<li><a href="#0">Clinic,Doctor App</a></li>
					</ul>
				</div>
				<div className="col-lg-3 col-md-4">
					<h5 style={{color:"Yellow"}}>Contact with Us</h5>
					<ul className="contacts">
						<li><a href="tel://6393448329"><i className="icon_mobile"></i> + 91-6393448329</a></li>
						<li><a href="#"><i className="icon_mail_alt"></i> <span className="__cf_email__" data-cfemail="771f121b0737111e191318140318055914181a">info@meet2doctor.com</span></a></li>
					</ul>
					<div className="follow_us">
						<h5 style={{color:"Yellow"}}>Follow us</h5>
						<ul>
							<li><a href="#0"><i className="social_facebook"></i></a></li>
							<li><a href="#0"><i className="social_twitter"></i></a></li>
							<li><a href="#0"><i className="social_linkedin"></i></a></li>
							<li><a href="#0"><i className="social_instagram"></i></a></li>
						</ul>
					</div>
				</div>
			</div>
			{/* --/row*/}
			<hr />
			<div className="row">
				<div className="col-md-6">
					<ul id="additional_links">
						<li><Link to="/termsandconditions">Terms and conditions</Link></li>
						<li><Link to="/privacypolicy">Privacy</Link></li>
					</ul>
				</div>
				<div className="col-md-6">
					<div id="copy" style={{color:"Yellow"}}>Copyright © 2025 Design and Develop by CSSolution Pvt. Ltd </div>
				</div>
			</div>
		</div>
	</footer>

  )
}