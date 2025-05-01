
import { fetchApis, useCachedData } from "./api-requests.js"
import { render } from "./modules.js"



window.onload = async () => {
  // Fetch and Cache All Data's
  await fetchApis()
  const cachedData = useCachedData()


  if (cachedData.categories) render.home.categories(cachedData.categories);
  if (cachedData.foods) render.home.foods(cachedData.foods);

}
