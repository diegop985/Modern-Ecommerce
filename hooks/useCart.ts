import {create} from "zustand"
import { persist, createJSONStorage } from "zustand/middleware";
import { Product } from "@/types"
import { toast } from "react-hot-toast";
import { data } from "autoprefixer";

interface CartStore {
  items: Product[]
  itemQty: (id: string) => number;
  itemMinus: (id: string) => void;
  itemPlus: (id: string) => void;
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>((set, get) => ({
    items: [],
    itemQty: (id) => {
      const item = get().items.find(item => item.id === id)
      if (!item?.quantity) {
        return 0
      } 
      return item.quantity
    },
    itemMinus(id) {
      const updatedItems = get().items.map(item => {
        if (item.id === id) {
          const updatedQty = Math.max(item.quantity - 1, 0)
          return {...item, quantity: updatedQty}
        }
        return item
      })
      set({items: updatedItems})
    },
    itemPlus(id) {
      const updatedItems = get().items.map(item => {
        if (item.id === id) {
          const updatedQty = item.quantity + 1
          return {...item, quantity: updatedQty}
        }
        return item
      })
      set({items: updatedItems})
    },
    addItem: (data: Product) => {
      const currentItems = get().items
      const existingItems = currentItems.find(item => item.id === data.id)
      if (existingItems) {
        return toast("Item is already in cart.")
      }
      
      set({ items: [...get().items, {...data, quantity: 1}] })
      
      toast.success("Item added to cart.")

    }, 
    removeItem: (id: string) => {
      set({ items: [...get().items.filter(item => item.id !== id)] })
      toast.success("Item removed from cart.")
    },
    removeAll: () => set({items:[]})
  }), {
    name: "cartStorage",
    storage: createJSONStorage(() => localStorage)
  })
)

export default useCart;