myApp.factory('RepoService',function($http){
	
	var repoAPIS  =  {};
	var username = "harshitaparmar";
	//var baseUrl = 'https://api.github.com/repositories';
	var baseUrl= 'https://api.github.com';
	repoAPIS.loadAllRepos = function(){

		return $http({

		  method: 'GET',
		  url: baseUrl+'/repositories' 
		})	


	}//end of loading all repos
	repoAPIS.getCurrentIssue = function(owner,repo){
		//return $http.get(baseUrl+'/'+blogId)
		console.log(owner+repo);
		return $http.get(baseUrl + '/repos/'+owner+'/'+repo+ '/issues')	


	}
	repoAPIS.getIssueDetail = function(owner,repo,number){
		//return $http.get(baseUrl+'/'+blogId)
		console.log(owner+repo+number);
		return $http.get(baseUrl + '/repos/'+owner+'/'+repo+ '/issues/'+number)	


	}
	repoAPIS.getUserDetail = function(username){
		//return $http.get(baseUrl+'/'+blogId)
		console.log(username);
		return $http.get(baseUrl + '/users/'+username)	


	}
	return repoAPIS;

});