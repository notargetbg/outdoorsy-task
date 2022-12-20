export type FilterParams = {
    [Params.Keywords]: string,
    [Params.Limit]?: number,
    [Params.Offset]?: number,
}

export enum Params {
    Keywords = 'filter[keywords]',
    Limit = 'page[limit]',
    Offset = 'page[offset]',
}

export type RentalsResponse = {
    data: Data[],
    meta: any,
    included: Included[],
}

type Data = {
    id: string;
    type: string;
    // attributes: Attributes;
    relationships: Relationships;
}

type Included = {
    id: string;
    type: string;
    attributes: IncludedAttributes;
}

type IncludedAttributes = {
    url: string;
}

// type Attributes = {

// }

type Relationships = {
    primary_image: PrimaryImage;
}

type PrimaryImage = {
    data: PrimaryImageData;
}

type PrimaryImageData = {
    id: string;
    type: string;
}