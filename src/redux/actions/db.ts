export enum ActionTypes {
  INGREDIENT_DB_INITIALIZED = 'INGREDIENT_DB_INITIALIZED',
  INGREDIENT_DB_SYNCED = 'INGREDIENT_DB_SYNCED',
  INITIALIZE_INGREDIENT_DB = 'INITIALIZE_INGREDIENT_DB',
  SYNC_INGREDIENT_DB = 'SYNC_INGREDIENT_DB',
}

export const initIngredientDB = () => ({
  type: ActionTypes.INITIALIZE_INGREDIENT_DB,
});

export const syncIngredientDB = () => ({
  type: ActionTypes.SYNC_INGREDIENT_DB,
});
