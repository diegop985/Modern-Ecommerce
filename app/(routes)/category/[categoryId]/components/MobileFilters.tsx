'use client';
import qs from 'query-string';
import { Color, Size } from '@/types';
import { useRouter, useSearchParams } from 'next/navigation';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { Dialog } from '@headlessui/react';
import IconButton from '@/components/ui/IconButton';
import Filter from './Filter';

interface MobileFiltersProps {
  sizes: Size[];
  colors: Color[];
}

const MobileFilters = ({ sizes, colors }: MobileFiltersProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <>
      <Button
        className='flex items-center gap-x-2 lg:hidden'
        onClick={onOpen}
      >
        Filters
        <Plus size={20} />
      </Button>

      <Dialog
        open={isOpen}
        as='div'
        className={'relative z-40 lg:hidden'}
        onClose={onClose}
      >
        <div
          className='fixed inset-0 bg-black bg-opacity-25'
          onClick={onClose}
        />
        <div className='fixed inset-0 z-40 flex'>
          <Dialog.Panel
            className={
              'relative ml-auto h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl'
            }
          >
            <div
              className='flex items-center justify-end px-4'
              onClick={onClose}
            >
              <IconButton icon={<X size={15} />} />
            </div>
            <div className='p-4'>
              <Filter
                valueKey='sizeId'
                name='Sizes'
                data={sizes}
              />
              <Filter
                valueKey='colorId'
                name='Colors'
                data={colors}
              />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};
export default MobileFilters;