//angular provides a way for changing views on the fly
//ng-repeat takes the expression and evaluates it before doing the iteration
//if you put multiple filters, that runs first before iterating
//To avoid restarting the controller every time you need to use it- use surfaces
//Surfaces can be created with .constant('Version', '1.1')
//Surfaces can also be created with .service('LinkService', function(){}) 
//This binds the surface 
//use this keyword for binding
//NEVER USE $http INSIDE of a controller!
//authentication - create a server that holds the lifetime of the user we're working with
//get and set user from this auth service
//if we're making a request without a valid token, backend has to send a status code other than 200 (401)
//send back 401- use that interceptor to catch the 401 and tell the user that they need to login
//create an interceptor with a config function