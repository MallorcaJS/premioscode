'use strict';

angular.module('app.controllers')
.controller('TasksController', 
	['$scope', 
    '$stateParams', 
    '$ionicModal',
    '$ionicPopup', 
    'TaskService', 
	function ($scope, 
        $stateParams, 
        $ionicModal,
        $ionicPopup, 
        TaskService) {

    var weddingId = $stateParams.weddingId;
    var tasks = [];
    $scope.ordered = [];

 	$scope.taskTypes = [
 		{
 			"id": 0,
 			"name": 'Catering'
 		},
 		{
 			"id": 1,
 			"name": 'Photographer'
 		},
 		{
 			"id": 2,
 			"name": 'Music'
 		},
 		{
 			"id": 3,
 			"name": 'Other'
 		}
    ];
    $scope.addTaskData = {};
    $scope.selectedTypeId = 1;
    $scope.editTaskData = {};

     var i = 3;
    
    // init
    $scope.init = function() {
        TaskService.findAll(weddingId, function(results) {
            tasks = results;
            $scope.ordered = [];
            var lastDate;
            for(var i = 0,len = tasks.length; i < len; i++) {
                var task = tasks[i];
                console.log(task.date);
                if(task.date != lastDate) {
                    $scope.ordered.push({date: task.date, isDivider:true});
                    lastDate = task.date;
                }
                $scope.ordered.push(task);
            }
        }); 
    };

    $scope.segmentedChanged = function(index){
      $scope.selectedIndex = index;
      console.log("clicked: " + index);
      // TODO
      $scope.$apply();
    }

    $scope.completionChanged = function(task) {
        // TODO
    };

    // + Add +
    $ionicModal.fromTemplateUrl('app/tasks/task-add.html', {
        scope: $scope
    }).then(function(resultModal) {
        $scope.taskAddModal = resultModal;
    });

    $scope.closeAddTaskModal = function() {
        $scope.taskAddModal.hide();
    };

    $scope.showAddTaskModal = function() {
        $scope.taskAddModal.show();
        i = i + 1;
        $scope.addTaskData.id = i;
    };

    $scope.submitAddTask = function() {
        $scope.closeAddTaskModal();
        $scope.addTaskData.type = $scope.taskTypes[$scope.selectedTypeId];
        $scope.addTaskItem($scope.addTaskData);
        console.log('Add task', $scope.addTaskData);
        $scope.addTaskData = {};
    };

    $scope.addTaskItem = function(taskToAdd) {
        tasks.push(taskToAdd);
        $scope.ordered.push(taskToAdd);
        // $scope.apply(); TODO
        // call add service
    };

    // $scope.$on('$ionicView.beforeEnter', function(){
    //     console.log('BEFORE ENTER');
    //     $scope.init();
    // });
        
    // + Edit + (TODO)

}]);
// .controller('AttendeeDetailController', 
// 	['$scope', '$stateParams', 'AttendeeService', 
// 	function($scope, $stateParams, AttendeeService) {
//   console.log($stateParams);
//   AttendeeService.get($stateParams.attendeeId, function(result) {
//   	$scope.attendee = result;
//   });
// }]);