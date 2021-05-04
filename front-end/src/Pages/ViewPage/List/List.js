import React from "react";
import "./List.css";
import uuid from "react-uuid";

const List = ({ props: { title, listItems } }) => {
	return (
		<div className="view-list-wrapper">
			<h2>{title}</h2>
			<ul>
				{listItems.map(item => (
					// !! add an id for each item because they may be the same
					<li key={uuid()}>{item}</li>
				))}
			</ul>
		</div>
	);
};

export default List;
