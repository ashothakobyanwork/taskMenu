export interface DishiesType {
  id: number;
  attributes: {
    recipe_id: number;
    name: string;
    kcal: number;
    grams: number;
    min: number;
    serve: number;
    image_url: string;
    description: string;
    dish_products: {
      data: {
        id: number;
        attributes: {image_url: string};
      }[];
    };
    recipes: {
      data: {
        id: number;
        attributes: {
          step: string;
          step_description: string;
        };
      }[];
    };
    categories: {data: {id: number}[]};
  };
}
