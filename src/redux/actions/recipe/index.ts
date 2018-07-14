import { randomizeRecipe } from '../../../constants/ingredients';
import ActionTypes from './types';

const loadRandomRecipe = () => (dispatch) =>
  dispatch({
    recipe: randomizeRecipe(),
    type: ActionTypes.RANDOMIZE_RECIPE,
  });

export default {
  loadRandomRecipe,
};
