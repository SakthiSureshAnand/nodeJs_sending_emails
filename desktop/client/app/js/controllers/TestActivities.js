/**
 *
 * @author Schubert Generated Code</br>
 * Date Created: </br>
 * @since  </br>
   build:   </p>
 *
 * code was generated by the Schubert System </br>
 * Schubert system Copyright - NewPortBay LLC copy_right_range</br>
 * The generated code is free to use by anyone</p>
 *
 *
 *
*/

app.controller("TestActivities", [ '$scope', '$rootScope', '$location', '$window', '$q', '$http', 'RestURL',
				    function( $scope, $rootScope, $location, $window, $q, $http, RestURL) {

		$scope.TestNoun = {
		id: '',
		persona : '',
		personb : ''
		};



        $scope.create = function () {

		  //this is where the start code goes


		  //this is where the validate code goes


		  //this is where the post code goes
		  var deferred = $q.defer();
		  /*$http.post(RestURL.baseURL+'TestActivities/TestNoun', $scope.TestNoun).success(function(response) {
		  	 alert('Operation SaveTestNoun successful');
		  	 console.log('Inside the TestActivities success data =>',angular.toJson(response));
		  	 deferred.resolve(response);
		  }).error(function(err) {
		  	 alert('You got' + err + 'error');
		  	 deferred.reject(err);
		  });*/

		  $http.get(RestURL.baseURL+'TestActivities/testData').success(function(response) {
		  	 alert('Operation SaveTestNoun successful');
		  	 console.log('Inside the TestActivities success data =>',angular.toJson(response));
		  	 deferred.resolve(response);
		  }).error(function(err) {
		  	 alert('You got' + err + 'error');
		  	 deferred.reject(err);
		  });



		  //this is where the server response code goes


		  //this is where the transition code goes

		  //this is where the end code goes 



        };




		$scope.$on('$viewContentLoaded', function(event) {
			var biggestHeight = 0;
			var height = 0;
			$(".screen").find('*').each(function(){
				height = $(this).position().top + $(this).height() + 100;
				if (height > biggestHeight ) {
					biggestHeight = height;
				}
			});
			$(".screen").height(biggestHeight);
		});

		$scope.refresh_screen_height = function() {
			var biggestHeight = 0;
			var height = 0;
			$(".screen").find('*').each(function(){
				height = $(this).position().top + $(this).height() + 100;
				if (height > biggestHeight ) {
					biggestHeight = height;
				}
			});
			$(".screen").height(biggestHeight);
		};

}]);


