type Product = {
  id: string;
  title: string;
  price: number;
  images?: string[];
  condition: string;
  age: number;
  category: string;
  initialPrice: number;
};

const mockProducts: Product[] = [
  {
    id: "1",
    title: "Product 1",
    price: 100,
    condition: "New",
    age: 0,
    category: "Category 1",
    initialPrice: 100,
  },
  {
    id: "2",
    title: "Product 2",
    price: 200,
    condition: "New",
    age: 0,
    category: "Category 2",
    initialPrice: 200,
  },
  {
    id: "3",
    title: "Product 3",
    price: 300,
    condition: "New",
    age: 0,
    category: "Category 3",
    initialPrice: 300,
  },
];

export const getProducts = async (): Promise<Product[]> => {
  return mockProducts;
};
