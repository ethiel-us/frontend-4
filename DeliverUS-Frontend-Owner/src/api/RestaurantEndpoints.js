import { get, post } from './helpers/ApiRequestsHelper'
function getAll() {
  return get('users/myrestaurants')
}

function getDetail(id) {
  return get(`restaurants/${id}`)
}

function getRestaurantCategories() {
  return get('restaurantCategories')
}

function create(value) {
  return post('restaurants', value)
}

export { getAll, getDetail, getRestaurantCategories, create }
