var app  = angular.module('myApp', [])
app.controller('myCtrl',function($scope){
     $scope.incomeList=[];
         $scope.expenseList=[];
  
     $scope.addList = function() {  
       
         if($scope.optionValue=="add")
             {
                 
                  $scope.incomeList.push({incomeText:$scope.element1,incomeText1:$scope.element2});
                 $scope.element1 = "";
                  
    $scope.deleteIncome = function(deleteIndex,deleteValue) {  
    
        $scope.incomeList.splice(deleteIndex,1);
         
     };
                 
             }
       else if($scope.optionValue=="remove"){
           
                  $scope.expenseList.push({expenseText:$scope.element1,expenseText1:$scope.element2});
                  
    $scope.deleteExpense = function(deleteIndex,deleteValue1) {  
    
        $scope.expenseList.splice(deleteIndex,1);
         
     };
           
       }
         else{
             alert("Doesn't exist");
         }
    };
    
});