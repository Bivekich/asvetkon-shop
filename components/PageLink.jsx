import React from 'react'
import Link from 'next/link'

const PageLink = ({ pages }) => {
    return (
        <span className='links-item'>
			<Link href={`/page/${pages.slug.current}`} className='links-link'>
				{pages.name}
			</Link>
		</span>
    )
}

export default PageLink
