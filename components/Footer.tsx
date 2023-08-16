const Footer = () => {
  return (
    <>
      <footer className='bg-white border-t'>
        <div className='mx-auto py-10'>
          <p className='text-center text-xs text-black'>
            &copy; 2023{' '}
            <a
              href='https://github.com/diegop985/Modern-Ecommerce'
              target='_blank'
            >
              Diego Patiño
            </a>
          </p>
          <p className='text-center text-xs text-black'>
            <a
              href='https://www.uniqlo.com/us/en/'
              target='_blank'
            >
              All producs and images indexed on this website had been taken from
              the https://www.uniqlo.com/us/en/ website in order to make this
              store follow the asthetic, style and feeling of a production
              ecommerce website.
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
