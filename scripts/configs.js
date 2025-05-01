export const BASE_URL = "https://sabzlearn-graphql.iran.liara.run/graphql"

export const fetchCfgs = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
}

export const awaitJson = async (apiResponse) => await apiResponse.json()