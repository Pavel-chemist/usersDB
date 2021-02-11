export interface User {
    userId: number;
    name: {
        first: string;
        last: string;
    },
    age: number;
    isMale: boolean;
    company: string;
    department: string;
    photoUrl: string;
    email: string;
}