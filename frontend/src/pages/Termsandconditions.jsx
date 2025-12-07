import { Link } from "react-router-dom";
export default function TermsAndConditions() {
  return (
    <div className="px-4 py-5 my-5 text-center"> <h1 className="display-5 fw-bold text-body-emphasis">Terms and Conditions....</h1> <div className="col-lg-6 mx-auto"> <p className="lead mb-4">Terms and Conditions ....</p> <div className="d-grid gap-2 d-sm-flex justify-content-sm-center"> <Link to="/" className="btn btn-primary btn-lg px-4 gap-3">Go to Homepage</Link> </div> </div> </div>
  );
}
