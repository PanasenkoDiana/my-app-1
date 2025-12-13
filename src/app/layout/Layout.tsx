import { Outlet } from "react-router-dom";
import styles from "./layout.module.css";
import { Footer, Header, Main } from "../../components";



export function Layout(){
    return (
        <div className = {styles.layout}>
            <Header />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </div>
    )
}