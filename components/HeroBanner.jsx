import React, { useState } from 'react';
import Link from 'next/link';
import Popup from 'reactjs-popup'
import { BsTelegram, BsDiscord, BsWhatsapp } from 'react-icons/bs'
import { SlSocialVkontakte } from 'react-icons/sl'

import { urlFor } from '@/lib/client';

const HeroBanner = ({ heroBanner }) => {
  const [open, setOpen] = useState(false)
  const closeModal = () => setOpen(false)

  return (
      <div className='hero-banner-container'>
        <img
            src={urlFor(heroBanner.image)}
            alt='zxcum'
            className='hero-banner-image'
        />
        <div>
          <p className=''>{heroBanner.smallText}</p>

          <h3>{heroBanner.midText}</h3>
          <h1>{heroBanner.largeText1}</h1>

          <div>
            <button
                type='button'
                className='button-send'
                onClick={() => setOpen(o => !o)}
            >
              {heroBanner.buttonText}
            </button>
            <Popup open={open} closeOnDocumentClick onClose={closeModal}>
              <div>
                <a className='btn-close' onClick={closeModal}>
                  &times;
                </a>

                <div className='modalContainer'>
                  <h1 className='header'>Напишите нам</h1>
                  <Link
                      href='http://t.me/'
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
                  <Link href='/' className='modalContent btn-vk' target='_blank'>
                    <SlSocialVkontakte /> Вконтакте
                  </Link>
                </div>
              </div>
            </Popup>
          </div>
        </div>
      </div>
  )
}

export default HeroBanner