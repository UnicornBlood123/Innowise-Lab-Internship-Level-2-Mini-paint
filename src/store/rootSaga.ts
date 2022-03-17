import { all } from 'redux-saga/effects';
import { syncUsersSaga, syncImagesSaga } from './ChatStore/saga';

export function* rootWatcher() {
  yield all([syncImagesSaga(), syncUsersSaga()]);
}
