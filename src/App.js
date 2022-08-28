import MyMap from "./components/MyMap";
import {
	Box,
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	List,
	ListItem,
	ListItemButton,
	Typography,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material";
const theme = createTheme({
	typography: {
		fontFamily: "Quicksand",
	},
});
function App() {
	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ p: 0 }}>
				<Grid
					sx={{ width: "100vw", ml: 2, mr: 2 }}
					container
					flexDirection="row"
					spacing={8}
				>
					<Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
						{" "}
						<Typography variant="h3" align="center" sx={{ pt: 2 }}>
							The most famous Restaurants in Yerevan
						</Typography>
						<List>
							<ListItem>
								<Card sx={{ width: "100%" }}>
									<CardActionArea>
										<CardContent>
											<Typography gutterBottom variant="h5" component="div">
												Taverna Yerevan
											</Typography>
											<Typography variant="body2" color="text.secondary">
												rating
											</Typography>
											<Typography variant="body2" color="text.secondary">
												popularity
											</Typography>
											<Typography variant="body2" color="text.secondary">
												address
											</Typography>
											<Typography variant="body2" color="text.secondary">
												distance
											</Typography>
										</CardContent>
									</CardActionArea>
									<CardActions>
										<Button fullWidth size="medium" color="primary">
											View Details
										</Button>
									</CardActions>
								</Card>
							</ListItem>
							<ListItem>
								<Card sx={{ width: "100%" }}>
									<CardActionArea>
										<CardContent>
											<Typography gutterBottom variant="h5" component="div">
												Taverna Yerevan
											</Typography>
											<Typography variant="body2" color="text.secondary">
												rating
											</Typography>
											<Typography variant="body2" color="text.secondary">
												popularity
											</Typography>
											<Typography variant="body2" color="text.secondary">
												address
											</Typography>
											<Typography variant="body2" color="text.secondary">
												distance
											</Typography>
										</CardContent>
									</CardActionArea>
									<CardActions>
										<Button fullWidth size="medium" color="primary">
											View Details
										</Button>
									</CardActions>
								</Card>
							</ListItem>
							<ListItem>
								<Card sx={{ width: "100%" }}>
									<CardActionArea>
										<CardContent>
											<Typography gutterBottom variant="h5" component="div">
												Taverna Yerevan
											</Typography>
											<Typography variant="body2" color="text.secondary">
												rating
											</Typography>
											<Typography variant="body2" color="text.secondary">
												popularity
											</Typography>
											<Typography variant="body2" color="text.secondary">
												address
											</Typography>
											<Typography variant="body2" color="text.secondary">
												distance
											</Typography>
										</CardContent>
									</CardActionArea>
									<CardActions>
										<Button fullWidth size="medium" color="primary">
											View Details
										</Button>
									</CardActions>
								</Card>
							</ListItem>
						</List>
					</Grid>
					<Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
						<MyMap />
					</Grid>
				</Grid>
			</Box>
		</ThemeProvider>
	);
}

export default App;
