const app = angular.module("mainApp", ["ngRoute"]);

app.config(function ($routeProvider) {
	$routeProvider
		// .when('/', {templateUrl: 'login.html'})
		.when("/", { templateUrl: "login.html" })
		.when("/form", { templateUrl: "form.html" })
		.otherwise({ redirectTo: "/" });
});
