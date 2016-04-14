var Pharmacy = angular.module('Pharmacy', ['vs-repeat','ngOboe','angularUtils.directives.dirPagination']);

// Pharmacy.controller('PharmacyCtrl', function ($scope, $http) {
//       $http.get('test1.json')
//      .success(function (data) {
//        $scope.preparats = data;
//         //var foundprepartas = searchPreparats(data, $scope.q);
//         //$scope.tasks.due_date = Date.parse($scope.tasks.due_date);
//     }); 
Pharmacy.controller('PharmacyCtrl', function($scope, Oboe) {
            $scope.offset = 0; // starting offset for virtual-scroll
            $scope.preparats = [];
           // $scope.filterLimit = 50;
          
            Oboe({
                url: 'test5.json',
                cached: true,
                pattern: '{id name gorod apteka adres phone producer ed sklad cena ostatok}', // all nodes that have an index property will be included
                start: function(stream) {
                    // the stream starts. create a reference
                    $scope.stream = stream;
                    $scope.status = 'reading....';
                },
                done: function(parsedJSON) {
                    $scope.status = 'done';

                }
            }).then(function() {
                // stream ends
               // return Oboe.drop;
            }, function(error) {
                // some error
                //console.log(error);
            }, function(record) {
               $scope.preparats.push(record);
               if($scope.preparats.length === 50000) {
                $scope.stream.abort();
                //return Oboe.drop;
                
            }
            });

             $scope.searchValue = function(q) { 
              $scope.foundpreparats=[];    
              angular.forEach($scope.preparats, function(value, key) {
                if ( value.name.indexOf(q) > -1) {
                  $scope.foundpreparats.push({id:value.id,name:value.name,gorod:value.gorod,phone:value.phone,adres:value.adres, apteka:value.apteka, cena:value.cena,producer:value.producer});
                }
              });
            }; 
  });

     
    

//$scope.search=function(){
        //$scope.preparatsFiltered = $scope.preparats;
        //$scope.searchQuery = angular.copy($scope.q);
        //$scope.searchReasult=true;
      //};
// $scope.currentPage = 1;
//  $scope.preparats = [];
//   getData();

// function getData() {
//     $http.get("test1.json" + $scope.currentPage)
//       .then(function(response) {
//         $scope.totalItems = response.data.info.num_results;
//         angular.copy(response.data.preparats, $scope.preparats);


//       });
//   }
//   $scope.pageChanged = function() {
//     getData();
//   };

// Pharmacy.filter("searchPreparats", function () {
//   return _.memoize(function (items, q) {
    
//         var foundpreparats = _.filter(items, function (q){
//          return items.name && items.name.indexOf(q) != -1;
//      });
//    })
// });
// Pharmacy.filter("searchPreparats", function () {
//   return function (f_preparats, q) {
//           var foundpreparats = [];
//           foundpreparats = _.filter(f_preparats, function (f_preparat){
//          return f_preparat.name && f_preparat.name.indexOf(q) != -1;
//      });
//     return foundpreparats;
//    };
// });
 
    




