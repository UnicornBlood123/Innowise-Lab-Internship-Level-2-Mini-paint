import { put, take } from 'redux-saga/effects';
import { reduxSagaFirebase } from '../../index';
import { loadImages, setImages, setUsers } from './actions';
import { userInterface } from './interfaces';
import firebase from 'firebase/compat';

export function* syncImagesSaga(): Generator<unknown, void, Awaited<ReturnType<any>>> {
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

export function* syncUsersSaga(): Generator<unknown, void, Awaited<ReturnType<any>>> {
  // @ts-ignore
  const channel = reduxSagaFirebase.firestore.channel('users');
  while (true) {
    const snapshot = yield take(channel);
    let users: userInterface[] = [];
    snapshot.forEach((user: any) => {
      users = [...users, user.data()];
    });
    yield put(setUsers(users));
  }
}
