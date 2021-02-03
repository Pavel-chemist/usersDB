export interface User
{
    userId: number;
    name:
    {
        first: string;
        last: string;
    },
    age: number;
    isMale: boolean;
    isVisible: boolean;
}