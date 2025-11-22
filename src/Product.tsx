


// export function Product(props: {title: string, price: number}) {
//     return <div>
//         <h3>Title: {props.title}</h3>
//         <p>Price: {props.price}</p>
//     </div>
// }


// export function Product(props: ProductProps) {
//     return <div>
//         <h3>Title: {props.title}</h3>
//         <p>Price: {props.price}</p>
//     </div>
// }
// export function Product({ title, price, price1, price2, price3}: ProductProps) {
//     return <div>
//         <h3>Title: {title}</h3>
//         <p>Price: {price}</p>
//     </div>
// }
interface ProductProps {
    title: string,
    price: number,
}
export function Product(props: ProductProps) {
    const {title, price} = props
    return <div>
        <h3>Title: {title}</h3>
        <p>Price: {price}</p>
    </div>
}