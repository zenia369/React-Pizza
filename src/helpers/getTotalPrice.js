import useGetPrice from "./getPrice";

const getTotalPrice = (items) => items.reduce((acc, el) => {
    const price = useGetPrice(el.price, el.number, el.weight, el.radius);
    acc += price;
    return acc
}, 0);

export default getTotalPrice