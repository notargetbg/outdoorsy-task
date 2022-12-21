import React, { Dispatch, SetStateAction, useState } from 'react';

import { Params, RentalsResponse } from '../../../types/Types';
import { searchRentals } from '../../../services/RentalsService';
import styles from '../../../../styles/Search.module.css';
interface Props {
    setRecords: Dispatch<SetStateAction<RentalsResponse | null>>;
}

export default function Search({ setRecords }: Props) {
    const [searchText, setSearchText] = useState('');

    const search = (e: React.KeyboardEvent): void => {
        if (e.key !== 'Enter' || searchText.length < 2) return;

        searchRentals({
            [Params.Keywords]: searchText
        }).then(((results: RentalsResponse) => {
            setRecords(results);
        }));
    };

    return (
        <div>
            <input  type='text'
                    className={styles.search}
                    value={searchText}
                    onChange={e => setSearchText(e.target.value)}
                    onKeyDown={search}
                    spellCheck='false'/>
        </div>
    );
}
