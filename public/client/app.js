angular.module("shortlyApp", [
  'ngRoute' //injecting dependency on ngRoute into our shortlyApp module
])
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'LinksController',
      templateUrl: '/templates/home.html'
    })
    .when('/shorten', {
      controller: 'ShortenController',
      templateUrl: '/templates/shorten.html'
    })
    .otherwise({
      redirectTo: '/'
    })
})
.service('LinkService', function($http) {
  this.getLinks = function() {
    return $http({
      method: 'GET',
      url: '/links'
    })
  }
})
.service('ShortenService', function($http) {
  this.getUrl = function(data) {
    return $http({
      method: 'POST',
      url: '/links',
      data: {url: data}
    })
  }
})
// .service('SortService', function() {
// })
// .service('UserService', function() {
//   var currentUser = undefined;
//   var self = this;
//   this.setCurrentUser = function(u) {
//     currentUser = u;
//   }
//   this.currentUser = function() {
//     return currentUser;
//   }
// })
// .service('AuthService', function($http, UserService) {
//   this.login = function() {
//     $http({
//       method: 'POST',
//       url: '/login',
//       data: {
//         username: username,
//         password: password
//       }
//     }).then(function(data, code) {
//       if (code == 200) UserService.setCurrentUser(data.token);
//     })
//   }
// })
// .service('AuthInterceptor', function(UserService) {
//   return {
//     'request': function(req) {
//       if (UserService.currentUser()) {
//         req.params['token'] = UserService.currentUser();
//       }
//       return req;
//     },
//     'requestError': function() {},
//     'response': function() {},
//     'responseError': function() {}
//   }
// })
// .config(function($httpProvider) {
//   $httpProvider.interceptors.push('AuthInterceptor')
// })
      //.constant('Version', '1.1')
      // .factory('LinkService', function() {
      //   return {
      //     getLinks: function() {}
      //   
      // })
.controller('FrameController', function($scope) {
  //inject UserService and AuthService
  // $scope.userName = UserService.currentUser().name;
  // $scope.login = function() {
  //   AuthService.login($scope.user.name, $scope.user.password);
  // }
})
.controller('LinksController', function($scope, LinkService) {
  LinkService.getLinks().then(function(response) {
    $scope.links = response.data;
  })
})
.controller('ShortenController', function($scope, $http) {
  // ShortenService.getUrl(url).then(function(response) {
  //   $scope.submit = response.data;
  // })
  $scope.submit = function(data) {
    return $http({
      method: 'POST',
      url: '/links',
      data: {url: data}
    })
  };
})