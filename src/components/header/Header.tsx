
import styles from './header.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { IMAGES, ICONS } from '../../shared';

export function Header(){

    const navigate =useNavigate()

    return <header>
        <div className={styles.logoBlock} onClick={() => {
            navigate('/')
        }}>
            <img src={IMAGES.logo} alt="Logo" />
        </div>
        <div className={styles.actionBlock}>
            <Link to={"/products"} className={styles.menuButton}>
                <ICONS.Menu className={styles.menuButtonIcon}></ICONS.Menu>
                Categories
            </Link>
            <div className={styles.searchBarBlock}>
                <input type="text" placeholder='Find products...' className = {styles.searchInput}/>
                <ICONS.Search className={styles.searchIcon}></ICONS.Search>
            </div>
            <Link to={'#cart'} className={styles.menuButton}>
                <ICONS.Menu className={styles.menuButtonIcon}></ICONS.Menu>
                Cart
            </Link>
        </div>
        <div className={styles.profileBlock}>
            <p>Username</p>
            <img src={IMAGES.defaultAvatar} alt="Avatar" />
        </div>
    </header>
}
