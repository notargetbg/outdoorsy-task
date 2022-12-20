import { Dispatch, SetStateAction, useState } from 'react';

import { Params, RentalsResponse } from '../../../types/Types';
import { searchRentals } from '../../../services/RentalsService';

interface Props {
    setRecords: Dispatch<SetStateAction<RentalsResponse | null>>;
}

export default function Search({ setRecords }: Props) {
    const [searchText, setSearchText] = useState('');

    const search = (): void => {
        searchRentals({
            [Params.Keywords]: searchText
        }).then(((results: RentalsResponse) => {
            setRecords(results);
        }));
    };

    return (
        <div>
            <input type='text' value={searchText} onChange={e => setSearchText(e.target.value)} spellCheck='false' />
            <button onClick={search}>Search</button>
        </div>
    );
}
