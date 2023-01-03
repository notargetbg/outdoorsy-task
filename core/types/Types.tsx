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
export interface RentalsResponse {
    data: DataItem[];
    meta: Meta;
    included: IncludedItem[];
}

export type DataItem = {
    id: string;
    type: string;
    attributes: Attributes;
    relationships: Relationships;
}

type Meta = {
    total: number;
    start_position: number;
    stop_position: number;
}

export type IncludedItem = {
    id: string;
    type: string;
    attributes: IncludedAttributes;
}

type IncludedAttributes = {
    url: string;
}

type Attributes = {
    vehicle_title: string;
}

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

export enum SearchActionType {
    ADDED,
    NEW
}
