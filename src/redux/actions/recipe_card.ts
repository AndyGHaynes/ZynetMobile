export enum RecipeCardAction {
  EDIT_RECIPE = 'EDIT_RECIPE',
  RECIPE_LOADED = 'RECIPE_LOADED',
  RECIPE_LOADING_ERROR = 'RECIPE_LOADING_ERROR',
  RECIPE_LOADING = 'RECIPE_LOADING',
}

export const loadRecipe = (recipeId: string) => ({
  type: RecipeCardAction.RECIPE_LOADING,
  recipeId,
});
