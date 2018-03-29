/**
 * 
 */
var app=angular.module('app',['ngRoute','ngCookies'])
app.config(function($routeProvider){
	$routeProvider
	.when('/register',{
		templateUrl:'views/registrationform.html',
		controller:'UserController'
	})
	.when('/login',{
		templateUrl:'views/login.html',
		controller:'UserController'
	})
	.when('/edituserprofile',{
		templateUrl:'views/edituserprofile.html',
		controller:'UserController'	
	})
	.when('/addjob',{
		templateUrl:'views/jobform.html',
		controller:'JobController'
	})
	.when('/getjob/:id',{
		templateUrl:'views/jobdetail.html',
		controller:'JobController'
	})
	.when('/alljobs',{
		templateUrl:'views/jobtitle.html',
		controller:'JobController'
	})
	.when('/addblog',{
		templateUrl:'views/blogform.html',
		controller:'BlogPostController'
	})
	.when('/blogsnotapproved',{
		templateUrl:'views/blogsnotapproved.html',
		controller:'BlogPostController'
	})
	.when('/blogsapproved',{
		templateUrl:'views/blogsapproved.html',
		controller:'BlogPostController'
	})
	.when('/getblog/:id',{
		templateUrl:'views/blogdetails.html',
		controller:'BlogDetailsController'
	})
	.when('/getblognotapproved/:id',{
		templateUrl:'views/blogapprovalform.html',
		controller:'BlogDetailsController'
	})
	.when('/getnotification/:id',{
		templateUrl:'views/notificationdetails.html',
		controller:'NotificationController'
	})
	
	.when('/home',{
		templateUrl:'views/home.html',
		controller:'NotificationController'

	})
	.when('/uploadprofilepic',{
		templateUrl:'views/uploadprofilepic.html',
		
	})
	.when('/suggestedusers',{
		templateUrl:'views/suggestedusers.html',
		controller:'FriendController'

	})
	.when('/pendingrequests',{
		templateUrl:'views/pendingrequest.html',
		controller:'FriendController'

	})
	.when('/chat',{
		templateUrl:'views/chat.html',
		controller:'ChatCtrl'
	})

	.otherwise({
		templateUrl:'views/home.html'
			
	})
})
	app.run(function($rootScope,$location,UserService,$cookieStore){
	if($rootScope.loggedInUser==undefined)
		$rootScope.loggedInUser=$cookieStore.get("currentuser")
		
		$rootScope.logout=function()
		{
		UserService.logout().then(function(response)
				{
			
				delete $rootScope.loggedInUser
				$cookieStore.remove("currentuser")
				$rootScope.message="Loggedout Successfully..."
				$location.path('/home')
				},function(response)
				{
					$rootScope.error=response.data
					if(response.status==401)
					$location.path('/login')
				})
	}
})