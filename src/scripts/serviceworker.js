import 'regenerator-runtime';
import CacheHelper from './utils/stash-helper';

const assetsToCache = [
    '/',
    '/templates/index.html',
    '/public/favicon.png',
    '/app.bundle.js',
    '/public/app.webmanifest',
    '/sw.bundle.js',
    '/public/icons/72.png',
    '/public/icons/96.png',
    '/public/icons/128.png',
    '/public/icons/144.png',
    '/public/icons/152.png',
    '/public/icons/192.png',
    '/public/icons/384.png',
    '/public/icons/512.png',
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        CacheHelper.cachingAppShell(assetsToCache)
            .then(() => self.skipWaiting()),
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        CacheHelper.deleteOldCache()
            .then(() => self.clients.claim()),
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(CacheHelper.revalidateCache(event.request));
});
