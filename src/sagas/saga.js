import {takeEvery, put, call} from "redux-saga/effects";
import {GET_DATA, SET_MENU} from "../actions/actions";

async function fetchData() {
    return  await fetch("/menu")
        .then(res => res.json())
        .catch(e => console.log(e));

}

function* getDataAsync() {
    try {
        const res = yield call(fetchData);
        console.log(res)
        yield put(SET_MENU(res));
    }catch (e) {
        console.log(e)
    }

}

export function* watchGetData() {
    yield takeEvery(GET_DATA, getDataAsync);
}