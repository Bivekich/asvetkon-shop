import React from 'react'


const ReviewBanner = ({ footerBanner }) => {
  return (
      <div className='footer-banner-container'>
        <div className='banner-desc'>
          <div className='left'>
            <h3>{footerBanner.largeText2}</h3>
            <h3>{footerBanner.largeText3}</h3>
          </div>
          <div className='right'></div>
        </div>
      </div>
  )
}

export default ReviewBanner
