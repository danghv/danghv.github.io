var tableApp = angular.module("my table", []);
var controllerTableApp = tableApp.controller("tableController", tableController);
tableController.$inject = ['$scope'];
function tableController($scope){
	var vnr50 = [
				{tenCongTy: "Công ty CP ô tô Trường Hải", ceo: "Nguyễn Hùng Minh", maCK: "THA", namThanhLap: new Date("04/27/1997")},
				{tenCongTy: "Công ty CP sữa Việt Nam", ceo: "Mai Kiều Liên", maCK: "VNM", namThanhLap: new Date("08/20/1976")},
				{tenCongTy: "Công ty CP tập đoàn vàng bạc đá quý Doji", ceo: "Đỗ Minh Phú", maCK: "", namThanhLap: new Date("01/01/1994")},
				{tenCongTy: "công ty CP FPT", ceo: "Bùi Quang Ngọc", maCK: "FPT", namThanhLap: new Date("01/01/1988")},
				{tenCongTy: "Công ty CP Vincom", ceo: "Dương Thị Mai Hoa", maCK: "VIC", namThanhLap: new Date("08/08/1993")},
				{tenCongTy: "CÔNG TY CP tập đoàn Masan", ceo: "Nguyễn Đăng Quang", maCK: "", namThanhLap: new Date("01/01/2005")},
				{tenCongTy: "CÔNG TY CP tập đoàn Hòa Phát", ceo: "Trần Tuấn Dương", maCK: "HPG", namThanhLap: new Date("01/01/1992")},
				{tenCongTy: "CÔNG TY CP đầu tư thế giới di động", ceo: "Chu Văn Tài", maCK: "MWG", namThanhLap: new Date("08/02/2016")},
				{tenCongTy: "Ngân hàng TMCP Sài Gòn", ceo: "Võ Tấn Hoàng Văn", maCK: "", namThanhLap: new Date("01/02/2012")},
				{tenCongTy: "Ngân hàng TMCP Việt Nam Thịnh Vượng", ceo: "Nguyễn Đức Vinh", maCK: "", namThanhLap: new Date("01/01/1993")},
				{tenCongTy: "Ngân hàng TMCP Sài Gòn Thương Tín", ceo: "Phan Huy Khang", maCK: "STB", namThanhLap: new Date("12/21/1991")},
				{tenCongTy: "Techmaster.vn", ceo: "Trịnh Minh Cường", maCK: "", namThanhLap: new Date("01/01/2012")}

	];
	$scope.vnr50 = vnr50;
	// var limitRow = 10;
	$scope.limitRow = 10;
	$scope.sortColumn = "maCK";
	$scope.reverse = false;
	$scope.sortData = function(column){
		if($scope.sortColumn == column){
			$scope.reverse = !$scope.reverse;
		}else {

			$scope.reverse = false;
			$scope.sortColumn = column;
		}
		
	};
	$scope.getSortClass = function(column){
		if($scope.sortColumn == column){
			return $scope.reverse?"arrow-up": "arrow-down";
		}
	}

}