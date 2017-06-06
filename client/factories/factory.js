myAppModule.factory('studentFactory', function (){
    // The factory is nothing more than a function that returns an object
    var students = [
        {name: 'Mike', age: 34},
        {name: 'John', age: 24},
        {name: 'Trey', age: 24}];
    var factory = {};
    // Add a getStudents key to the factory object with a value of a function.
    factory.getStudents = function (callback){
        // Pass the students to a callback to be used by whoever calls the method
        callback(students);
    }
    // Most important step: return the object so it can be used by the rest of our angular code
    return factory;
});
