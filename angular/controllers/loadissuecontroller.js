
myApp.controller('issueTitleController',['$http','RepoService','$routeParams',function($http,RepoService,$routeParams) {

  //create a context
  var main = this;

  this.owner = $routeParams.owner;
  this.repo=$routeParams.repo
  console.log(this.owner+this.repo);

  this.loadAllIssues = function(){
   
      RepoService.getCurrentIssue(this.owner,this.repo)
      .then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          console.log(response);
          main.issues = response.data;
          console.log(main.issues);

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });


  }// end load all issues

  
   


}]); // end controller

