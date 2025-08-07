var listProduct = [
    {
        id: "sp001",
        name: "Áo sơ mi",
        price: 300000,
        category: {
            id: "thoi-trang-nam",
            name: "Thời trang nam",
        },
        discount: 20,
    },
    {
        id: "sp002",
        name: "Quần jean",
        price: 500000,
        category: {
            id: "thoi-trang-nam",
            name: "Thời trang nam",
        },
    },
    {
        id: "sp003",
        name: "Giày thể thao",
        price: 1200000,
        category: {
            id: "giay-dep",
            name: "Giày dép",
        },
        discount: 10,
    },
];
function getFinalPrice(product) {
    if (product.discount) {
        return product.price * (1 - product.discount / 100);
    }
    return product.price;
}
function printProductInfo(product) {
    var finalPrice = getFinalPrice(product);
    console.log("T\u00EAn: ".concat(product.name));
    console.log("Gi\u00E1 g\u1ED1c: ".concat(product.price, " VND"));
    console.log("Gi\u00E1 sau gi\u1EA3m: ".concat(finalPrice, " VND"));
    console.log("Danh m\u1EE5c: ".concat(product.category.name));
}
listProduct.forEach(printProductInfo);
