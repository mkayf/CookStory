import { Client, ID, Account } from "appwrite";
import config from "../config";

class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteEndpoint)
      .setProject(config.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      return this.login({ email, password });

    } catch (e) {
      console.log("Appwrite service error :: createAccount", e);
      throw e;
    }
  }

  async login({ email, password }) {
    try {
      const session = await this.account.createEmailPasswordSession(email, password);
      return session;
    } catch (e) {
      console.log("Appwrite service error :: login", e);
      throw e;
    }
  }

  async getCurrentUser() {
    try {
      const userData = await this.account.get();
      return userData;
    } catch (e) {
      console.log("Appwrite service error :: getCurrentUser", e);
      return null;
    } 
  }

  async logout() {
    try {
      await this.account.deleteSessions();
      return true;
    } catch (e) {
      console.log("Appwrite service error :: logout", e);
      return false;
    }
  }
}

const authService = new AuthService();
export default authService;
