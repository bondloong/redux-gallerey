import { ADD_IMAGE, DELETE_IMAGE } from '../actionTypes/actionTypes'

export const addImage = (payload) => ({
    type: ADD_IMAGE,
    payload
})

export const deleteImage = (payload) => ({
    type: DELETE_IMAGE,
    payload
})