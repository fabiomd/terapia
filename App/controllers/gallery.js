// angular.module('app').controller('GalleryCtrl',['$scope','$window',function($scope,$window){
// 	this.showModal = false;
// 	this.nature1Options = {
// 	    baseUrl: "https://",
// 	    fields: {
// 	        source: {
// 	            modal: "link",
// 	            image: "medium",
// 	            panel: "thumbnail"
// 	        }
// 	    },
// 	    modal: {
// 	        transition: 'zoomInOut'
// 	    },
// 	    panel: {
// 	        thumbnail: {
// 	            class: "col-md-4"
// 	        },
// 	    },
// 	    image: {
// 	        transition: 'fadeInOut'
// 	    }
// 	};


// 	this.nature1 = [
// 	    {
// 	        "link": "wallpaperscraft.com/image/nature_waterfall_summer_lake_trees_90400_1920x1080.jpg",
// 	  		"thumbnail": "i1.wallpaperscraft.com/image/nature_waterfall_summer_lake_trees_90400_300x168.jpg",
// 	  		"medium": "i1.wallpaperscraft.com/image/nature_waterfall_summer_lake_trees_90400_602x339.jpg",
// 	  	}, {
// 	  		"link": "wallpaperscraft.com/image/summer_mountains_nature_lake_river_grass_93164_1920x1080.jpg",
// 	  		"thumbnail": "i1.wallpaperscraft.com/image/summer_mountains_nature_lake_river_grass_93164_300x168.jpg",
// 	  		"medium": "i1.wallpaperscraft.com/image/summer_mountains_nature_lake_river_grass_93164_602x339.jpg",
// 	  	}
// 	];
// }]);

angular.module('app').controller('GalleryCtrl', ['$scope',function ($scope) {
	    // Set of Photos
	    $scope.photos = [
	        {src: 'imgs/gallery/img1.jpeg', desc: 'Image 01'},
	        {src: 'imgs/gallery/img2.jpeg', desc: 'Image 02'},
	        {src: 'imgs/gallery/img3.jpeg', desc: 'Image 03'},
	        {src: 'imgs/gallery/img4.jpeg', desc: 'Image 04'},
	        {src: 'imgs/gallery/img5.jpeg', desc: 'Image 05'},
	        {src: 'imgs/gallery/img6.jpeg', desc: 'Image 06'},
	        {src: 'imgs/gallery/img7.jpeg', desc: 'Image 07'},
	        {src: 'imgs/gallery/img8.jpeg', desc: 'Image 08'}
	    ];

	    // initial image index
	    $scope._Index = 0;
	    // if a current image is the same as requested image
	    $scope.isActive = function (index) {
	        return $scope._Index === index;
	    };
	    // show prev image
	    $scope.showPrev = function () {
	        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
	    };
	    // show next image
	    $scope.showNext = function () {
	        $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
	    };
	    // show a certain image
	    $scope.showPhoto = function (index) {
	        $scope._Index = index;
	    };
	}]);