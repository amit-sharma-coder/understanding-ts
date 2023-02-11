// Array
// -----------
let hobbies: string[] = [];
hobbies[0] = 'cricket';
hobbies[1] = 'travelling';


// Tuples
// -----------
let role: [number, string] = [1, 'admin'];
role = [2, 'user'];
// role = [1]       // This is the incorrect assignment


// Enum
// --------
enum Role {ADMIN, READ_ONLY, AUTHOR};
// By default enum starts with zero, to change this behaviour you can explicitly start it with any number like 5
// enum Role {ADMIN = 5, READ_ONLY, AUTHOR};    
const newRole = Role.ADMIN;


// Union types
// --------------
function combine(input1: number | string, input2: number | string) {
    let result: number | string;
    if (typeof(input1) === 'number' && typeof(input2) === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

