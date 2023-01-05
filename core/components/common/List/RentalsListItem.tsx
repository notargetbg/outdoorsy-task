import { useCallback } from 'react';
import Image from 'next/image';
import { DataItem, IncludedItem } from '../../../types/Types';
import styles from '../../../../styles/ItemList.module.css';

const IMAGES = 'images';
const placeholderUrl = '/default-placeholder.png';

export function RentalsListItem(props: { rentalItem: DataItem, included: IncludedItem[] }) {
    const { rentalItem, included } = props;

    // uses the image relationship data, finds the correspoding primary image and returns the image url
    const getImgUrl = useCallback((image: { data: { id: string } }): string => {
        const imageId = image?.data?.id;
        const item = included.find((el) => el.id === imageId && el.type === IMAGES);

        return item?.attributes.url || placeholderUrl;
    
    }, [included]);

    return (
        <div className={styles.item}>
            <Image className={styles.itemImage} alt={rentalItem.attributes.vehicle_title} src={getImgUrl(rentalItem.relationships.primary_image)} width={225} height={150} />
            <h3 className={styles.itemTitle}>
                {rentalItem.attributes.vehicle_title}
            </h3>
        </div>
    );
}
