'use strict'

import { dogSpawner } from "./dogApi.js"

const createImg = (imageLink) => {
    const img = document.createElement('img')
    img.src = imageLink
    
    return img
}

const showDogs = async () => {
    const dogs = document.getElementById('dog-show')

    const images = await dogSpawner()
    const tagImg = createImg(images)

    dogs.replaceChildren(tagImg)
}

document.getElementById('generator').addEventListener('click', showDogs)