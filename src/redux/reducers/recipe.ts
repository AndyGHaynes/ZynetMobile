import { Recipe } from '../../types/recipe';
import { randomizeRecipe } from '../../constants/ingredients';

export default (state: Recipe = null, action): Recipe => {
  switch (action.type) {
    default:
      return {
        ...state,
        ...randomizeRecipe(),
      };
  }
}
