app
	.controller("MainController", [
		"$scope",
		function ($scope) {
			$scope.originalText = "Formulir Pendaftaran mahasiswa";
			$scope.judul = " daftar mahasiswa";
			$scope.format = "M/d/yy h:mm:ss a";
			$scope.temans = [
				{ nama: "Enrico", umur: 20, jk: "laki-laki" },
				{ nama: "Bambang", umur: 24, jk: "laki-laki" },
				{ nama: "Madun", umur: 30, jk: "laki-laki" },
				{ nama: "Sutisna", umur: 31, jk: "laki-laki" },
				{ nama: "Andre", umur: 37, jk: "laki-laki" },
				{ nama: "triyono", umur: 34, jk: "laki-laki" },
				{ nama: "yanto", umur: 25, jk: "laki-laki" },
				{ nama: "abdul", umur: 24, jk: "laki-laki" },
				{ nama: "sinta", umur: 25, jk: "Perempuan" },
				{ nama: "yanti", umur: 34, jk: "Perempuan" },
			];

			$scope.user = {};
			$scope.master = {};

			$scope.update = function (user) {
				$scope.master = angular.copy(user);
			};

			$scope.reset = function () {
				$scope.user = {};
			};
			$scope.reset();
		},
	])
	.directive("myCurrentTime", [
		"$interval",
		"dateFilter",
		function ($interval, dateFilter) {
			function link(scope, element, attrs) {
				var format, timeoutId;

				function updateTime() {
					element.text(dateFilter(new Date(), format));
				}
				scope.$watch(attrs.myCurrentTime, function (value) {
					format = value;
					updateTime();
				});

				timeoutId = $interval(function () {
					updateTime();
				}, 1000);
			}
			return {
				link: link,
			};
		},
	]);
