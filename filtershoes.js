const allproducts=[
    {
        id:0,
        name:"Nike Air Force 1 '07",
        image:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c20afd60-b230-4815-bfd2-6768c875f6cd/air-force-1-07-shoes-0XGfD7.png",
        smlimage:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/80c46daa-6ee9-4d5f-8043-39d1ee7c2929/court-vision-low-next-nature-shoes-N2fFHb.png",
        price:"MRP : ₹ 6695.00",
        details: "In love with the classic look of '80s basketball but have a thing for the fast-paced culture of today's game? Meet the Nike Court Vision Low.",
        story:"In love with the classic look of '80s basketball but have a thing for the fast-paced culture of today's game? Meet the Nike Court Vision Low. A classic remixed with at least 20% recycled materials by weight, its crisp upper and stitched overlays keep the soul of the original style. The plush, low-cut collar keeps it sleek and comfortable for your world.",
        features:["Mesh upper","Hairy suede and synthetic overlays","Mesh sockliner","TPU jewel on the laces"],
    },
    {
        id:1,
        name:"Nike Court Vision Low Next Nature",
        image:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a8317dc5-7ce1-42ff-b1da-71f08ff93ad4/court-vision-low-next-nature-shoes-N2fFHb.png",
        smlimage:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9c36611d-a479-4172-a29c-a6f8b66f20bf/court-vision-low-next-nature-shoes-N2fFHb.png",
        price:"MRP : ₹ 7995.00",
        details: "In love with the classic look of '80s basketball but have a thing for the fast-paced culture of today's game? Meet the Nike Court Vision Low.",
        story:"In love with the classic look of '80s basketball but have a thing for the fast-paced culture of today's game? Meet the Nike Court Vision Low. A classic remixed with at least 20% recycled materials by weight, its crisp upper and stitched overlays keep the soul of the original style. The plush, low-cut collar keeps it sleek and comfortable for your world.",
        features:["Sockliner: 100% Textile","Upper: 97.56% Leather, 2.05% Synthetic, 0.39% Textile","Mesh sockliner","TPU jewel on the laces"],
        
    },
    {
        id:2,
        name:"Nike Air Max 90",
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b8eb52e0-dd39-4a2b-a130-98735dd4b278/air-max-90-shoes-0MB5rJ.png",
        smlimage:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cb53c4a9-c031-4f3c-a1e2-b765c47b62d4/air-max-90-shoes-0MB5rJ.png",
        price:"MRP : ₹ 5195.00",
        details:"Lace up and feel the legacy in this champion running shoe that helped define the '90s.",
        story:"Lace up and feel the legacy in this champion running shoe that helped define the '90s. Worn by presidents, revolutionised through collabs and celebrated through rare colourways, its Waffle outsole, visible Nike Air cushioning and striking visuals keep it alive and well.",
        features:["Mesh upper","Hairy suede and synthetic overlays","Mesh sockliner","TPU jewel on the laces"],
    },
    {
        id:3,
        name:"Nike Air Max Excee",
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d078d1fa-b98e-46e5-8efa-f9e609b1e4f4/air-max-excee-shoes-xBwQhG.png",
        smlimage:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/10d3957b-4cf8-428d-8f0b-6a8f969175d6/air-max-excee-shoes-xBwQhG.png",
        price:"MRP : ₹ 6605.00",
        details:"Get into the groove with the Air Max Excee. Inspired by the Air Max 90",
        story:"Get into the groove with the Air Max Excee. Inspired by the Air Max 90, these kicks deliver a modern twist on a legendary icon through mixed materials, elongated design lines and distorted proportions. Plus, collegiate neutrals provide a laid-back style that defies time.",
        features:["The upper of the shoes is made with at least 20% recycled materials","Hairy suede and synthetic overlays","Lining: 100% Textile","TPU jewel on the laces"],
    },
    {
        id:4,
        name:"Nike Cortez",
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5b79e4c0-54cf-462e-ad5f-3bf6b2802b8e/cortez-shoes-5VXMw4.png",
        smlimage:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/768c2837-3fb1-462d-9f0a-308a27a97dc1/cortez-shoes-5VXMw4.png",
        price:"MRP : ₹ 9699.00",
        details:"One word: tradition. From heritage running to a fashion phenom, the retro appeal, sponge-soft midsole and seesaw detailing deliver decade after decade.",
        story:"One word: tradition. From heritage running to a fashion phenom, the retro appeal, sponge-soft midsole and seesaw detailing deliver decade after decade. This iteration combines durable suede and easy-to-style colours for a vintage vibe.",
        features:["The upper of the shoes is made with at least 20% recycled materials","Hairy suede and synthetic overlays","Lining: 100% Textile","TPU jewel on the laces"],
    },
    {
        id:5,
        name:"Nike Air Force 1",
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e3ae15dc-ede4-496b-bf36-fa92998eb763/air-force-1-07-shoes-kZwncs.png",
        smlimage:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/48283655-fc35-43da-9136-30a228bce577/air-force-1-07-shoes-kZwncs.png",
        price:"MRP : ₹ 3695.00",
        details:"The radiance lives on in the Air Force 1 '07.",
        story:"Exotek NITRO™ is an architectural solution to tooling construction, it protects and stabilizes a soft EVA foam infused with NITRO™. The structural ‘cage’ allows for a super soft, squishy inner midsole material. As the foam compresses, the cage provides the outer structure and stability needed whilst giving the wearer all the benefits of enhanced comfort.​",
        features:["The upper of the shoes is made with at least 20% recycled materials","Hairy suede and synthetic overlays","Lining: 100% Textile","TPU jewel on the laces"],
    },
    {
        id:6,
        name:"Fast-Trac NITRO™ 2 Men's Running Shoes",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/307684/01/sv01/fnd/IND/fmt/png/Fast-Trac-NITRO%E2%84%A2-2-Men's-Running-Shoes",
        smlimage:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/307684/01/fnd/IND/fmt/png/Fast-Trac-NITRO%E2%84%A2-2-Men's-Running-Shoes",
        price:"MRP : ₹ 2695.00",
        details:"he lightweight running shoe that will do it all, no matter the terrain - the Fast-Trac NITRO™ 2 has dropped.",
        story:"The lightweight running shoe that will do it all, no matter the terrain - the Fast-Trac NITRO™ 2 has dropped. It delivers a smooth ride and ground-feel on surfaces including including loose trails and gravel, thanks to a full-length NITRO™ top layer embedded in the PROFOAMLITE midsole. Add to that the durable PUMAGRIP-ATR outsole and integrated eyestays for a snug fit, along with details at the toe that help drain humidity and protect from debris – and you're golden with this ground-breaking shoe made for all runners in all four seasons.",
        features:["The upper of the shoes is made with at least 20% recycled materials","Cushioning level: Medium","Lining: 100% Textile","Shoe pronation: Neutral"],
    },
    {
        id:7,
        name:"Electrify NITRO™ 3 Knit Men's Running Shoes",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/309993/02/sv01/fnd/IND/fmt/png/X-Cell-Lightspeed-Women's-Running-Shoes",
        smlimage:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/309993/02/fnd/IND/fmt/png/X-Cell-Lightspeed-Women's-Running-Shoes",
        price:"MRP : ₹ 1695.00",
        details:"The perfect choice for young runners, the Electrify NITRO™ 3 knit running shoe offers a progressive design, delivering cushioning and reliability for your daily jog. In a redesign of the previous models, this dual midsole",
        story:"The perfect choice for young runners, the Electrify NITRO™ 3 knit running shoe offers a progressive design, delivering cushioning and reliability for your daily jog. In a redesign of the previous models, this dual midsole has more NITRO™ in the heel and durable PROFOAMLITE throughout the rest of the midsole. The result is better responsiveness and ride under the foot, for a shoe that's always airy and cushioned. We’ve revamped the breathable mesh upper with a futuristic look and retooled the rest of the shoe with a rolled collar and a heel that will hug your foot. New runners looking for good value: this is your shoe.",
        features:["TPU heel spoiler","Hairy suede and synthetic overlays","Lining: 100% Textile","TPU jewel on the laces"],
    },
    {
        id:8,
        name:"Voyage NITRO™ 3 Men's Running Shoes",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/377745/01/sv01/fnd/IND/fmt/png/Voyage-NITRO%E2%84%A2-3-Men's-Running-Shoes",
        smlimage:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/377745/01/fnd/IND/fmt/png/Voyage-NITRO%E2%84%A2-3-Men's-Running-Shoes",
        price:"MRP : ₹ 2655.00",
        details:"Tackle any terrain in the sturdy confines of the Voyage NITRO™ 3.",
        story:"Tackle any terrain in the sturdy confines of the Voyage NITRO™ 3. In this updated version of the model, we’ve tooled the trail shoe with a full NITROFOAM™ midsole for a lighter weight and more responsive ride when you’re conquering distances. The PUMAGRIP ATR rubber outsole has been revamped with our PWRADAPT tech, allowing the lugs to move independently with the ground for supreme traction on multi-terrain. Our new, wider upper has been reinforced with PWRTAPE for support and protection, and the forefoot drain ports shed water like a champ. Dominate your run, no matter the season, with the Voyage NITRO™ 3.",
        features:["The upper of the shoes is made with at least 20% recycled materials","Hairy suede and synthetic overlays","Lining: 100% Textile","TPU jewel on the laces"],
    },
    {
        id:9,
        name:"SOFTRIDE Pro Coast Unisex Shoes",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/377059/19/sv01/fnd/IND/fmt/png/SOFTRIDE-Pro-Coast-Unisex-Running-Shoes",
        smlimage:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/377059/19/fnd/IND/fmt/png/SOFTRIDE-Pro-Coast-Unisex-Running-Shoes",
        price:"MRP : ₹ 1699.00",
        details:"An all-in-one neutral running shoe for any distance and any weather, the Velocity NITRO™ 2 GORE-TEX® is a lightweight and sleek update to the Run",
        story:"An all-in-one neutral running shoe for any distance and any weather, the Velocity NITRO™ 2 GORE-TEX® is a lightweight and sleek update to the Run PUMA roster. Featuring a waterproof GORE-TEX® upper and NITROFOAM™ for exceptional responsiveness and ultimate cushioning, this upgrade to the original is a well-fitting and durable shoe for a smooth ride. PUMAGRIP offers multi-surface traction, from treadmill to track. ",
        features:["The upper of the shoes is made with at least 20% recycled materials","Hairy suede and synthetic overlays","Lining: 100% Textile","TPU jewel on the laces"],
    },
    {
        id:10,
        name:"Manor Men's Sneakers",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/387364/02/sv01/fnd/IND/fmt/png/Manor-Men's-Sneakers",
        smlimage:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/387364/02/fnd/IND/fmt/png/Manor-Men's-Sneakers",
        price:"MRP : ₹ 1695.00",
        details:"If you're a fan of responsive underfoot experience during their run, then the Manor Men's Shoes is the one for you",
        story:"If you're a fan of responsive underfoot experience during their run, then the Manor Men's Shoes is the one for you. The lightweight and breathable sole will keep feet cool without forgoing support and the comfortable mesh upper will keep them dry and fresh.",
        features:["The upper of the shoes is made with at least 20% recycled materials","Hairy suede and synthetic overlays","Lining: 100% Textile","TPU jewel on the laces"],
    },
    {
        id:11,
        name:"All-Pro NITRO™ Unisex Shoes",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/379924/01/sv01/fnd/IND/fmt/png/All-Pro-NITRO%E2%84%A2-Unisex-Basketball-Shoes",
        smlimage:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/379924/01/sv04/fnd/IND/fmt/png/All-Pro-NITRO%E2%84%A2-Unisex-Basketball-Shoes",
        price:"MRP : ₹ 6695.00",
        details:"Bringing our latest PUMA HOOPS innovations straight to the hardwood, the All Pro NITRO infuses NITROFOAM™ technology with an engineered mesh ",
        story:"Bringing our latest PUMA HOOPS innovations straight to the hardwood, the All Pro NITRO infuses NITROFOAM™ technology with an engineered mesh upper to create a responsive basketball shoe that'll have you sprinting up and down the court in perfect comfort, while the high abrasion rubber outsole is perfect for quick cuts to dance past defenders.",
        features:["The upper of the shoes is made with at least 20% recycled materials","Hairy suede and synthetic overlays","Lining: 100% Textile","TPU jewel on the laces"],
    },
    {
        id:12,
        name:"Fuse 2.0 Forged Men's Training Shoes",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/378818/01/mod01/fnd/IND/fmt/png/Fuse-2.0-Forged-Men's-Training-Shoes",
        smlimage:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/378818/01/sv02/fnd/IND/fmt/png/Fuse-2.0-Forged-Men's-Training-Shoes",
        price:"MRP : ₹ 7999.00",
        details:"We worked with professional athletes to amplify three key training attributes—stability, fit, and traction. The FUSE 2.0 ",
        story:"We worked with professional athletes to amplify three key training attributes—stability, fit, and traction. The FUSE 2.0 features increased rubber for enhanced stability, including higher sidewall coverage to ensure traction and grip. The streamlined upper construction provides durability for rope climbs, while a lightweight TPU heel clip is designed for handstand push-ups. And all this innovation comes in one sleek package to help you reach your ultimate training potential. The Forged version features some wild graphic elements across the outsole",
        features:["PUMAGRIP rubber outsole","Heel-to-toe drop: 4 mm","TPU heel clip","SUPPORT: TPU clip for enhanced heel support"],
    },
    {
        id:13,
        name:"Fuse 2.0 Forged Men's Training Shoes",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/376151/19/mod01/fnd/IND/fmt/png/Fuse-2.0-Men's-Training-Shoes",
        smlimage:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/376151/19/sv02/fnd/IND/fmt/png/Fuse-2.0-Men's-Training-Shoes",
        price:"MRP : ₹ 11999.00",
        details:"We worked with professional athletes to amplify three key training attributes—stability, fit, and traction. The FUSE 2.0 ",
        story:"Introducing the latest high-performance training shoe from the TRAIN PUMA squad, the PWR NITRO™ SQD. This universal training shoe features our brand-new NITRO™ SQD technology, which is executed with a dual density nitrogen-injected outer to provide enhanced midsole banking during lateral movements. The internal compound is single density NITROFOAM™ to allow for rebounding and cushioning. With PWR NITRO™ SQD, you'll receive not only world-class comfort and stability during your next high intensity gym session",
        features:["PUMAGRIP rubber outsole","Heel-to-toe drop: 4 mm","TPU heel clip","SUPPORT: TPU clip for enhanced heel support"],
    },
    {
        id:14,
        name:"PWRFrame TR 2 Men's Training Shoes",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/378790/01/mod01/fnd/IND/fmt/png/PWRFrame-TR-2-Men's-Training-Shoes",
        smlimage:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/378790/01/sv04/fnd/IND/fmt/png/PWRFrame-TR-2-Men's-Training-Shoes",
        price:"MRP : ₹ 6695.00",
        details:'Start every workout the right way and with the ultimate foundation. PWRFrame TR 2 ',
        story:'Start every workout the right way and with the ultimate foundation. PWRFrame TR 2 is a high-performance training shoe that features a 3D midsole frame system engineered for forefoot support during explosive movements. This targeted technology helps keep you steady through every interval and a wide range of routines. Prepare to own your session in this function-packed style.',
        features:["The upper of the shoes is made with at least 20% recycled materials","Hairy suede and synthetic overlays","Lining: 100% Textile","TPU jewel on the laces"],
    },
    {
        id:15,
        name:"Dynamite Slip-On Men's Sneakers",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/388704/02/sv01/fnd/IND/fmt/png/Dynamite-Slip-On-Men's-Sneakers",
        smlimage:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/388704/02/sv04/fnd/IND/fmt/png/Dynamite-Slip-On-Men's-Sneakers",
        price:"MRP: ₹1399",
        details:'Step in everyday to comfort and performance to a whole new level. With its laceless upper construction, you have an ergonomic shape',
        story:'Step in everyday to comfort and performance to a whole new level. With its laceless upper construction, you have an ergonomic shape, while the stretchable materials gives you the support and flexibility you need. The comfort sockliner, meanwhile, provides all-day cushioning. Add to that the stretchy neoprene collar and elastic mesh material, and you have a pair of trainers that are ideal for everyday wear.',
        features:["Heel type: Flat","SoftFoam+ sockliner for cushioning and comfort","Low boot construction","Rubber Outsole gives ideal grip & traction"],
    },
    {
        id:16,
        name:"SOFTRIDE Feel Men's Slip-On Unisex Walking Shoes",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/378019/02/fnd/IND/fmt/png/SOFTRIDE-Feel-Men's-Slip-On-Unisex-Walking-Shoes",
        smlimage:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/378019/02/sv04/fnd/IND/fmt/png/SOFTRIDE-Feel-Men's-Slip-On-Unisex-Walking-Shoes",
        price:"MRP : ₹ 1999.00",
        details:"PUMA's SOFTRIDE technology represents an advancement in footwear comfort.",
        story:"PUMA's SOFTRIDE technology represents an advancement in footwear comfort. It incorporates our softest foam, designed to deliver extreme cushioning that promotes sustained comfort throughout the day. The SOFTRIDE midsole, softer and lighter than traditional EVA, extends through the full length of the shoe. This innovative construction enhances the wearer's experience, providing lightweight support during daily activities.",
        features:["Heel type: Flat","SoftFoam+ sockliner for cushioning and comfort","Low boot construction","Rubber Outsole gives ideal grip & traction"],
    },
    {
            id:17,
            name:"SOFTRIDE Premier So Splatter Men's Running Shoes",
            image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/376957/01/dt05/fnd/IND/fmt/png/SOFTRIDE-Premier-So-Splatter-Men's-Running-Shoes",
            smlimage:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/376957/01/sv04/fnd/IND/fmt/png/SOFTRIDE-Premier-So-Splatter-Men's-Running-Shoes",
            price:"MRP: ₹1599",
            details:"PUMA's SOFTRIDE technology represents an advancement in footwear comfort.",
            story:"PUMA's SOFTRIDE technology represents an advancement in footwear comfort. It incorporates our softest foam, designed to deliver extreme cushioning that promotes sustained comfort throughout the day. The SOFTRIDE midsole, softer and lighter than traditional EVA, extends through the full length of the shoe. This innovative construction enhances the wearer's experience, providing lightweight support during daily activities.",
            features:["Heel type: Flat","SoftFoam+ sockliner for cushioning and comfort","Low boot construction","Rubber Outsole gives ideal grip & traction"],
            features:["The upper of the shoes is made with at least 20% recycled materials","Hairy suede and synthetic overlays","Lining: 100% Textile","TPU jewel on the laces"],
        },
        {
        id:18,
        name:"PUMA x one8 Stark V3 Men's Flip-Flops",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/384459/03/sv04/fnd/IND/fmt/png/PUMA-x-one8-Stark-V3-Men's-Flip-Flops",
        smlimage:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/384459/03/fnd/IND/fmt/png/PUMA-x-one8-Stark-V3-Men's-Flip-Flops",
        price:"MRP : ₹ 1199.00",
        details:"Energize your athletic spirit with PUMA x one8 Virat Kohli collection. Echoing Virat's favourites, the dynamic sportswear",
        story:"Energize your athletic spirit with PUMA x one8 Virat Kohli collection. Echoing Virat's favourites, the dynamic sportswear and athleisure line supports both vigorous workouts and relaxed outings. Designed for the active individual, this iconic collection celebrates the transformative power of sport. Embrace a faster, better, forever lifestyle and live your game!",
        features:["Padded synthetic leather strap","Firm EVA outsole for grip and durability","Lining: 100% Textile","Moulded footbed for soft comfort with one8 insignia"],
    },
    {
        id:19,
        name:"Nike Asuna 3s",
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/10409fca-152b-4abc-a830-ce19248ba441/asuna-3-slides-fX8tl7.png",
        smlimage:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a50cb65f-f6c0-4a3a-b832-87599b3f93f5/asuna-3-slides-fX8tl7.png",
        price:"MRP : ₹ 2199.00",
        details:"The Asuna gets a utilitarian twist in its third rendition.",
        story:"The Asuna gets a utilitarian twist in its third rendition. Its iconic side lacing system takes a step back for a padded strap with a minimalist closure that makes customising your fit even simpler. The adjustable strap accommodates your foot's shape and size, as well as your comfiest socks. These aren't your average pool slides—but you'll want to wear them there, too.",
        features:["Outsole is designed for both traction and flexibility.","Hairy suede and synthetic overlays","Lining: 100% Textile","Dots in the footbed optimise grip to help keep your foot in place."],
    },
    {
        id:20,
        
        name:"Nike Air More Uptempo",
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9c0bd977-85a3-4f75-b0a8-b7b03c8fba3a/air-more-uptempo-slides-32GKw3.png",
        smlimage:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/24d97e72-0e6f-46c7-9f56-bbb4975bb229/air-more-uptempo-slides-32GKw3.png",
        price:"MRP : ₹ 4099.00",
        details:"Keeping the exaggerated, graffiti-styled 'AIR' graphics and the full-length Nike Air cushioning you love from the original, your favourite hoops look is transformed into an easy on/easy off slide.",
        story:"Keeping the exaggerated, graffiti-styled 'AIR' graphics and the full-length Nike Air cushioning you love from the original, your favourite hoops look is transformed into an easy on/easy off slide. Pairing '90s style with summertime comfort, its plush strap, airy perforations and soft foam make it a perfect choice—courtside, beachside and anywhere in between.",
        features:["The foam footbed is contoured to help keep your foot in place.","Hairy suede and synthetic overlays","Lining: 100% Textile","Dots in the footbed optimise grip to help keep your foot in place."],
    },
    {
        id:21,
        name:"Badminton Smash Sprint Unisex Indoor Sports Shoes",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/108127/04/sv01/fnd/IND/fmt/png/Badminton-Smash-Sprint-Unisex-Indoor-Sports-Shoes",
        smlimage:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/108127/04/fnd/IND/fmt/png/Badminton-Smash-Sprint-Unisex-Indoor-Sports-Shoes",
        price:"MRP: ₹1699",
        details:"Ready for the smash? Experience the revolution of Variofoam, offering a lightweight cushion that propels you to leap and lunge with ease.",
        story:"Ready for the smash? Experience the revolution of Variofoam, offering a lightweight cushion that propels you to leap and lunge with ease. The Variomesh upper envelopes your feet in unparalleled breathability and comfort, keeping you cool as the match heats up. Designed with a non-marking outsole for flawless movement and a stability frame that delivers exceptional lateral and medial support, these shoes are the ultimate ally in every intense rally.",
        features:["The upper of the shoes is made with at least 20% recycled materials","Hairy suede and synthetic overlays","Lining: 100% Textile","TPU jewel on the laces"],
    },
    {
        id:22,
        name:"Badminton Smash Sprint Unisex Indoor Sports Shoes",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/106882/06/sv01/fnd/IND/fmt/png/Solarflash-II-Unisex-Indoor-Sports-Shoes",
        smlimage:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/106882/06/fnd/IND/fmt/png/Solarflash-II-Unisex-Indoor-Sports-Shoes",
        price:"MRP: ₹1699",
        details:"Ready for the smash? Experience the revolution of Variofoam, offering a lightweight cushion that propels you to leap and lunge with ease.",
        story:"Ready for the smash? Experience the revolution of Variofoam, offering a lightweight cushion that propels you to leap and lunge with ease. The Variomesh upper envelopes your feet in unparalleled breathability and comfort, keeping you cool as the match heats up. Designed with a non-marking outsole for flawless movement and a stability frame that delivers exceptional lateral and medial support, these shoes are the ultimate ally in every intense rally.",
        features:["The upper of the shoes is made with at least 20% recycled materials","Hairy suede and synthetic overlays","Lining: 100% Textile","TPU jewel on the laces"],
    },
    {
        id:23,
        name:"Badminton Smash Sprint Unisex Indoor Sports Shoes",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/106934/05/sv01/fnd/IND/fmt/png/Pressing-III-Unisex-Indoor-Court-Shoes",
        smlimage:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/106934/05/fnd/IND/fmt/png/Pressing-III-Unisex-Indoor-Court-Shoes",
        price:"MRP: ₹1699",
        details:"Ready for the smash? Experience the revolution of Variofoam, offering a lightweight cushion that propels you to leap and lunge with ease.",
        story:"Ready for the smash? Experience the revolution of Variofoam, offering a lightweight cushion that propels you to leap and lunge with ease. The Variomesh upper envelopes your feet in unparalleled breathability and comfort, keeping you cool as the match heats up. Designed with a non-marking outsole for flawless movement and a stability frame that delivers exceptional lateral and medial support, these shoes are the ultimate ally in every intense rally.",
        features:["The upper of the shoes is made with at least 20% recycled materials","Hairy suede and synthetic overlays","Lining: 100% Textile","TPU jewel on the laces"],
    },
    {
        id:24,
        name:"PUMA 24 FH Rubber Unisex Cricket Shoes",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/107699/02/sv02/fnd/IND/fmt/png/PUMA-24-FH-Rubber-Unisex-Cricket-Shoes",
        smlimage:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/107699/02/fnd/IND/fmt/png/PUMA-24-FH-Rubber-Unisex-Cricket-Shoes",
        price:"MRP : ₹ 5399.00",
        details:"PUMA 24 FH Rubber is a cricket shoe designed for hard wicket surfaces and other turf sports",
        story:"PUMA 24 FH Rubber is a cricket shoe designed for hard wicket surfaces and other turf sports. The soft, synthetic upper with a regular tongue construction provides comfort and breathability. EVA technology in the midsole is combined with an outsole that provides outstanding grip and a pivot point for quick changes in movement.",
        features:["Rounded toe","Midsole: EVA foam","Low-cut construction around the heel area.","Upper: Synthetic"],
    },
    {
        id:25,
        name:"PUMA Spike 22.2 Unisex Cricket Shoes",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/107299/06/sv02/fnd/IND/fmt/png/PUMA-Spike-22.2-Unisex-Cricket-Shoes",
        smlimage:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/107299/06/bv/fnd/IND/fmt/png/PUMA-Spike-22.2-Unisex-Cricket-Shoes",
        price:"MRP : ₹ 7699.00",
        details:"PUMA Bowling 22.1 is a cricket shoe designed to provide speed, stability, and support for bowlers.",
        story:"PUMA Bowling 22.1 is a cricket shoe designed to provide speed, stability, and support for bowlers. The upper protects the foot with a soft synthetic material wrapping the lateral sides and the forefoot area. Perforations on the forefoot make the spikes breathable. A cross-over tongue construction with internal elastic fastening keeps you stable while taking off and landing.",
        features:["Upper: Synthetic with additional strap locks","Midsole: EVA foam","Low-cut construction around the heel area.","Upper: Synthetic"],
    },
    {
        id:26,
        name:"PUMA Bowling 24.1 Unisex Cricket Shoes",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/107697/02/sv02/fnd/IND/fmt/png/PUMA-Bowling-24.1-Unisex-Cricket-Shoes",
        smlimage:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/107697/02/sv04/fnd/IND/fmt/png/PUMA-Bowling-24.1-Unisex-Cricket-Shoes",
        price:"MRP : ₹ 10999.00",
        details:"PUMA Bowling 22.1 is a cricket shoe designed to provide speed, stability, and support for bowlers.",
        story:"PUMA Bowling 22.1 is a cricket shoe designed to provide speed, stability, and support for bowlers. The upper protects the foot with a soft synthetic material wrapping the lateral sides and the forefoot area. Perforations on the forefoot make the spikes breathable. A cross-over tongue construction with internal elastic fastening keeps you stable while taking off and landing.",
        features:["Upper: Synthetic with additional strap locks","Midsole: EVA foam","Low-cut construction around the heel area.","Upper: Synthetic"],
    },
    {
        id:27,
        name:"King Ultimate FG/AG Unisex Football Boots",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/107566/03/fnd/IND/fmt/png/KING-PRO-FG/AG-Unisex-Football-Boots",
        smlimage:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/107566/03/sv02/fnd/IND/fmt/png/KING-PRO-FG/AG-Unisex-Football-Boots",
        price:"MRP : ₹ 5399.00",
        details:"Control never felt this comfortable. An icon that spans generations, the KING is back with bold design upgrades and innovative materials",
        story:"Control never felt this comfortable. An icon that spans generations, the KING is back with bold design upgrades and innovative materials that work better – for the player and for the planet. Like the all-new K-BETTER™upper material, made with recycled content while also improving the signature touch, comfort, and stretch resistance. The new lightweight outsole features an external heel counter, integrated stability spine, and conical studs, so you have as much control over your movement as you do over the ball.",
        features:["Upper: Synthetic with additional strap locks","Midsole: EVA foam","Low-cut construction around the heel area.","Upper: Synthetic"],
    },
    {
        id:28,
        name:"King Ultimate FG/AG Unisex Football Boots",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/107563/07/fnd/IND/fmt/png/King-Ultimate-FG/AG-Unisex-Football-Boots",
        smlimage:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/107563/07/sv02/fnd/IND/fmt/png/King-Ultimate-FG/AG-Unisex-Football-Boots",
        price:"MRP : ₹ 5399.00",
        details:"Control never felt this comfortable. An icon that spans generations, the KING is back with bold design upgrades and innovative materials",
        story:"Control never felt this comfortable. An icon that spans generations, the KING is back with bold design upgrades and innovative materials that work better – for the player and for the planet. Like the all-new K-BETTER™upper material, made with recycled content while also improving the signature touch, comfort, and stretch resistance. The new lightweight outsole features an external heel counter, integrated stability spine, and conical studs, so you have as much control over your movement as you do over the ball.",
        features:["Upper: Synthetic with additional strap locks","Midsole: EVA foam","Low-cut construction around the heel area.","Upper: Synthetic"],
    },
    {
        id:29,
        name:"VITORIA TT Men's Football Boots",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/107484/01/sv01/fnd/IND/fmt/png/VITORIA-TT-Men's-Football-Boots",
        smlimage:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/107484/01/sv02/fnd/IND/fmt/png/VITORIA-TT-Men's-Football-Boots",
        price:"MRP : ₹ 4999.00",
        details:"Our VITORIA football boots are made for players looking for a low-maintenance boot with a classic design but built for the modern game.",
        story:"Our VITORIA football boots are made for players looking for a low-maintenance boot with a classic design but built for the modern game. It combines a soft upper with enhanced stitching for pitch-perfect control and an outsole that helps with your quick cuts.",
        features:["Low boot","Midsole: EVA foam","Lightweight synthetic upper","Regular fit"],
    },
    {
        id:30,
        name:"MB.03 Toxic Unisex Basketball Shoes",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/378916/01/sv02/fnd/IND/fmt/png/MB.03-Toxic-Unisex-Basketball-Shoes",
        smlimage:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/378916/01/bv/fnd/IND/fmt/png/MB.03-Toxic-Unisex-Basketball-Shoes",
        price:"MRP : ₹ 12699.00",
        details:"LaMelo Ball's third signature shoe MB.03 takes a trip to the never before seen alternative universe that is the Melo world.",
        story:"LaMelo Ball's third signature shoe MB.03 takes a trip to the never before seen alternative universe that is the Melo world. Highlighted by slime inspired rubber wrap-ups and an engineered knit upper with scratch cutouts, the MB3 is truly Not From Here. The slime sole and space-age PUMA Hoops tech, including NITRO™ foam, make tournament ready look interplanetary.",
        features:["Mid boot","Heel type: Block heel","Shoe pronation: Neutral","High abrasion, non-slip rubber outsole"],
    },
    {
        id:31,
        name:"MB.03 Toxic Unisex Basketball Shoes",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/379235/01/sv02/fnd/IND/fmt/png/MB.03-Hills-Unisex-Basketball-Shoes",
        smlimage:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/379235/01/sv04/fnd/IND/fmt/png/MB.03-Hills-Unisex-Basketball-Shoes",
        price:"MRP : ₹ 12699.00",
        details:"LaMelo Ball's third signature shoe MB.03 takes a trip to the never before seen alternative universe that is the Melo world.",
        story:"LaMelo Ball's third signature shoe MB.03 takes a trip to the never before seen alternative universe that is the Melo world. Highlighted by slime inspired rubber wrap-ups and an engineered knit upper with scratch cutouts, the MB3 is truly Not From Here. The slime sole and space-age PUMA Hoops tech, including NITRO™ foam, make tournament ready look interplanetary.",
        features:["Mid boot","Heel type: Block heel","Shoe pronation: Neutral","High abrasion, non-slip rubber outsole"],
    },
    {
        id:32,
        name:"MB.03 Toxic Unisex Basketball Shoes",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/309716/01/sv02/fnd/IND/fmt/png/MB.03-CNY-Unisex-Basketball-Shoes",
        smlimage:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/309716/01/fnd/IND/fmt/png/MB.03-CNY-Unisex-Basketball-Shoes",
        price:"MRP : ₹ 12699.00",
        details:"LaMelo Ball's third signature shoe MB.03 takes a trip to the never before seen alternative universe that is the Melo world.",
        story:"LaMelo Ball's third signature shoe MB.03 takes a trip to the never before seen alternative universe that is the Melo world. Highlighted by slime inspired rubber wrap-ups and an engineered knit upper with scratch cutouts, the MB3 is truly Not From Here. The slime sole and space-age PUMA Hoops tech, including NITRO™ foam, make tournament ready look interplanetary.",
        features:["Mid boot","Heel type: Block heel","Shoe pronation: Neutral","High abrasion, non-slip rubber outsole"],
    },
]

