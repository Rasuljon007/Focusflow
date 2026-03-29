// sw.js
self.addEventListener('push', function(event) {
  const data = event.data ? event.data.json() : { title: 'Kunlik Reja', body: 'Yangi eslatma!' };
  
  const options = {
    body: data.body || 'Bugungi vazifalaringizni tekshiring!',
    icon: 'https://cdn-icons-png.flaticon.com/512/3658/3658756.png',
    badge: 'https://cdn-icons-png.flaticon.com/512/3658/3658756.png',
    vibrate: [200, 100, 200]
  };

  event.waitUntil(
    self.registration.showNotification(data.title || 'Kunlik Reja', options)
  );
});