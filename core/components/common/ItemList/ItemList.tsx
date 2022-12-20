import { RentalsResponse } from '../../../types/Types';

interface Props {
    records: RentalsResponse | null
}

export default function ItemList({ records }: Props) {

    console.log(records);
    console.log('itemlist');

    return (
        <div>
            I am list
        </div>
    );
}