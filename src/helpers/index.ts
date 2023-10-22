export const parseCoordinates = (coordStr: string): [number, number] => {
	const [latitude, longitude] = coordStr.split(',').map(parseFloat)
	return [latitude, longitude]
}

interface PointGeometry {
	type: 'Point'
	coordinates: [number, number]
}

interface Feature {
	type: 'Feature'
	geometry: PointGeometry
}

interface FeatureCollection {
	type: 'FeatureCollection'
	features: Feature[]
}

function createFeatureCollectionFromCoordinates(coordinates: [number, number][]): FeatureCollection {
	const features: Feature[] = coordinates.map((coord) => ({
		type: 'Feature',
		geometry: {
			type: 'Point',
			coordinates: coord,
		},
	}))

	return {
		type: 'FeatureCollection',
		features,
	}
}

// Пример использования функции
const coordinates: [number, number][] = [
	[37.6165, 55.7505],
	[37.4165, 55.7505],
	[37.6165, 55.8505],
]
