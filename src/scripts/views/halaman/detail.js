import UrlParser from '../../routes/url-parser';
import DaftarRestaurantSource from '../../data/daftarrestaurant-source';
import { createDetailrestaurant } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/favorit-initiator';

const Detail = {
    async render() {
        return `
          <div class="detail">
              <h1 class="detail_page">Restaurant Details</h1>
          </div>
          <div id="detail_content" class="detail_content"></div>
          <div id="likeButtonContainer"></div>
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const data = await DaftarRestaurantSource.detailRestaurant(url.id);
        const restaurantContainer = document.querySelector('#detail_content');

        restaurantContainer.innerHTML = createDetailrestaurant(data.restaurant);
        LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            data,
        });
    },

};
export default Detail;
