import {CategoriesModel} from '../models/categories';

export function filerSelectedCategories(
  numberArray: number[],
  categoriesArray: CategoriesModel[],
): CategoriesModel[] {
  const matchingCategories = categoriesArray.filter(category =>
    numberArray.includes(category.id),
  );
  return matchingCategories;
}
