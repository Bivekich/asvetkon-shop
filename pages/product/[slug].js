import React, { useState } from 'react';
import Popup from 'reactjs-popup'
import Link from 'next/link'
import { BsTelegram, BsDiscord, BsWhatsapp } from 'react-icons/bs'
import { SlSocialVkontakte } from 'react-icons/sl'

import { client, urlFor } from '@/lib/client';
import { Product, Faq } from '@/components';

const ProductDetails = ({ product, products, faqs }) => {
  const [open, setOpen] = useState(false)
  const closeModal = () => setOpen(false)
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);

  return (
      <div>
        <div className="product-detail-container">
          <div>
            <div className="image-container">
              <img src={urlFor(image && image[index])} className="product-detail-image" />
            </div>
            <div className="small-images-container">
              {image?.map((item, i) => (
                  <img
                      key={i}
                      src={urlFor(item)}
                      className={i === index ? 'small-image selected-image' : 'small-image'}
                      onMouseEnter={() => setIndex(i)}
                  />
              ))}
            </div>
          </div>

          <div className="product-detail-desc">
            <h1>{name}</h1>
            <h4>Подробности: </h4>
            <p>{details}</p>
            <p className="price">{price} ₽</p>
            <h4>
              Напишите нам, и наш оператор свяжется с Вами и оформит любой заказ
              за 5 минут
            </h4>
            <div>
              <button
                  type='button'
                  className='button-send'
                  onClick={() => setOpen(o => !o)}
              >
                Заказать
              </button>
              <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                <div>
                  <a className='btn-close' onClick={closeModal}>
                    &times;
                  </a>

                  <div className='modalContainer'>
                    <h1 className='header'>Напишите нам</h1>
                    <Link
                        href='https://t.me/asvetkon'
                        className='modalContent btn-telegram'
                        target='_blank'
                    >
                      <BsTelegram /> Telegram
                    </Link>
                    <Link
                        href='/'
                        className='modalContent btn-whatsup'
                        target='_blank'
                    >
                      <BsWhatsapp /> WhatsUp
                    </Link>
                    <Link
                        href='/'
                        className='modalContent btn-vk'
                        target='_blank'
                    >
                      <SlSocialVkontakte /> Вконтакте
                    </Link>
                  </div>
                </div>
              </Popup>
            </div>
          </div>
        </div>

        <div className="maylike-products-wrapper">
          <h2>Вам также может понравиться</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              {products.map((item) => (
                  <Product key={item._id} product={item} />
              ))}
            </div>
          </div>
        </div>

        <h3 className='faq-header'>Частые вопросы</h3>
        <Faq faqs={faqs} />

      </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`
  const productsQuery = '*[_type == "product"]'
  const faqQuery = `*[_type == "faq"]`

  const product = await client.fetch(query)
  const products = await client.fetch(productsQuery)
  const faqs = await client.fetch(faqQuery)

  return {
    props: { products, product, faqs }
  }
}

export default ProductDetails