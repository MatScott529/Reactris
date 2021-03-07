import styles from '../styles/Layout.module.scss';

const Layout = (props) => (
    <div className={styles.layout}>
        <header>
            <h1>Reactris</h1>
        </header>
        {props.children}
        <footer>
            <p>Created by Mat Scott</p>
        </footer>
    </div>
);

export default Layout;