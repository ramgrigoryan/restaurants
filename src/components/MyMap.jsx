import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

export default function MyMap({markers}) {
	return (
		<Box>
			<YMaps query={{
  			ns: 'use-load-option',
 		 load: 'Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon'
}} >
				<Map
					width={1000}
					height={980}
					state={{
						center:[40.18545030560178, 44.51503694256787],
						zoom: 16,
					}}
				>
					<Placemark geometry={[40.18293749999999,44.5070625]} properties={{
							balloonContentBody:"Random Text"}}/>
					{markers.map(restaurant=>{
						const {latitude,longtitude} = restaurant;
						return <Placemark geometry={[latitude,longtitude]} key={restaurant['_id']}  properties={{
							balloonContentBody:restaurant.category}}/>
					})}
				</Map>
			</YMaps>
		</Box>
	);
}