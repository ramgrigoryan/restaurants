import MyMap from "./components/MyMap";
import { Box, Grid, List, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material";
import { useEffect, useState } from "react";
import RestItem from "./components/RestItem";
import Pagination from "./components/Pagination";
const theme = createTheme({
	typography: {
		fontFamily: "Quicksand",
	},
});
function App() {
	const [restaurantsCollection, setRestaurantsCollection] = useState([]);
	const [center, setCenter] = useState([40.18293749999999, 44.5070625]);
	const [currentPage, setCurrentPage] = useState(1);
	const [restaurantPerPage] = useState(5);
	useEffect(() => {
		(async () => {
			const fetchedRestaurants = await (
				await fetch("http://localhost:8000/restaurants")
			).json();
			setRestaurantsCollection(fetchedRestaurants);
		})();
	}, []);
	const indexOfLastRestaurant = currentPage * restaurantPerPage;
	const indexOfFirstRestaurant = indexOfLastRestaurant - restaurantPerPage;
	const currentRestaurants = restaurantsCollection.slice(
		indexOfFirstRestaurant,
		indexOfLastRestaurant
	);
	const paginate = (pageNumber) => setCurrentPage(pageNumber);
	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ p: 1 }}>
				<Grid
					container
					spacing={3}
					sx={{ width: "98vw", p: 2 }}
					flexDirection="row"
				>
					<Grid item md={12} lg={6}>
						<Typography variant="h4" align="center" sx={{ pt: 2 }}>
							The most famous restaurants in Yerevan
						</Typography>
						<List>
							{currentRestaurants.map((restaurant) => (
								<RestItem
									onCenter={setCenter}
									key={restaurant["_id"]}
									restaurant={restaurant}
								/>
							))}
						</List>
						<Pagination
							restaurantsPerPage={restaurantPerPage}
							totalRestaurants={restaurantsCollection.length}
							paginate={paginate}
						/>
					</Grid>
					<Grid
						item
						container
						justifyContent="end"
						md={12}
						lg={6}
						sx={{ pl: 5, pr: 5 }}
					>
						<MyMap
							center={center}
							onCenterChange={setCenter}
							markers={restaurantsCollection}
						/>
					</Grid>
				</Grid>
			</Box>
		</ThemeProvider>
	);
}

export default App;
