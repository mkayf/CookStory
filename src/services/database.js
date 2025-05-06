import { Client, Databases, Query, ID } from "appwrite";
import config from "../config";

class DatabaseService {
    client = new Client();
    database;

    constructor(){
        this.client.setEndpoint(config.appwriteEndpoint)
        .setProject(config.appwriteProjectId);
        this.database = new Databases(this.client);
    }

    async createPost({title, slug, content, status, featured_img, category, userId}){
        try{
            return await this.database.createDocument(
                config.appwriteDatabaseId,
                config.appwriteBlogCollectionId,
                slug,
                {title, slug, content, status, featured_img, category, userId}
            )
        }
        catch(e){
            console.log('Appwrite service error :: createPost', e);
            return null;
        }
    }

    async getAllPosts(queries = [Query.equal('status', 'active')]){
        try{
            return await this.database.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteBlogCollectionId,
                queries
            )
        }
        catch(e){
            console.log('Appwrite service error :: getAllPosts', e);
            return null;
        }
    }

    async getPost(slug){
        try{
            return await this.database.getDocument(
                config.appwriteDatabaseId,
                config.appwriteBlogCollectionId,
                slug
            );
        }
        catch(e){
            console.log('Appwrite service error :: getPost', e);
            return null;
        }
    } 

    async updatePost(postId, {title, slug, content, status, featured_img, category}){
        try{
            return await this.database.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteBlogCollectionId,
                // slug for updating old post
                postId,
                {title, slug, content, status, featured_img, category}
            )
        }
        catch(e){
            console.log('Appwrite service error :: updatePost', e);
            return null;
        }
    }

    async deletePost(slug){
        try{
            await this.database.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteBlogCollectionId,
                slug
            );
            return true; 
        }
        catch(e){
            console.log('Appwrite service error :: deletePost', e);
            return false;
        }
    }
}

const databaseService = new DatabaseService;
export default databaseService; 