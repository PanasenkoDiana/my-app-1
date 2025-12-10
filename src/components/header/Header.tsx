import logoImage from './../../assets/images/logo.png'
import defaultAvatarImage from  './../../assets/images/defaultAvatar.png'
import styles from './header.module.css'
import {ReactComponent as SearchIcon} from './../../assets/svg/search.svg'
import {ReactComponent as MenuIcon} from './../../assets/svg/menu.svg'
import { Link, useNavigate } from 'react-router-dom'

export function Header(){

    const navigate =useNavigate()

    return <header>
        <div className={styles.logoBlock} onClick={() => {
            navigate('/')
        }}>
            <img src={logoImage} alt="Logo" />
        </div>
        <div className={styles.actionBlock}>
            <Link to={"/products"} className={styles.menuButton}>
                <MenuIcon className={styles.menuButtonIcon}></MenuIcon>
                Categories
            </Link>
            <div className={styles.searchBarBlock}>
                <input type="text" placeholder='Find products...' className = {styles.searchInput}/>
                <SearchIcon className={styles.searchIcon}></SearchIcon>
            </div>
            <Link to={'#cart'} className={styles.menuButton}>
                <MenuIcon className={styles.menuButtonIcon}></MenuIcon>
                Cart
            </Link>
        </div>
        <div className={styles.profileBlock}>
            <p>Username</p>
            <img src={defaultAvatarImage} alt="Avatar" />
        </div>
    </header>
}
