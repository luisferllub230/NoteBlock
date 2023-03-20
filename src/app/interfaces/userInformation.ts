export interface userInformation {
    _id: string;
    isActiveUser: boolean;
    name: string;
    lastName: string;
    nickname: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    userNotes: any[];
    userTasks: any[];
    __v: number;
    isUserLogged: boolean;
}