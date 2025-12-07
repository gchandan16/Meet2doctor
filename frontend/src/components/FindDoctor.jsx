import {useNavigate} from 'react-router-dom'; 
export default function FindDoctor() {
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate('/search');
  }
  return (
            <div className="hero_home version_1">
              <div className="content">
                <h3>Find a Doctor!</h3>
                <p>
                  Search Doctor and Hospital and Book appointment Online <span style={{color:"Yellow"}}> OR Call +91- 6393448329.</span>
                </p>
                
                  <div id="custom-search-input">
                    <div className="input-group">
                      <input type="text" className=" search-query" placeholder="Ex. Name, Specialization ...." />
                      <input type="submit" onClick={handleSearch}  className="btn_search" value="Search" />
                    </div>
                    <ul>
                      <li>
                        <input type="radio" id="all" name="radio_search" value="all"  />
                        <label htmlFor="all">All</label>
                      </li>
                      <li>
                        <input type="radio" id="doctor" name="radio_search" value="doctor" />
                        <label htmlFor="doctor">Doctor</label>
                      </li>
                      <li>
                        <input type="radio" id="clinic" name="radio_search" value="clinic" />
                        <label htmlFor="clinic">Clinic</label>
                      </li>
                    </ul>
                  </div>
                
              </div>
            </div>
  );
}
