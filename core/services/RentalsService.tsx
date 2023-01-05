import { AxiosResponse } from 'axios';
import { FilterParams, Params, RentalsResponse } from '../types/Types';
import { API } from './API';

const resourceName = 'rentals';
const defaultPageLimit = 25;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function searchRentals(filter: FilterParams): Promise<RentalsResponse | any> {
    // prepare params
    const requestConfig = {
        params: {
            [Params.Keywords]: filter[Params.Keywords],
            [Params.Limit]: filter[Params.Limit] || defaultPageLimit,
            [Params.Offset]: filter[Params.Offset] || 0
        }        
    };

    try {
        // make the request
        const rentals: AxiosResponse<RentalsResponse> = await API.get(resourceName, requestConfig);
        
        // return the raw response data
        return rentals.data;
    } catch (error) {
        console.log(error);
    
        return error;
    }
}
