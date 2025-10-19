if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .getRegistrations()
    .then((registrations) => {
      for (const registration of registrations) {
        registration.unregister().catch((err) => {
          console.log("Service Worker unregistration failed: ", err);
        });
      }
    })
    .catch((err) => {
      console.log("Service Worker get registrations failed: ", err);
    });
}
