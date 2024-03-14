let list1 = document.getElementById('tshirt');
let list2 = document.getElementById('polos');
let list3 = document.getElementById('jackets');
let list4 = document.getElementById('hoody');
let list5 = document.getElementById('shorts');
let list6 = document.getElementById('pants');
let list7 = document.getElementById('tracks');
let list8 = document.getElementById('homewear');

let producttshirt = [
    {
        id: 0,
        name: 'Conqueror Relaxed Fit T-shirt - Ultra Soft',
        image: 'https://overlays.co/cdn/shop/files/IMG-7990.png?v=1707594882&width=800',
        price: "MRP : ₹ 1095.00"
    },
    {
        id: 1,
        name: "G.O.A.T Relaxed Fit T-shirt - Ultra Soft",
        image: "https://overlays.co/cdn/shop/files/5A9E2C77-6BD4-4FF6-8589-653B04FEA5DA.jpg?v=1705859269&width=800",
        price: "MRP : ₹ 995.00"
    },
    {
        id: 2,
        name: 'Ultra Soft Oversized Fearless T-shirt',
        image: "https://overlays.co/cdn/shop/files/20230804-DSC03331.jpg?v=1692105093&width=800",
        price: "MRP : ₹ 1195.00"
    },
    {
        id: 3,
        name: 'Ultra Soft Oversized Phoenix T-shirt',
        image: 'https://overlays.co/cdn/shop/files/20230805-DSC03541.jpg?v=1692105098&width=800',
        price: "MRP : ₹ 1205.00"
    },
    {
        id: 4,
        name: 'Oversized T-shirt - Explorer',
        image: 'https://overlays.co/cdn/shop/files/untitled-03713.jpg?v=1692294817&width=800',
        price: "MRP : ₹ 1099.00"
    },
    {
        id: 5,
        name: 'Oversized SUPIMA T-shirt - Be The Change',
        image: "https://overlays.co/cdn/shop/files/20230805-DSC03489.jpg?v=1692105077&width=800",
        price: "MRP : ₹ 995.00"
    },
]; 
let productpolos = [
    {
        id: 6,
        name: "Men's Jersey Polo",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/684352/11/mod01/fnd/IND/fmt/png/Men's-Jersey-Polo",
        price: "MRP : ₹ 1299.00"
    },
    {
        id: 7,
        name: "Mercedes-AMG Motorsport Jacquard Men's Polo",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/623751/07/mod01/fnd/IND/fmt/png/Mercedes-AMG-Petronas-Motorsport-Jacquard-Men's-Polo",
        price: "MRP : ₹ 1499.00"
    },
    {
        id: 8,
        name: "teamCUP Casuals Men's Regular Fit Polo",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/657991/35/mod01/fnd/IND/fmt/png/teamCUP-Casuals-Men's-Regular-Fit-Polo",
        price: "MRP : ₹ 1655.00"
    },
]; 
let productjackets = [
    {
        id: 9,
        name: "Conqueror Navy Beige Jacket",
        image: "https://overlays.co/cdn/shop/files/776.jpg?v=1699162334&width=800",
        price: "MRP : ₹ 1899.00"
    },
    {
        id: 10,
        name: "The G.O.A.T Jacket",
        image: "https://overlays.co/cdn/shop/files/DSC00232copy2.jpg?v=1699162270&width=800",
        price: "MRP : ₹ 2399.00"
    },
    {
        id: 11,
        name: "The ROAR Jacket",
        image: "https://overlays.co/cdn/shop/files/DSC09898copy2.jpg?v=1699162223&width=800",
        price: "MRP ₹ 2399"
    },
]; 
let producthoody = [
    {
        id: 12,
        name: "Manchester City F.C. FtblCore Men's Hoodie",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/767789/06/mod01/fnd/IND/fmt/png/Manchester-City-F.C.-FtblCore-Men's-Hoodie",
        price: "MRP : ₹ 2599.00"
    },
    {
        id: 13,
        name: "PUMA x one8 Men's Elevated Slim Fit Sweatshirt",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/677870/41/mod01/fnd/IND/fmt/png/PUMA-x-one8-Men's-Elevated-Slim-Fit-Sweatshirt",
        price: "MRP : ₹ 1999.00"
    },
    {
        id: 14,
        name: "CLASSICS BRAND LOVE Men's Hoodie",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/625841/01/mod01/fnd/IND/fmt/png/CLASSICS-BRAND-LOVE-Men's-Hoodie",
        price: "MRP : ₹ 1695.00"
    },
]; 
let productshorts = [
    {
        id: 15,
        name: "STUDIO UltraMove Men's Woven Shorts",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/524949/21/mod01/fnd/IND/fmt/png/STUDIO-UltraMove-Men's-Woven-Shorts",
        price: "MRP : ₹ 799.00"
    },
    {
        id: 16,
        name: "Mercedes AMG Petronas F1 Men's Regular Fit Shorts",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/538474/07/mod01/fnd/IND/fmt/png/Mercedes-AMG-Petronas-F1-Men's-Regular-Fit-Shorts",
        price: "MRP : ₹ 999.00"
    },
    {
        id: 17,
        name: "individualFINAL Men's Football Shorts",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/659019/56/mod01/fnd/IND/fmt/png/individualFINAL-Men's-Football-Shorts",
        price: "MRP : ₹ 1199.00"
    },
]; 
let productpants = [
    {
        id: 18,
        name: "Zippered Men's Jersey Pants",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/849323/06/mod01/fnd/IND/fmt/png/Zippered-Men's-Jersey-Pants",
        price: "MRP : ₹ 1199.00"
    },
    {
        id: 19,
        name: "PUMA x one8 Men's Pants",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/679040/22/mod01/fnd/IND/fmt/png/PUMA-x-one8-Men's-Pants",
        price: "MRP : ₹ 1399.00"
    },
    {
        id: 20,
        name: "AC Milan Men's Football Training Pants",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/772259/14/mod01/fnd/IND/fmt/png/AC-Milan-Men's-Football-Training-Pants",
        price: "MRP : ₹ 1499.00"
    },
]; 
let producttracks = [
    {
        id: 21,
        name: "ADICOLOR CLASSICS SST TRACK JACKET",
        image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/8c01bc1524114a6b9c78e29d9691801d_9366/Adicolor_Classics_SST_Track_Jacket_Black_IK7025_21_model.jpg",
        price: "MRP : ₹ 2499.00"
    },
    {
        id: 22,
        name: "Classic Men's Tracksuit",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/845844/11/mod01/fnd/IND/fmt/png/PUMA-Men's-Track-Suit",
        price: "MRP : ₹ 2999.00"
    },
    {
        id: 23,
        name: "PUMA Men's Track Suit",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/680643/06/mod01/fnd/IND/fmt/png/Classic-Men's-Tracksuit",
        price: "MRP : ₹ 4099.00"
    },
]; 
let producthome = [
    {
        id: 24,
        name: "Premium Soft Touch Crew-Neck Men's T-Shirt",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/676518/02/mod01/fnd/IND/fmt/png/Premium-Soft-Touch-Crew-Neck-Men's-T-Shirt",
        price: "MRP : ₹ 899.00"
    },
    {
        id: 25,
        name: "PUMA Men's Stripe T-Shirt & Shorts Set",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/675509/08/mod01/fnd/IND/fmt/png/PUMA-Men's-Stripe-T-Shirt-&-Shorts-Set",
        price: "MRP : ₹ 1799.00"
    },
    {
        id: 26,
        name: "Basic Men's T-shirt & Joggers Set",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/932143/02/mod01/fnd/IND/fmt/png/Basic--Men's--T-shirt-&-Joggers-Set",
        price: "MRP : ₹ 1999.00"
    },
]; 

