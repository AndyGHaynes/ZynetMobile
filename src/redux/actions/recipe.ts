import { Recipe } from '../../types/recipe';

export enum RecipeAction {
  EDIT_RECIPE = 'RECIPE/EDIT',
  RECIPE_LOADED = 'RECIPE/LOADED',
  RECIPE_LOADING = 'RECIPE/LOADING',
  RECIPE_LOADING_ERROR = 'RECIPE/LOADING_ERROR',
}

export type RecipeActionType = {
  type: RecipeAction;
  error?: Error;
  recipe?: Recipe;
  recipeId?: string;
};

export const editRecipe = (recipe: Recipe): RecipeActionType => ({
  type: RecipeAction.EDIT_RECIPE,
  recipe,
});

export const loadRecipe = (recipeId: string): RecipeActionType => ({
  type: RecipeAction.RECIPE_LOADING,
  recipeId,
});

export const loadRecipeError = (error: Error): RecipeActionType => ({
  type: RecipeAction.RECIPE_LOADING_ERROR,
  error,
});

export const recipeLoaded = (recipe: Recipe): RecipeActionType => ({
  type: RecipeAction.RECIPE_LOADED,
  recipe,
});
