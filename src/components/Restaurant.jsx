import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Button,
	Card,
	CardActionArea,
	CardContent,
	Divider,
	Grid,
	Link,
	Rating,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
export default function Restaurant() {
	const [restaurant, setRestaurant] = useState(null);
	const [userRate, setUserRate] = useState(0);
	const [userReview, setUserReview] = useState("");
	const params = useParams();
	const [displayedReviews, setDisplayedReviews] = useState([]);
	useEffect(() => {
		(async () => {
			const rest = await (
				await fetch(`http://localhost:8000/restaurants/${params.id}`)
			).json();
			setRestaurant(rest);
			setDisplayedReviews(rest.reviews);
		})();
	}, []);
	if (!restaurant) {
		return "loading";
	}
	const {
		title,
		imgUrl,
		attributes,
		address,
		rating,
		category,
		website,
		phoneNumber,
	} = restaurant;
	return (
		<Box sx={{ m: 5 }}>
			<Grid container width="90vw" flexDirection="row" spacing={1}>
				<Grid item xs={12} sm={5} md={4} lg={6}>
					<Box>
						<img src={imgUrl} alt={title} />
					</Box>
				</Grid>
				<Grid item xs={12} sm={7} md={8} lg={6}>
					<Card sx={{ p: 2 }}>
						<Stack spacing={1}>
							<Typography variant="body2">{category}</Typography>
							<Typography variant="h5">{title}</Typography>
							<Typography variant="body2">{attributes}</Typography>
							<Typography variant="body2">{address}</Typography>
							<Link underline="none" href={website}>
								Find more on official website
							</Link>

							<Typography variant="body2">
								Phone Number:{" "}
								{
									<Link underline="none" href={"tel:" + phoneNumber}>
										{phoneNumber}
									</Link>
								}
							</Typography>

							<Typography>Google Rates {rating}</Typography>
							<Rating
								name="half-rating-read"
								defaultValue={+rating}
								precision={0.1}
								readOnly
							/>
						</Stack>
						<CardContent>
							<Accordion>
								<AccordionSummary
									expandIcon={<ExpandMoreOutlinedIcon />}
									aria-controls="panel1a-content"
									id="panel1a-header"
								>
									<Typography>Review</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<form
										action={`${params.id}`}
										method="post"
										onSubmit={(ev) => {
											const data = {
												review: userReview,
												rating: userRate,
												userId: nanoid(10),
											};
											ev.preventDefault();
											console.log(data);
											fetch(`http://localhost:8000/restaurants/${params.id}`, {
												method: "POST",
												headers: {
													"Content-Type": "application/json",
												},
												body: JSON.stringify(data),
											}).then(() => {
												setUserRate(0);
												setUserReview("");
												setDisplayedReviews([...displayedReviews, data]);
											});
										}}
									>
										<TextField
											id="standard-basic"
											label="What you think about us..."
											variant="outlined"
											fullWidth
											multiline
											rows={5}
											value={userReview}
											onChange={(ev) => {
												setUserReview(ev.target.value);
											}}
										/>
										<Stack direction="row" justifyContent="space-between">
											<Box>
												<Typography>Rate us</Typography>
												<Rating
													name="half-rating-read"
													precision={0.1}
													value={userRate}
													onChange={(event, newValue) => {
														setUserRate(newValue);
													}}
												/>
											</Box>
											<Button type="submit">Post your review</Button>
										</Stack>
									</form>
								</AccordionDetails>
							</Accordion>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
			<Box>
				{displayedReviews.length !== 0 &&
					displayedReviews.map((review) => {
						console.log(review);
						return (
							<Card
								sx={{
									maxWidth: "450px",
									display: "flex",
									justifyContent: "space-between",
									mb: 3,
									p: 1,
								}}
								key={review.userId}
							>
								<CardActionArea sx={{ p: 2 }}>
									<Typography
										align="center"
										variant="body2"
										color="textSecondary"
									>
										UserId: {review.userId}
									</Typography>
									<Divider />
									<Typography align="center" color="primary">
										{review.review}
									</Typography>
								</CardActionArea>
								<CardContent>
									<Rating
										name="half-rating-read"
										defaultValue={+review.rating}
										precision={0.1}
										readOnly
									/>
								</CardContent>
							</Card>
						);
					})}
			</Box>
		</Box>
	);
}
