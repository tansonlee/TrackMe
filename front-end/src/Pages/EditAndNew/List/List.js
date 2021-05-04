import React from "react";
import uuid from "react-uuid";
import "./List.css";

const List = ({ complete, setComplete, incomplete, setIncomplete }) => {
	return (
		<div className="edit-list-wrapper">
			{/* Completes */}
			<div>
				<p className="list-title">Complete</p>
				{complete.length === 0 && <p className="empty">Empty, no completes</p>}
				<ul className="list-complete">
					{complete.map((item, index) => (
						<li key={uuid()}>
							<p>{item}</p>
							<button
								type="button"
								onClick={() =>
									setComplete(
										complete.filter((_, filterIndex) => filterIndex !== index)
									)
								}
							>
								x
							</button>
						</li>
					))}
				</ul>
				<button
					type="button"
					onClick={() => {
						const newItem = prompt("Enter the new complete item:");
						if (!newItem) return;
						setComplete([...complete, newItem]);
					}}
				>
					+
				</button>
			</div>
			{/* incompletes */}
			<div>
				<p className="list-title">Incomplete</p>
				{incomplete.length === 0 && <p className="empty">Empty, no incompletes</p>}
				<ul className="list-incomplete">
					{incomplete.map((item, index) => (
						<li key={uuid()}>
							<p>{item}</p>
							<button
								type="button"
								onClick={() =>
									setIncomplete(
										incomplete.filter((_, filterIndex) => filterIndex !== index)
									)
								}
							>
								X
							</button>
						</li>
					))}
				</ul>
				<button
					type="button"
					onClick={() => {
						const newItem = prompt("Enter the new incomplete item:");
						if (!newItem) return;
						setIncomplete([...incomplete, newItem]);
					}}
				>
					+
				</button>
			</div>
		</div>
	);
};

export default List;
