import { DataItem, Params, RentalsResponse, SearchActionType } from '../../../types/Types';
import Text from '../Text/Text';
import styles from '../../../../styles/ItemList.module.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import { searchRentals } from '../../../services/RentalsService';
import { useRentals } from '../../../contexts/RentalsContext';
import { RentalsListItem } from './RentalsListItem';

const noResultsMessage = 'There are no results for this search.';
const allResultsMessage = 'Yay, you have seen it all!';

export default function RentalsList() {
    const rentals = useRentals();
    const hasMore = rentals.meta.stop_position < rentals.meta.total && rentals.meta.stop_position !== 0;
    const hasNoResults = rentals.meta.total === 0 && rentals.searchText;

    const setRentals = async () => {
        const records: RentalsResponse = await searchRentals({
            [Params.Keywords]: rentals.searchText,
            [Params.Offset]: rentals.meta.stop_position
        });

        if (rentals.dispatch) {
            rentals.dispatch({
                type: SearchActionType.ADDED,
                records,
                searchText: rentals.searchText
            });
        }
    };

    return (
        <div className={styles.wrapper}>
            {rentals.meta.total > 0 && (
                <span className={styles.total}>Total results: {rentals.meta.total}</span>
            )}

            <InfiniteScroll
                dataLength={rentals.data.length}
                next={setRentals}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
                endMessage={rentals.meta.total > 0 && <Text>{allResultsMessage}</Text>}>

            {rentals.data.map((record: DataItem) => (
                <RentalsListItem key={record.id} rentalItem={record} included={rentals.included} />
            ))}

            </InfiniteScroll>

            {hasNoResults && <Text>{noResultsMessage}</Text>} 
        </div>
    );
}
