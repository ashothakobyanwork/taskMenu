export interface Recipes {
  id: number;
  step: string;
  description: string;
}

export interface DishesModel {
  id: number;
  recipe_id: number;
  name: string;
  kcal: number;
  grams: number;
  min: number;
  serve: number;
  image_url: string;
  description: string;
  categoriesBelong: number[];
  recipes: Recipes[];
  products: {id: number; image_url: string}[];
}
