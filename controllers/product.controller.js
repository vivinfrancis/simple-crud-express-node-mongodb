const Product = require("../model/product.model");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      message: 'Products fetched successfully',
      products
    });
  } catch {
    res.status(500).json({
      message: 'Internal Server Error'
    });
  }
};

const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        message: 'Product not found'
      });
    }
    res.status(200).json({
      message: 'Product fetched successfully',
      product
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error'
    });
  }
}

const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json({
      message: 'Product created successfully',
      product
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || 'Internal Server Error'
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) {
      return res.status(404).json({
        message: 'Product not found'
      });
    }
    const updatedProduct = await Product.findById(req.params.id);
    res.status(200).json({
      message: 'Product updated successfully',
      updatedProduct
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error'
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({
        message: 'Product not found'
      });
    }
    res.status(200).json({
      message: 'Product deleted successfully',
      product
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error'
    });
  }
};

module.exports = {
  getProducts, getProduct, createProduct, updateProduct, deleteProduct
};