export default function ResultLayoutType() {  
  return (
    <div className="filters_listing">
			<div className="container">
				<ul className="clearfix">
					<li>
						<h6>Type</h6>
						<div className="switch-field">
							<input type="radio" id="all" name="type_patient" value="all" checked />
							<label htmlFor="all">All</label>
							<input type="radio" id="doctors" name="type_patient" value="doctors" />
							<label htmlFor="doctors">Doctors</label>
							<input type="radio" id="clinics" name="type_patient" value="clinics" />
							<label htmlFor="clinics">Clinics</label>
						</div>
					</li>
					<li>
						<h6>Layout</h6>
						<div className="layout_view">
							<a href="#"><i className="icon-th"></i></a>
							<a href="#" className="active"><i className="icon-th-list"></i></a>
							<a href="#"><i className="icon-map-1"></i></a>
						</div>
					</li>
					<li>
						<h6>Sort by</h6>
						<select name="orderby" className="selectbox">
						<option value="Closest">All Doctors</option>
						<option value="Best rated">Best rated</option>
						<option value="Men">Men</option>
						<option value="Women">Women</option>
						</select>
					</li>
				</ul>
			</div>
		</div>
  );
}