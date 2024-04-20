import React from 'react'
import Link from 'next/link'

import { AiOutlineYoutube, AiFillHeart } from 'react-icons/ai'
import { SlSocialVkontakte } from 'react-icons/sl'

const Footer = () => {
    return (
        <div className='footer-container'>
            <p>
                &copy; Made with <AiFillHeart /> by{' '}
                <Link href='https://t.me/joyfunless' target='_blank'>
                    Lev Danilov
                </Link>{' '}
            </p>
            <p>АСВЕТКОН - Любые стекла для Вас</p>
            <p className='icons'>
                <Link href='https://vk.com/asvetkon' target='_blank'>
                    <SlSocialVkontakte />
                </Link>
            </p>
        </div>
    )
}

export default Footer
