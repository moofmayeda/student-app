studentRoster.controller('SignInCtrl', function SignInCtrl($scope, StudentsFactory){
  $scope.students = StudentsFactory.students;
  $scope.StudentsFactory = StudentsFactory;
  $scope.signin = function(student) {
    var selectedStudent = $scope.students[$scope.students.indexOf(student)]
    selectedStudent.signedin = selectedStudent.signedin === false ? true: false
    // selectedStudent.date = new Date();
  }
});
