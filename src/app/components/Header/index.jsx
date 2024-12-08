import styles from "./header.module.css";
import Image from "next/image";
import Logo from '../../../../public/image/Ecoverse.png'

const Header = () => {
    return(
        <div className={styles.containerHeader}>
            <Image className={styles.logo} src={Logo} alt="logo"/>
        </div>
    )
}

export default Header