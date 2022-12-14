import { Box, Button, ButtonGroup, Typography} from "@mui/material";
import React from "react";

const Pagination = ({ restaurantsPerPage, totalRestaurants, paginate }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalRestaurants / restaurantsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<Box sx={{ display: "flex", justifyContent: "center", mt: -2 }}>
			<ButtonGroup variant="outlined" size="large">
				{pageNumbers.map((number) => (
					<Button sx={{width:{xl:"80px"},height:{xl:"80px"}}} onClick={() => paginate(number)} key={number}>
						<Typography sx={{fontSize:{xl:"25px"}}}>{number}</Typography>
					</Button>
				))}
			</ButtonGroup>
		</Box>
	);
};

export default Pagination;
