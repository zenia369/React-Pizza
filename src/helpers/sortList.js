import useGetPrice from "./getPrice";

const sortList = (items, type) => {
    switch(type) {
        case 'popularity':
            return [...items].sort((a, b) => (b.rating - a.rating));
        case 'price':
            return [...items].sort((a,b) => {
                const priceA = useGetPrice(a.price, 1, a.weight, a.radius);
                const priceB = useGetPrice(b.price, 1, b.weight, b.radius);

                return priceA - priceB 
            });
        case 'alphabet':
            return [...items].sort((a, b) => a.title.localeCompare(b.title))
        case 'all':
            return items
        case 'meat':
            return [...items].filter((el) => el.types.includes('meat'))
        case 'vegetarian':
            return [...items].filter((el) => el.types.includes('vegetarian'))
        case 'grill':
            return [...items].filter((el) => el.types.includes('grill'))
        case 'hot':
            return [...items].filter((el) => el.types.includes('hot'))
        default:
            return items
    }
}

export default sortList