const allproducts = [
    {
        id: 0,
        name:"Relaxed Fit Brick Red Crop Top",
        image:"https://overlays.co/cdn/shop/files/20230803-DSC02817.jpg?v=1691773704&width=500",
        smlimage:"https://overlays.co/cdn/shop/files/20230803-DSC02862.jpg?v=1691773704&width=500",
        price:"MRP : ₹ 1095.00",
        details: "Our Crop Tops are designed to hug the body, creating a sleek and streamlined silhouette. ",
        story:"Our Crop Tops are designed to hug the body, creating a sleek and streamlined silhouette. They are made from stretchy, form-fitting materials, which help to accentuate the curves of the wearer's body.",
        features:["Composition: Cotton-Modal","Height of the model : 5'8 ","Model wearing Size : S","Weight : 220-230 GSM"],
    },
    {
        id: 1,
        name:"Favourite Jersey Cat Training Women's Regular Fit T-Shirt",
        image:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/522420/01/mod01/fnd/IND/fmt/png/Favourite-Jersey-Cat-Training-Women's-Regular-Fit-T-Shirt",
        smlimage:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/522420/01/fnd/IND/fmt/png/Favourite-Jersey-Cat-Training-Women's-Regular-Fit-T-Shirt",
        price:"MRP : ₹ 1095.00",
        details: "Say goodbye to working out in grungy sweatpants and that old band T-shirt - show yourself some love and revamp your training look with this tee.",
        story:"Our Crop Tops are designed to hug the body, creating a sleek and streamlined silhouette. They are made from stretchy, form-fitting materials, which help to accentuate the curves of the wearer's body.",
        features:["Crew neck","Height of the model : 5'8 ","Model wearing Size : S","Weight : 220-230 GSM"],
    },
    {
        id: 2,
        name:"Favourite Printed Crop Short Sleeve Women's Training Relaxed Fit T-Shirt",
        image:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/521617/13/mod01/fnd/IND/fmt/png/Favourite-Printed-Crop-Short-Sleeve-Women's-Training-Relaxed-Fit-T-Shirt",
        smlimage:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/521617/13/bv/fnd/IND/fmt/png/Favourite-Printed-Crop-Short-Sleeve-Women's-Training-Relaxed-Fit-T-Shirt",
        price:"MRP : ₹ 1095.00",
        details: "Stay fresh, dry and cool in this short-sleeve women's tee.",
        story:"Stay fresh, dry and cool in this short-sleeve women's tee. The secret to this tee is the fabric, which features PUMA's innovative dryCELL moisture-wicking properties to absorb moisture directly from your skin.",
        features:["Composition: Cotton-Modal","Height of the model : 5'8 ","Model wearing Size : S","Weight : 220-230 GSM"],
    },
    {
        id: 3,
        name:"YONA Women's T-shirt",
        image:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/624021/81/mod01/fnd/IND/fmt/png/YONA-Women's-T-shirt",
        smlimage:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/624021/81/fnd/IND/fmt/png/YONA-Women's-T-shirt",
        price:"MRP : ₹ 1095.00",
        details: "Yona is PUMA's exploration of an elevated, tailored approach to classic streetwear.",
        story:"Yona is PUMA's exploration of an elevated, tailored approach to classic streetwear. Premium materials, an exquisite attention to detail, and timeless colors define these clean and functional designs.",
        features:["Mock neck","Height of the model : 5'8 ","Model wearing Size : S","Weight : 220-230 GSM"],
    },
    {
        id: 4,
        name:"ANIMAL REMIX Women's Training Boyfriend T-shirt",
        image:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/524821/02/mod01/fnd/IND/fmt/png/ANIMAL-REMIX-Women's-Training-Boyfriend-T-shirt",
        smlimage:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/524821/02/mod04/fnd/IND/fmt/png/ANIMAL-REMIX-Women's-Training-Boyfriend-T-shirt",
        price:"MRP : ₹ 1095.00",
        details: "Indulge in the epitome of comfort with our special cotton t-shirt, boasting a secret finish for an unparalleled luxurious fit.",
        story:"Relaxed fit t-shirt in black with a a round neck rib and short sleeves. Contrast front and back HD and puff print in Conqueror print.",
        features:["Composition: Cotton-Modal","Height of the model : 6'0 ","Model wearing Size : S","Weight : 220-230 GSM"],
    },
    {
        id: 5,
        name:"Relaxed Fit Raglan Crop Top - Red",
        image:"https://overlays.co/cdn/shop/products/DSC00618.jpg?v=1680180554&width=700",
        smlimage:"https://overlays.co/cdn/shop/products/DSC00629.jpg?v=1680520533&width=400",
        price:"MRP : ₹ 1095.00",
        details: "Our Crop Tops are designed to hug the body, creating a sleek and streamlined silhouette. ",
        story:"Our Crop Tops are designed to hug the body, creating a sleek and streamlined silhouette. They are made from stretchy, form-fitting materials, which help to accentuate the curves of the wearer's body.",
        features:["Composition: Cotton-Modal","Height of the model : 5'8 ","Model wearing Size : S","Weight : 220-230 GSM"],
    },
    {
        id: 6,
        name:"Classics Women's Elevated Shirt",
        image:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/626346/20/mod01/fnd/IND/fmt/png/Classics-Women's-Elevated-Shirt",
        smlimage:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/626346/20/mod03/fnd/IND/fmt/png/Classics-Women's-Elevated-Shirt",
        price:"MRP : ₹ 1299.00",
        details: "This Classics Women's Elevated Shirt is perfect for any sports fan or casual wear enthusiast. ",
        story:"This Classics Women's Elevated Shirt is perfect for any sports fan or casual wear enthusiast. Featuring a front button placket and all-over stripes, the shirt has a a classic Cat logo at chest for maximum impact.",
        features:["Single jersey","Height of the model : 5'8 ","Model wearing Size : S","Weight : 220-230 GSM"],
    },
    {
        id: 7,
        name:"BMW M Motorsport Women's Polo",
        image:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/624182/01/mod01/fnd/IND/fmt/png/BMW-M-Motorsport-Women's-Polo",
        smlimage:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/624182/01/fnd/IND/fmt/png/BMW-M-Motorsport-Women's-Polo",
        price:"MRP : ₹ 1199.00",
        details: "Show your love for BMW M Motorsport in this women's polo. The cropped-length polo features BMW M Motorsport branding on the left side with the PUMA Cat logo on the right sleeve.",
        story:"Show your love for BMW M Motorsport in this women's polo. The cropped-length polo features BMW M Motorsport branding on the left side with the PUMA Cat logo on the right sleeve. See you on the track.",
        features:["Short sleeves","Height of the model : 5'8 ","Model wearing Size : S","Flatlock stitching for anti-friction"],
    },
    {
        id: 8,
        name:"PUMA Women's Regular Fit Polo",
        image:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/588439/43/mod01/fnd/IND/fmt/png/PUMA-Women's-Regular-Fit-Polo",
        smlimage:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/588439/43/mod03/fnd/IND/fmt/png/PUMA-Women's-Regular-Fit-Polo",
        price:"MRP : ₹ 1199.00",
        details: "An every wardrobe essential the Women's Polo is simple,stylish & elegant,equipped with EVERFRESH Technology",
        story:"An every wardrobe essential the Women's Polo is simple,stylish & elegant,equipped with EVERFRESH Technology our quattro acting ecofriendly tech which combats odor, prevents growth of bacteria, with the highly lucrative anti-microbial finish.",
        features:["Fit Type-Regular fit","Height of the model : 5'8 ","Model wearing Size : S","EVERFRESH Technology"],
    },
    {
        id: 9,
        name:"PUMA x X-GIRL Women's Jacket",
        image:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/624709/01/mod01/fnd/IND/fmt/png/PUMA-x-X-GIRL-Women's-Jacket",
        smlimage:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/624709/01/mod05/fnd/IND/fmt/png/PUMA-x-X-GIRL-Women's-Jacket",
        price:"MRP : ₹ 1899.00",
        details: "PUMA x X-GIRL has arrived. The collab is bringing a modern, feminine edge to classic street and skate aesthetics and features bold and aggressive pieces with graffiti-inspired graphics and a DIY aesthetic. ",
        story:"PUMA x X-GIRL has arrived. The collab is bringing a modern, feminine edge to classic street and skate aesthetics and features bold and aggressive pieces with graffiti-inspired graphics and a DIY aesthetic. This jacket goes all out with a rubber print graphic on the front and some pops of colour.",
        features:["Relaxed fit","Cargo pockets with snap closure","Internal bungee cord at hem","Graffiti-inspired graphic"],
    },
    {
        id: 10,
        name:"T7 Women's Track Jacket",
        image:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/625601/81/mod01/fnd/IND/fmt/png/T7-Women's-Track-Jacket",
        smlimage:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/625601/81/mod03/fnd/IND/fmt/png/T7-Women's-Track-Jacket",
        price:"MRP : ₹ 1999.00",
        details: "Straight out of the '70s PUMA Archives, the T7 gets a fresh update, and this time we've reworked it as this track jacket.",
        story:"Straight out of the '70s PUMA Archives, the T7 gets a fresh update, and this time we've reworked it as this track jacket. It features a standard fit and is built with a French terry material. It also has an ornate all-over-print for a contemporary look. Of course, the signature stripes are still on the sides.",
        features:["Relaxed fit","Cargo pockets with snap closure","Internal bungee cord at hem","Graffiti-inspired graphic"],
    },
    {
        id: 11,
        name:"PUMA Women's Reversible Padded Jacket",
        image:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/672922/98/mod01/fnd/IND/fmt/png/PUMA-Women's-Reversible-Padded-Jacket",
        smlimage:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/672922/98/mod03/fnd/IND/fmt/png/PUMA-Women's-Reversible-Padded-Jacket",
        price:"MRP : ₹ 2100.00",
        details: "Wrapped in a classic sporty design, this padded woven jacket provides you with warmth and weather protection. All day everyday.",
        story:"Straight out of the '70s PUMA Archives, the T7 gets a fresh update, and this time we've reworked it as this track jacket. It features a standard fit and is built with a French terry material. It also has an ornate all-over-print for a contemporary look. Of course, the signature stripes are still on the sides.",
        features:["Relaxed fit","Reversible Jacket wearble on both sides","Padded chin guard with drawcord holders","Nylon, water-repellent"],
    },
    {
        id: 12,
        name:"CLASSICS BRAND LOVE Women's Hoodie",
        image:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/624336/60/mod01/fnd/IND/fmt/png/CLASSICS-BRAND-LOVE-Women's-Hoodie",
        smlimage:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/624336/60/mod03/fnd/IND/fmt/png/CLASSICS-BRAND-LOVE-Women's-Hoodie",
        price:"MRP : ₹ 1795.00",
        details: "Classics are called classics for a reason, because like this BRAND LOVE, they're timeless.",
        story:"PUMA x X-GIRL has arrived. The collab is bringing a modern, feminine edge to classic street and skate aesthetics and features bold and aggressive pieces with graffiti-inspired graphics and a DIY aesthetic. This hoodie goes all out with a rubber print graphic on the front and some pops of colour.",
        features:["Relaxed fit","Hood with drawcords","Graffiti-inspired graphic","PUMA x X-GIRL co-branding"],
    },
    {
        id: 13,
        name:"HER Women's Sweatshirt",
        image:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/676004/01/mod01/fnd/IND/fmt/png/HER-Women's-Sweatshirt",
        smlimage:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/676004/01/mod03/fnd/IND/fmt/png/HER-Women's-Sweatshirt",
        price:"MRP : ₹ 1795.00",
        details: "We've taken our classic, relaxed fit crew neck and updated it for HER. The baggy silhouette and subtle embroidered logo make it a simple",
        story:"We've taken our classic, relaxed fit crew neck and updated it for HER. The baggy silhouette and subtle embroidered logo make it a simple, comfortable addition to your wardrobe.",
        features:["Relaxed fit","Hood with drawcords","Decorative pleats","Crew neck"],
    },
    {
        id: 14,
        name:"Better Essentials Women's Sweatshirt",
        image:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/675987/01/mod01/fnd/IND/fmt/png/Better-Essentials-Women's-Sweatshirt",
        smlimage:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/675987/01/mod05/fnd/IND/fmt/png/Better-Essentials-Women's-Sweatshirt",
        price:"MRP : ₹ 1795.00",
        details: "Every outfit starts with the essentials, and with PUMA's FOREVER BETTER fabric, you can get your essentials covered and feel good about it.",
        story: "Every outfit starts with the essentials, and with PUMA's FOREVER BETTER fabric, you can get your essentials covered and feel good about it. This comfort-fit crew neck sweatshirt has a recycled PUMA Cat logo badge on the chest and is made from soft French terry fabric.",
        features:["Relaxed fit","Hood with drawcords","Shell fabric cuffs and waistband","Crew neck"],
    },
    {
        id: 15,
        name:"YONA Women's Short",
        image:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/624025/22/mod01/fnd/IND/fmt/png/YONA-Women's-Shorts",
        smlimage:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/624025/22/mod05/fnd/IND/fmt/png/YONA-Women's-Shorts",
        price:"MRP : ₹ 799.00",
        details: "Yona is PUMA's exploration of an elevated, tailored approach to classic streetwear.",
        story: "Yona is PUMA's exploration of an elevated, tailored approach to classic streetwear. Premium materials, an exquisite attention to detail, and timeless colors define these clean and functional designs. This season, the collection brings to life the idea of 'pure contours,' combining thoughtful details with fluid contouring and a Scandi-naturalistic approach, which can be seen in these shorts. They have a high rise and rounded hem for a relaxed look.",
        features:["Relaxed fit","2 gsm, plain weave","Zip welt pocket on back","Rounded hem"],
    },
    {
        id: 16,
        name:"PUMA FIT 5 Women's Training Shorts",
        image:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/523078/01/mod01/fnd/IND/fmt/png/PUMA-FIT-5%22-Women's-Training-Shorts",
        smlimage:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/523078/01/fnd/IND/fmt/png/PUMA-FIT-5%22-Women's-Training-Shorts",
        price:"MRP : ₹ 799.00",
        details: "Dial up your workout with these PUMA Fit training shorts.",
        story: "Dial up your workout with these PUMA Fit training shorts, built with a shape-enhancing construction and moisture-wicking fabrication to keep you dry and comfortable throughout your workout.",
        features:["Relaxed fit","Two exterior side pockets","Zip welt pocket on back","Rounded hem"],
    },
    {
        id: 17,
        name:"DOWNTOWN High Waist Women's Regular Fit Shorts",
        image:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/538361/25/mod01/fnd/IND/fmt/png/DOWNTOWN-High-Waist-Women's-Regular-Fit-Shorts",
        smlimage:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/538361/25/mod05/fnd/IND/fmt/png/DOWNTOWN-High-Waist-Women's-Regular-Fit-Shorts",
        price:"MRP : ₹ 799.00",
        details: "These DOWNTOWN shorts feature an eye-catching A-line silhouette, a high waist, and side slits - what more could you want?",
        story: "These DOWNTOWN shorts feature an eye-catching A-line silhouette, a high waist, and side slits - what more could you want?",
        features:["Relaxed fit","A-line silhouette","Zip welt pocket on back","French terry jersey"],
    },
    {
        id: 18,
        name:"PUMA x X-GIRL Women's Cargo Pants",
        image:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/624719/01/mod01/fnd/IND/fmt/png/PUMA-x-X-GIRL-Women's-Cargo-Pants",
        smlimage:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/624719/01/mod03/fnd/IND/fmt/png/PUMA-x-X-GIRL-Women's-Cargo-Pants",
        price:"MRP : ₹ 899.00",
        details: "Every outfit starts with the essentials, and with PUMA's FOREVER BETTER fabric, you can get your essentials covered and feel good about it.",
        story: "PUMA x X-GIRL has arrived. The collab is bringing a modern, feminine edge to classic street and skate aesthetics and features bold and aggressive pieces with graffiti-inspired graphics and a DIY aesthetic. These cargo pants go all out with a rubber print graphic on the front and some contrast stitching.",
        features:["Relaxed fit","Contrast stitching imitating cargo pockets","129 gsm, dobby fabric","PUMA x X-GIRL co-branding"],
    },
    {
        id: 19,
        name:"T7 Women's Straight Track Pants",
        image:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/625599/83/mod01/fnd/IND/fmt/png/T7-Women's-Straight-Track-Pants",
        smlimage:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/625599/83/mod05/fnd/IND/fmt/png/T7-Women's-Straight-Track-Pants",
        price:"MRP : ₹ 999.00",
        details: "Straight out of the '70s PUMA Archives, the T7 gets a fresh update, and this time we've reworked the OG track pants with a much more relaxed vibe. ",
        story: "Straight out of the '70s PUMA Archives, the T7 gets a fresh update, and this time we've reworked the OG track pants with a much more relaxed vibe. It features a looser fit than the OG track pants, and straight legs with open cuffs as well as an ornate all-over-print. Of course, the signature stripes are still on the sides.",
        features:["Relaxed fit","Elastic waistband with external drawcords","T7 panel inserts","All-over-print"],
    },
    {
        id: 20,
        name:"DARE TO Women's Relaxed Fit Sweatpants",
        image:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/624297/01/mod01/fnd/IND/fmt/png/DARE-TO-Women's-Relaxed-Fit-Sweatpants",
        smlimage:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/624297/01/mod02/fnd/IND/fmt/png/DARE-TO-Women's-Relaxed-Fit-Sweatpants",
        price:"MRP : ₹ 899.00",
        details: "Shift gears and turn heads in these DARE To sweatpants, part of PUMA's women's line that takes aim squarely at the motorsports space.",
        story: "Shift gears and turn heads in these DARE To sweatpants, part of PUMA's women's line that takes aim squarely at the motorsports space. The relaxed fit pants have some 90s throwback flair and cargo pockets for storage.",
        features:["Relaxed fit","Medium rise","Full length","330 gsm, French terry"],
    },
    {
        id: 21,
        name:"DARE TO Women's Midi Woven Skirt",
        image:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/624293/33/mod02/fnd/IND/fmt/png/DARE-TO-Women's-Midi-Woven-Skirt",
        smlimage:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/624293/33/mod03/fnd/IND/fmt/png/DARE-TO-Women's-Midi-Woven-Skirt",
        price:"MRP : ₹ 1299.00",
        details: "Shift gears and turn heads in this DARE To woven skirt, part of PUMA's women's line that takes aim squarely at the motorsports space.",
        story: "Shift gears and turn heads in this DARE To woven skirt, part of PUMA's women's line that takes aim squarely at the motorsports space. The regular-fit skirt includes a side seam with a bungee drawcord for a fit that fits you.",
        features:["Relaxed fit","Side seam with bungee drawcords for flexible fit","240 gms, rib material","Elasticated waistband with external drawcords for adjustable fit"],
    },
    {
        id: 22,
        name:"HER Women's Short Jumpsuit",
        image:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/677891/83/mod01/fnd/IND/fmt/png/HER-Women's-Short-Jumpsuit",
        smlimage:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/677891/83/mod03/fnd/IND/fmt/png/HER-Women's-Short-Jumpsuit",
        price:"MRP : ₹ 1399.00",
        details: "We've taken our Classics and updated it for HER. Designed for the modern woman who seeks versatility, this set offers the ideal outfit for sunny days.",
        story: "We've taken our Classics and updated it for HER. Designed for the modern woman who seeks versatility, this set offers the ideal outfit for sunny days. The light and airy top adds a cool touch to your look, while the shorts ensure maximum comfort for all your summer activities. Thoughtful details and a regular fit create an ensemble that keeps you fashionable, without sacrificing well-being.",
        features:["Relaxed fit","Side seam with bungee drawcords for flexible fit","External drawstring for personalized comfort","Elasticated waistband with external drawcords for adjustable fit"],
    },
    {
        id: 23,
        name:"CLASSICS A-Line Regular Fit Women's Skirt",
        image:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/623231/25/mod02/fnd/IND/fmt/png/CLASSICS-A-Line-Regular-Fit-Women's-Skirt",
        smlimage:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/623231/25/mod05/fnd/IND/fmt/png/CLASSICS-A-Line-Regular-Fit-Women's-Skirt",
        price:"MRP : ₹ 1799.00",
        details: "We collected our most beloved designs for our Classics collection, featuring modern accessories with unparalleled style and unprecedented function.",
        story: "We collected our most beloved designs for our Classics collection, featuring modern accessories with unparalleled style and unprecedented function. Our Classics Ribbed A-List Skirt is a slinky wardrobe staple, featuring an adjustable elasticated waistband and all-over vertically ribbed silhouette for a flattering fit.",
        features:["Relaxed fit","All-over vertical ribbing","Zip welt pocket on back","Side slits for freedom of movement"],
    },
    {
        id: 24,
        name:"PUMA Women's Regular Fit T-Shirt & Pants Set",
        image:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/675461/01/mod01/fnd/IND/fmt/png/PUMA-Women's-Regular-Fit-T-Shirt-&-Pants-Set",
        smlimage:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/675461/01/bv/fnd/IND/fmt/png/PUMA-Women's-Regular-Fit-T-Shirt-&-Pants-Set",
        price:"MRP : ₹ 1099.00",
        details: "The ultimate combo, the PUMA Women's T-Shirt & Pants Set is a perfect blend of ease and style!",
        story: "The ultimate combo, the PUMA Women's T-Shirt & Pants Set is a perfect blend of ease and style! Made with breathable cotton fabric, this set offers a comfortable fit that's perfect for lounging or running errands. ",
        features:["Relaxed fit","Ribbed crew neck","Elasticated drawstring waistband","Side slits for freedom of movement"],

    },
    {
        id: 25,
        name:"PUMA Women's T-Shirt & Shorts Set",
        image:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/676511/01/mod01/fnd/IND/fmt/png/PUMA-Women's-T-Shirt-&-Shorts-Set",
        smlimage:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/676511/01/fnd/IND/fmt/png/PUMA-Women's-T-Shirt-&-Shorts-Set",
        price:"MRP : ₹ 1799.00",
        details: "The ultimate combo, the PUMA Women's T-Shirt & Pants Set is a perfect blend of ease and style!",
        story: "The ultimate combo, the PUMA Women's T-Shirt & Pants Set is a perfect blend of ease and style! Made with breathable cotton fabric, this set offers a comfortable fit that's perfect for lounging or running errands. ",
        features:["Relaxed fit","All-over vertical ribbing","Zip welt pocket on back","Side slits for freedom of movement"],
    },
    {
        id: 26,
        name:"Loungewear Women's Sets",
        image:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/673702/01/mod01/fnd/IND/fmt/png/Loungewear-Women's-Sets",
        smlimage:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/673702/01/fnd/IND/fmt/png/Loungewear-Women's-Sets",
        price:"MRP : ₹ 1799.00",
        details: "This knitted suit keeps it simple with cosy details like ribbed cuffs and a cut-and-sew waistband for a look that's ideal for lazy days and nights spent on.",
        story: "The ultimate combo, the PUMA Women's T-Shirt & Pants Set is a perfect blend of ease and style! Made with breathable cotton fabric, this set offers a comfortable fit that's perfect for lounging or running errands. ",
        features:["Relaxed fit","All-over vertical ribbing","Zip welt pocket on back","Side slits for freedom of movement"],
    },
    {
        id: 27,
        name:"ADIDAS X KSENIASCHNAIDER REPROCESSED SHORT TRACK JACKET",
        image:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c828773902da456cbaa8717ca8c67120_9366/adidas_x_KSENIASCHNAIDER_Reprocessed_Short_Track_Jacket_Multicolor_II0760_21_model.jpg",
        smlimage:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3625cc82ad414dc592bc4cc2ba1a4ce0_9366/adidas_x_KSENIASCHNAIDER_Reprocessed_Short_Track_Jacket_Multicolor_II0760_23_hover_model.jpg",
        price:"MRP : ₹ 1999.00",
        details: "Being true to yourself is more than just a mindset. It's represented in your style — and you decide that for you. This adidas track jacket ",
        story: "Being true to yourself is more than just a mindset. It's represented in your style — and you decide that for you. This adidas track jacket makes a statement in a striking colourblocked design built from cotton French terry.",
        features:["Relaxed fit","Ribbed crew neck","Full zip with ribbed stand-up collar","100% cotton French terry"],

    },
    {
        id: 28,
        name:"TIRO SUIT-UP ADVANCED TRACK TOP",
        image:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/83e001d6c5d74e19882caf4800afbb52_9366/Tiro_Suit-Up_Advanced_Track_Top_Purple_HY3845_21_model.jpg",
        smlimage:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6d27627d16344f9f8ab7af4800afc4d2_9366/Tiro_Suit-Up_Advanced_Track_Top_Purple_HY3845_23_hover_model.jpg",
        price:"MRP : ₹ 2399.00",
        details: "The Tiro jacket has been seen across stadiums and pitches across the world. It's now been reimagined as a lifestyle jacket. A sporty uniform, for all that you do.",
        story: "The ultimate combo, the PUMA Women's T-Shirt & Pants Set is a perfect blend of ease and style! Made with breathable cotton fabric, this set offers a comfortable fit that's perfect for lounging or running errands. ",
        features:["Relaxed fit","Side zip pockets","70% recycled polyester, 30% cotton interlock","Full zip"],
    },
    {
        id: 29,
        name:"Favourite Knit Women's Training Tracksuit",
        image:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/521740/01/mod01/fnd/IND/fmt/png/Favourite-Knit-Women's-Training-Tracksuit",
        smlimage:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/521740/01/mod04/fnd/IND/fmt/png/Favourite-Knit-Women's-Training-Tracksuit",
        price:"MRP : ₹ 1799.00",
        details: "This running and training-inspired tracksuit is perfect for those who like training gear that melds style and performance. ",
        story: "This running and training-inspired tracksuit is perfect for those who like training gear that melds style and performance. The soft fabric allows a full range of motion during your workout, while the stylish silhouette keeps you looking sleek and energetic at the gym. It's time to get out there and smash your personal best.",
        features:["Slim fit","All-over vertical ribbing","Elastic cuff at wrist providing a comfortable and versatile fit","Full length, centre front zip with zip garage at the chin for comfort"],
    },
]; 

