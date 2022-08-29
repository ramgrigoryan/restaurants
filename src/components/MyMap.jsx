import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

export default function MyMap({ markers }) {
	const [center, setCenter] = useState([40.18545030560178, 44.51503694256787]);
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
									setCenter([latitude, longitude]);
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
