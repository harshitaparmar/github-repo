
myApp.controller('mainController',['$http','RepoService',function($http,RepoService){
	var main=this;
	this.pageheading="All Public Repository";
	this.repos=[];
	console.log(this.repos);
	console.log("hello");
	//loadAllRepos();
	RepoService.loadAllRepos()
	.then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          console.log(response);
          main.repos = response.data;
          console.log(main.repos);

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);

        });

      
}]);
