	import { useNavigate } from "react-router-dom";
	import DoctorMap from "./DoctorMap";
	export default function DoctorResult(
		{
			results=[],
			loading=false,
			page=1,
			pageSize=3,
			totalRecords=0,
			onPageChange = () => {}
		}) {   
	   console.log("DoctorResult expected array, got:", results);


		if(loading){
			return <div class="d-flex justify-content-center">
								<div class="spinner-border" role="status">
									<span class="sr-only">Loading...</span>
								</div>
							</div>
		}
    
    const doctorsArray =(()=>{
			if(Array.isArray(results)){
         return results;
			}
			else if(results && typeof results ==='object' && results.data){
          return results.data;
			}else {
      console.error("DoctorResult: Invalid results format", results);
      return <p>No Records Found</p>;

       }
		})();
		console.log("DoctorResult: Displaying doctors:", doctorsArray);

		


		if (!doctorsArray || doctorsArray.length === 0) {
    return <p>No Records Found...</p>
  }


		const totalPages =
  Number.isInteger(totalRecords) && totalRecords > 0
    ? Math.ceil(totalRecords / pageSize)
    : 0;

		const pages =
    totalPages > 0
      ? Array.from({ length: Math.min(3, totalPages) }, (_, i) => i + 1)
      : [];



		const navigate = useNavigate();
		const goToDoctorDetail = () => {
			navigate('/doctordetail');
		}        
		return (
		<div className="container margin_60_35">
				<div className="row">
					<div className="col-lg-7">

				
					{doctorsArray.map((doctor)=>(
					
						<div key={doctor.doctor_id} className="strip_list wow fadeIn">

							<a href="#0" className="wish_bt"></a>
							<figure>
								<a href="detail-page.html"><img src="img/doctor_listing_1.jpg" alt="" /></a>
							</figure>
							
							<h4> Dr. {doctor.first_name} {doctor.last_name}<span style={{fontSize:"15px", color:"Blue"}}> (MBBS.MS)</span></h4>
												<span> {doctor.specialization}</span>
							<p> <b> Experience:</b>&nbsp; {doctor.experience_years} years &nbsp;&nbsp; <b> Fee:</b>&nbsp; Rs/.500 &nbsp; &nbsp;<b> Address:</b> &nbsp;Ashok Nagar, Gorakhpur </p>
							<p> OPD Timing:&nbsp; 08:00 AM &nbsp;To&nbsp; 12:00 AM ,&nbsp; 03:00 PM &nbsp;To&nbsp; 07:30 PM </p>
													
													<span className="rating"><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i><i className="icon_star"></i> <small>(145)</small></span>
							<a href="badges.html" data-toggle="tooltip" data-placement="top" data-original-title="Badge Level" className="badge_list_1"><img src="img/badges/badge_1.svg" width="15" height="15" alt="" /></a>
							<ul>
								<li><a href="#"  className="btn_listing">View on Map</a></li>
								<li><a href="#" target="_blank">Directions</a></li>
								<li><a onClick={goToDoctorDetail}>Book Appointment</a></li>
							</ul>

						</div>
	))}

						
										{totalPages > 1 && (
		<nav className="add_top_20">
			<ul className="pagination pagination-sm">

				<li className={`page-item ${page === 1 ? "disabled" : ""}`}>
					<button
						className="page-link"
						onClick={() => onPageChange(page - 1)}
						disabled={page === 1}
					>
						Previous
					</button>
				</li>

				{[...Array(totalPages)].map((_, i) => (
					<li
						key={i}
						className={`page-item ${page === i + 1 ? "active" : ""}`}
					>
						<button
							className="page-link"
							onClick={() => onPageChange(i + 1)}
						>
							{i + 1}
						</button>
					</li>
				))}

				<li className={`page-item ${page === totalPages ? "disabled" : ""}`}>
					<button
						className="page-link"
						onClick={() => onPageChange(page + 1)}
						disabled={page === totalPages}
					>
						Next
					</button>
				</li>

			</ul>
		</nav>
	)}


					</div>
					
					<aside className="col-lg-5" id="sidebar">
						<DoctorMap />
					</aside>
					
				</div>
			
			</div>
		);
	} 