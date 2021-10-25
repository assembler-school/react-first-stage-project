import React from 'react'

const GiftCard = (props) => {
const {gif} = props

  return (
    <div>
    <img src={gif.images.fixed_height.webp} alt="gif" />
    <p>{gif.title}</p>
    </div>
  )
}

export default GiftCard
