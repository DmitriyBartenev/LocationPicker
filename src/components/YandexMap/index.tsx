/// <reference path="./ymaps.d.ts" />
import React, { useRef, useEffect, useState } from 'react';

import './yandexMap.scss';

interface YandexMapProps {
	center: [number, number];
}

const YandexMap: React.FC<YandexMapProps> = ({ center }) => {
	const [map, setMap] = useState<ymaps.Map | null>(null);
	const [placemark, setPlacemark] = useState<ymaps.Placemark | null>(null);
	const mapRef = useRef<HTMLDivElement | null>(null);

	const zoom = 15;

	useEffect(() => {
		window.ymaps.ready(init);
		function init() {
			if (!map) {
				const newMap = new window.ymaps.Map(mapRef.current!, {
					center,
					zoom: zoom,
				});
				const newPlacemark = new window.ymaps.Placemark(
					center,
					{},
					{ preset: 'islands#redDotIcon' }
				);
				newMap.geoObjects.add(newPlacemark);
				setMap(newMap);
				setPlacemark(newPlacemark);
			} else {
				map.setCenter(center);
				placemark!.geometry.setCoordinates(center);
				window.ymaps.geocode(center).then((res) => {
					if (placemark!.properties && placemark!.properties.set) {
						placemark!.properties.set({
							balloonContentBody: res.geoObjects.get(0).getAddressLine(),
						});
					}
				});
			}
		}
	}, [center, map, placemark]);

	return <section ref={mapRef} className="map" />;
};

export default YandexMap;
