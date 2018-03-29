/**
 * 
 */
app.factory('FriendService',function($http){
	var friendService={}
	friendService.getAllSuggestedUsers=function(){
		return $http.get("http://localhost:8181/back2/suggestedusers")
	}
	friendService.addFriend=function(toId){
		return $http.post("http://localhost:8181/back2/addfriend",toId)
	}
	friendService.getPendingRequests=function(){
		return $http.get("http://localhost:8181/back2/pendingrequests")
	}
	friendService.acceptRequest=function(request) {
		return $http.put("http://localhost:8181/back2/acceptrequest",request);
	}
	
	friendService.deleteRequest=function(request) {
		return $http.put("http://localhost:8181/back2/deleterequest",request)
	}
	return friendService;
})
