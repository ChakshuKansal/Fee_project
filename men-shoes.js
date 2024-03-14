let list1 = document.getElementById('sneakers');
let list2 = document.getElementById('running');
let list3 = document.getElementById('walking');
let list4 = document.getElementById('training');
let list5 = document.getElementById('slipons');
let list6 = document.getElementById('sandals');
let list7 = document.getElementById('badminton');
let list8 = document.getElementById('cricket');
let list9 = document.getElementById('football');
let list10 = document.getElementById('basketball');

let products = [
    {
        id: 0,
        name: "Nike Air Force 1 '07",
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c20afd60-b230-4815-bfd2-6768c875f6cd/air-force-1-07-shoes-0XGfD7.png',
        price: "MRP : ₹ 6695.00"
    },
    {
        id: 1,
        name: "Nike Court Vision Low Next Nature",
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a8317dc5-7ce1-42ff-b1da-71f08ff93ad4/court-vision-low-next-nature-shoes-N2fFHb.png",
        price: "MRP : ₹ 7995.00"
    },
    {
        id: 2,
        name: 'Nike Air Max 90',
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b8eb52e0-dd39-4a2b-a130-98735dd4b278/air-max-90-shoes-0MB5rJ.png",
        price: "MRP : ₹ 5195.00"
    },
    {
        id: 3,
        name: 'Nike Air Max Excee',
        image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d078d1fa-b98e-46e5-8efa-f9e609b1e4f4/air-max-excee-shoes-xBwQhG.png',
        price: "MRP : ₹ 6605.00"
    },
    {
        id: 4,
        name: 'Nike Cortez',
        image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5b79e4c0-54cf-462e-ad5f-3bf6b2802b8e/cortez-shoes-5VXMw4.png',
        price: "MRP : ₹ 9699.00"
    },
    {
        id: 5,
        name: 'Nike Air Force 1',
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e3ae15dc-ede4-496b-bf36-fa92998eb763/air-force-1-07-shoes-kZwncs.png",
        price: "MRP : ₹ 3695.00"
    },
]; 
let productsrunning = [
    {
        id: 6,
        name: "Fast-Trac NITRO™ 2 Men's Running Shoes",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/307684/01/sv01/fnd/IND/fmt/png/Fast-Trac-NITRO%E2%84%A2-2-Men's-Running-Shoes",
        price: "MRP : ₹ 2695.00"
    },
    {
        id: 7,
        name: "Electrify NITRO™ 3 Knit Men's Running Shoes",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/379084/03/sv01/fnd/IND/fmt/png/Electrify-NITRO%E2%84%A2-3-Knit-Men's-Running-Shoes",
        price: "MRP : ₹ 1695.00"
    },
    {
        id: 8,
        name: "Voyage NITRO™ 3 Men's Running Shoes",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/377745/01/sv01/fnd/IND/fmt/png/Voyage-NITRO%E2%84%A2-3-Men's-Running-Shoes",
        price: "MRP : ₹ 2655.00"
    },
]; 
let productswalking = [
    {
        id: 9,
        name: "SOFTRIDE Pro Coast Unisex Shoes",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/377059/19/sv01/fnd/IND/fmt/png/SOFTRIDE-Pro-Coast-Unisex-Running-Shoes",
        price: "MRP : ₹ 1699.00"
    },
    {
        id: 10,
        name: "Manor Men's Sneakers",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/387364/02/sv01/fnd/IND/fmt/png/Manor-Men's-Sneakers",
        price: "MRP : ₹ 1695.00"
    },
    {
        id: 11,
        name: "All-Pro NITRO™ Unisex Shoes",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/379924/01/sv01/fnd/IND/fmt/png/All-Pro-NITRO%E2%84%A2-Unisex-Basketball-Shoes",
        price: "MRP : ₹ 6695.00"
    },
]; 
let productstrain = [
    {
        id: 12,
        name: "Fuse 2.0 Forged Men's Training Shoes",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/378818/01/sv01/fnd/IND/fmt/png/Fuse-2.0-Forged-Men's-Training-Shoes",
        price: "MRP : ₹ 7999.00"
    },
    {
        id: 13,
        name: "Fuse 2.0 Forged Men's Training Shoes",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/376151/19/sv01/fnd/IND/fmt/png/Fuse-2.0-Men's-Training-Shoes",
        price: "MRP : ₹ 11999.00"
    },
    {
        id: 14,
        name: "PWRFrame TR 2 Men's Training Shoes",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/378790/01/sv01/fnd/IND/fmt/png/PWRFrame-TR-2-Men's-Training-Shoes",
        price: "MRP : ₹ 6695.00"
    },
]; 
let productsslipons = [
    {
        id: 15,
        name: "Dynamite Slip-On Men's Sneakers",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/388704/02/sv01/fnd/IND/fmt/png/Dynamite-Slip-On-Men's-Sneakers",
        price: "MRP : ₹ 1399.00"
    },
    {
        id: 16,
        name: "SOFTRIDE Feel Men's Slip-On Unisex Walking Shoes",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/378019/02/sv01/fnd/IND/fmt/png/SOFTRIDE-Feel-Men's-Slip-On-Unisex-Walking-Shoes",
        price: "MRP : ₹ 1999.00"
    },
    {
        id: 17,
        name: "SOFTRIDE Premier So Splatter Men's Running Shoes",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/376957/01/sv01/fnd/IND/fmt/png/SOFTRIDE-Premier-So-Splatter-Men's-Running-Shoes",
        price: "MRP : ₹ 1599.00"
    },
]; 
let productssandals = [
    {
        id: 18,
        name: "PUMA x one8 Stark V3 Men's Flip-Flops",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/384459/03/sv01/fnd/IND/fmt/png/PUMA-x-one8-Stark-V3-Men's-Flip-Flops",
        price: "MRP : ₹ 1199.00"
    },
    {
        id: 19,
        name: "Nike Asuna 3s",
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a50cb65f-f6c0-4a3a-b832-87599b3f93f5/asuna-3-slides-fX8tl7.png",
        price: "MRP : ₹ 2199.00"
    },
    {
        id: 20,
        name: "Nike Air More Uptempo",
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f6d6e7dc-f9b6-4168-a818-4714e2183be2/air-more-uptempo-slides-32GKw3.png",
        price: "MRP : ₹ 4099.00"
    },
]; 
let productsbadminton = [
    {
        id: 21,
        name: "Badminton Smash Sprint Unisex Indoor Sports Shoes",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/108127/04/sv01/fnd/IND/fmt/png/Badminton-Smash-Sprint-Unisex-Indoor-Sports-Shoes",
        price: "MRP : ₹ 2399.00"
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
let productscricket = [
    {
        id: 24,
        name: "PUMA 24 FH Rubber Unisex Cricket Shoes",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/107699/02/sv01/fnd/IND/fmt/png/PUMA-24-FH-Rubber-Unisex-Cricket-Shoes",
        price: "MRP : ₹ 5399.00"
    },
    {
        id: 25,
        name: "PUMA Spike 22.2 Unisex Cricket Shoes",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/107299/06/sv01/fnd/IND/fmt/png/PUMA-Spike-22.2-Unisex-Cricket-Shoes",
        price: "MRP : ₹ 7699.00"
    },
    {
        id: 26,
        name: "PUMA Bowling 24.1 Unisex Cricket Shoes",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/107697/02/sv01/fnd/IND/fmt/png/PUMA-Bowling-24.1-Unisex-Cricket-Shoes",
        price: "MRP : ₹ 10999.00"
    },
]; 
let productsfootball = [
    {
        id: 27,
        name: "King Ultimate FG/AG Unisex Football Boots",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/107566/03/sv01/fnd/IND/fmt/png/KING-PRO-FG/AG-Unisex-Football-Boots",
        price: "MRP : ₹ 5399.00"
    },
    {
        id: 28,
        name: "King Ultimate FG/AG Unisex Football Boots",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/107563/07/sv01/fnd/IND/fmt/png/King-Ultimate-FG/AG-Unisex-Football-Boots",
        price: "MRP : ₹ 5399.00"
    },
    {
        id: 29,
        name: "VITORIA TT Men's Football Boots",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/107484/01/sv01/fnd/IND/fmt/png/VITORIA-TT-Men's-Football-Boots",
        price: "MRP : ₹ 4999.00"
    },
]; 
let productsbasketball= [
    {
        id: 30,
        name: "MB.03 Toxic Unisex Basketball Shoes",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/378916/01/sv01/fnd/IND/fmt/png/MB.03-Toxic-Unisex-Basketball-Shoes",
        price: "MRP : ₹ 12699.00"
    },
    {
        id: 31,
        name: "MB.03 Hills Unisex Basketball Shoes",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/379235/01/sv01/fnd/IND/fmt/png/MB.03-Hills-Unisex-Basketball-Shoes",
        price: " MRP : ₹ 12699.00"
    },
    {
        id: 32,
        name: "MB.03 Hills Unisex Basketball Shoes",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/309716/01/sv01/fnd/IND/fmt/png/MB.03-CNY-Unisex-Basketball-Shoes",
        price: "MRP : ₹ 12699.00"
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
            window.open("men-productpage.html?index=" + keys, "_blank");
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
        </div>`;    
        let keys=(value.id);
        newDiv.addEventListener("click", function () {
            window.open("men-productpage.html?index=" + keys, "_blank");
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
        </div>`;    
        let keys=value.id;
        newDiv.addEventListener("click", function () {
            window.open("men-productpage.html?index=" + keys, "_blank");
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
        </div>`;    
        let keys=value.id;
        newDiv.addEventListener("click", function () {
            window.open("men-productpage.html?index=" + keys, "_blank");
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
        </div>`;   
        let keys=value.id;
        newDiv.addEventListener("click", function () {
            window.open("men-productpage.html?index=" + keys, "_blank");
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
        </div>`;    
        let keys=value.id;
        newDiv.addEventListener("click", function () {
            window.open("men-productpage.html?index=" + keys, "_blank");
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
        </div>`;    
        let keys=value.id;
        newDiv.addEventListener("click", function () {
            window.open("men-productpage.html?index=" + keys, "_blank");
        });         
        list7.appendChild(newDiv);
    })
    productscricket.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <div class="shoecard">
        <div class="imageholder-1" style='background-image: url("${value.image}");'></div>
            <div class="price-cont">
                <h1>${value.name}</h1>
                ${value.price.toLocaleString()}
            </div>    
        </div>`;    
        let keys=value.id;
        newDiv.addEventListener("click", function () {
            window.open("men-productpage.html?index=" + keys, "_blank");
        });         
        list8.appendChild(newDiv);
    })
    productsfootball.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <div class="shoecard">
        <div class="imageholder-1" style='background-image: url("${value.image}");'></div>
            <div class="price-cont">
                <h1>${value.name}</h1>
                ${value.price.toLocaleString()}
            </div>   
        </div>`;    
        let keys=value.id;
        newDiv.addEventListener("click", function () {
            window.open("men-productpage.html?index=" + keys, "_blank");
        });         
        list9.appendChild(newDiv);
    })
    productsbasketball.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <div class="shoecard">
        <div class="imageholder-1" style='background-image: url("${value.image}");'></div>
            <div class="price-cont">
                <h1>${value.name}</h1>
                ${value.price.toLocaleString()}
            </div>    
        </div>`;    
        let keys=value.id;
        newDiv.addEventListener("click", function () {
            window.open("men-productpage.html?index=" + keys, "_blank");
        });         
        list10.appendChild(newDiv);
    })
}
initApp();