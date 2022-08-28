import { Box } from "@mui/material";
import React, { useState } from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

export default function MyMap() {
	const [center, setCenter] = useState([40.18545030560178, 44.51503694256787]);
	return (
		<Box>
			<YMaps>
				<Map
					width={1000}
					height={980}
					defaultState={{
						center,
						zoom: 16,
					}}
				>
					<Placemark
						onHover={() => {
							setCenter([40.177145555960095, 44.512525260705964]);
							alert("mehh");
						}}
						geometry={[40.177145555960095, 44.512525260705964]}
					/>
					{/* <Placemark geometry={[40.1772, 44.5123]} />
					<Placemark geometry={[40.17714, 44.51255]} />
					<Placemark geometry={[40.177147, 44.5125258]} /> */}
				</Map>
			</YMaps>
		</Box>
	);
}
