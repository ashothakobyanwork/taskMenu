import {useCallback, useMemo, useState} from 'react';
import {
  useGetCategoriesQuery,
  useGetDishesQuery,
} from '../../../../store/query/menu';
import {CategoriesModel} from '../../../../models/categories';
import {DishesModel} from '../../../../models/dishes';

interface ReturnType {
  categories: CategoriesModel[];
  dishes: DishesModel[];
  selectedCategories: number[];
  changeSelectedCategoriesHandler: (id: number) => void;
}

export const useMenu = (): ReturnType => {
  const {data: categoriesData} = useGetCategoriesQuery();
  const {data: dishesData} = useGetDishesQuery();
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

  const changeSelectedCategoriesHandler = useCallback(
    (id: number) => {
      const index = selectedCategories.indexOf(id);
      if (index !== -1) {
        const cloneArray = [...selectedCategories];
        cloneArray.splice(index, 1);
        setSelectedCategories(cloneArray);
      } else {
        setSelectedCategories([...selectedCategories, id]);
      }
    },
    [selectedCategories],
  );

  const filteredDishes = useMemo(() => {
    if (!selectedCategories.length) {
      return dishesData;
    }
    return dishesData?.filter(dish =>
      selectedCategories.every(category =>
        dish.categoriesBelong.includes(category),
      ),
    );
  }, [dishesData, selectedCategories]);

  return useMemo(
    () => ({
      categories: categoriesData || [],
      dishes: filteredDishes || [],
      selectedCategories,
      changeSelectedCategoriesHandler,
    }),
    [
      categoriesData,
      changeSelectedCategoriesHandler,
      filteredDishes,
      selectedCategories,
    ],
  );
};
