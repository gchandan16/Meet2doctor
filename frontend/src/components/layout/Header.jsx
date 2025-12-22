import React,{useState} from "react";

import {Link,useNavigate} from "react-router-dom";
import {loginSuccess, logout} from "../../redux/slices/authSlice";
import {useSelector,useDispatch} from "react-redux";

export default function Header(){
const dispatch=useDispatch();
const navigate=useNavigate();

const {isAuthenticated} = useSelector((state) => state.auth);
console.log("Header Auth Context:", {isAuthenticated});

// for logout user
const handleLogout=()=>{
	dispatch(logout());
	navigate("/");
};

  return(
    <header className="header_sticky">	
		<a href="#menu" className="btn_mobile">
			<div className="hamburger hamburger--spin" id="hamburger">
				<div className="hamburger-box">
					<div className="hamburger-inner"></div>
				</div>
			</div>
		</a>
		<div className="container">
			<div className="row">
				<div className="col-lg-3 col-6">
					<div id="logo_home">
						<h1><Link to="/" title="Findoctor">Meet2Doctor</Link></h1>
					</div>
				</div>
				<div className="col-lg-9 col-6">
					<ul id="top_access">
						{
			
							!isAuthenticated?(

								<>
									<li><Link to="/login" title="Login"><i className="pe-7s-user"></i></Link></li>
					     	<li><Link to="/register" title="Sign Up"><i className="pe-7s-add-user"></i></Link></li>
								</>
							):(
								<>
									<li><span><Link to="/profile" title="profile"><img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            className="rounded-circle"
            height="25"
            alt="Black and White Portrait of a Man"
            loading="lazy" /></Link></span></li>
									<li>	<span><Link onClick={handleLogout} title="Logout">LogOut</Link></span></li>
							</>
							)
						}
					
					</ul>
					<nav id="menu" className="main-menu">
						<ul>
							<li>
								<span> <Link to="/">Home</Link></span>
								
							</li>
							<li>
								<span><Link to="/aboutus">About Us</Link></span>

							</li>


							<li><span><Link to="/contactus">Contacts</Link></span></li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	</header>
  );  
}