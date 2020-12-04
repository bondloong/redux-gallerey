import React, {useState, useEffect} from 'react'
import { connect, useDispatch  } from 'react-redux'
import styled from 'styled-components'

import { addImage } from '../../redux/actions/actions'
import ShowImage from './ShowImage/ShowImage'

const ImageWrapper = styled.div`

`

export const AddImage = () => {
    const dispatch = useDispatch()
    const [active, setActive] = useState()

    const loadImage = () =>{
        fetch('https://api.giphy.com/v1/gifs/random?api_key=gR30u9O8KPOanwIQupHbD90d4k57EOeY ')
          .then(response => {
            if (!response.ok) { throw response }
            return response.json()
            })
          .then(json => {
              dispatch(addImage(json))
              setActive()
              setActive(json)
            })
           .catch(err => console.log(err))
    }

    useEffect(() => {
        loadImage()
      }, []);

    return (
        <div>
            <button onClick={() => loadImage()}>Загрузить изображение</button>
            {
                active?<ShowImage image={active.data}/>:""
            }
        </div>
    )
}

export default connect()(AddImage)
