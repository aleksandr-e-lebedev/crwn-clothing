import { all, call, takeLatest, put } from 'redux-saga/effects';

import ShopActionTypes from './shop.types';

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from './shop.actions';

import {
  firestore,
  convertCollectionsShapshotToMap,
} from '../../firebase/firebase.utils';

function* fetchCollections() {
  try {
    const collectionsRef = yield call(
      [firestore, firestore.collection],
      'collections'
    );
    const collectionsSnapshot = yield call([
      collectionsRef,
      collectionsRef.get,
    ]);
    const collectionsMap = yield call(
      convertCollectionsShapshotToMap,
      collectionsSnapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

function* onFetchCollectionsStart() {
  yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollections);
}

export default function* shopSagas() {
  yield all([call(onFetchCollectionsStart)]);
}
