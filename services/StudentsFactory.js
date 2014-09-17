studentRoster.factory('StudentsFactory', function StudentsFactory() {
  var factory = {};
  factory.students = [];
  factory.addStudent = function() {
    factory.students.push({"name": factory.studentName});
    factory.studentName = null;
  };

  factory.deleteStudent = function(student) {
    var index = factory.students.indexOf(student)
    factory.students.splice(index, 1);
  };
  return factory;
});
