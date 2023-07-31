import Head from 'next/head'
import React from 'react'

type Props = {
    content?: string
}


/**
 * Title Component
 * @component
 * @category Components
 * @subcategory Abstracts
 */
const Title = ({ content }: Props) => {
    const longTitle = `${content ? `${content} · ` : ''}Foresome`;

    return (
        <Head>
            <title key="title">{longTitle}</title>
            <meta key="title-meta" property="og:title" content={longTitle} />
        </Head>
    )
}

export default Title