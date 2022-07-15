const useGetPrice = (price, number, weight, radius) => {
    const weightPrice = (weight.find(el => el.active)).price;
    const radiusPrice = (radius.find(el => el.active)).price;
    
    const result = (price + weightPrice + radiusPrice) * number;

    return result
}

export default useGetPrice