let naming=document.getElementById("productname");
let list12=document.getElementById("variablename");
let images=document.getElementById("image-cont");
let desc=document.getElementById("desc-var");
let story=document.getElementById("story");
let feat=document.getElementById("features");


var urlParams = new URLSearchParams(window.location.search);
var index = parseInt(urlParams.get('index'));
let currentIndex=index;


function initApp(index){
    console.log(index);
    var newDivimage = `
    <div class="image">
        <img class "image" src="${allproducts[index].image}">
    </div>
    <div class="image2">
        <img class="image2" src="${allproducts[index].smlimage}">
    </div>`;    
    images.innerHTML=newDivimage;
    var newDiv2 = `
    <div id="productname">
    <h1>${allproducts[index].name}</h1>
    </div>
    <div id=pricecont">${allproducts[index].price}
    <br>
    <span>Prices includes GST</span>
    </div>`;    
    list12.innerHTML=newDiv2;
    var newDiv3= `<p>${allproducts[index].details}<p>`;    
    desc.innerHTML=newDiv3;
    var newDiv4=`<p>${allproducts[index].story}<p>`;    
    story.innerHTML=newDiv4;
    let newDiv5 = `<li>${allproducts[index].features[0]}</li>    
                   <li>${allproducts[index].features[1]}</li>   
                   <li>${allproducts[index].features[2]}</li>    
                   <li>${allproducts[index].features[3]}</li>`;    
    feat.innerHTML=newDiv5;
}


document.getElementById('prevBtn').addEventListener('click', function() {
    currentIndex = (currentIndex === 0) ? allproducts.length - 1 : currentIndex - 1;
    initApp(currentIndex);
});

document.getElementById('nextBtn').addEventListener('click', function() {
    currentIndex = (currentIndex === allproducts.length - 1) ? 0 : currentIndex + 1;
    initApp(currentIndex);
});


initApp(currentIndex);