import styles from '../../../../styles/Home.module.css';

interface Props {
    children: JSX.Element | string
}

export default function Text({ children }: Props) {
    return (
        <p className={styles.text}>
            {children}
        </p>
    );
}
