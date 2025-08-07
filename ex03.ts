interface Student {
    name?: string;
    age?: number;
    email?: string;
}
const students: Student = {
    name: "John",
    age: 20,
    email: "john@example.com",
}
console.log(`Tên tôi là ${student.name},tôi ${student.age} tuổi và email của tôi là ${student.email}.`);