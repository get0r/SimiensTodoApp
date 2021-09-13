const CategoryModel = require('../database/models/category.model');

/**
 * a method to create a new category record in the database.
 * @param {Object} param0 category details like title, sub title..
 * @returns savedCategory if saving to db successful or null if not
 */
const createCategory = async ({ title, subTitle, ownerId }) => {
  const doesCategoryExist = await CategoryModel.findOne({ title }).lean();

  if (doesCategoryExist) {
    return null;
  }
  const newCategory = await new CategoryModel({
    title,
    subTitle,
    ownerId,
  }).save();

  return newCategory;
};

/**
 * a method to retrieve a category by its id.
 * @param {String} categoryId category id
 * @returns retrieved category- might be empty
 */
const getCategoryById = async (userId, categoryId) => {
  const category = await CategoryModel.findById(categoryId).lean();

  if (!category) {
    return {};
  }

  if (category.ownerId.toString() !== userId) {
    return {};
  }
  return category;
};

/**
 * a method to retrieve all categories which belongs to a certain user by user id.
 * @param {String} userId user id
 * @returns retrieved categories- might be empty
 */
const getCategoriesByUserId = async (userId) => {
  const categories = await CategoryModel.find({ ownerId: userId }).lean();

  return categories;
};

module.exports = {
  createCategory,
  getCategoryById,
  getCategoriesByUserId,
};
