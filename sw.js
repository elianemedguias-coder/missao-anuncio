/* Missão Anúncio — service worker mínimo.
   Só permite instalar como app. Não guarda cópia das páginas,
   então toda atualização do index.html aparece na hora. */
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
