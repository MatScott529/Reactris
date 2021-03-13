import Grid from './Game/Grid';
import Hold from './Game/Hold';
import Queue from './Game/Queue';
import Stats from './Game/Stats';

import styles from '../styles/Game.module.scss';

const Game = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.leftSection}>
                <Hold />
                <Stats />
            </div>

            <Grid />

            <div className={styles.rightSection}>
                <Queue />
                <button>Mode</button>
                <button>Settings</button>
            </div>
        </div>
    )
};

export default Game;