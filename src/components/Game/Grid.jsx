import styles from '../../styles/Game/Grid.module.scss';

const Grid = () => {
    const cellCount = 200;

    return (
        <div className={styles.grid}>
            {[...Array(cellCount)].map((e, i) => <span className={styles.cell} key={i}></span>)}
        </div>
    )
};

export default Grid;