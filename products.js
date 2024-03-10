const products = [
    {
        "id": 1,
        "name":" Jordan One Take 5 PF",
        "price": 8695,
        "image": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d23af4de-eaba-4e35-9e57-191f48756e46/jordan-one-take-5-pf-shoes-jNx9SV.png",
        "description": "Nike, synonymous with innovation and performance, continues to revolutionize the athletic footwear industry with its iconic Air Max series. Featuring cutting-edge technology and sleek designs, Nike Air Max shoes offer unparalleled comfort and style for athletes and sneaker enthusiasts alike."
    },
    {
        "id": 2,
        "name":" Air Jordan 1 Low SE",
        "price": 10295,
        "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d7171a94-218e-4945-98cb-43715284f69c/air-jordan-1-low-se-shoes-WSkjPL.png",
        "description": "Here's some straightforward, good-looking AJ1s. Were you expecting anything less? Crafted from crisp leather, they feature comfortable Nike Air cushioning in the sole. An embroidered Swoosh logo puts the finishing touch on this all-time favourite."
    },
    {
        "id": 3,
        "name":" Red Tape",
        "price": 1179,
        "image": "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/26950142/2024/1/16/ebf51408-9e27-4b3d-8df9-baaa7e18c1751705409471876RedTapeMenBlackColourblockedPUSneakers2.jpg",
        "description": "A pair of white & black perforations round toe casual sneakers with regular styling has a lace-up closure Synthetic mesh upper Cushioned footbed"
    },
    {
        "id": 4,
        "name":"ADIDAS FORUM MOD LOW SHOES",
        "price": 11999,
        "image": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/203c8d315b4a45e6bc65dc109f3fd19c_9366/Forum_Mod_Low_Shoes_Red_IG3766_04_standard.jpg  ",
        "description": "Bring preppy style into the modern era with these low-cut adidas shoes. A playful, personality-packed upper and iconic details redesigned for today reinvent the vintage Forum silhouette. Wear them anywhere — an EVA midsole and rubber outsole give you support and swagger.This product features at least 20% recycled materials."
    },
    {
        "id": 5,
        "name":"Puma Porsche Legacy Caven 2.0 Unisex Motorsport Sneakers",
        "price": 6999,
        "image": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/308158/02/sv01/fnd/IND/fmt/png/Porsche-Legacy-Caven-2.0-Unisex-Motorsport-Sneakers",
        "description": "We took our throwback 1980s basketball shoe and added a stand-out stacked midsole, and what we got is a trainer we think you'll love. Porsche Legacy Caven 2.0 features the brand's most iconic colours as well as the Porsche Legacy logo on the tongue."
    },
    {
        "id": 6,
        "name":"Louis Vuitton Originals | Beverly Hills Sneaker",
        "price": 96000,
        "image": "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-beverly-hills-sneaker-shoes--BQDU1PPC45_PM2_Front%20view.png?wid=1090&hei=1090",
        "description": "This bicolor edition of the Beverly Hills sneaker comes in soft calf leather partially printed with an oversized version of the Damier pattern. This model pairs an elegant upper with a chunky, yet ultra-lightweight, rubber outsole, which is debossed with the Louis Vuitton signature. A padded insole and technical lining provide enhanced comfort and suppleness."
    },
    {
        "id": 7,
        "name":" Jordan One Take 5 PF",
        "price": 8695,
        "image": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d23af4de-eaba-4e35-9e57-191f48756e46/jordan-one-take-5-pf-shoes-jNx9SV.png",
        "description": "Nike, synonymous with innovation and performance, continues to revolutionize the athletic footwear industry with its iconic Air Max series. Featuring cutting-edge technology and sleek designs, Nike Air Max shoes offer unparalleled comfort and style for athletes and sneaker enthusiasts alike."
    },
    {
        "id": 8,
        "name":" Air Jordan 1 Low SE",
        "price": 10295,
        "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d7171a94-218e-4945-98cb-43715284f69c/air-jordan-1-low-se-shoes-WSkjPL.png",
        "description": "Here's some straightforward, good-looking AJ1s. Were you expecting anything less? Crafted from crisp leather, they feature comfortable Nike Air cushioning in the sole. An embroidered Swoosh logo puts the finishing touch on this all-time favourite."
    },
    {
        "id": 9,
        "name":" Red Tape",
        "price": 1179,
        "image": "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/26950142/2024/1/16/ebf51408-9e27-4b3d-8df9-baaa7e18c1751705409471876RedTapeMenBlackColourblockedPUSneakers2.jpg",
        "description": "A pair of white & black perforations round toe casual sneakers with regular styling has a lace-up closure Synthetic mesh upper Cushioned footbed"
    },
    {
        "id": 10,
        "name":"ADIDAS FORUM MOD LOW SHOES",
        "price": 11999,
        "image": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/203c8d315b4a45e6bc65dc109f3fd19c_9366/Forum_Mod_Low_Shoes_Red_IG3766_04_standard.jpg  ",
        "description": "Bring preppy style into the modern era with these low-cut adidas shoes. A playful, personality-packed upper and iconic details redesigned for today reinvent the vintage Forum silhouette. Wear them anywhere — an EVA midsole and rubber outsole give you support and swagger.This product features at least 20% recycled materials."
    },
    {
        "id": 11,
        "name":"Puma Porsche Legacy Caven 2.0 Unisex Motorsport Sneakers",
        "price": 6999,
        "image": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/308158/02/sv01/fnd/IND/fmt/png/Porsche-Legacy-Caven-2.0-Unisex-Motorsport-Sneakers",
        "description": "We took our throwback 1980s basketball shoe and added a stand-out stacked midsole, and what we got is a trainer we think you'll love. Porsche Legacy Caven 2.0 features the brand's most iconic colours as well as the Porsche Legacy logo on the tongue."
    },
    {
        "id": 12,
        "name":"Louis Vuitton Originals | Beverly Hills Sneaker",
        "price": 96000,
        "image": "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-beverly-hills-sneaker-shoes--BQDU1PPC45_PM2_Front%20view.png?wid=1090&hei=1090",
        "description": "This bicolor edition of the Beverly Hills sneaker comes in soft calf leather partially printed with an oversized version of the Damier pattern. This model pairs an elegant upper with a chunky, yet ultra-lightweight, rubber outsole, which is debossed with the Louis Vuitton signature. A padded insole and technical lining provide enhanced comfort and suppleness."
    },
    {
        "id": 13,
        "name":" Jordan One Take 5 PF",
        "price": 8695,
        "image": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d23af4de-eaba-4e35-9e57-191f48756e46/jordan-one-take-5-pf-shoes-jNx9SV.png",
        "description": "Nike, synonymous with innovation and performance, continues to revolutionize the athletic footwear industry with its iconic Air Max series. Featuring cutting-edge technology and sleek designs, Nike Air Max shoes offer unparalleled comfort and style for athletes and sneaker enthusiasts alike."
    },
    {
        "id": 14,
        "name":" Air Jordan 1 Low SE",
        "price": 10295,
        "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d7171a94-218e-4945-98cb-43715284f69c/air-jordan-1-low-se-shoes-WSkjPL.png",
        "description": "Here's some straightforward, good-looking AJ1s. Were you expecting anything less? Crafted from crisp leather, they feature comfortable Nike Air cushioning in the sole. An embroidered Swoosh logo puts the finishing touch on this all-time favourite."
    },
    {
        "id": 15,
        "name":" Red Tape",
        "price": 1179,
        "image": "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/26950142/2024/1/16/ebf51408-9e27-4b3d-8df9-baaa7e18c1751705409471876RedTapeMenBlackColourblockedPUSneakers2.jpg",
        "description": "A pair of white & black perforations round toe casual sneakers with regular styling has a lace-up closure Synthetic mesh upper Cushioned footbed"
    },
    {
        "id": 16,
        "name":"ADIDAS FORUM MOD LOW SHOES",
        "price": 11999,
        "image": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/203c8d315b4a45e6bc65dc109f3fd19c_9366/Forum_Mod_Low_Shoes_Red_IG3766_04_standard.jpg  ",
        "description": "Bring preppy style into the modern era with these low-cut adidas shoes. A playful, personality-packed upper and iconic details redesigned for today reinvent the vintage Forum silhouette. Wear them anywhere — an EVA midsole and rubber outsole give you support and swagger.This product features at least 20% recycled materials."
    },
    {
        "id": 17,
        "name":"Puma Porsche Legacy Caven 2.0 Unisex Motorsport Sneakers",
        "price": 6999,
        "image": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/308158/02/sv01/fnd/IND/fmt/png/Porsche-Legacy-Caven-2.0-Unisex-Motorsport-Sneakers",
        "description": "We took our throwback 1980s basketball shoe and added a stand-out stacked midsole, and what we got is a trainer we think you'll love. Porsche Legacy Caven 2.0 features the brand's most iconic colours as well as the Porsche Legacy logo on the tongue."
    },
    {
        "id": 18,
        "name":"Louis Vuitton Originals | Beverly Hills Sneaker",
        "price": 96000,
        "image": "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-beverly-hills-sneaker-shoes--BQDU1PPC45_PM2_Front%20view.png?wid=1090&hei=1090",
        "description": "This bicolor edition of the Beverly Hills sneaker comes in soft calf leather partially printed with an oversized version of the Damier pattern. This model pairs an elegant upper with a chunky, yet ultra-lightweight, rubber outsole, which is debossed with the Louis Vuitton signature. A padded insole and technical lining provide enhanced comfort and suppleness."
    },
    

];
export default products;