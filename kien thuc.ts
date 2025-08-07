// type alias + union type
type scoreType = number | string;
type numArr = scoreType[];
type Student = {
    name: string;
    id: number;
    scores?: scoreType;
}

let numbers: numArr = [1, 2, 3, 4, 5];
let students: Student = 
    {
        name: 'kien',
        id: 1,
        scores: "muoi"
    }

// intersection type
type user = {
    username: string;
}
type str = string | number;
type numStr = user & Student;
let user : numStr = {
    username: 'kien',
    name: 'kien',
    id: 1
}
interface Studentuser {
    name: string;
    id: number;
    scores?: scoreType;
}