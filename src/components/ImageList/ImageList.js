import React from 'react'
import { connect, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { deleteImage } from '../../redux/actions/actions'

const ImageListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const ImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const FooterImage = styled.p`
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin-bottom: 30px;
`

const TitleImage = styled.h2`
    margin: 5px;
`

export const ImageList = ({images}) => {
    const dispatch = useDispatch()

    const deleteThisImage = (id) => {
        const newList = images.filter(item => item.id !== id)
        dispatch(deleteImage(newList))
        console.log(newList);
    }
    return (
        <ImageListWrapper>
            {
                images.map((image, index) => {
                    return <ImageWrapper key={index}>
                                <TitleImage>{image.title}</TitleImage>
                                <div><img src={image.image_url} alt={image.title} /></div>
                                <FooterImage>
                                    {image.date} 
                                    <button onClick={() => deleteThisImage(image.id)}>Удалить</button>
                                </FooterImage>
                            </ImageWrapper>
                })
            }
        </ImageListWrapper>
    )
}

const mapStateToProps = state => {
  return {
    images : state.images
  }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageList)
