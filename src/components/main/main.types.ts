import { ReactNode } from "react";

// children - специальный проп(props), который позволяет отобразить контент
// который мы передаем, при использовании компонента, между открывающем и
// закрывающем теге
// Тип для children - ReactNode
export interface MainProps {
    children?: ReactNode
}
