import { Box, Card, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom"

export default function Restaurant() {
    const [restaurant,setRestaurant] = useState(null);
    const params = useParams();
    console.log(restaurant)
    useEffect(()=>{
        (async ()=>{
            const rest = await (await fetch(`http://localhost:8000/restaurants/${params.id}`)).json();
            console.log(restaurant)
            setRestaurant(rest);
        })();
    },[])
    if(!restaurant){ return "loading"}
    const {title,imgUrl,attributes,address,rating,category,website,phoneNumber} = restaurant;
  return (
    <Box>
        <Grid container width="90vw" flexDirection="row" spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={3} ><Box><img src={imgUrl} alt={title}/></Box></Grid>
            <Grid item xs={12} sm={6} md={8} lg={9} ><Box><Typography align='left' variant='h5'>{title}</Typography></Box></Grid>
        </Grid>
          

    </Box>
  )
}
