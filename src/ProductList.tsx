import { Product } from "./Product"

export function ProductList() {
    const data = [
            {title: "Product 1", price: 950}, // 0
            {title: "Product 2", price: 850}, // 1
            {title: "Product 3", price: 6750}, // 2
            {title: "Product 4", price: 5503},
            {title: "Product 5", price: 520},
            {title: "Product 6", price: 150},
        ]
    return <div>
        {/*
         * 3. ЧТО ДЕЛАЕТ `.map()`?
			 *    - Он проходит по КАЖДОМУ элементу исходного массива (сначала "Sergey", потом "Andrey" и т.д.).
			 *    - Для каждого элемента он вызывает функцию, которую мы ему передали (callback-функцию).
			 *    - Он собирает все, что ВЕРНУЛА эта функция на каждой итерации, в НОВЫЙ МАССИВ.
             */}
        {data.map( (product) => {
            return <Product 
                title={product.title} 
                price={product.price}
                // НЕ передаем в key ИНДЕКСЫ МАССИВОВ
                key={product.title}
            ></Product>
        })}
    </div>
}