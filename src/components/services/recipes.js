import axios from 'axios'
const apiUrl = 'http://localhost:888/recipes/index.php'

const getRecipe = (ingredients) => {
    const ingredientsParameter = ingredients.map(ingredient => `ingredient[]=${ingredient}`).join('&')
    const request = axios.get(apiUrl.concat(`?${ingredientsParameter}`))
    return request.then(response => response.data)
}

export default {
    getRecipe,
}