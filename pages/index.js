import React from 'react';

import { client } from '@/lib/client';
import {Product, FooterBanner, HeroBanner, PageLink} from '@/components';

const Home = ({ products, bannerData, pages }) => (
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
    <div className="products-heading">
      <h2>Товары</h2>
      <p>У нас есть много вариаций стекол</p>
    </div>

    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]} />

      <div className='links-container'>
          {pages?.map(pages => (
              <PageLink pages={pages} key={pages._id} />
          ))}
      </div>
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const pagesQuery = '*[_type == "pages"]';
  const pages = await client.fetch(pagesQuery);

  return {
    props: { products, bannerData, pages }
  }
}

export default Home;
