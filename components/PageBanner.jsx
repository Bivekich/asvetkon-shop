import React from 'react'
import { urlFor } from '@/lib/client'

const PageBanner = ({ pages: { name, image } }) => {
    return (
        <div className='hero-banner-container'>
            <img
                src={urlFor(image)}
                alt='Page banner'
                className='hero-banner-image'
            />
            <div>
                <h1>{name}</h1>
            </div>
        </div>
    )
}

export default PageBanner
