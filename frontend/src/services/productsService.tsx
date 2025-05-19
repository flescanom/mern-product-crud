export const getProducts = async () => {
  const response = await fetch("http://localhost:3000/api/products");
  const json = await response.json();
  return json.products;
}

export const deleteProduct = async (id: number) => {
  const response = await fetch(`http://localhost:3000/api/products/${id}`, {
    method: "DELETE",
  });
  const json = await response.json();
  return json;
}