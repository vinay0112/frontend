/**
 * 
 */
app.factory('JobService',function($http){
	var jobService={}
	jobService.addJob=function(job){
		return $http.post("http://localhost:8181/back2/addjob",job)
	}
	
	jobService.getAllJobs=function(){
		return $http.get("http://localhost:8181/back2/alljobs")
	}
	
	jobService.getJob=function(id){
        console.log(id)
        return $http.get("http://localhost:8181/back2/getjob/"+id)
    }
	
	return jobService;
})