const getTotalOrderCounts = (itmes) => itmes.reduce((acc, el) => {
    acc += el.number;
    return acc
}, 0);

export default getTotalOrderCounts