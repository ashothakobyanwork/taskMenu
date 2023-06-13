import {DishesModel, Recipes} from '../../../models/dishes';
import {CategoriesModel} from '../../../models/categories';
import {DishiesType} from './types';

export const createCattegoriesFromApi = (
  response: Record<string, any>,
): CategoriesModel[] => {
  const returnData =
    response?.data?.map((item: {attributes: {name: string}; id: number}) => {
      return {name: item?.attributes?.name, id: item.id};
    }) || [];
  return returnData;
};

export const createDishesFromApi = (
  response: Record<string, any>,
): DishesModel[] => {
  const returnData: DishesModel[] =
    response?.data?.map((dish: DishiesType) => {
      const categoriesBelong: DishesModel['categoriesBelong'] =
        dish?.attributes?.categories?.data.map(categori => categori.id);

      const recipes: Recipes[] = dish?.attributes?.recipes?.data.map(recipe => {
        return {
          id: recipe.id,
          step: recipe?.attributes.step,
          description: recipe?.attributes.step_description,
        };
      });

      const products: DishesModel['products'] =
        dish.attributes.dish_products.data.map(product => {
          return {id: product.id, image_url: product?.attributes?.image_url};
        });

      return {
        id: dish.id,
        recipe_id: dish?.attributes.recipe_id,
        name: dish?.attributes.name,
        kcal: dish?.attributes.kcal,
        grams: dish?.attributes.grams,
        min: dish?.attributes.min,
        serve: dish?.attributes.serve,
        image_url: dish?.attributes.image_url,
        description: dish?.attributes.description,
        categoriesBelong,
        recipes,
        products,
      };
    }) || [];

  return returnData;
};
