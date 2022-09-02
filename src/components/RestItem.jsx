import {
	Box,
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	ListItem,
	Paper,
	Typography,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";
import { Stack } from "@mui/system";

const RestItem = ({ restaurant, onCenter }) => {
	const { title, rating, _id, latitude, longitude } = restaurant;

	const navigate = useNavigate();

	return (
		<ListItem>
			<Card sx={{ width: "100%", mb: 1.5,md:{width:"60%"} }}>
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
						<Paper sx={{display:"inline-block",p:1,color:"#fff", backgroundColor:"#0f3fc2"}}>
							<Stack flexDirection='row' justifyContent='center' alignItems="center">
							<GradeOutlinedIcon sx={{pr:1}}/> {rating}
							</Stack>
						</Paper>
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
