/**
 * 
 */
app.factory('UserService',function($http){
	var userService={}
	
	userService.registerUser=function(user){
	
	console.log('in userservice'+user)	
	console.log(user)
	return	$http.post("http://localhost:8181/back2/registeruser",user)
	}
	userService.login=function(user){
		console.log('userservice-> login')
		console.log(user)
		return $http.post("http://localhost:8181/back2/login",user)
	}
	 userService.logout=function(user)
	    {
		    console.log('loggedout succesfully')
	        return $http.put("http://localhost:8181/back2/logout")
	    }
	 userService.getUser=function()
	    {
		    
	        return $http.get("http://localhost:8181/back2/getuser")
	    }
	 userService.updateUser=function(user)
	    {
		    
	        return $http.put("http://localhost:8181/back2/updateuser",user)
	    }
	return userService;
})