

interface ICreateUsersDto{
    name: string;
    email: string;
    password: string;
    driver_license: string;
    id?: string;
    avatar?: string;

}

export { ICreateUsersDto}