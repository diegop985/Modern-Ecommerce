import getBillboard from '@/actions/GetBillboard';
import getProducts from '@/actions/GetProducts';
import Billboard from '@/components/Billboard';
import ProductList from '@/components/ProductList';
import Container from '@/components/ui/Container';

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });

  const billboard = await getBillboard('a526ae24-1dd7-4c24-be90-6b08526521e8');

  return (
    <>
      <Container>
        <div className='space-y-10 pb-10'>
          <Billboard data={billboard} />
          <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
            <ProductList
              title='Featured Product'
              items={products}
            />
          </div>
        </div>
      </Container>
    </>
  );
};
export default HomePage;
