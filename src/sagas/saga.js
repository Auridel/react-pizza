import {takeEvery, put, call} from "redux-saga/effects";
import {SET_MENU} from "../actions/actions";

async function fetchData() {
    return  await fetch("/menu")
        .then(res => res.json())
        .catch(e => console.log(e));

}

function* getDataAsync() {
    try {
        const res = yield call(fetchData);
        yield put(SET_MENU(res));
    }catch (e) {
        console.log(e)
    }

}

export function* watchGetData() {
    yield takeEvery("GET_DATA", getDataAsync);
}