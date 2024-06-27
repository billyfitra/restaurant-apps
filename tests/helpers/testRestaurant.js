/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
import LikeButtonInitiator from '../../src/scripts/utils/favorit-initiator';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
    await LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        data: {
            restaurant,
        },
    });
};

export { createLikeButtonPresenterWithRestaurant };
