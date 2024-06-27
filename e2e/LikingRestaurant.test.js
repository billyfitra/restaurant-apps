/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', async ({ I }) => {
    I.waitForElement('.favorite', 20);
    I.seeElement('.favorite');
    I.waitForElement('.empty_favorite', 20); // Tambahkan waktu tunggu untuk elemen .empty_favorite
    I.see('You don\'t have any Favorite Restaurant', '.empty_favorite'); // Cek teks dalam elemen .empty_favorite
});

Scenario('liking one restaurant', async ({ I }) => {
    I.amOnPage('/');
    I.waitForElement('.contentlist a', 10); // Tambah waktu tunggu yang lebih panjang
    I.seeElement('.contentlist a');
    const firstCardRestaurant = await I.grabTextFrom('.info_title');
    I.click('.info_title');

    I.waitForElement('#likeButton', 10); // Tambah waktu tunggu yang lebih panjang
    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.waitForElement('.contentlist', 10); // Tambah waktu tunggu yang lebih panjang
    I.seeElement('.contentlist');
    const likedCardRestaurant = await I.grabTextFrom('.info_title');
    assert.strictEqual(firstCardRestaurant, likedCardRestaurant);
});

Scenario('unliking one restaurant', async ({ I }) => {
    // Navigate to the main page and like a restaurant
    I.amOnPage('/');
    I.waitForElement('.info_title', 20);
    I.seeElement('.info_title');
    const restaurantTitle = await I.grabTextFrom('.info_title');
    I.click('.info_title');
    I.waitForElement('#likeButton', 20);
    I.click('#likeButton');

    // Navigate to the favorite page and verify the restaurant is liked
    I.amOnPage('/#/favorite');
    I.waitForElement('.info_title', 20);
    I.seeElement('.info_title');
    const likedRestaurantTitle = await I.grabTextFrom('.info_title');
    assert.strictEqual(restaurantTitle, likedRestaurantTitle);

    // Click on the liked restaurant and unlike it
    I.click('.info_title');
    I.waitForElement('#likeButton', 20);
    I.click('#likeButton');

    // Verify the restaurant is removed from the favorite page
    I.amOnPage('/#/favorite');
    I.waitForElement('.empty_favorite', 20);
    I.seeElement('.empty_favorite');
});
