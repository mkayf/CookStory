import { Client, ID, Account } from "appwrite";
import config from '../config'

class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client.setEndpoint(config.appwriteEndpoint)
        .setProject(config.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){
        try{
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            );

            if(userAccount){
                this.login({email, password});
            } else{
                return userAccount;
            }

        }
        catch(e){
            console.log('Appwrite service error :: createAccount', e);
            return null;
        }
    }

    async login({email, password}){
        try{
            return await this.account.createEmailPasswordSession(email, password);
        }
        catch(e){
            console.log('Appwrite service error :: login', e);
            return null;
        }
    }

    async getCurrentUser(){
        try{
            return await this.account.get();
        }
        catch(e){
            console.log('Appwrite service error :: getCurrentUser', e);
            return null;
        }
    }

    async logout(){
        try{
            await this.account.deleteSessions();
            return true;
        }
        catch(e){
            console.log('Appwrite service error :: logout', e);
            return false;
        }
    }
}

const authService = new AuthService;
export default authService;