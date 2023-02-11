// Array
// -----------
var hobbies = [];
hobbies[0] = 'cricket';
hobbies[1] = 'travelling';
// Tuples
// -----------
var role = [1, 'admin'];
role = [2, 'user'];
// role = [1]       // This is the incorrect assignment
// Enum
// --------
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
// By default enum starts with zero, to change this behaviour you can explicitly start it with any number like 5
// enum Role {ADMIN = 5, READ_ONLY, AUTHOR};    
var newRole = Role.ADMIN;
// Union types
// --------------
function combine(input1, input2) {
    var result;
    if (typeof (input1) === 'number' && typeof (input2) === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
console.log(+'10'++, '20');
