import React from "react";
import "./Notes.css";

const Notes = ({ props: { notes } }) => {
	return (
		<>
			<div className="notes-wrapper">
				<h3>Extra Notes</h3>
				<p>{notes}</p>
			</div>
		</>
	);
};

export default Notes;
