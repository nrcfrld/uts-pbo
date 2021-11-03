app.directive("myDirective", function () {
	return {
		restrict: "EA",
		template: "<h2>Hello {{dunia}}</h2>",
		replace: true,
		link: function (scope, elem, attrs) {
			elem.bind("click", function () {
				scope.dunia = "Saya diklik";
				scope.$digest();
			});
		},
	};
});
