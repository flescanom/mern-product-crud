import { Product } from "../models/product.model.js";

export const getProducts = async (req, res) => {
  console.log(req.query.filtro);

  const products = await Product.findAll();
  const total = await Product.count();
  res.json({
    ok: true,
    total: total,
    products,
  });
};

export const getProduct = async (req, res) => {
  const uid = req.params.id;
  try {
    const productFromDB = await Product.findByPk(uid);

    if (!productFromDB) {
      return res.status(404).json({
        ok: false,
        msg: "This product does not exist in the database",
      });
    }

    res.json({
      ok: true,
      product: productFromDB,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      msg: "Unexpected error... Contact to the administrator",
    });
  }
};

export const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create({ ...req.body });

    if (newProduct) {
      res.status(201).json({
        ok: true,
        newProduct: newProduct.toJSON(),
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      msg: "Unexpected error... Contact to the administrator",
    });
  }
};

export const updateProduct = async (req, res) => {
  const uid = req.params.id;

  try {
    const productFromDB = await Product.findByPk(uid);

    if (!productFromDB) {
      return res.status(404).json({
        ok: false,
        msg: "This product does not exist in the database",
      });
    }

    // Updates
    const { ...fields } = req.body;

    await productFromDB.update(fields);
    const updatedProduct = await productFromDB.save();

    if (updateProduct) {
      res.json({
        ok: true,
        updatedProduct: updatedProduct,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Unexpected error... Contact to the administrator",
    });
  }
};

export const deleteProduct = async (req, res) => {
  const uid = req.params.id;

  try {
    const productFromDB = await Product.findByPk(uid);

    console.log(productFromDB);

    if (!productFromDB) {
      return res.status(404).json({
        ok: false,
        msg: "This product does not exist in the database",
      });
    }

    await productFromDB.destroy();

    res.json({
      ok: true,
      msg: `Product ${productFromDB.name} was deleted successfully`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Unexpected error... Contact to the administrator",
    });
  }
};
