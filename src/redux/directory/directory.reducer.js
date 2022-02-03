const INITIAL_STATE = {
  sections: [{
    title: 'hats',
    imageUrl: 'https://i.ibb.co/zPWRRX9/hats.jpg',
    id: 1,
    linkUrl: 'shop/hats'
  },
  {
    title: 'jackets',
    imageUrl: 'https://i.ibb.co/5h37dJD/jackets.jpg',
    id: 2,
    linkUrl: 'shop/jackets'
  },
  {
    title: 'sneakers',
    imageUrl: 'https://i.ibb.co/Lpb874Q/sneaker.jpg',
    id: 3,
    linkUrl: 'shop/sneakers'
  },
  {
    title: 'womens',
    imageUrl: 'https://i.ibb.co/dpw4Cth/women.jpg',
    size: 'large',
    id: 4,
    linkUrl: 'shop/womens'
  },
  {
    title: 'mens',
    imageUrl: 'https://i.ibb.co/M5yNT2r/men.jpg',
    size: 'large',
    id: 5,
    linkUrl: 'shop/mens'
  }]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default directoryReducer