let list1 = document.getElementById('caps');
let list2 = document.getElementById('bags');
let list3 = document.getElementById('gym');
let list4 = document.getElementById('socks');
let list5 = document.getElementById('wallets');
let list6 = document.getElementById('mask');
let list7 = document.getElementById('bottle');
let list8 = document.getElementById('eye');


let products = [
    {
        id: 0,
        name: "ULTRA LIT",
        image: "https://www.urbanmonkey.com/cdn/shop/products/ultra-lit-left_1024x.jpg?v=1681194178",
        price: "MRP : ₹ 999.00"
    },
    {
        id: 1,
        name: "CLASSIC BEANIE",
        image: 'https://www.urbanmonkey.com/cdn/shop/files/URBANMONKEY17_11_232166_1024x.jpg?v=1700729881',
        price: "MRP : ₹ 795.00",
    },
    {
        id: 2,
        name: 'SUPER SUEDE',
        image: "https://www.urbanmonkey.com/cdn/shop/files/super-suede-mocha-02_1024x.jpg?v=1707736167",
        price: "MRP : ₹ 1199.00",
    },
    {
        id: 3,
        name: 'CARGO CORDUROY',
        image: 'https://www.urbanmonkey.com/cdn/shop/files/cargo-corduroy-burgundy-01_1024x.jpg?v=1707736188',
        price: "MRP : ₹ 999.00",
    },
    {
        id: 4,
        name: 'BUCKET',
        image: 'https://www.urbanmonkey.com/cdn/shop/products/bucket-hat-002-front_1024x.jpg?v=1623400067',
        price: "MRP : ₹ 1399.00",
    },
    {
        id: 5,
        name: 'SKULL',
        image: "https://www.urbanmonkey.com/cdn/shop/products/skull-left_1024x.jpg?v=1681194487",
        price: "MRP : ₹ 1299.00",
    },
]; 
let productsbags = [
    {
        id: 6,
        name: "PUMA x RIPNDIP Backpack",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/090030/01/fnd/IND/fmt/png/PUMA-x-RIPNDIP-Backpack",
        price: "MRP : ₹ 2699.00"
    },
    {
        id: 7,
        name: "CITY BACKPACK",
        image: "https://www.urbanmonkey.com/cdn/shop/files/city-backpack-black-01_1024x.jpg?v=1706936841",
        price: "MRP : ₹ 1999.00"
    },
    {
        id: 8,
        name: "SKYBAGS CRUZE X",
        image: "https://skybags.co.in/cdn/shop/files/CRUZEXLCOLLEGELAPTOPBACKPACKIRON_1080x.png?v=1701413537",
        price: "MRP : ₹ 1499.00"
    },
]; 
let productsgym = [
    {
        id: 9,
        name: "Fundamentals Unisex Sports Bag",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/091401/01/fnd/IND/fmt/png/Fundamentals-Unisex-Sports-Bag",
        price: "MRP : ₹ 1399.00"
    },
    {
        id: 10,
        name: "PUMA Buzz Unisex Backpack",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/079136/40/mod01/fnd/IND/fmt/png/PUMA-Buzz-Unisex-Backpack",
        price: "MRP : ₹ 1699.00"
    },
    {
        id: 11,
        name: "BMW M Motorsport Unisex Duffle Bag",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/090366/01/fnd/IND/fmt/png/BMW-M-Motorsport-Unisex-Duffle-Bag",
        price: "MRP : ₹ 2399.00"
    },
]; 
let productssocks = [
    {
        id: 12,
        name: "PUMA Footie Unisex Socks Pack of 3",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/940417/02/fnd/IND/fmt/png/PUMA-Footie-Unisex-Socks-Pack-of-3",
        price: "MRP : ₹ 599.00"
    },
    {
        id: 13,
        name: "PUMA Multi-Sport Unisex Quarter Socks Pack of 2",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/929665/01/dt01/fnd/IND/fmt/png/PUMA-Multi-Sport-Unisex-Quarter-Socks-Pack-of-2",
        price: "MRP : ₹ 799.00"
    },
    {
        id: 14,
        name: "Heritage Striped Unisex Short Crew Socks Pack of 3",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/687127/01/fnd/IND/fmt/png/Heritage-Striped-Unisex-Short-Crew-Socks-Pack-of-3",
        price: "MRP : ₹ 699.00"
    },
]; 
let productswallets = [

    {
        id: 15,
        name: "Black Twist Lock Graphic Satchel Bag",
        image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/ba1cef1e0de54797a22018c0157a3e45_9366/Y-3_Morphed_Crossbody_Bag_Burgundy_IN2396_01_standard.jpg",
        price: "MRP : ₹ 1399.00"
    },
    {
        id: 16,
        name: "Y-3 MORPHED CROSSBODY BAG",
        image: "https://m.media-amazon.com/images/I/51437a9B2kL._SY741_.jpg",
        price: "MRP : ₹ 1399.00"
    },
    {
        id: 17,
        name: "PUMA Leather Cruise V2 Unisex Bi-Fold Wallet",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/091061/03/fnd/IND/fmt/png/PUMA-Leather-Cruise-V2-Unisex-Bi-Fold-Wallet",
        price: "MRP : ₹ 1399.00"
    },
]; 
let productsmask = [
    {
        id: 18,
        name: "TAKE IT EASY FACE MASK",
        image: "https://www.urbanmonkey.com/cdn/shop/products/take-it-easy_1024x.jpg?v=1646914846",
        price: "MRP : ₹ 99.00"
    },
    {
        id: 19,
        name: "SURVIVOR FACE MASK",
        image: "https://www.urbanmonkey.com/cdn/shop/products/Survivorfront_1024x.jpg?v=1646914918",
        price: "MRP : ₹ 99.00"
    },
    {
        id: 20,
        name: "BEAST FACE MASK",
        image: "https://www.urbanmonkey.com/cdn/shop/products/Ranvijaybeatmodefront_1024x.jpg?v=1646915005",
        price: "MRP : ₹ 99.00"
    },
]; 
let productsbottle = [
    {
        id: 21,
        name: "PUMA Training Performance Unisex 750ml Water Bottle",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/053812/01/bv/fnd/IND/fmt/png/PUMA-Training-Performance-Unisex-750ml-Water-Bottle",
        price: "MRP : ₹ 399.00"
    },
    {
        id: 22,
        name: "Nike Recharge",
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d3650b7e-f276-4529-878f-56a457fbaafd/recharge-stainless-steel-chug-bottle-32-oz-gPLK69.png",
        price: "MRP : ₹ 699.00"
    },
    {
        id: 23,
        name: "Nike 64oz Fuel",
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2e82a073-d5c2-40e0-b534-ebf17820af66/64oz-fuel-jug-qzhqFl.png",
        price: "MRP : ₹ 999.00"
    },
]; 
let productseye = [
    {
        id: 24,
        name: "MARINE OPS",
        image: "https://www.urbanmonkey.com/cdn/shop/products/marine-ops-002-02_1024x.jpg?v=1680171602",
        price: "MRP : ₹ 1199.00"
    },
    {
        id: 25,
        name: "AIRPLANE MOD",
        image: "https://www.urbanmonkey.com/cdn/shop/products/airplane-mode-003-right-view_be58a724-abfc-48fa-b454-50e745d6c5a4_1024x.jpg?v=1682318438",
        price: "MRP : ₹ 1399.00"
    },
    {
        id: 26,
        name: "UM CLASSIC WAYFARER",
        image: "https://www.urbanmonkey.com/cdn/shop/products/um-classic-wayfarer-03-01_1024x.jpg?v=1679394164",
        price: "MRP : ₹ 1999.00"
    },
]; 



