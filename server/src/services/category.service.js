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
  if (categoryId.length !== 24) return null;

  const category = await CategoryModel.findById(categoryId).lean();

  if (!category) {
    return null;
  }

  if (category.ownerId.toString() !== userId) {
    return null;
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
  if (!categories) {
    return [];
  }
  return categories;
};

/**
 * a method to delete a category record from db using its id.
 * @param {String} categoryId category id
 * @returns removed category- might be empty
 */
const removeCategoryById = async (userId, categoryId) => {
  const toBeRemoved = await getCategoryById(userId, categoryId);
  if (!toBeRemoved) {
    return null;
  }
  const removedCategory = await CategoryModel.deleteOne({ _id: categoryId }).lean();
  if (!removedCategory) {
    return null;
  }

  return toBeRemoved;
};

/**
 * a method to update a category record i.e items in the record from db using its id.
 * @param {String} categoryId category id
 * @returns updated category
 */
const updateCategoryById = async (userId, categoryId, updatedObject) => {
  const toBeUpdated = await getCategoryById(userId, categoryId);
  if (!toBeUpdated) {
    return null;
  }
  const updatedCategory = await CategoryModel
    .updateOne({ _id: categoryId }, { $set: updatedObject }).lean();
  if (!updatedCategory) {
    return null;
  }
  return true;
};

module.exports = {
  createCategory,
  getCategoryById,
  getCategoriesByUserId,
  removeCategoryById,
  updateCategoryById,
};
