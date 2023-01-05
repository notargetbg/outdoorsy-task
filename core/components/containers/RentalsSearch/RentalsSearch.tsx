import { Params, RentalsResponse, SearchActionType } from '../../../types/Types';
import { RentalsState, useRentals } from '../../../contexts/RentalsContext';
import SearchInput from '../../common/Search/SearchInput';
import RentalsList from '../../common/List/RentalsList';
import Text from '../../common/Text/Text';
import styles from '../../../../styles/Home.module.css';
import { searchRentals } from '../../../services/RentalsService';

const defaultMessage = 'Type a keyword and press "Enter"';

const setNewRentals = (rentals: RentalsState) => async (searchText: string) => {
    // if search term is the same as previous do not make the request
    if (rentals.searchText === searchText && searchText !== '') {
        return;
    }

    // call the rentals api
    const records: RentalsResponse = await searchRentals({
        [Params.Keywords]: searchText,
        [Params.Offset]: 0
    });

    // save to context
    rentals.dispatch?.({
        type: SearchActionType.New,
        records,
        searchText
    });
};

export default function RentalsSearch() {
    const rentals = useRentals();
    
    return (
        <section role={'main'} className={styles.mainSection}>
            <SearchInput onSearch={setNewRentals(rentals)} />
            {rentals.searchText ? <RentalsList /> : <Text>{defaultMessage}</Text>}
        </section>
    );
}
