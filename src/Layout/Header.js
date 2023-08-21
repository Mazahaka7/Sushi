import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import styles from "./Header.module.css"
import image from "../assets/sushi.jpg"

const Header = (props) => {
    return (
        <React.Fragment>
        <header className={styles.header}>
            <h1>Sushi Bar</h1>
                <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={styles['main-image']}>
            <img src={image} alt="main sushi" />
        </div>
    </React.Fragment>
    )
}
export default Header;