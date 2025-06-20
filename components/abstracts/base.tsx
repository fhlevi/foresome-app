import React from 'react'
import Title from './title'
import Meta from './meta'

type Props = {}


/**
 * Base Component
 * @component
 * @category Components
 * @subcategory Abstracts
 */
function Base({ }: Props) {
    return (
        <>
            <Meta />
            <Title />
        </>
    )
}

export default Base