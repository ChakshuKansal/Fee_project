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
        name: "Stacy Shoulder Bag",
        image: "https://miraggiolife.com/cdn/shop/products/Miraggio5212_3fd16856-02d8-450f-985f-9bd89a61665e.jpg?v=1676369976&width=1080",
        price: "MRP : ₹ 1399.00",
        details:'Effortlessly elegant and quilted - this bag will add a touch of sophistication to your outfits. ',
        story:"Effortlessly elegant and quilted - this bag will add a touch of sophistication to your outfits. Plus points for the luxurious gold chain strap and front flap closure. Match it with a well-fit dress for a trendy but polished look. Keep things simple and take this gem to your next formal event.",
        features:["Faux Leather","Genuine leather","2 Compartments, 2 Interior Zip Pockets","Crossbody Drop: 56cm"],
    },
    {
        id: 16,
        name: "Betty Shoulder Bag",
        image: "https://miraggiolife.com/cdn/shop/files/6_5f0bc795-78e5-4f5e-8fa0-7a74ecd018f5.jpg?v=1709881947&width=1080",
        price: "MRP : ₹ 1899.00",
        details:"Style takes the weight off your shoulders! Take your pick from our trendy range of handbags for women,",
        story:"Prepare to turn heads wherever you go with the 'oh-so-chic' Betty Shoulder bag.",
        features:["Material: Faux Leather","4 card slots","1 Slip Pocket","Hook-and-loop closure"],
    },
    {
        id: 17,
        name:"Daisy Shoulder Bag",
        image: "https://miraggiolife.com/cdn/shop/products/DSC08887copy_674317d5-3598-4c68-8e97-d2dab73e0450.jpg?v=1642397927&width=1080",
        price: "MRP : ₹ 1399.00",
        details:"Sleek design and smooth texture in an aesthetic shade being a sophisticated feel to the Daisy Shoulder Bag while the handle makes it versatile.",
        story:"Sleek design and smooth texture in an aesthetic shade being a sophisticated feel to the Daisy Shoulder Bag while the handle makes it versatile. A perfect companion for picnics, travel or shopping, the Daisy bag is ideal for your every mood. Available in croc texture.",
        features:["1 Slit pocket","Genuine leather","Depth - 8 cm","Height - 22 cm"],
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
        </div>`;
        let keys=value.id;
        newDiv.addEventListener("click", function () {
            window.open("wom-accessproductpage.html?index=" + keys, "_blank");
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
        </div>`;    
        let keys=(value.id);
        newDiv.addEventListener("click", function () {
            window.open("wom-accessproductpage.html?index=" + keys, "_blank");
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
        </div>`;    
        let keys=value.id;
        newDiv.addEventListener("click", function () {
            window.open("wom-accessproductpage.html?index=" + keys, "_blank");
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
        </div>`;    
        let keys=value.id;
        newDiv.addEventListener("click", function () {
            window.open("wom-accessproductpage.html?index=" + keys, "_blank");
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
        </div>`;   
        let keys=value.id;
        newDiv.addEventListener("click", function () {
            window.open("wom-accessproductpage.html?index=" + keys, "_blank");
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
        </div>`;    
        let keys=value.id;
        newDiv.addEventListener("click", function () {
            window.open("wom-accessproductpage.html?index=" + keys, "_blank");
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
        </div>`;    
        let keys=value.id;
        newDiv.addEventListener("click", function () {
            window.open("wom-accessproductpage.html?index=" + keys, "_blank");
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
        </div>`;    
        let keys=value.id;
        newDiv.addEventListener("click", function () {
            window.open("wom-accessproductpage.html?index=" + keys, "_blank");
        });         
        list8.appendChild(newDiv);
    })
 
}
initApp();