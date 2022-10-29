﻿import jwt_decode from "jwt-decode";

interface UserDataSession {
    token: string
}

interface UserJwtDecode {
    sub: string,
    userType: string
}

class UserStorage {
    keyAdminStorage: string = "backofficeSessionMyPlace";

    public logInUser(token: string) : void {

        let userSession: UserDataSession =
            {
                token: token
            }

        localStorage.setItem(this.keyAdminStorage, JSON.stringify(userSession));
    }

    private decodeToken() : UserJwtDecode | null {
        let token : string | null = this.getToken();

        return (!!token) ? jwt_decode(token) as UserJwtDecode : null;
    }
    
    public get(): UserDataSession {
        return JSON.parse(
            localStorage.getItem(this.keyAdminStorage) as string
        ) as UserDataSession
    }

    public logOutUser() {
        localStorage.removeItem(this.keyAdminStorage);
    }

    public isLogged() : boolean { return !!localStorage.getItem(this.keyAdminStorage); }

    public getToken() : string | null {
        let user : UserDataSession = this.get();
        
        if (!user) return null;
        
        return user.token;
    }
    
    public getMail() : string | null {
        let userDecode = this.decodeToken();
        return userDecode ? userDecode.sub : null;
    }
}

export const userStorage = new UserStorage();