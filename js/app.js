angular.module('app331',['service','angularUtils.directives.dirPagination','ui.bootstrap'])
.controller('home',function($scope,app){
$scope.listhospitol=function(hospcode,ampname){
  $scope.ampevent=ampname;
  $scope.ampcodeevent=hospcode;
$scope.show=1;
app.Getcasehos(hospcode).then(function(res){
  $scope.listreshos=res.data;
  casehos=0;caseokhos=0;casenonetimehos=0;casenojobhos=0;
  angular.forEach(res.data,function(v){
casehos+=parseInt(v.totalcase);
caseokhos+=parseInt(v.statuscaseok);
casenonetimehos+=parseInt(v.statuscasenonetime);
casenojobhos+=parseInt(v.statuscasenojob);

});
$scope.casehos=casehos;
$scope.caseokhos=caseokhos;
$scope.casenonetimehos=casenonetimehos;
$scope.casenojobhos=casenojobhos;


}, function(err){console.log(err)});
}

app.Getcaseamp().then(function(res){
$scope.caseamp=res.data;
totalcase=0;statuscaseok=0;statuscasenonetime=0;statuscasenojob=0;
angular.forEach(res.data,function(v){
totalcase+=parseInt(v.totalcase);
statuscaseok+=parseInt(v.statuscaseok);
statuscasenonetime+=parseInt(v.statuscasenonetime);
statuscasenojob+=parseInt(v.statuscasenojob);

});
$scope.totalcase=totalcase;
$scope.statuscaseok=statuscaseok;
$scope.statuscasenonetime=statuscasenonetime;
$scope.statuscasenojob=statuscasenojob;
}, function(err){
console.log(err);
})


}).controller('newcase', function($scope,app,$filter){
    $scope.show='';
    $scope.textoktime='1';
     $scope.textnewcase='1';
 $scope.today=$filter('date')(new Date(), 'yyyy-MM-dd');



    app.Newcaseapiamp($filter('date')(new Date(), 'yyyy-MM-dd'),$filter('date')(new Date(), 'yyyy-MM-dd')).then(function(res){
     $scope.caseampnewcase=res.data;
     $scope.startdate=$filter('date')(new Date(), 'yyyy-MM-dd');
     $scope.enddate=$filter('date')(new Date(), 'yyyy-MM-dd');
      totalcase=0;statuscaseok=0;statuscasenonetime=0;statuscasenojob=0;
      angular.forEach(res.data,function(tr){
  totalcase+=parseInt(tr.totalcase);
  statuscaseok+=parseInt(tr.statuscaseok);
  statuscasenonetime+=parseInt(tr.statuscasenonetime);
  statuscasenojob+=parseInt(tr.statuscasenojob);
     });
  $scope.totalcase=totalcase;
  $scope.statuscaseok=statuscaseok;
  $scope.statuscasenonetime=statuscasenonetime;
  $scope.statuscasenojob=statuscasenojob;
    },function(err){

    });
    $scope.listhospitalnewcase=function(ampcode,ampname,startdate,enddate){
       $scope.show='1';
       
       $scope.ampevent=ampname; 
     
     app.Newcaseapiampnewcase(ampcode,startdate,enddate).then(function(res){
        $scope.listreshosnewcase=res.data;
        casehos=0;caseokhos=0;casenonetimehos=0;casenojobhos=0;
        angular.forEach(function(v){
       casehos+=parseInt(v.totalcase);
caseokhos+=parseInt(v.statuscaseok);
casenonetimehos+=parseInt(v.statuscasenonetime);
casenojobhos+=parseInt(v.statuscasenojob);

});
$scope.casehos=casehos;
$scope.caseokhos=caseokhos;
$scope.casenonetimehos=casenonetimehos;
$scope.casenojobhos=casenojobhos;

  });
    }
    $scope.searchnewcase=function(){
     $scope.textnewcase='2';
var d = new Date(); // today!
var x = 2; // go back 2 days!
d.setDate(d.getDate() - x);
$scope.dayfix=$filter('date')(d, 'yyyy-MM-dd');
if( angular.element('#enddate').val() < $scope.dayfix || angular.element('#startdate').val() < $scope.dayfix ){
$scope.textoktime='2'
}else if (angular.element('#enddate').val()>= $scope.dayfix  || angular.element('#startdate').val() > $scope.dayfix ){
$scope.textoktime='1';
}

  app.Newcaseapiamp(angular.element('#startdate').val(),angular.element('#enddate').val()).then(function(res){
     
     $scope.caseampnewcase=res.data;
     $scope.startdate=angular.element('#startdate').val();
     $scope.enddate=angular.element('#enddate').val();
   totalcase=0;statuscaseok=0;statuscasenonetime=0;statuscasenojob=0;
    angular.forEach(res.data,function(tr){
  totalcase+=parseInt(tr.totalcase);
  statuscaseok+=parseInt(tr.statuscaseok);
  statuscasenonetime+=parseInt(tr.statuscasenonetime);
  statuscasenojob+=parseInt(tr.statuscasenojob);
     });
       $scope.totalcase=totalcase;
  $scope.statuscaseok=statuscaseok;
  $scope.statuscasenonetime=statuscasenonetime;
  $scope.statuscasenojob=statuscasenojob;
      
    },function(err){
 alert('กรุณาตรวจสอบการเลือก');
    });
 // console.log(angular.element('#startdate').val()+'===>'+angular.element('#enddate').val());
}
}).controller('login', function($scope,app,$filter){
   // $scope.pass=cfCryptoHttpInterceptor.base64Key = "ssj";
console.log('vvv');
  
}).controller('profilessj', function($scope,app,$filter){
  app.Listampall().then(function(res){
    $scope.ampall=res.data;
  });
  app.Getcasehosall().then(function(res){
  $scope.listreshos=res.data;
  casehos=0;caseokhos=0;casenonetimehos=0;casenojobhos=0;
  angular.forEach(res.data,function(v){
casehos+=parseInt(v.totalcase);
caseokhos+=parseInt(v.statuscaseok);
casenonetimehos+=parseInt(v.statuscasenonetime);
casenojobhos+=parseInt(v.statuscasenojob);

});
$scope.casehos=casehos;
$scope.caseokhos=caseokhos;
$scope.casenonetimehos=casenonetimehos;
$scope.casenojobhos=casenojobhos;


}, function(err){console.log(err)});

$scope.listcasetohos=function(off_id,off_name){
app.Listcasetohos(off_id).then(function(res){
  $scope.hosname=off_name;
 $scope.listcaserlst=res.data;
});
}


}).controller('profilesso', function($scope,app,$filter){

 $scope.startpage=function(off_id,off_name,ampcode){
//console.log(off_id+'=='+off_name+'==='+ampcode);
$scope.ampcode=ampcode;
$scope.ampname=off_name;
 }
  app.Getcasehosall().then(function(res){
  $scope.listreshos=res.data;
  casehos=0;caseokhos=0;casenonetimehos=0;casenojobhos=0;
  angular.forEach(res.data,function(v){
casehos+=parseInt(v.totalcase);
caseokhos+=parseInt(v.statuscaseok);
casenonetimehos+=parseInt(v.statuscasenonetime);
casenojobhos+=parseInt(v.statuscasenojob);

});
$scope.casehos=casehos;
$scope.caseokhos=caseokhos;
$scope.casenonetimehos=casenonetimehos;
$scope.casenojobhos=casenojobhos;


}, function(err){console.log(err)});

$scope.listcasetohos=function(off_id,off_name){

app.Listcasetohos(off_id).then(function(res){
  $scope.hosname=off_name;
 $scope.listcaserlst=res.data;
});

}

}).controller('profilehospital', function($scope,app,$filter){
  $scope.startpage=function(off_id,off_name){
app.Listcasetohos(off_id).then(function(res){
  $scope.hosname=off_name;
 $scope.listcaserlst=res.data;
});
  }
}).filter('startFrom', function() {
    return function(input, start) {
        if(input) {
            start = +start; //parse to int
            return input.slice(start);
        }
        return [];
    }
}).controller('profilehospitalnode', function($scope,app,$filter){
  $scope.startpage=function(off_id,off_name){
    //console.log(off_id+'=='+off_name);
app.Listcasetohosnode(off_id).then(function(res){
  $scope.hosname=off_name;
 $scope.listcaserlst=res.data;
});
  }
}).filter('startFrom', function() {
    return function(input, start) {
        if(input) {
            start = +start; //parse to int
            return input.slice(start);
        }
        return [];
    }
}).directive('ngConfirmClick', [
        function(){
            return {
                link: function (scope, element, attr) {
                    var msg = attr.ngConfirmClick || "Are you sure?";
                    var clickAction = attr.confirmedClick;
                    element.bind('click',function (event) {
                        if ( window.confirm(msg) ) {
                            scope.$eval(clickAction)
                        }
                    });
                }
            };
    }]);
