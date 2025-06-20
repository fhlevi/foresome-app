import Head from 'next/head'
import React from 'react'

type Props = {}


/**
 * Meta Component
 * @component
 * @category Components
 * @subcategory Abstracts
 */
function Meta({ }: Props) {
    return (
        <Head>
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
            <meta name="author" content="fhlevi" />
            <meta name="keywords" content="Foresome, Golfwithfriend" />
            <meta name="theme-color" content="#FFFFFF" />
            <meta name="description" content="Foresome" />
            <meta property="og:site_name" content="Foresome" />
            <meta property="og:description" content="Foresome" />
            <meta property="og:type" content="website" />
        </Head>
    )
}

export default Meta