import { ProductList } from "./components/product-list/ProductList";
import styles from "./app.module.css";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";

export function App() {
  return (
    <div className={styles.block}>
        <Header></Header>

        <Main>
            <ProductList></ProductList>
        </Main>

        <Footer></Footer>


    </div>
  );
}