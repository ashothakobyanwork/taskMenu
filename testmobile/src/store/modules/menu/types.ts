import {DishesModel} from '../../../models/dishes';

export interface MenuState {
  dishes: Nullable<DishesModel[]>;
}
