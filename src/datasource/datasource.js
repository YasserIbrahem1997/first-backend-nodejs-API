const data = [
    {
        "name": 'Smartphone X',
        "price": 599.99,
        "discountPrice" : null,
        // description: 'A powerful and sleek smartphone with amazing features.',
        "imageUrl": 'via.placeholder.com/300',
        "isFavorite" : false,
        "shops" : [
            {
                "name" : " Iphone X",
                "imageUrl": 'via.placeholder.com/300',
                "price": 599.99,
            },
            {
                "name" : " Iphone XMax",
                "imageUrl": 'via.placeholder.com/310',
                "price": 600.99,
            }
        ]
    },
    {
        "name": 'Smartwatch pro',
        "price": 599.99,
        "discountPrice" : null,
        // description: 'A powerful and sleek smartphone with amazing features.',
        "imageUrl": 'via.placeholder.com/300',
        "isFavorite" : false,
        "shops" : [
            {
                "name" : " watch X",
                "imageUrl": 'via.placeholder.com/300',
                "price": 599.99,
            },
            {
                "name" : " watch  XMax",
                "imageUrl": 'via.placeholder.com/310',
                "price": 600.99,
            }
        ]
    },
    {
        "name": 'SmartApple X',
        "price": 599.99,
        "discountPrice" : null,
        // description: 'A powerful and sleek smartphone with amazing features.',
        "imageUrl": 'via.placeholder.com/300',
        "isFavorite" : false,
        "shops" : [
            {
                "name" : " Aplle X",
                "imageUrl": 'via.placeholder.com/300',
                "price": 599.99,
            },
            {
                "name" : " Aplle XMax",
                "imageUrl": 'via.placeholder.com/310',
                "price": 600.99,
            }
        ]
    },
  
];


const ds = {
     fetchProduct : () => {
        return data.map((p) => {
            const product = Object.assign({},p);
            delete product.shops;
            return product;
        })
    }
};

module.exports = ds;
