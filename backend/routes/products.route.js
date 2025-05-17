import { Router } from "express";

import { getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct, } from "../controllers/products.controller.js";

export const productsRouter = Router();

// Obtiene todos los productos
productsRouter.get('/', getProducts);

// Obtiene un producto por id
productsRouter.get('/:id', getProduct);

// Crea un producto nuevo
productsRouter.post('/', createProduct);

// Actualiza un producto por id
productsRouter.put('/:id', updateProduct);

// Borra un producto por id
productsRouter.delete('/:id', deleteProduct);

