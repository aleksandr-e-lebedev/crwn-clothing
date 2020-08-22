import ShopActionTypes from './shop.types';

// eslint-disable-next-line import/prefer-default-export
export const updateCollections = (collectionsMap) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});
