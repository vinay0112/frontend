app.factory('BlogService',function($http)
		{
var blogService={}

blogService.addBlog=function(blogPost)
{
return $http.post("http://localhost:8181/back2/addblogpost", blogPost)
}
blogService.getBlogsWaitingForApproval=function()
{
	return $http.get("http://localhost:8181/back2/getblogs/"+0)
	}

blogService.getBlogsApproved=function()
{
	return $http.get("http://localhost:8181/back2/getblogs/"+1)
	}

blogService.getBlog=function(id)
{
	return $http.get("http://localhost:8181/back2/getblog/"+id)
	}
blogService.hasUserLikedBlog=function(id)
{
	return $http.get("http://localhost:8181/back2/hasuserlikedblog/"+id)
	}
blogService.approve=function(blog)
{
	return $http.put("http://localhost:8181/back2/approve",blog)
	}
blogService.reject=function(blog,rejectionReason)
{
	return $http.put("http://localhost:8181/back2/reject/"+rejectionReason,blog)
	}
blogService.updateLikes=function(id)
{
	return $http.put("http://localhost:8181/back2/updateLikes/"+id)
	}


blogService.addComment=function(blogComment){
    return $http.post("http://localhost:8181/back2/addcomment",blogComment)
    }

blogService.getBlogComments=function(id){
    return $http.get("http://localhost:8181/back2/blogcomments/"+id)
    }

return blogService;
})