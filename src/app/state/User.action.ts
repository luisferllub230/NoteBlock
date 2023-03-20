import { userInformation } from "../interfaces/userInformation";

export class AddUserInformation {
    static readonly type = "[User] AddUserInformation";
    constructor(public payload: userInformation){}
}

export class GetUserInformation {
    static readonly type = "[User] GetUserInformation";
    constructor(){}
}