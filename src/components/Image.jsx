import React from 'react'

const Image = ({image}) => {
  return (
    <div className='image'>
        <p>{image.title}</p>
        {/* <p>{image.title.length > 20 ? image.title.slice(0, 10) + '...' : image.title}</p> */}
        <img src={image.images[0]} alt={image.title} />
        <p>Price: ${image.price}</p>
        <p className='category'>Category: {image.category}</p>
    </div>
  )
}

export default Image