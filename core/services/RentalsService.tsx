import { AxiosResponse } from 'axios';
import { FilterParams, Params } from '../types/Types';
import { API } from './API';

// const resourceUrl = `rentals?filter[keywords]=trailer&page[limit]=8&page[offset]=8`;
const resourceName = 'rentals';

export async function searchRentals(filter: FilterParams) {
    const requestConfig = {
        params: {
            [Params.Keywords]: filter[Params.Keywords],
            [Params.Limit]: filter[Params.Limit] || 8,
            [Params.Offset]: filter[Params.Offset] || 0
        }        
    };

    const rentals = await API.get(resourceName, requestConfig).then((res: AxiosResponse) => {
        return res.data;
    }, (err => {
        console.log(err);

        return err;
    }));

    return rentals;
}
