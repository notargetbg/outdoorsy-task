import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { RentalsResponse } from '../../../types/Types';
import Search from '../../common/Search/Search';
import List from '../../common/ItemList/ItemList';
import styles from '../../../../styles/Home.module.css';
import Text from '../../common/Text/Text';

const defaultMessage = 'Type a keyword and press "Enter"';

export default function RentalsSearch() {
    const router = useRouter();

    console.log(router);
    // todo extra: use router and url query to make request to rentals as well

    const [rentals, setRentals] = useState<RentalsResponse | null>(null);
    
    return (
        <section className={styles.mainSection}>
            <Search setRecords={setRentals} />
            {rentals ? <List records={rentals} /> : <Text>{defaultMessage}</Text>}
        </section>
    );
}
