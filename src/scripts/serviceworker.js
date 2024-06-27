import 'regenerator-runtime';
import CacheHelper from './utils/stash-helper';

const assetsToCache = [
    '/',
    '/index.html',
    '/favicon.ico',
    '/app.bundle.js',
    '/app.webmanifest',
    '/sw.bundle.js',
    '/icons/72.jpg',
    '/icons/96.jpg',
    '/icons/128.jpg',
    '/icons/144.jpg',
    '/icons/152.jpg',
    '/icons/192.jpg',
    '/icons/384.jpg',
    '/icons/512.jpg',
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
