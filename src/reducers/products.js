var initState = [
    {
        id: 1,
        name: 'Iphone 7 plus',
        image: 'https://bachlongmobile.com/media/catalog/product/cache/1/image/040ec09b1e35df139433887a97daa66f/2/_/2_45.jpg',
        description: 'sản phẩm của apple sản xuất rất đẹp',
        price: 600,
        inventory: 10
    },
    {
        id: 2,
        name: 'Samsung gallaxy s7',
        image: 'https://bachlongmobile.com/media/catalog/product/cache/1/image/040ec09b1e35df139433887a97daa66f/7/1/710h5rwyi0l._sx679_.jpg',
        description: 'sản phẩm của apple sản xuất rất đẹp',
        price: 500,
        inventory: 15
    },
    {
        id: 3,
        name: 'Nokia N10',
        image: 'https://bachlongmobile.com/media/catalog/product/cache/1/image/040ec09b1e35df139433887a97daa66f/n/o/nokia-2720-flip-5.jpg',
        description: 'sản phẩm của apple sản xuất rất đẹp',
        price: 650,
        inventory: 30
    }
];

const product = (state = initState, action) => {
    switch (action.type) {
        // case : 
        //     break;
        default:
            return [...state];
            break;
    }
}

export default product;