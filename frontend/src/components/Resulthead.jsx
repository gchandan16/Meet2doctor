import {useState,useEffect} from "react";
import {useNavigate} from 'react-router-dom';
export default function Resulthead({keyword, type, pageSize,  totalRecords}) {

	const [selectedType,setselectedType]=useState(type);
	const [keywords,setkeywords]=useState(keyword);
	const navigate=useNavigate();
	
	useEffect(() => { if (type) setselectedType(type);}, [type]);
  useEffect(() => { if (keyword) setkeywords(keyword);}, [keyword]);

	const handleSearch=(e)=>{
		  e.preventDefault();
			setkeywords(keyword);
		  navigate(`/${selectedType}/${keywords}`); 
	}

  return (
    	<div id="results">
			<div className="container">
				<form onSubmit={handleSearch}>
						<div className="row">
							<div className="col-md-4">
								<h4><strong>Showing {pageSize}</strong> of {totalRecords} results</h4>
							</div>
							<div className="col-md-4">
								<div className="switch-field">
									<input type="radio" id="all" name="typeoption" onChange={(e)=>setselectedType(e.target.value)} checked={selectedType==="all"} value="all"  />
									<label htmlFor="all">All</label>
									<input type="radio" id="doctors" name="typeoption" onChange={(e)=>setselectedType(e.target.value)} checked={selectedType==="doctors"} value="doctors"  />
									<label htmlFor="doctors">Doctors</label>
									<input type="radio" id="clinics" name="typeoption" onChange={(e)=>setselectedType(e.target.value)} checked={selectedType==="clinic"} value="clinic" />
									<label htmlFor="clinics">Clinic</label>
								</div>
							</div>
							<div className="col-md-4">
								<div className="search_bar_list">
									<input type="text" className="form-control"  value={keywords} onChange={(e)=>setkeywords(e.target.value)} placeholder="Ex. Specialist, Name, Doctor..." />
									<input type="submit" value="Search" />
								</div>
							</div>
						</div>
				</form>
			</div>
		</div>
  );
}