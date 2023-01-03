import React, { useRef } from 'react';
import styles from '../../../../styles/Search.module.css';

interface Props {
    onSearch: (searchText: string) => void
}

export default function Search({ onSearch }: Props) {
    const inputRef = useRef<HTMLInputElement>(null);

    const search = (e: React.KeyboardEvent): void => {
        if (!inputRef.current) return;

        const searchText = inputRef.current.value;
        if (e.key !== 'Enter' || searchText.length < 2) return;        

        onSearch(searchText);
    };

    return (
        <div>
            <input  type='text'
                    className={styles.search}
                    ref={inputRef}
                    onKeyDown={search}
                    spellCheck='false'/>
        </div>
    );
}
