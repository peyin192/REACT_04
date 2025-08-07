interface person {
    name: string;
    age: number;
}
interface Employee {
    employeeId: number;
    department: string;
}

type StaffMember = person & Employee;
function printStaffInfo(staff: StaffMember): void {
    console.log(`Nhân viên: ${staff.name} (${staff.age} tuổi), Mã nhân viên: ${staff.employeeId} - Phòng: ${staff.department}`);
}