import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
	YMaps,
	Map,
	Placemark,
	GeolocationControl,
	Clusterer,
} from "react-yandex-maps";

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
						controls: ["zoomControl", "fullscreenControl"],
					}}
				>
					<GeolocationControl
						options={{
							float: "left",
						}}
					/>
					<Clusterer
						options={{
							preset: "islands#invertedVioletClusterIcons",
							groupByCoordinates: false,
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
										balloonContentHeader: `${restaurant.title} `,
										balloonContentBody: ` ${restaurant.category}`,
										balloonContentFooter: ` ${restaurant.address}`,
									}}
								/>
							);
						})}
					</Clusterer>
				</Map>
			</YMaps>
		</Box>
	);
}
