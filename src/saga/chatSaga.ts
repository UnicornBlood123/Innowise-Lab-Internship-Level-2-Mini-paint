import { put, take } from 'redux-saga/effects';
import { reduxSagaFirebase } from '../index';
import { loadImages, setImages, setUsers } from '../store/ChatStore/actions';

export function* syncImagesSaga(): any {
  // @ts-ignore
  const channel = reduxSagaFirebase.firestore.channel('images');
  while (true) {
    const snapshot = yield take(channel);
    let images: {}[] = [];
    snapshot.forEach((image: any) => {
      images = [...images, image.data()];
    });
    yield put(loadImages());
    yield put(setImages(images.sort((a: any, b: any) => a.id - b.id)));
  }
}

export function* syncUsersSaga(): any {
  // @ts-ignore
  const channel = reduxSagaFirebase.firestore.channel('users');
  while (true) {
    const snapshot = yield take(channel);
    let users: {}[] = [];
    snapshot.forEach((user: any) => {
      users = [...users, user.data()];
    });
    yield put(setUsers(users));
  }
}

// function* getImagesCollection(): any {
//   const snapshot = yield call(reduxSagaFirebase.firestore.getCollection, 'images');
//   let images: {}[] = [];
//   snapshot.forEach((image: any) => {
//     images = [...images, image.data()];
//   });
//   yield put(setImages(images.sort((a: any, b: any) => a.id - b.id)));
// }
//
// function* getUsersCollection(): any {
//   const snapshot = yield call(reduxSagaFirebase.firestore.getCollection, 'users');
//   let users: {}[] = [];
//   snapshot.forEach((user: any) => {
//     users = [...users, user.data()];
//   });
//   yield put(setUsers(users));
// }
//
// export function* imagesWatcher() {
//   yield takeEvery(Types.LOADIMAGES, getImagesCollection);
// }
//
// export function* usersWatcher() {
//   yield takeEvery(Types.LOADUSERS, getUsersCollection);
// }
