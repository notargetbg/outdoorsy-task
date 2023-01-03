import React from 'react';

import { Params, RentalsResponse, SearchActionType } from '../../../types/Types';
import { useRentals } from '../../../contexts/RentalsContext';
import SearchInput from '../../common/Search/SearchInput';
import RentalsList from '../../common/List/RentalsList';
import Text from '../../common/Text/Text';
import styles from '../../../../styles/Home.module.css';
import { searchRentals } from '../../../services/RentalsService';

const defaultMessage = 'Type a keyword and press "Enter"';

export default function RentalsSearch() {
    const rentals = useRentals();

    const setRentals = async (searchText: string) => {
        // if search term is the same as previous do not make the request
        if (rentals.searchText === searchText && searchText !== '') {
            return;
        }

        // prepare params
        const offset = rentals && rentals.searchText === searchText ? rentals.meta.stop_position : 0;
        const records: RentalsResponse = await searchRentals({
            [Params.Keywords]: searchText,
            [Params.Offset]: offset
        });

        // save to context
        rentals.dispatch?.({
            type: SearchActionType.NEW,
            records,
            searchText
        });
    };
    
    return (
        <section className={styles.mainSection}>
            <SearchInput onSearch={setRentals} />
            {rentals.searchText ? <RentalsList /> : <Text>{defaultMessage}</Text>}
        </section>
    );
}
