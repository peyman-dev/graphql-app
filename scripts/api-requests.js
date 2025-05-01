import { BASE_URL, fetchCfgs } from "./configs.js"

let cachedData = {}

export const fetchApis = async () => {
    const res = await fetch(BASE_URL, {
        ...fetchCfgs,
        body: JSON.stringify({
            query: `
            query {
            categories {
            title
            _id
            icon
              foods {
                        _id
                        name
                        price
                        inventory
                }
            }
        }
            `
        })
    })
    const data = await res.json()
    const cats = data.data.categories

    cachedData.categories = cats


    const foodsResponse = await fetch(BASE_URL, {
     ...fetchCfgs,
        body: JSON.stringify({
            query: `
            query {
                    foods {
                        name
                        price
                        inventory
                        category {
                        _id
                        title
                        icon
                        }
                        _id
                    }
                }
            `
        })
    }
    )

    const foodsData = await foodsResponse.json()
    const foods = foodsData.data.foods

    cachedData.foods = foods

}

export const useCachedData = () => {
    return cachedData
}