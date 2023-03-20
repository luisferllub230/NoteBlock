import { Injectable } from "@angular/core";
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { isUserLogged } from "../interfaces/isUserLogged";
import { userInformation } from "../interfaces/userInformation";
import { AddUserInformation, GetUserInformation } from "./User.action";


interface userStateModel {
    userInfo: userInformation
}

@State<userStateModel>({
    name: 'userInfo',
    defaults: {
        userInfo: {
            _id: '',
            isActiveUser: false,
            name: '',
            lastName: '',
            nickname: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            userNotes: [],
            userTasks: [],
            __v: 0,
            isUserLogged: false,
        }
    }
})

@Injectable()
export class UserState {


    @Selector()
    static getUserInformation(state: userInformation): userInformation {
        return state;
    }

    @Selector()
    static getIsUserLogged(state: userInformation): isUserLogged {
        return { 
            isLogged: state.isUserLogged,
            isActives: state.isActiveUser
         }
    }

    @Action(AddUserInformation)
    addUserInformation(ctx: StateContext<AddUserInformation>, action: AddUserInformation) {
        const state = ctx.getState();
        let isLogged = false;

        if (action.payload.isActiveUser && action.payload.isUserLogged) {
            isLogged = true;
        }

        const user: userInformation = {
            _id: action.payload._id,
            isActiveUser: action.payload.isActiveUser,
            name: action.payload.name,
            lastName: action.payload.lastName,
            nickname: action.payload.nickname,
            email: action.payload.email,
            phone: action.payload.phone,
            address: action.payload.address,
            city: action.payload.city,
            userNotes: action.payload.userNotes,
            userTasks: action.payload.userTasks,
            __v: action.payload.__v,
            isUserLogged: isLogged
        }

        ctx.setState({
            ...state,
            ...user,
        })
    }

}