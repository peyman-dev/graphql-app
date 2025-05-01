import { fetchApis, useCachedData } from "../scripts/api-requests.js";
import { params, render } from "../scripts/modules.js";

const getFood = async () => {
    await fetchApis();

    const foodId = params.get("foodId")
    const { foods } = useCachedData()

    return foods.find(food => food._id == foodId)
}

window.onload = async () => {
    const food = await getFood()

    if (food) render.foodPage(food);
}