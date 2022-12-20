import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { RentalsResponse } from '../../../types/Types';
import Search from '../../common/Search/Search';
import List from '../../common/ItemList/ItemList';

export default function RentalsSearch() {
    const router = useRouter();

    console.log(router);

    // todo extra: use router and url query to make request to rentals as well



    const [rentals, setRentals] = useState<RentalsResponse | null>(null);
    
    return (
        <div>
            <Search setRecords={setRentals} />
            <List records={rentals} />
        </div>
    );
}