let under_5000=document.getElementById("under5000");
let under_10000=document.getElementById("under10000");
let list2=document.getElementById("sneakers");

under_5000.addEventListener('click',function(){
    
allproducts.forEach((value,key)=>{
    const priceMatch = value.price.match(/\d+/);
    const itemPrice = priceMatch ? parseInt(priceMatch[0]) : 0; 
    if(itemPrice<5000){
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
    }

});
});
under_10000.addEventListener('click',function(){

allproducts.forEach((value,key)=>{
    const priceMatch = value.price.match(/\d+/);
    const itemPrice = priceMatch ? parseInt(priceMatch[0]) : 0; 
    if(itemPrice<=10000){
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
    }

});
});

// let list2=document.getElementById("sneakers");
// allproducts.forEach((value,key)=>{
//     const priceMatch = value.price.match(/\d+/);
//     const itemPrice = priceMatch ? parseInt(priceMatch[0]) : 0; 
//     if(itemPrice<5000){
//         let newDiv = document.createElement('div');
//         newDiv.classList.add('item');
//         newDiv.innerHTML = `
//         <div class="shoecard">
//         <div class="imageholder-1" style='background-image: url("${value.image}");'></div>
//             <div class="price-cont">
//                 <h1>${value.name}</h1>
//                 <h2 class="price">${value.price.toLocaleString()}<h2>
//             </div>    
//         </div>`;    
//         let keys=(value.id);
//         newDiv.addEventListener("click", function () {
//             window.open("men-productpage.html?index=" + keys, "_blank");
//         });   
//         list2.appendChild(newDiv);
//     }
// });