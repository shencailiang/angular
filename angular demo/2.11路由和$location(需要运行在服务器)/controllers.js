var myAppModule = angular.module('myEmail', ['ngRoute']);

function emailRouteConfig($routeProvider) {
    $routeProvider.
	when('/view/:id', {
		controller: DetailController,
		templateUrl: 'detail.html'
	}).
	when('/', {
		controller: ListController,
		templateUrl: 'list.html'
	}).
	otherwise({
		redirectTo: '/'
	});
}
myAppModule.config(emailRouteConfig);
//去掉前缀!
myAppModule.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);
var messages = [{
   id: 0, sender: 'jean@someecompay.com', subject: 'Hi there, old friend', 
   date: 'Dec 1, 2013 12:32:12', recipient: ['greg@somecompany.com'],
   message: 'Hey, we should get together for lunch sometime and catch up.'
   + 'There are many things we should collaborate on this year.'
},
{
   id: 1, sender: 'margin@someecompay.com', subject: 'Hi there, old friend', 
   date: 'Dec 7, 2013 12:32:12', recipient: ['greg@somecompany.com'],
   message: 'Hey, we should get together for lunch sometime and catch up.'
   + 'There are many things we should collaborate on this year.'
},
{
   id: 2, sender: 'bill@someecompay.com', subject: 'Hi there, old friend', 
   date: 'Dec 10, 2013 12:32:12', recipient: ['greg@somecompany.com'],
   message: 'Hey, we should get together for lunch sometime and catch up.'
   + 'There are many things we should collaborate on this year.'
},
{
   id: 3, sender: 'shen@someecompay.com', subject: 'Hi there, old friend', 
   date: 'Dec 20, 2013 12:32:12', recipient: ['greg@somecompany.com'],
   message: 'Hey, we should get together for lunch sometime and catch up.'
   + 'There are many things we should collaborate on this year.'
}
]
//这样写不行
/*myAppModule.controller('ListController', function ($scope) {
	$scope.messages = messges;
});*/
function ListController($scope) {
    $scope.messages = messages;
}
function DetailController($scope, $routeParams) {
    $scope.message = messages[$routeParams.id];
}