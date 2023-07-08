// let datlt: Teacher;
// let sontv: Teacher;

// type Teacher = string;
// type RoleId = number;

// let mssv: RoleId = 1111;

// type Info = {
//     id: number,
//     name: string,
//     age: number
// }

// const myInfo: Info = {
//     id: 1,
//     name: 'Dat',
//     age: 18,
//     email: "...",
//     avatar: '...'
// }

/*
    - type alias
    - interface
*/

// interface Student {
//     readonly id: number,
//     email: string,
//     roleId: number,
//     avatar?: string
// }

// const thienth: Student = {
//     id: 1,
//     email: '...',
//     roleId: 1,
//     avatar: '...'
// }
// thienth.id = 100;
/*
    - required
    - readonly
    - optional
*/

/*
    product = {
        id:1,
        name: 'product a',
        price: 1000,
        description: '...',
        image:'...'
    }
*/

// Union Type ( | )

// interface Student {
//     readonly id: number | string,
//     email: string,
//     roleId: number,
//     avatar?: string
// }
// const myStudent: Student = {
//     id: true,
//     email: '...',
//     roleId: 1,
// }

// intersection type ( & )

// type StudentInfo = {
//     id: number,
//     name: string
// }
// type CompanyInfo = {
//     place: string,
//     phoneNumber: number
// }

// type PersonInfo = StudentInfo & CompanyInfo;
// const sontv: PersonInfo = {
//     id: 1,
//     name: 'Son',
//     place: '...',
//     phoneNumber: 1237346437
// }


// interface EmployeeInfo {
//     id: number,
//     name: string
// }
// interface ConpanyInfo {
//     phoneNumber: string
// }

// interface Employee extends EmployeeInfo, CompanyInfo {
//     email: string,
//     avatar: string
// }
// const datlt: Employee = {
//     id: 1,
//     name: 'Dat'
// }

// Declaration Merging

interface Manager {
    id: number,
    name: string
}
// ....
interface Manager {
    id: string,
    phoneNumber: string,
    position: string
}

const datlt: Manager = {
    id: 1,
    name: 'Dat',
    phoneNumber: '...',
    position: '...'
}