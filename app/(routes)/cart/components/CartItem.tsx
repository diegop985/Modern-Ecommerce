import Currency from '@/components/ui/Currency';
import IconButton from '@/components/ui/IconButton';
import useCart from '@/hooks/useCart';
import { Product } from '@/types';
import { Minus, Plus, Trash, X } from 'lucide-react';
import Image from 'next/image';
import { MouseEventHandler } from 'react';

interface CartItemProps {
  data: Product;
}

const CartItem = ({ data }: CartItemProps) => {
  const cart = useCart();

  const onRemoveItem: MouseEventHandler<HTMLButtonElement> = (event) => {
    cart.removeItem(data.id);
  };

  const onDecreaseQty: MouseEventHandler<HTMLButtonElement> = (event) => {
    cart.itemMinus(data.id);
  };

  const onIncreaseQty: MouseEventHandler<HTMLButtonElement> = (event) => {
    cart.itemPlus(data.id);
  };

  return (
    <>
      <li className='flex py-6 border-b'>
        <div className='relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48'>
          <Image
            alt='Image'
            src={data.images[0].url}
            fill
            className='object-cover object-center'
          />
        </div>
        <div className='relative ml-4 flex flex-1 flex-col justify-between sm:ml-6'>
          <div className='absolute z-10 right-0 top-0'>
            <IconButton
              onClick={onRemoveItem}
              icon={<X size={15} />}
            />
          </div>
          <div className='relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0'>
            <div className='flex justify-between '>
              <p className='text-lg font-semibold text-black'>{data.name}</p>
            </div>

            <div className='mt-1 flex text-sm'>
              <div className='h-max flex '>
                <p className='font-semibold text-gray-500'>{data.color.name}</p>
                <p className='font-semibold text-gray-500 ml-4 border-l border-gray-200 pl-2 lg:pl-4'>
                  {data.size.name}
                </p>
              </div>
            </div>
            <Currency value={data.price} />
          </div>
          <div className='flex items-center gap-x-2 xs:ml-6 sd:ml-0 mb-1'>
            {data.quantity === 1 ? (
              <IconButton
                onClick={onRemoveItem}
                icon={<Trash size={10} />}
              />
            ) : (
              <IconButton
                onClick={onDecreaseQty}
                icon={<Minus size={10} />}
              />
            )}

            <span>{cart.itemQty(data.id)}</span>
            <IconButton
              onClick={onIncreaseQty}
              icon={<Plus size={10} />}
            />
          </div>
        </div>
      </li>
    </>
  );
};
export default CartItem;
