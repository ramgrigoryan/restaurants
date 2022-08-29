import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

export default function MyMap({ markers, center, onCenterChange }) {
	return (
		<Box>
			<YMaps
				query={{
					ns: "use-load-option",
					load: "Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon",
				}}
			>
				<Map
					width={1000}
					height={980}
					state={{
						center,
						zoom: 16,
					}}
				>
					{markers.map((restaurant) => {
						const { latitude, longitude } = restaurant;
						return (
							<Placemark
								onClick={() => {
									onCenterChange([latitude, longitude]);
								}}
								geometry={[latitude, longitude]}
								key={restaurant["_id"]}
								properties={{
									balloonContentBody: restaurant.category,
								}}
							/>
						);
					})}
				</Map>
			</YMaps>
		</Box>
	);
}
