import Image from 'next/image';
import { RentalsResponse } from '../../../types/Types';

interface Props {
    records: RentalsResponse | null
}

const IMAGES = 'images';

export default function ItemList({ records }: Props) {

    console.log(records);
    console.log('itemlist');

    if (!records || !records.data) {
        return null;
    }

    function getImgUrl(imageId: string): string {
        const item = records?.included.find((el) => el.id === imageId && el.type === IMAGES);

        return item?.attributes.url || '';
    }

    return (
        <div>
            {records.data.map((record) => (
                <div key={record.id}>
                    <Image alt='Foo' src={getImgUrl(record.relationships.primary_image.data.id) || 'https://via.placeholder.com/150'} width={150} height={150} />
                    <p>
                        {record.attributes.vehicle_title}
                    </p>
                </div>
            ))}
        </div>
    );
}