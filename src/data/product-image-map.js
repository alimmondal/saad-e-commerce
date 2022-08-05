export const PRODUCT_IMAGE_MAP = {
  "XX99 Mark II": {
    featuredImage: { source: require("../../assets/images/p1.png") },
    images: [
      { source: require("../../assets/images/p1.png") },
      { source: require("../../assets/images/p1.png") },
      { source: require("../../assets/images/p1.png") },
      { source: require("../../assets/images/p1.png") },
    ],
  },
  "XX99 Mark I": {
    featuredImage: { source: require("../../assets/images/p4.png") },
    images: [
      { source: require("../../assets/images/p1.png") },
      { source: require("../../assets/images/p1.png") },
      { source: require("../../assets/images/p1.png") },
      { source: require("../../assets/images/p1.png") },
    ]
  },
  "XX59": {
    featuredImage: { source: require("../../assets/images/p5.png") },
    images: [
      { source: require("../../assets/images/p1.png") },
      { source: require("../../assets/images/p1.png") },
      { source: require("../../assets/images/p1.png") },
      { source: require("../../assets/images/p1.png") },
    ]
  },
  "ZX9": {
    featuredImage: { source: require("../../assets/images/s2.png") },
    images: [
      { source: require("../../assets/images/p1.png") },
      { source: require("../../assets/images/p1.png") },
      { source: require("../../assets/images/p1.png") },
      { source: require("../../assets/images/p1.png") },
    ]
  },
  "ZX7": {
    featuredImage: { source: require("../../assets/images/s3.png") },
    images: [
      { source: require("../../assets/images/p1.png") },
      { source: require("../../assets/images/p1.png") },
      { source: require("../../assets/images/p1.png") },
      { source: require("../../assets/images/p1.png") },
    ]
  },
  "YX1 WIRELESS": {
    featuredImage: { source: require("../../assets/images/e2.png") },
    images: [
      { source: require("../../assets/images/p1.png") },
      { source: require("../../assets/images/p1.png") },
      { source: require("../../assets/images/p1.png") },
      { source: require("../../assets/images/p1.png") },
    ]
  },
}

export const DATA = [
  {
    id: 1,
    category: 'headphones',
    is_featured: false,
    name: 'XX99 Mark II',
    description: 'The new XX99 Mark II is the pinnacle of pristine audio,',
    featuredImage: { source: require("../../assets/images/p1.png") },
    images: [
      { source: require("../../assets/images/p1.png") },
      { source: require("../../assets/images/p1.png") },
      { source: require("../../assets/images/p1.png") },
      { source: require("../../assets/images/p1.png") },
    ],
    price: 2500,
    features: 'Featuring a genuine leather head strap and premium earcups, these',
    includedItems: [
      {amount: 1, name: 'Headphone Unit'},
      {amount: 2, name: 'Replacement Earcups'},
      {amount: 1, name: 'User Manual'},
      {amount: 1, name: '3.5mm 5m Audio Cable'},
      {amount: 1, name: 'Travel Bag'},
    ],
  },
  {
    id: 2,
    category: 'headphones',
    is_featured: false,
    name: 'XX99 Mark I',
    description: 'As the headphones all others are measured against, The new XX99 Mark I is the pinnacle of pristine audio...',
    featuredImage: { source: require("../../assets/images/p4.png") },
    images: [
      { source: require("../../assets/images/p5.png") },
      { source: require("../../assets/images/p4.png") },
      { source: require("../../assets/images/p3.png") },
      { source: require("../../assets/images/p1.png") },
    ],
    price: 2500,
    features: 'Featuring a genuine leather head strap and premium earcups, these',
    includedItems: [
      {amount: 1, name: 'Headphone Unit'},
      {amount: 2, name: 'Replacement Earcups'},
      {amount: 1, name: 'User Manual'},
      {amount: 1, name: '3.5mm 5m Audio Cable'},
      {amount: 1, name: 'Travel Bag'},
    ],
  },
  {
    id: 3,
    category: 'headphones',
    is_featured: false,
    name: 'XX59',
    description: 'Enjoy your audio almost anywhere it to your specific. The new XX99 Mark II is the pinnacle of pristine audio,',
    featuredImage: { source: require("../../assets/images/p5.png") },
    images: [
      { source: require("../../assets/images/p3.png") },
      { source: require("../../assets/images/p4.png") },
      { source: require("../../assets/images/p5.png") },
      { source: require("../../assets/images/p1.png") },
    ],
    price: 2500,
    features: 'Featuring a genuine leather head strap and premium earcups, these',
    includedItems: [
      {amount: 1, name: 'Headphone Unit'},
      {amount: 2, name: 'Replacement Earcups'},
      {amount: 1, name: 'User Manual'},
      {amount: 1, name: '3.5mm 5m Audio Cable'},
    ],
  },
  {
    id: 4,
    category: 'speakers',
    is_featured: false,
    name: 'ZX9',
    description: 'Connect via Bluetooth or nearly any wired source this speaker features.',
    featuredImage: { source: require("../../assets/images/s2.png") },
    images: [
      { source: require("../../assets/images/p1.png") },
      { source: require("../../assets/images/p1.png") },
      { source: require("../../assets/images/p1.png") },
      { source: require("../../assets/images/p1.png") },
    ],
    price: 4500,
    features: 'Reap the advantage of a flat diaphragm tweeter cone. this provide...',
    includedItems: [
      {amount: 1, name: 'Speaker Unit'},
      {amount: 2, name: 'Speaker Cloth Panel'},
      {amount: 1, name: 'User Manual'},
      {amount: 1, name: '3.5mm 7.5m Audio Cable'},
      {amount: 1, name: '10 Optical Cable'},
    ],
  },
  {
    id: 5,
    category: 'speakers',
    is_featured: false,
    name: 'ZX7',
    description: 'Connect via Bluetooth or nearly any wired source this speaker features.',
    featuredImage: { source: require("../../assets/images/s3.png") },
    images: [
      { source: require("../../assets/images/s3.png") },
      { source: require("../../assets/images/s3.png") },
      { source: require("../../assets/images/s3.png") },
    ],
    price: 5500,
    features: 'Reap the advantage of a flat diaphragm tweeter cone. this provide...',
    includedItems: [
      {amount: 1, name: 'Speaker Unit'},
      {amount: 2, name: 'Speaker Cloth Panel'},
      {amount: 1, name: 'User Manual'},
      {amount: 1, name: '3.5mm 7.5m Audio Cable'},
      {amount: 1, name: '7.5 Optical Cable'},
    ],
  },
  {
    id: 6,
    category: 'earphones',
    is_featured: false,
    name: 'XY1 WIRELESS',
    description: 'The new XX99 Mark II is the pinnacle of pristine audio,',
    featuredImage: { source: require("../../assets/images/e2.png") },
    images: [
      { source: require("../../assets/images/p1.png") },
      { source: require("../../assets/images/p3.png") },
      { source: require("../../assets/images/p4.png") },
      { source: require("../../assets/images/p5.png") },
    ],
    price: 2500,
    features: 'Featuring a genuine leather head strap and premium earcups, these',
    includedItems: [
      {amount: 1, name: 'Headphone Unit'},
      {amount: 2, name: 'Replacement Earcups'},
      {amount: 1, name: 'User Manual'},
      {amount: 1, name: '3.5mm 5m Audio Cable'},
      {amount: 1, name: 'Travel Bag'},
    ],
  },
]