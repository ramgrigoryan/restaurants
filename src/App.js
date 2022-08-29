import MyMap from "./components/MyMap";
import { Box, Grid, List, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material";
import { useEffect, useState } from "react";
import RestItem from "./components/RestItem";
const theme = createTheme({
	typography: {
		fontFamily: "Quicksand",
	},
});
function App() {
	const [restaurantsCollection, setRestaurantsCollection] = useState([]);
	useEffect(() => {
		(async () => {
			const fetchedRestaurants = await (
				await fetch("http://localhost:8000/restaurants")
			).json();
			setRestaurantsCollection(fetchedRestaurants);
		})();
	}, []);
	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ p: 0 }}>
				<Grid
					container
					sx={{ width: "100vw", ml: 2, mr: 2 }}
					flexDirection="row"
				>
					<Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
						<Typography variant="h3" align="center" sx={{ pt: 2 }}>
							The most famous Restaurants in Yerevan
						</Typography>
						<List>
							{restaurantsCollection.map((restaurant) => (
								<RestItem key={restaurant["_id"]} restaurant={restaurant} />
							))}
						</List>
					</Grid>
					<Grid item xs={12} md={6}>
						<MyMap
							center={[40.18293749999999, 44.5070625]}
							markers={restaurantsCollection}
						/>
					</Grid>
				</Grid>
			</Box>
		</ThemeProvider>
	);
}

export default App;
