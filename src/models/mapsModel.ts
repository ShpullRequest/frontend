
// suggest
export interface mapsSearchResponce {
	request: string
	results: any[]
	address: string
	ref: string
	type: string
	name: string
}

export interface addressDetails {
	country: string
	isocode: string
	region: string
	subregion: string
	locality: string
	sublocality: string
	street: string
	building: string
	suburb: string
	postal_code: string
}

//places

export interface placesResponce {
    request:	string,
    results:	place[],
}

export interface place {
    address:	string,
    address_details:	addressDetails[],
    pin:	any[],
    bbox:	any[],
    geometry:	geometry[],
    name: string,
    type: string,
}


export interface geometry {
	type: 'Point' | 'MultiPoint' | 'Linestring' | 'MultiLineString' | 'Polygon' | 'MultiPoligon'
	coordinates: any[]
}


export interface mockSearchData {
    id: number,
    name: string,
    coords: string,
    icon?: string,
}