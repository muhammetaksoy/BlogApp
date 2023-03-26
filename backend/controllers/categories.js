import Category from "../models/categories.js";

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json({
      data: categories,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const createCategory = async (req, res) => {
  let categoyNames = [];
  const allCategories = await Category.find();

  allCategories.forEach((x) => {
    categoyNames.push(x.name);
  });

  try {
    const newCategory = new Category(req.body);

    if (categoyNames.includes(req.body.name)) {
      res.status(404).json({
        message:
          "Bu kategori zaten var. Lütfen farklı bir kategori eklemeyi deneyiniz.",
      });
    } else {
      await newCategory.save();
      res.status(200).json({
        message: "Kategori ekleme işlemi başarılı",
      });
    }
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const updateCategory = async (req, res) => {
  const id = req.params.id;
  const category = req.body;
  try {
    const updatedCategory = await Post.findByIdAndUpdate(id, category, {
      new: true,
    });
    res.json(updatedCategory);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteCategory = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedCategory = await Category.findByIdAndRemove(id);
    res.json(deletedCategory);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
