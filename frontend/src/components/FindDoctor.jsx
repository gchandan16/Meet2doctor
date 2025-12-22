import {useNavigate} from 'react-router-dom'; 
import {useState} from 'react';
export default function FindDoctor() {
  const [query,setQuery]=useState();
  const[type,setType]=useState("all");

  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    const option = type;        // doctor | clinic
    const keyword = query
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-");        // neur
   // console.log("Searching for:", query, "Type:", option);
    navigate(`/${option}/${keyword}`);

  }
  return (
            <div className="hero_home version_1">
              <div className="content">
                <h3>Find a Doctor!</h3>
                <p>
                  Search Doctor and Hospital and Book appointment Online <span style={{color:"Yellow"}}> OR Call +91- 6393448329.</span>
                </p>
                <form onSubmit={handleSearch}>
                  <div id="custom-search-input">
                    <div className="input-group">
                      <input type="text" className=" search-query" value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Ex. Name, Specialization ...." />
                      <input type="submit"  className="btn_search" value="Search" />
                    </div>
                    <ul>
                      <li>
                        <input type="radio" id="all" name="radio_search" value="all" checked={type==="all"}  onChange={(e)=>setType(e.target.value)} />
                        <label htmlFor="all">All</label>
                      </li>
                      <li>
                        <input type="radio" id="doctor" name="radio_search" value="doctors" checked={type==="doctors"} onChange={(e)=>setType(e.target.value)} />
                        <label htmlFor="doctor">Doctors</label>
                      </li>
                      <li>
                        <input type="radio" id="clinic" name="radio_search" value="clinic" checked={type==="clinic"} onChange={(e)=>setType(e.target.value)} />
                        <label htmlFor="clinic">Clinic</label>
                      </li>
                    </ul>
                  </div>
                </form>
              </div>
            </div>
  );
}
