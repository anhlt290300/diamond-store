const product__img__1 = require('../image/products/product1.jpg');
const product__img__2 = require('../image/products/product2.jpg');
const product__img__3 = require('../image/products/product3.jpg');
const product__img__4 = require('../image/products/product4.jpg');
const product__img__5 = require('../image/products/product5.jpg');
const product__img__6 = require('../image/products/product6.jpg');
const product__img__7 = require('../image/products/product7.jpg');
const product__img__9 = require('../image/products/product9.jpg');
const product__img__10 = require('../image/products/product10.jpg');
const product__img__11 = require('../image/products/product11.jpg');
const product__img__12 = require('../image/products/product12.jpg');
const product__img__13 = require('../image/products/product13.jpg');
const product__img__14 = require('../image/products/product14.jpg');

const products = [
    {
        name: 'Black canvas bag',
        display: 'back-canvas-bag',
        type: 'choker',
        price: 39.90,
        img: product__img__1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
    },
    {
        name: 'Black canvas bag',
        display: 'back-canvas-bag',
        type: 'choker',
        price: 39.90,
        img: product__img__2,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
    
    },
    {
        name: 'Black canvas bag',
        display: 'back-canvas-bag',
        type: 'choker',
        price: 39.90,
        img: product__img__3,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
    
    },
    {
        name: 'Black canvas bag',
        display: 'back-canvas-bag',
        type: 'choker',
        price: 39.90,
        img: product__img__4,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
    
    },
    {
        name: 'Black canvas bag',
        display: 'back-canvas-bag',
        type: 'choker',
        price: 39.90,
        img: product__img__5,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
    
    },
    {
        name: 'Black canvas bag',
        display: 'back-canvas-bag',
        type: 'choker',
        price: 39.90,
        img: product__img__6,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
    
    },
    {
        name: 'Black canvas bag',
        display: 'back-canvas-bag',
        type: 'choker',
        price: 39.90,
        img: product__img__7,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
    
    },
    {
        name: 'Black canvas bag',
        display: 'back-canvas-bag',
        type: 'choker',
        price: 39.90,
        img: product__img__2,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
    
    },
    {
        name: 'Black canvas bag',
        display: 'back-canvas-bag',
        type: 'choker',
        price: 39.90,
        img: product__img__9,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
    
    },
    {
        name: 'Black canvas bag',
        display: 'back-canvas-bag',
        type: 'choker',
        price: 39.90,
        img: product__img__10,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
    
    },
    {
        name: 'Black canvas bag',
        display: 'back-canvas-bag',
        type: 'choker',
        price: 39.90,
        img: product__img__11,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
    
    },
    {
        name: 'Black canvas bag',
        display: 'back-canvas-bag',
        type: 'choker',
        price: 39.90,
        img: product__img__12,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
    
    },
    {
        name: 'Black canvas bag',
        display: 'back-canvas-bag',
        type: 'choker',
        price: 39.90,
        img: product__img__13,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
    
    },
    {
        name: 'Black canvas bag',
        display: 'back-canvas-bag',
        type: 'choker',
        price: 39.90,
        img: product__img__14,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
    
    },

]

const getProducts = (count) => {
    const max = products.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return products.slice(start, start + count)
}

const getProductsByType = (name) =>  products.find(Element => Element.type ===name)

const productData = {
    getProducts,
    getProductsByType

}
export default productData
   