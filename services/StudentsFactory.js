studentRoster.factory('StudentsFactory', function StudentsFactory() {
  var factory = {};
  factory.students = [];
  factory.addStudent = function() {
    factory.students.push({"name": factory.studentName, "signedin" : false });
    factory.studentName = null;
  };

  factory.deleteStudent = function(student) {
    var index = factory.students.indexOf(student)
    factory.students.splice(index, 1);
  };
  factory.signin = function(student) {
    var selectedStudent = factory.students[factory.students.indexOf(student)]
    selectedStudent.signedin = selectedStudent.signedin === false ? true: false
    // selectedStudent.date = new Date();
  }

  return factory;
});
