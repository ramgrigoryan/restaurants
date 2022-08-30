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
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";

const RestItem = ({ restaurant, onCenter }) => {
	const { title, rating, _id, latitude, longitude } = restaurant;

	const navigate = useNavigate();

	return (
		<ListItem>
			<Card sx={{ width: "100%", mb: 1.5 }}>
				<CardActionArea
					onClick={() => {
						onCenter([latitude, longitude]);
					}}
				>
					<CardContent onClick={() => {}} sx={{ backgroundColor: "#1d96ff" }}>
						<Typography
							align="center"
							variant="h5"
							sx={{ fontSize: "20px", color: "#fff" }}
						>
							{title}
						</Typography>
						<Button size="small" variant="contained">
							<GradeOutlinedIcon /> {rating}
						</Button>
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
