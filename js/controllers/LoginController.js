app.controller("LoginController", [
	"$scope",
	function ($scope) {
		$scope.judul = "Silahkan Login";
		$scope.username = "";
		$scope.password = "";
		$scope.login = function (user) {
			if ($scope.username == "admin" && $scope.password == "admin") {
				alert("Berhasil login");
				window.location.href = "/#!/form";
			} else {
				alert("Username/Password salah");
			}
		};
	},
]);
