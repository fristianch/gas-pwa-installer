self.addEventListener('install', (e) => {
  console.log('Service Worker Installed');
});

self.addEventListener('fetch', (e) => {
  // Membiarkan browser mengambil data langsung dari URL GAS
});
