module.exports = {
  pwa: {
    workboxOptions: {
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/api.github.com.*/,
          handler: "networkFirst",
          options: {
            cacheName: "apiResponse",
            expiration: {
              maxAgeSeconds: 60 * 60 * 24
            }
          }
        }
      ]
    }
  }
};
