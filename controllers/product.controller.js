import Product from "../models/product.model.js";

export const getAllProduct = async (req, res) => {
  try {
    const fetchProducts = await Product.find();
    if (fetchProducts.length > 0) {
      res.status(200).json({
        success: true,
        message: "Products fetched successfully",
        data: fetchProducts,
      });
    }
    res.status(404).json({
      success: false,
      message: "No product found",
      data: fetchProducts || [],
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Failed to fetch product ${error.message}`,
    });
  }
};
export const getSingleeProduct = async (req, res) => {
  try {
    const productID = req.params.id;
    const getProductFromID = await Product.findById(productID);
    if (!getProductFromID) {
      res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product fetched successfully",
      data: getProductFromID,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Failed to fetched product: ${error.message}`,
    });
  }
};
export const createProduct = async (req, res) => {
  try {
    const {name, price, description, category} = req.body;
    if (!name || !price || !description || !category) {
      throw new Error("All field is required");
    }

    const newProduct = await Product.create({
      name,
      price,
      description,
      category,
    });

    res.status(200).json({
      success: true,
      message: "Product created successfully",
      data: newProduct,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Failed to create product: ${error.message}`,
    });
  }
};
export const updateProduct = async (req, res) => {
  try {
    const productID = req.params.id;
    const updatePayload = req.body;
    const findProduct = await Product.findByIdAndUpdate(productID, updatePayload, {
      new: true,
    });
    if (!findProduct) {
      res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: findProduct,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Failed to create product: ${error.message}`,
    });
  }
};
export const deleteProduct = async (req, res) => {
  try {
    const productID = req.params.id;
    const {name} = req.body;
    const product = await Product.findById(productID);
    if (!product) {
      res.status(404).json({
        success: false,
        message: `Product not found`,
      });
    }

    if (product.name !== name) {
      res.status(400).json({
        success: false,
        message: `Product name mismatch. Cannot delete`,
      });
    }

    await Product.findByIdAndDelete(productID);
    res.status(200).json({
      success: true,
      message: `Product delete successfully`,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Failed to delete product: ${error.message}`,
    });
  }
};
