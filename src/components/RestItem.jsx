import {
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	ListItem,
	Typography,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

const RestItem = ({ restaurant }) => {
	const { title, rating, imgUrl, _id } = restaurant;

	const navigate = useNavigate();

	return (
		<ListItem>
			<Card sx={{ width: "100%", mb: 2 }}>
				<CardActionArea>
					<CardContent sx={{ backgroundColor: "#95cded" }}>
						<Typography align="center" variant="h5" sx={{ color: "#fff" }}>
							{title}
						</Typography>
						<Typography
							variant="body2"
							color="textSecondary"
							sx={{ color: "#fff" }}
						>
							Rating: {rating}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button
						onClick={() => {
							navigate("restaurants/" + _id);
						}}
						fullWidth
						size="medium"
						color="primary"
					>
						View Details
					</Button>
				</CardActions>
			</Card>
		</ListItem>
	);
};
export default RestItem;
