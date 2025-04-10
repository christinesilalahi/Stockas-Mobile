// import { getToken } from "@/utils/auth";
// import { ProductInput } from "../types/product";

// const API = "https://stockas.azurewebsites.net";

// export const getProducts = async (
//   queryOrPage: string | number = 1,
//   pageSize = 10
// ) => {
//   const token = getToken();
//   let url = `${API}/api/products`;

//   if (typeof queryOrPage === "string") {
//     url += queryOrPage;
//   } else {
//     url += `?page=${queryOrPage}&pageSize=${pageSize}`;
//   }

//   const response = await fetch(url, {
//     headers: {
//       Authorization: token ? `Bearer ${token}` : "",
//     },
//   });

//   const data = await response.json();
//   if (!response.ok) throw new Error(JSON.stringify(data));

//   return {
//     items: Array.isArray(data) ? data : data.items ?? [],
//     totalCount: data.totalCount ?? (Array.isArray(data) ? data.length : 0),
//   };
// };

// export const createProduct = async (data: ProductInput) => {
//   const token = getToken();
//   const response = await fetch(`${API}/api/products`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: token ? `Bearer ${token}` : "",
//     },
//     body: JSON.stringify(data),
//   });

//   if (!response.ok) {
//     const err = await response.json();
//     throw new Error(JSON.stringify(err));
//   }

//   return await response.json();
// };

// export const updateProduct = async (id: number, data: ProductInput) => {
//   const token = getToken();
//   const response = await fetch(`${API}/api/products/${id}`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: token ? `Bearer ${token}` : "",
//     },
//     body: JSON.stringify(data),
//   });

//   if (!response.ok) {
//     const errorText = await response.text();
//     throw new Error(errorText || "Failed to update product");
//   }

//   return await response.json();
// };

// export const deleteProduct = async (id: number) => {
//   const token = getToken();
//   const response = await fetch(`${API}/api/products/${id}`, {
//     method: "DELETE",
//     headers: {
//       Authorization: token ? `Bearer ${token}` : "",
//     },
//   });

//   if (!response.ok) {
//     const errorText = await response.text();
//     throw new Error(errorText || "Failed to delete product");
//   }

//   return;
// };
