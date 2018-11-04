import _ from 'lodash';
import PouchDB from 'pouchdb-react-native';

import { IngredientType } from '../constants/enums';
import { Ingredient } from '../types/ingredients';

let ingredientDB = null;
const dbName = 'ingredients';
const url = `http://192.168.1.131/couchdb/${dbName}`;

export function initializeDB() {
  ingredientDB = new PouchDB(dbName);
}

export function syncDB() {
  if (!ingredientDB) {
    throw new Error('must initialize DB before synchronization');
  }
  PouchDB.replicate(url, ingredientDB);
}

export function getIngredients(): Promise<Ingredient[]> {
  return ingredientDB.allDocs({
    include_docs: true,
  })
    .then((response) =>
      _.map(response.rows, (row) => _.omit(row.doc, ['_id', '_rev']))
    )
    .catch((e) => {
      console.log('allDocs() error', e);
      return null;
    });
}

export function searchIngredients<T>(ingredientType: IngredientType, searchTerm: string): T[] {
  return ingredientDB.find({
    selector: {
      ingredientType: {
        [IngredientType.Malt]: 1,
        [IngredientType.Hop]: 2,
        [IngredientType.Yeast]: 3,
      }[ingredientType],
      name: {
        $regex: new RegExp(`.*${searchTerm}.*`, 'ig'),
      },
    },
    sort: ['name'],
  });
}
