//ROOT APP
angular.module('app', [
  'ionic',
  'app.routes',
  'app.CollisionFactory',
  'app.MakerMapController',
  'app.MakerMapFactory',
  'app.LoginController',
  'app.LoginFactory',
  'app.HomeController',
  'app.SelectMapController'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
});