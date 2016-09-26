
myApp.controller('userDetailController',['$http','RepoService','$routeParams',function($http,RepoService,$routeParams) {

  //create a context
  var main = this;

  this.username= $routeParams.username;
  console.log(this.username);

  this.loadUserDetail = function(){
  
      RepoService.getUserDetail(this.username)
      .then(function successCallback(response) {
          console.log(response);
          main.details = response.data;
          console.log(main.details);
          main.name=main.details.name;
          main.html_url=main.details.html_url;
          main.avatar_url=main.details.avatar_url;
           console.log(main.name+main.html_url+main.avatar_url);
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });


  }// end load all issues

  
   


}]); // end controller

