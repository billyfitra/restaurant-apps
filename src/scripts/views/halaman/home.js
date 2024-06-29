import DaftarRestaurantSource from '../../data/daftarrestaurant-source';
import { createItemrestaurant } from '../templates/template-creator';

const Home = {
    async render() {
        return `
    <div class="jumbotron">
        <div class="tron__inner">
            <h1 class="tron__title">Find the Best Restaurant in Indonesia</h1>
            <p class="tron__tagline">
            Explore Flavors, Find Places, Enjoy Dishes
            </p>
        </div>
    </div>
    <div class="label">
    <h1 class="explore_label"> Find a Restaurant</h1>
    </div> 
    <div id="content" class="content"></div>
        `;
    },

    async afterRender() {
        const restaurants = await DaftarRestaurantSource.ListRestaurants();
        const restaurantsContainer = document.querySelector('#content');
        restaurants.forEach((restaurant) => {
            restaurantsContainer.innerHTML += createItemrestaurant(restaurant);
        });
    },

};
export default Home;
