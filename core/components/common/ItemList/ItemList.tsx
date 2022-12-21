import Image from 'next/image';

import { RentalsResponse } from '../../../types/Types';
import styles from '../../../../styles/ItemList.module.css';
import Text from '../Text/Text';


interface Props {
    records: RentalsResponse | null
}

const IMAGES = 'images';
const placeholderUrl = 'https://via.placeholder.com/150';
const noResultsMessage = 'There are no results for this serach.';

export default function ItemList({ records }: Props) {

    console.log(records);
    console.log('itemlist');

    if (!records || !records.data) {
        // todo: return no records found
        return null;
    }

    function getImgUrl(imageId: string): string {
        const item = records?.included.find((el) => el.id === imageId && el.type === IMAGES);

        return item?.attributes.url || '';
    }

    return (
        <div className={styles.wrapper}>
            {records.data.map((record) => (
                <div key={record.id} className={styles.item}>
                    <Image className={styles.itemImage} alt='Foo' src={getImgUrl(record.relationships.primary_image.data.id) || placeholderUrl} width={225} height={150} />
                    <h3 className={styles.itemTitle}>
                        {record.attributes.vehicle_title}
                    </h3>
                </div>
            ))}

            {!records.data.length && <Text>{noResultsMessage}</Text>} 
        </div>
    );
}
