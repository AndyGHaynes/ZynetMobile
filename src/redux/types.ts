import {
  Recipe,
  RecipeCard,
} from '../types/recipe';

export class AppState {
  activeRecipe: Recipe;
  selectedRecipe: RecipeCard;
}
