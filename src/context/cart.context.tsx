import { createContext, PropsWithChildren, ReactNode, useContext, useState } from "react";
import { Product } from "../shared/types";

interface CartItem extends Product {
    count: number
}
interface CartContextContract {
    items: CartItem[]
    addToCart: (item: CartItem) => void
    removeFromCart: (id: number) => void
    incrementCount: (id: number) => void;
    decrementCount: (id: number) => void;
    isInCart: (id: number) => void
}

const CartContext = createContext<CartContextContract | null>(null)

export function useCartContext() {
	const ctx = useContext(CartContext);
	if (!ctx) {
		throw new Error("CartContext is not inside the Provider component");
	}
	return ctx;
}

export function CartContextProvider({children}: PropsWithChildren) {
    const [items, setItems] = useState<CartItem[]>([])

    function removeFromCart(id: number): void {
        const newItems = items.filter(item => {
            return item.id !== id
        })
        setItems(newItems)
    }
    function addToCart(item: CartItem) {
		const isInCart = items.findIndex((cartItem) => cartItem.id === item.id);

		if (isInCart !== -1) {
			const itemInCart = items.at(isInCart);
			if (!itemInCart) return;
			incrementCount(itemInCart.id);
		} else {
			const newItems = [...items, item];
			setItems(newItems);
		}
	}

    function incrementCount(id: number) {
		const newItems = items.map((item) => {
			if (item.id === id) {
				return { ...item, count: item.count + 1 };
			}
			return item;
		});
		setItems(newItems);
	}

    function decrementCount(id: number) {
        const item = items.find( item => item.id === id)
        if (item && item.count - 1 === 0 ) {
            removeFromCart(id)
            return
        }
		const newItems = items.map((item) => {
			if (item.id === id) {
				return { ...item, count: item.count - 1 };
			}
			return item;
		});
		setItems(newItems);
	}

    function isInCart(id: number): boolean{
        return false
    }

    return <CartContext value={{
        items,
        removeFromCart,
        addToCart,
        incrementCount,
        decrementCount,
        isInCart
    }}>{children}</CartContext>
}
