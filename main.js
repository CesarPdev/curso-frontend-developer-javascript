const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

navEmail.addEventListener('click', toggleDesktopMenu);
menu.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleProductDetail);

function toggleDesktopMenu() {
    const isProductDetailOpen = !productDetail.classList.contains('inactive');
    if(isProductDetailOpen) {
        productDetail.classList.add('inactive');
    };
    desktopMenu.classList.toggle('inactive');
};
function toggleMobileMenu() {
    const isProductDetailOpen = !productDetail.classList.contains('inactive');
    if(isProductDetailOpen) {
        productDetail.classList.add('inactive');
    };
    mobileMenu.classList.toggle('inactive');
};
function toggleProductDetail() {
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
    if(isMobileMenuOpen) {
        mobileMenu.classList.add('inactive');
    };
    if(isDesktopMenuOpen) {
        desktopMenu.classList.add('inactive');
    };
    productDetail.classList.toggle('inactive');
};

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Basket ball',
    price: 30,
    image: 'https://images.pexels.com/photos/1192043/pexels-photo-1192043.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'Guitar',
    price: 240,
    image: 'https://images.pexels.com/photos/92069/pexels-photo-92069.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'Basket',
    price: 20,
    image: 'https://images.pexels.com/photos/3735162/pexels-photo-3735162.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'Boots',
    price: 15,
    image: 'https://images.pexels.com/photos/712883/pexels-photo-712883.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'Bag',
    price: 10,
    image: 'https://images.pexels.com/photos/15172875/pexels-photo-15172875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Paddle',
    price: 40,
    image: 'https://images.pexels.com/photos/1103829/pexels-photo-1103829.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'Camera',
    price: 60,
    image: 'https://images.pexels.com/photos/14866049/pexels-photo-14866049.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'Garden table',
    price: 50,
    image: 'https://images.pexels.com/photos/6638808/pexels-photo-6638808.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
});
productList.push({
    name: 'Chairs',
    price: 15,
    image: 'https://images.pexels.com/photos/6638806/pexels-photo-6638806.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
});
productList.push({
    name: 'Teddy bear',
    price: 20,
    image: 'https://images.pexels.com/photos/1029208/pexels-photo-1029208.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'Umbrella',
    price: 12,
    image: 'https://images.pexels.com/photos/1715161/pexels-photo-1715161.jpeg?auto=compress&cs=tinysrgb&w=600',
});

function renderProducts(arr) {
    for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    
    const productInfoDiv = document.createElement('div');
    
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;   
    const productName = document.createElement('p');
    productName.innerText = product.name;
    
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
    }
};

renderProducts(productList);