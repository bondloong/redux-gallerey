import { ADD_IMAGE, DELETE_IMAGE } from '../actionTypes/actionTypes'

const initialState = []

const images = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_IMAGE:
            return [...state,
                {
                    id: payload.data.id,
                    image_url: payload.data.image_url,
                    title: payload.data.title,
                    date: payload.data.import_datetime
                }
            ]

        case DELETE_IMAGE:
            return [...payload]

        default:
            return state
    }
}

export default images;