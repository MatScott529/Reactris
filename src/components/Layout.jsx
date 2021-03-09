import styles from '../styles/Layout.module.scss';
import logo from '../images/tetris-trainer-logo.png';

const Layout = (props) => (
    <div className={styles.layout}>
        <header>
            <img src={logo} alt="Tetris Trainer"/>
        </header>
        {props.children}
        <footer>
            <p>Created by Mat Scott</p>
        </footer>
    </div>
);

export default Layout;