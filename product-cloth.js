let list1 = document.getElementById('sneakers');
let list2 = document.getElementById('running');
let list3 = document.getElementById('walking');
let list4 = document.getElementById('training');
let list5 = document.getElementById('slipons');
let list6 = document.getElementById('sandals');
let list7 = document.getElementById('badminton');

let products = [
    {
        id: 0,
        name: 'Blktop Rider Preppy Unisex Sneakers',
        image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_550,h_550/global/395875/04/sv01/fnd/IND/fmt/png/Blktop-Rider-Preppy-Unisex-Sneakers',
        price: "MRP ₹ 6999"
    },
    {
        id: 1,
        name: "PUMA-180 STAPLE Unisex Sneakers",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/396309/03/sv01/fnd/IND/fmt/png/PUMA-180-STAPLE-Unisex-Sneakers",
        price: "MRP ₹ 4999"
    },
    {
        id: 2,
        name: 'Blktop Rider Preppy Unisex Sneakers',
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/395875/02/sv01/fnd/IND/fmt/png/Blktop-Rider-Preppy-Unisex-Sneakers",
        price: "MRP ₹ 6999"
    },
    {
        id: 3,
        name: 'Exotek NITRO™ Energy Unisex Sneakers',
        image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/396425/01/sv01/fnd/IND/fmt/png/Exotek-NITRO%E2%84%A2-Energy-Unisex-Sneakers',
        price: "MRP ₹ 3999"
    },
    {
        id: 4,
        name: 'Road Rider Suede Unisex Sneakers',
        image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/397377/11/sv01/fnd/IND/fmt/png/Road-Rider-Suede-Unisex-Sneakers',
        price: "MRP ₹ 3999"
    },
    {
        id: 5,
        name: 'Exotek NITRO™ Energy Unisex Sneakers',
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/396425/02/sv01/fnd/IND/fmt/png/Exotek-NITRO%E2%84%A2-Energy-Unisex-Sneakers",
        price: "MRP ₹ 3999"
    },
]; 
let productsrunning = [
    {
        id: 6,
        name: "SOFTRIDE Pro Metachrome Women's Running Shoes",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/379581/02/sv01/fnd/IND/fmt/png/SOFTRIDE-Pro-Metachrome-Women's-Running-Shoes",
        price: "MRP ₹ 2999"
    },
    {
        id: 7,
        name: "X-Cell Lightspeed Women's Running Shoes",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/309993/02/sv01/fnd/IND/fmt/png/X-Cell-Lightspeed-Women's-Running-Shoes",
        price: "MRP ₹ 1999"
    },
    {
        id: 8,
        name: "Velocity NITRO™ 2 GORE-TEX® Women's Trail Running Shoes",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/377508/04/sv01/fnd/IND/fmt/png/Velocity-NITRO%E2%84%A2-2-GORE-TEX%C2%AE-Women's-Trail-Running-Shoes",
        price: "MRP ₹ 1599"
    },
]; 
let productswalking = [
    {
        id: 9,
        name: "SOFTRIDE Pro Coast Unisex Shoes",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/307684/01/sv01/fnd/IND/fmt/png/Fast-Trac-NITRO%E2%84%A2-2-Men's-Running-Shoes",
        price: "MRP ₹ 2999"
    },
    {
        id: 10,
        name: "X-Cell Lightspeed Women's Running Shoes",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/309993/03/sv01/fnd/IND/fmt/png/X-Cell-Lightspeed-Women's-Running-Shoes",
        price: "MRP ₹ 1999"
    },
    {
        id: 11,
        name: "All-Pro NITRO™ Unisex Shoes",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/377745/01/sv01/fnd/IND/fmt/png/Voyage-NITRO%E2%84%A2-3-Men's-Running-Shoes",
        price: "MRP ₹ 2999"
    },
]; 
let productstrain = [
    {
        id: 12,
        name: "PWR NITRO™ SQD Women's Training Shoes",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/378688/01/sv01/fnd/IND/fmt/png/PWR-NITRO%E2%84%A2-SQD-Women's-Training-Shoes",
        price: "MRP ₹ 2999"
    },
    {
        id: 13,
        name: "Nike MC Trainer 2",
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/991eed2c-172e-49fb-99bf-4fa02d16345a/mc-trainer-2-workout-shoes-VBkfbg.png",
        price: "MRP ₹ 1999"
    },
    {
        id: 14,
        name: "Nike Metcon 9 EasyOn",
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bbe8ac18-c6b6-4288-8cdd-5e6c03937cae/metcon-9-easyon-workout-shoes-zTjxJZ.png",
        price: "MRP ₹ 1599"
    },
]; 
let productsslipons = [
    {
        id: 15,
        name: "Better Foam Prowl Slip Molt Metal Women's Trainers",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/378754/01/sv01/fnd/IND/fmt/png/Better-Foam-Prowl-Slip-Molt-Metal-Women's-Trainers",
        price: "MRP ₹ 1399"
    },
    {
        id: 16,
        name: "Softride Sophia 2 Women's Slip-On Shoes",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/378787/08/sv01/fnd/IND/fmt/png/Softride-Sophia-2-Women's-Slip-On-Shoes",
        price: "MRP ₹ 1999"
    },
    {
        id: 17,
        name: "Nike Flyknit Haven",
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/75a43aae-657f-488f-896a-48d567b39a70/flyknit-haven-shoes-Rl3vMk.png",
        price: "MRP ₹ 1599"
    },
]; 
let productssandals = [
    {
        id: 18,
        name: "Nike Calm",
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b985f95b-ddd3-4339-ad1d-3c740dbf6cbe/calm-mules-Pg5G3Z.png",
        price: "MRP ₹ 1399"
    },
    {
        id: 19,
        name: "BMW M Motorsport Leadcat 2.0 Graphic Men's Slides",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/308053/01/sv01/fnd/IND/fmt/png/BMW-M-Motorsport-Leadcat-2.0-Graphic-Men's-Slides",
        price: "MRP ₹ 1299"
    },
    {
        id: 20,
        name: "Nike Calm",
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c4dc7797-3dd0-46a7-a096-ca8674e45801/calm-flip-flops-n6vxnB.png",
        price: "MRP ₹ 1199"
    },
]; 
let productsbadminton = [
    {
        id: 21,
        name: "Badminton Smash Sprint Unisex Indoor Sports Shoes",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/108127/04/sv01/fnd/IND/fmt/png/Badminton-Smash-Sprint-Unisex-Indoor-Sports-Shoes",
        price: "MRP ₹ 1699"
    },
    {
        id: 22,
        name: "Solarflash II Unisex Indoor Sports Shoes",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/106882/06/sv01/fnd/IND/fmt/png/Solarflash-II-Unisex-Indoor-Sports-Shoes",
        price: "MRP ₹ 1699"
    },
    {
        id: 23,
        name: "Pressing III Unisex Indoor Court Shoes",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/106934/05/sv01/fnd/IND/fmt/png/Pressing-III-Unisex-Indoor-Court-Shoes",
        price: "MRP ₹ 1599"
    },
]; 