function initApp(){
    producttshirt.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <div class="shoecard">
        <div class="imageholder-1" style="background-image: url('${value.image}');"></div>
            <div class="price-cont">
            <div class="h1">${value.name}</div>
            <h2 class="price">${value.price.toLocaleString()}<h2>
            </div>    
        </div>`;
        let keys=value.id;
        newDiv.addEventListener("click", function () {
            window.open("men-clothesproductpage.html?index=" +keys, "_blank");
        });         
        list1.appendChild(newDiv);
    })
    productpolos.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <div class="shoecard">
        <div class="imageholder-1" style='background-image: url("${value.image}");'></div>
            <div class="price-cont">
                <div class="h1">${value.name}</div>
                <h2 class="price">${value.price.toLocaleString()}<h2>
            </div>    
        </div>`;    
        let keys=(value.id);
        newDiv.addEventListener("click", function () {
            // Redirect to the product page passing the index
            window.open("men-clothesproductpage.html?index=" +keys, "_blank");
        });   
        list2.appendChild(newDiv);
    })
    productjackets.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <div class="shoecard">
        <div class="imageholder-1" style='background-image: url("${value.image}");'></div>
            <div class="price-cont">
            <div class="h1">${value.name}</div>
            <h2 class="price">${value.price.toLocaleString()}<h2>
            </div>    
        </div>`;    
        let keys=value.id;
        newDiv.addEventListener("click", function () {
            window.open("men-clothesproductpage.html?index=" +keys, "_blank");
        });       
        list3.appendChild(newDiv);
    })
    producthoody.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <div class="shoecard">
        <div class="imageholder-1" style='background-image: url("${value.image}");'></div>
            <div class="price-cont">
            <div class="h1">${value.name}</div>
            <h2 class="price">${value.price.toLocaleString()}<h2>
            </div>    
        </div>`;    
        let keys=value.id;
        newDiv.addEventListener("click", function () {
            window.open("men-clothesproductpage.html?index=" +keys, "_blank");
        });     
        list4.appendChild(newDiv);
    })
    productshorts.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <div class="shoecard">
        <div class="imageholder-1" style='background-image: url("${value.image}");'></div>
            <div class="price-cont">
            <div class="h1">${value.name}</div>
            <h2 class="price">${value.price.toLocaleString()}<h2>
            </div>    
        </div>`;   
        let keys=value.id;
        newDiv.addEventListener("click", function () {
            window.open("men-clothesproductpage.html?index=" +keys, "_blank");
        });        
        list5.appendChild(newDiv);
    })
    productpants.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <div class="shoecard">
        <div class="imageholder-1" style='background-image: url("${value.image}");'></div>
            <div class="price-cont">
            <div class="h1">${value.name}</div>
            <h2 class="price">${value.price.toLocaleString()}<h2>
            </div>    
        </div>`;    
        let keys=value.id;
        newDiv.addEventListener("click", function () {
            window.open("men-clothesproductpage.html?index=" +keys, "_blank");
        });      
        list6.appendChild(newDiv);
    })
    producttracks.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <div class="shoecard">
        <div class="imageholder-1" style='background-image: url("${value.image}");'></div>
            <div class="price-cont">
            <div class="h1">${value.name}</div>
            <h2 class="price">${value.price.toLocaleString()}<h2>
            </div>    
        </div>`;    
        let keys=value.id;
        newDiv.addEventListener("click", function () {
            window.open("men-clothesproductpage.html?index=" +keys, "_blank");
        });         
        list7.appendChild(newDiv);
    })
    producthome.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <div class="shoecard">
        <div class="imageholder-1" style='background-image: url("${value.image}");'></div>
            <div class="price-cont">
            <div class="h1">${value.name}</div>
            <h2 class="price">${value.price.toLocaleString()}<h2>
            </div>    
        </div>`;    
        let keys=value.id;
        newDiv.addEventListener("click", function () {
            window.open("men-clothesproductpage.html?index=" +keys, "_blank");
        });         
        list8.appendChild(newDiv);
    })
}

initApp();