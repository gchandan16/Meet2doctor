export default function Resulthead() {
  return (
    	<div id="results">
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<h4><strong>Showing 10</strong> of 140 results</h4>
					</div>
					<div className="col-md-6">
						<div className="search_bar_list">
							<input type="text" className="form-control" placeholder="Ex. Specialist, Name, Doctor..." />
							<input type="submit" value="Search" />
						</div>
					</div>
				</div>
			</div>
		</div>
  );
}