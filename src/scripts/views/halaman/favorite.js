/* eslint-disable no-lonely-if */
import RestaurantFavoriteIdb from '../../data/favorite-resto-idb';
import { createItemrestaurant } from '../templates/template-creator';
import '../../../styles/style.scss';

const Favorite = {
    async render() {
        return `
            <div class="favorite">
                <h5 class="favoritehead">Your Favorite Restaurants</h5>
                <div id="empty_favorite" class="empty_favorite">You don't have any Favorite Restaurant</div>
            </div>  
            <div id="content" class="content"></div>
        `;
    },
    async afterRender() {
        const restaurants = await RestaurantFavoriteIdb.getAllRestaurants();
        const restaurantsContainer = document.querySelector('#content');
        const emptyFavoriteMessage = document.getElementById('empty_favorite');

        restaurantsContainer.innerHTML = ''; // Clear previous content

        if (restaurants.length > 0) {
            restaurants.forEach((restaurant) => {
                restaurantsContainer.innerHTML += createItemrestaurant(restaurant);
            });
            if (emptyFavoriteMessage) {
                emptyFavoriteMessage.style.display = 'none'; // Hide empty message if there are restaurants
            }
        } else {
            if (emptyFavoriteMessage) {
                emptyFavoriteMessage.style.display = 'block'; // Show empty message if no restaurants
            }
        }

        console.log('HTML after render:', document.body.innerHTML);
        console.log('Empty favorite message visibility:', window.getComputedStyle(emptyFavoriteMessage).display);
    },
};

export default Favorite;
