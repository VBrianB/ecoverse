import Image from "next/image";
import styles from "./page.module.css";
import Logo from '../../public/image/Ecoverse.png'
import Header from "./components/Header";
import MainContent from "./components/Header/MainContent";
import ProductSection from "./components/Header/SectionProducts";

export default function Home() {
  return (
    <div className={styles.page}>
      <header><Header/></header>
      <main className={styles.main}>
        <MainContent />
        <ProductSection />
      </main>
      <footer className={styles.footer}>
            <p className={styles.footerText}>
                &copy; 2024 Ecoverse. Todos os direitos reservados.
            </p>
        </footer>
    </div>
  );
}
