//src/api/axiosInstance.js
import axios from 'axios';

const baseURL=import.meta.env.VITE_API_URL || 'http://localhost:8000';
const axiosInstance =axios.create({baseURL,
  headers:{
    "Content-Type":"application/json",
  },
  timeout:15000,//15 seconds
});

//request intercepter :attach token to headers
axiosInstance.interceptors.request.use((config)=>{
  try{
      console.log("REQUEST INTERCEPTOR -> url:", config.baseURL + config.url);
      console.log("REQUEST INTERCEPTOR -> headers (before):", config.headers);
    const token =localStorage.getItem('token');
     console.log("Requested Token:", token);
    if(token){
      config.headers = config.headers || {};
      config.headers.Authorization=`Bearer ${token}`;
      console.log("True Request Token:", config.headers.Authorization);
    }
     console.log("REQUEST INTERCEPTOR -> headers (after):", config.headers);
  }
  catch(err){
    console.error("Error in request interceptor:", err);
  }
   return config;
});

// response interceptor : handle auth error centerly
axiosInstance.interceptors.response.use((res)=>{
  console.log("Complete Response:", res);
   console.log("RESPONSE INTERCEPTOR ->", res.status, res.config?.url);
  return res;
},
   (err)=>{
    console.warn("RESPONSE INTERCEPTOR ERROR ->", err?.message);
    if(err.response && (err.response.status===401 || err.response.status===403)){
      //handle unauthorized access
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("role");
    localStorage.removeItem("details");
      console.error("Authorization error. Please log in again.");
      // Optionally, you can redirect to login page or clear local storage
    }
    else if(err.request && !err.response){
      console.error("No response received. Network/CORS/server might be the issue.", err.request);

    }
    return Promise.reject(err);
   }
);

export default axiosInstance;