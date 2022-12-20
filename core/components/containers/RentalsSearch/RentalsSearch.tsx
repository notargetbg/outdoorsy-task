import Search from '../../common/Search/Search';
import List from '../../common/ItemList/ItemList';
import React, { useState } from 'react';
import { RentalsResponse } from '../../../types/Types';

export default function RentalsSearch() {
    const [rentals, setRentals] = useState<RentalsResponse | null>(null);
    
    return (
        <div>
            <Search setRecords={setRentals} />
            <List records={rentals} />
        </div>
    );
}