function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <div class="accesscard">
        <div class="imageholder-1" style="background-image: url('${value.image}');"></div>
            <div class="price-cont">
                <h1>${value.name}</h1>
                ${value.price.toLocaleString()}
            </div>    
            <button onclick="addToCard(${key})">Add To Card</button>
            
        </div>`;
        let keys=value.id;
        newDiv.addEventListener("click", function () {
            window.open("men-accessproductpage.html?index=" + keys, "_blank");
        });         
        list1.appendChild(newDiv);
    })
    productsbags.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <div class="accesscard">
        <div class="imageholder-1" style='background-image: url("${value.image}");'></div>
            <div class="price-cont">
                <h1>${value.name}</h1>
                <h2 class="price">${value.price.toLocaleString()}<h2>
            </div>    
            <button onclick="addToCard(${key})">Add To Card</button>
        </div>`;    
        let keys=(value.id);
        newDiv.addEventListener("click", function () {
            window.open("men-accessproductpage.html?index=" + keys, "_blank");
        });   
        list2.appendChild(newDiv);
    })
    productsgym.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <div class="accesscard">
        <div class="imageholder-1" style='background-image: url("${value.image}");'></div>
            <div class="price-cont">
                <h1>${value.name}</h1>
                ${value.price.toLocaleString()}
            </div>    
            <button onclick="addToCard(${key})">Add To Card</button>
        </div>`;    
        let keys=value.id;
        newDiv.addEventListener("click", function () {
            window.open("men-accessproductpage.html?index=" + keys, "_blank");
        });       
        list3.appendChild(newDiv);
    })
    productssocks.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <div class="accesscard">
        <div class="imageholder-1" style='background-image: url("${value.image}");'></div>
            <div class="price-cont">
                <h1>${value.name}</h1>
                ${value.price.toLocaleString()}
            </div>    
            <button onclick="addToCard(${key})">Add To Card</button>
        </div>`;    
        let keys=value.id;
        newDiv.addEventListener("click", function () {
            window.open("men-accessproductpage.html?index=" + keys, "_blank");
        });     
        list4.appendChild(newDiv);
    })
    productswallets.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <div class="accesscard">
        <div class="imageholder-1" style='background-image: url("${value.image}");'></div>
            <div class="price-cont">
                <h1>${value.name}</h1>
                ${value.price.toLocaleString()}
            </div>    
            <button onclick="addToCard(${key})">Add To Card</button>
        </div>`;   
        let keys=value.id;
        newDiv.addEventListener("click", function () {
            window.open("men-accessproductpage.html?index=" + keys, "_blank");
        });        
        list5.appendChild(newDiv);
    })
    productsmask.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <div class="accesscard">
        <div class="imageholder-1" style='background-image: url("${value.image}");'></div>
            <div class="price-cont">
                <h1>${value.name}</h1>
                ${value.price.toLocaleString()}
            </div>    
            <button onclick="addToCard(${key})">Add To Card</button>
        </div>`;    
        let keys=value.id;
        newDiv.addEventListener("click", function () {
            window.open("men-accessproductpage.html?index=" + keys, "_blank");
        });      
        list6.appendChild(newDiv);
    })
    productsbottle.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <div class="accesscard">
        <div class="imageholder-1" style='background-image: url("${value.image}");'></div>
            <div class="price-cont">
                <h1>${value.name}</h1>
                ${value.price.toLocaleString()}
            </div>    
            <button onclick="addToCard(${key})">Add To Card</button>
        </div>`;    
        let keys=value.id;
        newDiv.addEventListener("click", function () {
            window.open("men-accessproductpage.html?index=" + keys, "_blank");
        });         
        list7.appendChild(newDiv);
    })
    productseye.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <div class="accesscard">
        <div class="imageholder-1" style='background-image: url("${value.image}");'></div>
            <div class="price-cont">
                <h1>${value.name}</h1>
                ${value.price.toLocaleString()}
            </div>    
            <button onclick="addToCard(${key})">Add To Card</button>
        </div>`;    
        let keys=value.id;
        newDiv.addEventListener("click", function () {
            window.open("men-accessproductpage.html?index=" + keys, "_blank");
        });         
        list8.appendChild(newDiv);
    })
 
}
initApp();