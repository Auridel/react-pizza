import {takeEvery, put, call, delay} from "redux-saga/effects";
import {SET_MENU, ORDER_SUCCESS, CLEAR_ORDER} from "../actions/actions";

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

//------------------------------


async function fetchOrder({order}) {
    return await fetch("/order", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(order)
    })
        .then(res => res)
        .catch(e => console.log(e))
}

function* sendOrderAsync({payload: {order}}) {
    try {
        yield call(fetchOrder, {order});
        yield put(ORDER_SUCCESS());
        yield delay(500);
        yield put(CLEAR_ORDER());
    }catch (e) {
        console.log(e)
    }
}

export function* watchSendOrder() {
    yield takeEvery("SEND_ORDER", sendOrderAsync);
}