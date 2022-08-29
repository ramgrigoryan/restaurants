import { Button, Card, CardActionArea, CardActions, CardContent, ListItem, Typography,CardMedia } from "@mui/material"

import {useNavigate} from "react-router-dom"

const RestItem = ({restaurant}) =>{
    const {title,rating,imgUrl,_id} = restaurant;
    console.log(restaurant)
    const navigate = useNavigate();
    console.log(_id);
    return <ListItem>
    <Card sx={{ width: "100%", mb:2 }}>
        <CardActionArea>
            <CardContent sx={{backgroundColor:"#f9cafa"}} >
                <Typography align="center" variant="h5" color="secondary.light">{title}</Typography>
                <Typography variant="body2" color="textSecondary">Rating: {rating}</Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button onClick={()=>{
                navigate("restaurants/" + _id);
                console.log("consolo")
            }} fullWidth size="medium" color="primary">
                View Details
            </Button>
        </CardActions>
    </Card>
</ListItem>
}
export default RestItem;