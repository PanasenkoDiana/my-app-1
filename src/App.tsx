// ReactNode - это тип, который React способен отобразить.
// string, number - записываются в виде текстовых узлов
// boolean, null, undefined - отображаються, но не имеют контента. 
// Объекты нельзя отобразить.

import { ProductList } from "./ProductList";

// export function App() {
//     const name = "Alex"
//     const age = 15
//     const data = [true, null, undefined, false]
//     return <div>
//         <h1>Hello world!</h1>
//         <button>Click me please</button>
//         <h1>{name}</h1>
//         <p>{age}</p>
//         {data}
//     </div>
// }
// export function App() {
//     const value: boolean = false
//     if (value) {
//         return (
//             <span>
//                 <div>
//                     <h1>Hello world!</h1>
//                     <button>Click me please</button>
//                 </div>
//                 <div>
                    
//                 </div>
//             </span>
//         )
//     }else {
//         return (
//             <div>
//                 <div>
//                     <h1>Hello world!</h1>
//                     <button>Click me please</button>
//                 </div>
//                 <div>
                    
//                 </div>
//             </div>
//         )
//     }
// }
// export function App() {
    // const data = [
    //     {title: "Product 1", price: 950},
    //     {title: "Product 2", price: 850},
    //     {title: "Product 3", price: 6750},
    //     {title: "Product 4", price: 5503},
    //     {title: "Product 5", price: 520},
    //     {title: "Product 6", price: 150},
    // ]
//     // const displayData = data.map( (product) => {
//     //             return <div>
//     //                 <h4>Title: {product.title}</h4>
//     //                 <p>Price: {product.price}</p>
//     //             </div>
//     //         })

//     return (
//         <div>
//             {data.map( (product) => {
//                 return <div>
//                     <h4>Title: {product.title}</h4>
//                     <p>Price: {product.price}</p>
//                 </div>
//             })}
//             {/* {displayData} */}
//         </div>
//     )
// }

// export function App() {
//     const isAdmin: boolean = true
//     const user = {name: 'Anton', age: 15}
//     const isLoading: boolean = true

//     // const dataToShow = isAdmin ? <div>
//     //         <h1>{user.name}</h1>
//     //     </div> : 
//     //         <h1>You have no permission to view other users</h1>
    
//     if (!isLoading) {
//         return <div>
//             <h1>Loading...</h1>
//         </div>
//     }

//     return <div>
//         <div>
//              <h1>{user.name}</h1>
//          </div>
//     </div>
// }

export function App() {
    return <div>
        <ProductList></ProductList>
    </div>
}