var App = {
  restaurantID: 1,

  initialize: function() {
    // const url = window.location.href;
    // const extension = //end of url
    // App.restaurantID = extension

    allReviews.initialize();

    // Fetch reviews
    App.fetch();
  },

  fetch: function(callback = () => {}) {
    Parse.readAll(data => {
      // examine the response from the server request:

      callback(JSON.parse(data));
    });
  }
};
