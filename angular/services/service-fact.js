myApp.factory('RepoService',function($http){
	
	var repoAPIS  =  {};
	var username = "harshitaparmar";
	var baseUrl = 'https://api.github.com/repositories';
	repoAPIS.loadAllRepos = function(){

		return $http({

		  method: 'GET',
		  url: baseUrl
		})	


	}//end of loading all repos

});