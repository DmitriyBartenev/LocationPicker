declare namespace ymaps {
	function ready(callback: () => void): void;

	class Map {
		constructor(element: HTMLElement | string | null, options: MapOptions);

		geoObjects: GeoObjectCollection;

		setCenter(center: Coordinate): this;

		setZoom(zoom: number): this;
	}

	interface MapOptions {
		center?: Coordinate;
		zoom?: number;
	}

	class Placemark {
		constructor(
			geometry: Coordinate,
			properties?: PlacemarkProperties,
			options?: PlacemarkOptions
		);
		geometry: PointGeometry;
		properties: PlacemarkProperties;
	}

	interface PointGeometry {
		setCoordinates(coordinates: Coordinate): void;
		getCoordinates(): Coordinate;
	}

	interface PlacemarkProperties {
		balloonContentBody?: string;
		set?: (properties: { [key: string]: any }) => void;
	}

	interface PlacemarkOptions {
		preset?: string;
	}

	function geocode(
		request: string | number[] | object,
		options?: GeocodeOptions
	): Promise<GeocodeResult>;

	interface GeocodeOptions {
		results?: number;
	}

	interface GeocodeResult {
		geoObjects: GeoObjectCollection;
	}

	interface GeoObjectCollection {
		add(child: any): this;
		getLength(): number;
		get(index: number): GeoObject;
	}

	interface GeoObject {
		getAddressLine(): string;
	}

	type Coordinate = [number, number];
}
