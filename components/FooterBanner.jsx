import React from 'react'
import { useState, useEffect } from 'react'


const ReviewBanner = ({ footerBanner, reviewsData }) => {
  const [ reviews, setReviews ] = useState([])
  const [ currentReview, setCurrentReview ] = useState(null)

  useEffect(() => {
    setReviews(reviewsData)

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * reviews.length)
      setCurrentReview(reviews[randomIndex])
    }, 5000)

    return () => clearInterval(interval)
  }, [reviews.length])
  
  return (
      <div className='footer-banner-container'>
        <div className='banner-desc'>
          <div className='left'>
            <h3>{footerBanner.largeText2}</h3>
            <h3>{footerBanner.largeText3}</h3>
          </div>
          <div className='right'>
            <div className='review-slider'>
              {currentReview && (
                <div className='review-item'>
                  <p>{currentReview.author}</p>
                  <p>{currentReview.text}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
  )
}

export default ReviewBanner