function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <div class="shoecard">
        <div class="imageholder-1" style="background-image: url('${value.image}');"></div>
            <div class="price-cont">
                <h1>${value.name}</h1>
                ${value.price.toLocaleString()}
            </div>    
            <button onclick="addToCard(${key})">Add To Card</button>
            
        </div>`;
        let keys=value.id;
        newDiv.addEventListener("click", function () {
            window.open("product.html?index=" +keys, "_blank");
        });         
        list1.appendChild(newDiv);
    })
    productsrunning.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <div class="shoecard">
        <div class="imageholder-1" style='background-image: url("${value.image}");'></div>
            <div class="price-cont">
                <h1>${value.name}</h1>
                <h2 class="price">${value.price.toLocaleString()}<h2>
            </div>    
            <button onclick="addToCard(${key})">Add To Card</button>
        </div>`;    
        let keys=(value.id);
        newDiv.addEventListener("click", function () {
            // Redirect to the product page passing the index
            window.open("product.html?index=" +keys, "_blank");
        });   
        list2.appendChild(newDiv);
    })
    productswalking.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <div class="shoecard">
        <div class="imageholder-1" style='background-image: url("${value.image}");'></div>
            <div class="price-cont">
                <h1>${value.name}</h1>
                ${value.price.toLocaleString()}
            </div>    
            <button onclick="addToCard(${key})">Add To Card</button>
        </div>`;    
        let keys=value.id;
        newDiv.addEventListener("click", function () {
            // Redirect to the product page passing the index
            window.open("product.html?index=" +keys, "_blank");
        });       
        list3.appendChild(newDiv);
    })
    productstrain.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <div class="shoecard">
        <div class="imageholder-1" style='background-image: url("${value.image}");'></div>
            <div class="price-cont">
                <h1>${value.name}</h1>
                ${value.price.toLocaleString()}
            </div>    
            <button onclick="addToCard(${key})">Add To Card</button>
        </div>`;    
        let keys=value.id;
        newDiv.addEventListener("click", function () {
            // Redirect to the product page passing the index
            window.open("product.html?index=" +keys, "_blank");
        });     
        list4.appendChild(newDiv);
    })
    productsslipons.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <div class="shoecard">
        <div class="imageholder-1" style='background-image: url("${value.image}");'></div>
            <div class="price-cont">
                <h1>${value.name}</h1>
                ${value.price.toLocaleString()}
            </div>    
            <button onclick="addToCard(${key})">Add To Card</button>
        </div>`;   
        let keys=value.id;
        newDiv.addEventListener("click", function () {
            // Redirect to the product page passing the index
            window.open("product.html?index=" +keys, "_blank");
        });        
        list5.appendChild(newDiv);
    })
    productssandals.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <div class="shoecard">
        <div class="imageholder-1" style='background-image: url("${value.image}");'></div>
            <div class="price-cont">
                <h1>${value.name}</h1>
                ${value.price.toLocaleString()}
            </div>    
            <button onclick="addToCard(${key})">Add To Card</button>
        </div>`;    
        let keys=value.id;
        newDiv.addEventListener("click", function () {
            // Redirect to the product page passing the index
            window.open("product.html?index=" +keys, "_blank");
        });      
        list6.appendChild(newDiv);
    })
    productsbadminton.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <div class="shoecard">
        <div class="imageholder-1" style='background-image: url("${value.image}");'></div>
            <div class="price-cont">
                <h1>${value.name}</h1>
                ${value.price.toLocaleString()}
            </div>    
            <button onclick="addToCard(${key})">Add To Card</button>
        </div>`;    
        let keys=value.id;
        newDiv.addEventListener("click", function () {
            // Redirect to the product page passing the index
            window.open("product.html?index=" +keys, "_blank");
        });         
        list7.appendChild(newDiv);
    })
}

initApp();