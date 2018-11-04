export enum ActionTypes {
  RECIPE_LOADED = 'RECIPE_LOADED',
  RECIPE_LOADING_ERROR = 'RECIPE_LOADING_ERROR',
  RECIPE_LOADING = 'RECIPE_LOADING',
}

export const loadRecipe = (recipeId: string) => ({
  type: ActionTypes.RECIPE_LOADING,
  recipeId,
});
