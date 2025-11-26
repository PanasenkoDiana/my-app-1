import { ProductList } from "./ProductList";
import styles from './app.module.css'

export function App() {
    return <div className={styles.block}>
        <ProductList></ProductList>
    </div>
}