import { Button, ButtonGroup, Link } from "@mui/material";
import React from "react";

const Pagination = ({ restaurantsPerPage, totalRestaurants, paginate }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalRestaurants / restaurantsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<ButtonGroup variant="outlined" size="large">
			{pageNumbers.map((number) => (
				<Button onClick={() => paginate(number)} href="#" key={number}>
					{number}
				</Button>
			))}
		</ButtonGroup>
	);
};

export default Pagination;
