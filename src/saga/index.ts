import { all } from 'redux-saga/effects';
import { syncUsersSaga, syncImagesSaga } from './chatSaga';

export function* rootWatcher() {
  yield all([syncImagesSaga(), syncUsersSaga()]);
}
