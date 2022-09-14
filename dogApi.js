'use strict'

const dogSpawner = async () => {
    const url = `https://dog.ceo/api/breeds/image/random`
    const response = await fetch(url)

    const dogList = await response.json()
    return dogList.message
}

export {
    dogSpawner
}