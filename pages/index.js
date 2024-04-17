import React from 'react';

import { client } from '@/lib/client';
import {Product, FooterBanner, HeroBanner, PageLink} from '@/components';

const Home = ({ products, bannerData, pages, reviewsData }) => (
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
    <div className="products-heading">
      <h2>Товары</h2>
      <p>У нас есть много вариаций стекол</p>
    </div>

    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]} reviewsData={reviewsData} />

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

  const reviewsQuery = '*[_type == "review"]'
  const reviewsData = await client.fetch(reviewsQuery)

  const pagesQuery = '*[_type == "pages"]';
  const pages = await client.fetch(pagesQuery);

  return {
    props: { products, bannerData, pages, reviewsData }
  }
}

export default Home;
