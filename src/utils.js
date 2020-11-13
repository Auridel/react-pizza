const totalPrice = (arr) => {
    let price = 0;
    arr.forEach(el => {
        price += el.price * el.quantity;
    })
    return price;
}

export {
    totalPrice
}