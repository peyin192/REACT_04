type Score = number | string;

interface Subject  {
    subjectName: string;
    score: Score;
};

interface BasicInfo  {
    name: string;
    age: number;
};

type Student = BasicInfo & {
    subjects: Subject[];
};

let students: Student[] = [];

function isNumberScore(score: Score): score is number {
    return typeof score === "number";
}

function convertScore(score: Score): number {
    if (isNumberScore(score)) return score;
    switch (score.toUpperCase()) {
        case "A": return 10;
        case "B": return 8;
        case "C": return 6;
        case "D": return 4;
        default: return 0;
    }
}

function calcAverage(student: Student): number {
    if (student.subjects.length === 0) return 0;
    let total = 0;
    for (const subj of student.subjects) {
        total += convertScore(subj.score);
    }
    return total / student.subjects.length;
}

function classifyStudent(avg: number): string {
    if (avg >= 8.5) return "Giỏi";
    if (avg >= 6.5) return "Khá";
    if (avg >= 5) return "Trung bình";
    return "Yếu";
}

function addStudent(student: Student): void {
    students.push(student);
}

function updateStudent(name: string, updated: Partial<Student>): void {
    const idx = students.findIndex(s => s.name === name);
    if (idx !== -1) {
        students[idx] = { ...students[idx], ...updated };
    }
}

function deleteStudent(name: string): void {
    students = students.filter(s => s.name !== name);
}

addStudent({
    name: "Nguyen Van A",
    age: 20,
    subjects: [
        { subjectName: "Toán", score: 9 },
        { subjectName: "Văn", score: "A" },
        { subjectName: "Anh", score: "B" }
    ]
});

addStudent({
    name: "Tran Thi B",
    age: 21,
    subjects: [
        { subjectName: "Toán", score: 6 },
        { subjectName: "Văn", score: "C" },
        { subjectName: "Anh", score: 7 }
    ]
});

for (const student of students) {
    const avg = calcAverage(student);
    const type = classifyStudent(avg);
    console.log(`Tên: ${student.name}, Điểm trung bình: ${avg.toFixed(2)}, Loại: ${type}`);
}   