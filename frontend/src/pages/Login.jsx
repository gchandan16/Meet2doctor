// frontend/src/pages/Login.jsx
import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import {loginUser} from "../api/authService.js";
import useAuth from "../hooks/useAuth.js";

export default function Login() {
	const {login}=useAuth();
	const navigate=useNavigate();
	const [form,setForm]=useState({username:"",password:""});
	const [error,setError]=useState("");
	const [loading,setLoading]=useState(false);

	const onChange=(e)=>{

		setForm({...form,[e.target.name]:e.target.value});
	};

	const onSubmit=async(e)=>{
		e.preventDefault();
		setError("");
		setLoading(true);
		try{
 
			console.log("submit request:", form);
			const resp=await loginUser(form);
			console.log("Login response:", resp);
			//resp is object you pasted in context login.it contains token,user,role,details
			login({token:resp.token,user:resp.user,role:resp.role,details:resp.details});
			if(resp.role==="admin") navigate("/");
			else	
			navigate("/");
		}
		catch(error){
			setError("Login failed. Please check your credentials.");
		}
		finally{
			setLoading(false);
		}
	}



  return (
		<div className="bg_color_2">
			<div className="container margin_60_35">
				<div id="login-2">
					<h1>Please login to Findoctor!</h1>
					<form onSubmit={onSubmit}>
						<div className="box_form clearfix">
							<div className="box_login">
								<a href="#0" className="social_bt facebook">Login with Facebook</a>
								<a href="#0" className="social_bt google">Login with Google</a>
								<a href="#0" className="social_bt linkedin">Login with Linkedin</a>
							</div>
							<div className="box_login last">

								<div className="form-group">
									<input type="text" name="username" className="form-control" placeholder="Your email address" value={form.username} onChange={onChange}/>
								</div>
								<div className="form-group">
									<input type="password" name="password" className="form-control" placeholder="Your password"  value={form.password} onChange={onChange}/>
									<a href="#0" className="forgot"><small>Forgot password?</small></a>
								</div>
								<div className="form-group">
									{error && <div className="alert alert-danger">{error}</div>}
									
									 <button className="btn_1" disabled={loading}>
          {loading ? "Signing in..." : "Sign In"}
        </button>
								</div>
							</div>
						</div>
					</form>
					<p className="text-center link_bright">Do not have an account yet? <a href="#0"><strong>Register now!</strong></a></p>
				</div>
			</div>
		</div>
  );
}
