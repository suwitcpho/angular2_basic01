angular.module('service',[]).factory('app', function($http,$filter){
	return {
		Getcaseamp:function(){
		return $http.post('index.php?r=app/Getcaseamp');	
		},
		Getcasehos:function(ampcode){
		return $http.post('index.php?r=app/Getcasehos&ampcode='+ampcode);	
		}
		,Getcasehosall:function(){
		return $http.post('index.php?r=app/Getcasehosall');	
		}
		,
		Listcasetohos:function(hos){
		return $http.post('index.php?r=app/Listcasetohos&hos='+hos);	
		}
		,
		Listcasetohosnode:function(hos){
		return $http.post('index.php?r=app/Listcasetohosnode&hos='+hos);	
		}
		,
		Newcaseapiamp:function(start,end){
		return $http.post('index.php?r=app/Newcaseapiamp&start='+start+'&end='+end);	
		},
		Newcaseapiampnewcase:function(ampcode,start,end){
		return $http.post('index.php?r=app/Newcaseapiampnewcase&ampcode='+ampcode+'&start='+start+'&end='+end);	
		},Listampall:function(){
		return $http.post('index.php?r=app/Listampall');	

		}
		,clearlog:function(){

		return console.clear();	
		}
	};
		
});
