import Image from "next/image";
import styles from "./page.module.css";
import Logo from '../../public/image/Ecoverse.png'
import Header from "./components/Header";
import MainContent from "./components/Header/MainContent";

export default function Home() {
  return (
    <div className={styles.page}>
      <header><Header/></header>
      <main className={styles.main}>
        <MainContent />
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
