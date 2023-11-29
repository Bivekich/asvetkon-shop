import React from 'react'
import { client } from '@/lib/client'
import PortableText from '@sanity/block-content-to-react'
import { PageBanner } from '@/components'

const Page = ({ pages }) => {
    const serializers = {
        types: {
            code: props => (
                <pre data-language={props.node.language}>
					<code>{props.node.code}</code>
				</pre>
            ),
        },
    }
    return (
        <div>
            <PageBanner pages={pages} />

            <div className='post-container'>
                <article className='post'>
                    <PortableText blocks={pages.text} serializers={serializers} />
                </article>
            </div>
        </div>
    )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "pages"] {
		slug {
			current
		}
	}`

    const pages = await client.fetch(query)

    const paths = pages.map(pages => ({
        params: {
            slug: pages.slug.current,
        },
    }))

    return {
        paths,
        fallback: 'blocking',
    }
}

export const getStaticProps = async ({ params: { slug } }) => {
    const pageQuery = `*[_type == "pages" && slug.current == '${slug}'][0]`

    const pages = await client.fetch(pageQuery)

    return {
        props: { pages },
    }
}

export default Page
