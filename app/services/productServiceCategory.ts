// import { getToken } from "@/utils/auth";

// const API = "https://stockas.azurewebsites.net";

// export const getProductCategories = async () => {
//   const token = getToken();
//   const response = await fetch(`${API}/api/product-categories`, {
//     headers: {
//       Authorization: token ? `Bearer ${token}` : "",
//     },
//   });

//   if (!response.ok) {
//     const errorText = await response.text();
//     throw new Error(errorText || "Failed to fetch product categories");
//   }

//   return await response.json();
// };

// export const createProductCategory = async (name: string) => {
//   const token = getToken();
//   const response = await fetch(`${API}/api/product-categories`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: token ? `Bearer ${token}` : "",
//     },
//     body: JSON.stringify({ categoryName: name }),
//   });

//   if (!response.ok) {
//     const errorText = await response.text();
//     throw new Error(errorText || "Failed to create product category");
//   }

//   return await response.json();
// };

// export const updateProductCategory = async (id: number, name: string) => {
//   const token = getToken();
//   const response = await fetch(`${API}/api/product-categories/${id}`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: token ? `Bearer ${token}` : "",
//     },
//     body: JSON.stringify({ categoryName: name }),
//   });

//   if (!response.ok) {
//     const errorText = await response.text();
//     throw new Error(errorText || "Failed to update product category");
//   }

//   return await response.json();
// };

// export const deleteProductCategory = async (id: number) => {
//   const token = getToken();
//   const response = await fetch(`${API}/api/product-categories/${id}`, {
//     method: "DELETE",
//     headers: {
//       Authorization: token ? `Bearer ${token}` : "",
//     },
//   });

//   if (response.status === 204) return null;

//   if (!response.ok) {
//     const error = await response.json();
//     throw new Error(error.title || "Failed to delete product category");
//   }

//   return await response.json();
// };
