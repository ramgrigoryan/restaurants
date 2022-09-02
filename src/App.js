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
				await fetch("http://localhost:8000/restaurants",{
					method:"GET",
					headers:{"Content-type":"strict-origin-when-cross-origin"}
				})
			).json();
			setRestaurantsCollection(fetchedRestaurants);
		})();
	}, []);
	const indexOfLastRestaurant = currentPage * restaurantPerPage;
	const indexOfFirstRestaurant = indexOfLastRestaurant - restaurantPerPage;
	const currentPageRestaurants = restaurantsCollection.slice(
		indexOfFirstRestaurant,
		indexOfLastRestaurant
	);
	const paginate = (pageNumber) => setCurrentPage(pageNumber);
	return (
		<ThemeProvider theme={theme}>
			<Box sx={{p:4}}>
				<Grid
					container
					spacing={3}
					sx={{ width: "100vw", p:{sm:"0.5"}  }}
					flexDirection="row"
				>
					<Grid item sm={12} md={6} >
						<Typography sx={{fontSize:{xs:"18px",sm:"22px",md:'26px', lg:'30px',xl:"44px"}}} variant="h4" align="center">
							The most famous restaurants in Yerevan
						</Typography>
						<List>
							{currentPageRestaurants.map((restaurant) => (
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
						justifyContent="center"
						sm={12} md={6} 
					>
						<MyMap
							className= 'map'
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
