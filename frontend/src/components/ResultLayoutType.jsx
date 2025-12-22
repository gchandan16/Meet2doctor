export default function ResultLayoutType({sortBy,onSortChange}) {  
	const handleonSortChange=(e)=>{

		onSortChange(e.target.value);
	}
  return (
    <div className="filters_listing">
			<div className="container">
				<ul className="clearfix">

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
						<select value={sortBy} onChange={handleonSortChange}>
								<option value="name_asc">Name (A–Z)</option>
								<option value="name_desc">Name (Z–A)</option>
								<option value="exp_desc">Experience (High → Low)</option>
								<option value="exp_asc">Experience (Low → High)</option>
								<option value="spec_asc">Specialization (A–Z)</option>
           </select>
					</li>
				</ul>
			</div>
		</div>
  );
}