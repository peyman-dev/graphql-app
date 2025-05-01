import { fetchApis, useCachedData } from "../scripts/api-requests.js";
import { BASE_URL, fetchCfgs } from "../scripts/configs.js"
import { params, render } from "../scripts/modules.js"


let targetCategory;

window.onload = async () => {
    await fetchApis()
    const cachedData = useCachedData()
    console.log(cachedData)
    const categoryId = params.get('categoryId')
    targetCategory = cachedData.categories.find(cat => cat._id == categoryId)


    if (targetCategory?._id) {
        render.categoryPage.foods(targetCategory)
    }

}
