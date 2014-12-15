/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

angular.module('MyApp' , [])
   .controller('MainCtrl', function ($scope, $interval) {
       
//    console.log ("loading controller");
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.info = {};
    $scope.info.name = "evert";
    $scope.scopevalue = "test123";
    
    $scope.info2 = {};
    $scope.info2.iban = "iban";
    $scope.info2.id = "id";
    
    
    var x = 0;
    var stop;
    stop = $interval(function (){
        x = x + 1;
        $scope.info.name = "xxx: " + x;
        
        if (x === 5){
           $interval.cancel(stop) ;
        }
    }, 1000);
    
  })
  
.directive('myCustomer', function() {
//          console.log("loading directive");
  return {
    restrict: 'E',
    
//    scope: {
//        customerInfo: '=info'
//    },
    controller: function($scope) {
        console.log("loading myCustomer controller ");
        var customerInfo = {};
        customerInfo.name = "name !!!";
        customerInfo.address = "address !!!"
        $scope.customerInfo = customerInfo;
                
    },
    template: 'Name: {{customerInfo.name}} Address: {{customerInfo.address}}'
  };
})

.directive('myCustomer2', function() {
//          console.log("loading directive");
  return {
    restrict: 'E',
    
    scope: {
        name: '@info'
    },
    template: 'Name: {{name}}'
  };
})

.directive('hellotransclude', function (){
    return {
        template: '<div>Hi there <span ng-transclude></span></div>', 
        transclude: true
    }
})

.directive('helloreplace', function (){
    return {
        template: '<div>Hi there</div>', 
        replace: true
    }
})

.directive('scope1', function (){
    return {
        scope: {
            name: '@'
            },

        template: '<div>Hi there {{name}}</div>', 
        replace: true
    }
})

.directive('scope2', function (){
    return {
        scope: {
            name: '='
            },

        template: '<div>Hi there {{name}}</div>', 
        replace: true
    }
});
