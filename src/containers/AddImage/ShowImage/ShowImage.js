import React from 'react'
import styled from 'styled-components'

const ImageWrapper = styled.div`
    margin-top:20px;
`

export default function ShowImage({image}) {
    return (
        <ImageWrapper>
            <img src={image.image_url} alt={image.title} />
        </ImageWrapper>
    )
}
