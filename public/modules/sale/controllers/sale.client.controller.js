'use strict';
var app=angular.module('sale');

app.controller('abc', ['$scope',
	function($scope) {
	    $scope.myData = [{name: "Moroni", age: 50},
	                     {name: "Tiancum", age: 43},
	                     {name: "Jacob", age: 27},
	                     {name: "Nephi", age: 29},
	                     {name: "Enos", age: 34}];

	    $scope.gridOptions = { data: 'myData' };

		$scope.customer = {
		    name: 'Naomi',
		    address: '1600 Amphitheatre'
		 };
	}
]);

// Sale controller
app.controller('SaleController', ['$scope', '$stateParams', '$location', 'Authentication', 'Company','$http',
	function($scope, $stateParams, $location, Authentication, Company, $http) {
		$scope.authentication = Authentication;

		// Create new Article
		$scope.create = function() {
			// Create new Article object
			var company = new Company({
				code: this.code,
				name: this.name,
				namefull:this.namefull,
				address:this.address,
				taxcode:this.taxcode
			});

			// Redirect after save
			company.$save(function(response) {
				$location.path('sale/' + response._id);

				// Clear form fields
				$scope.title = '';
				$scope.content = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Article
		$scope.remove = function(company) {
			if (company) {
				company.$remove();

				for (var i in $scope.company) {
					if ($scope.articles[i] === company) {
						$scope.articles.splice(i, 1);
					}
				}
			} else {
				$scope.company.$remove(function() {
					$location.path('sale');
				});
			}
		};

		// Update existing Article
		$scope.update = function() {
			var company = $scope.company;

			company.$update(function() {
				$location.path('sale/' + company._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Articles
		$scope.find = function() {
			$scope.company = Company.query();
			
		};

		 $scope.statuses = [{
	        id: 1,
	        name: "Low"        
	    }, {
	        id: 2,
	        name: "Normal"        
	    }, {
	        id: 3,
	        name: "High"        
	    }, {
	        id: 4,
	        name: "Urgent"        
	    }, {
	        id: 5,
	        name: "Immediate"        
	    }];
		$scope.ActionID = 3;

	    $scope.statusesM = [{
	        id: 1,
	        label: "Low"        
	    }, {
	        id: 2,
	        label: "Normal"        
	    }, {
	        id: 3,
	        label: "High"        
	    }, {
	        id: 4,
	        label: "Urgent"        
	    }, {
	        id: 5,
	        label: "Immediate"        
	    }];

    $scope.statusesMm = [];
    $scope.statusesMsettings = {displayProp: 'id'};

    $scope.mydate = new Date();

		//loat company list		
        $scope.company = Company.query();
       
         $scope.filterOptions = {
	        filterText: "",
	        useExternalFilter: true
	    }; 
    	$scope.totalServerItems = 0;
	    $scope.pagingOptions = {
	        pageSizes: [2, 5, 10, 20, 50],
	        pageSize: 2,
	        currentPage: 1
	    };	

	    $scope.setPagingData = function(data, page, pageSize){	
	        var pagedData = data.slice((page - 1) * pageSize, page * pageSize);
	        $scope.company = pagedData;
	        $scope.totalServerItems = data.length;
	        if (!$scope.$$phase) {
	            $scope.$apply();
	        }
	    };

	    $scope.getPagedDataAsync = function (pageSize, page, searchText) {
	        setTimeout(function () {
	            var data;
	            if (searchText) {
	                var ft = searchText.toLowerCase();
	                $http.get('jsonFiles/largeLoad.json').success(function (largeLoad) {		
	                    data = largeLoad.filter(function(item) {
	                        return JSON.stringify(item).toLowerCase().indexOf(ft) != -1;
	                    });
	                    $scope.setPagingData(data,page,pageSize);
	                });            
	            } else {            	
	                $http.get('jsonFiles/largeLoad.json').success(function (largeLoad) {
	                    $scope.setPagingData(largeLoad,page,pageSize);
	                });
	            }
	        }, 100);
	    };
	
    	$scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage);
	
	    $scope.$watch('pagingOptions', function (newVal, oldVal) {
	        if (newVal !== oldVal && newVal.currentPage !== oldVal.currentPage) {
	          $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
	        }
	    }, true);
	    $scope.$watch('filterOptions', function (newVal, oldVal) {
	        if (newVal !== oldVal) {
	          $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
	        }
	    }, true);

		$scope.gridOptions = { 
	        data: 'company',
	        showGroupPanel: true,
	        jqueryUIDraggable: true,
	        enablePaging: true,
			showFooter: true,
	        totalServerItems: 'totalServerItems',
	        pagingOptions: $scope.pagingOptions,
	        filterOptions: $scope.filterOptions,
	        columnDefs: [{field:'code', displayName:'Mã', width: "100"}, 
	        			{field:'name', displayName:'Tên giao dịch'},
	        			{field:'namefull', displayName:'Tên đầy đủ'},
	        			{field:'address', displayName:'Địa chỉ'},
	        			]
		};

		// Find existing Article
		$scope.findOne = function() {
			$scope.company = Company.get({
				companyId: $stateParams.companyId
			});
		};
	}
]);

