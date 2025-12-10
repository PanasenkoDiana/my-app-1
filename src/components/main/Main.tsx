// children - специальный проп(props), который позволяет отобразить контент
// который мы передаем, при использовании компонента, между открывающем и
// закрывающем теге
// Тип для children - ReactNode

import { ReactNode } from "react"
import styles from './main.module.css'

interface MainProps {
    children?: ReactNode
}

export function Main(props: MainProps) {
    const {children} = props

    return <main className={styles.main}>
        {children}
    </main>
}