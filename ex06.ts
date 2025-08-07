interface Category {
  id: string;
  name: string;
}

interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  discount?: number;
}

const listProduct: Product[] = [
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

function getFinalPrice(product: Product): number {
  if (product.discount) {
    return product.price * (1 - product.discount / 100);
  }
  return product.price;
}

function printProductInfo(product: Product): void {
  const finalPrice = getFinalPrice(product);
  console.log(`Tên: ${product.name}`);
  console.log(`Giá gốc: ${product.price} VND`);
  console.log(`Giá sau giảm: ${finalPrice} VND`);
  console.log(`Danh mục: ${product.category.name}`);
}

listProduct.forEach(printProductInfo);
