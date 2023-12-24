export default async function fetchData() {
      const response = await fetch('https://fakestoreapi.com/products');
      return await response.json();
  }
  