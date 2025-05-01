export const render = {
  home: {
    categories: (categoriesArr) => {
      const categories = document.querySelector('.category-list');
      categoriesArr.slice(0, 7).forEach(cat => {
        categories.insertAdjacentHTML('afterbegin', `
                     <li class="category-list__item" id="all">
                <a href="/categories/?categoryId=${cat._id}">
                  <div class="category-icon">
                    <i
                      class="fa ${cat.icon}"
                      style="color: #1f1f1f"
                    ></i>
                  </div>
                  <div class="category-name">
                ${cat.title}
                  </div>
                </a>
              </li>`)
      })
    },
    foods: foods => {
      const restaurantList = document.querySelector('.restaurant-list')

      foods.forEach(food => {
        restaurantList.insertAdjacentHTML('afterbegin', `
          <li class="restaurant-list__item">
              <a href="/foods/?foodId=${food._id}"><img class="restaurant-image" src="https://picsum.photos/id/${Math.floor(Math.random() * 200)}/1080" alt="restaurant-image"></a>
              <div class="restaurant-name">${food.name}</div>
              <div class="restaurant-info">
                <span class="restaurant-rate"><svg t="1586144500681" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1458" width="10" height="10">
                    <path d="M686.153143 573.732571l174.884571-169.691429-241.152-35.401143-108.032-218.258286-108.032 218.258286-241.152 35.401143 174.884571 169.691429-41.691429 240.566857 215.990857-113.737143 215.405714 113.737143zM987.282286 369.737143q0 12.580571-14.848 27.428571l-207.433143 202.313143 49.152 285.696q0.585143 4.022857 0.585143 11.410286 0 28.598857-23.405714 28.598857-10.825143 0-22.820571-6.875429l-256.585143-134.875429-256.585143 134.875429q-12.580571 6.875429-22.820571 6.875429-11.995429 0-17.993143-8.265143t-5.997714-20.260571q0-3.437714 1.170286-11.410286l49.152-285.696-208.018286-202.313143q-14.262857-15.433143-14.262857-27.428571 0-21.138286 32.036571-26.258286l286.866286-41.691429 128.585143-260.022857q10.825143-23.405714 28.013714-23.405714t28.013714 23.405714l128.585143 260.022857 286.866286 41.691429q32.036571 5.12 32.036571 26.258286z" p-id="1459"></path></svg>4.7</span>
                <span class="restaurant-category">Deli · Bagels · $$</span>
              </div>
            </li>
          `)
      })
    }
  },
  categoryPage: {
    foods: details => {
      const pageTitle = document.querySelector("#page-title")
      pageTitle.innerHTML = `${details.title} Menu`

      const foodsGrid = document.querySelector('.food-grid')

      if (details && details.foods && details.foods.length) {
        details.foods.forEach((food, index) => {
          setTimeout(() => {
            foodsGrid.insertAdjacentHTML('afterbegin', `
              <a href="/foods/?foodId=${food._id}" class="food-card" style="animation-delay: ${index * 0.3}s; max-height: 220px; text-decoration:none;">
                <h2>${food.name}</h2>
                <p class="price">$${food.price}</p>
                <p class="inventory">${food.inventory} in stock</p>
              </ش>
            `);
          }, index * 100);
        });
      } else {
        foodsGrid.insertAdjacentHTML('afterbegin', `
          <div style="
            text-align: center;
            grid-column: 1 / -1;
            margin-top: 92px;
            font-size: 20px;
            color: var(--text-light);
            font-family: 'Plus Jakarta Sans', sans-serif;
          ">
            No dishes available at the moment.
          </div>
        `);
      }


      const backButton = document.querySelector(".back-button")

      console.log(window.history.back)
      backButton.addEventListener('click', () => {
        window.history.back()
      })

    }
  },
  foodPage: (data) => {
    console.log(data)
    const remainingElement = document.querySelector("#remaining");
    const foodPrice = document.querySelector(".food-price");
    const foodName = document.querySelector(".food-name")

    remainingElement.innerHTML = `In Stock (${data.inventory} remaining)`
    foodPrice.innerHTML = `$${data.price}`
    foodName.innerHTML = data.name

    const backLink = document.querySelector(".back-link")

    backLink.addEventListener('click', () => {
      window.history.back()
    })
    
  }
}


export const params = new URLSearchParams(window.location.search);
