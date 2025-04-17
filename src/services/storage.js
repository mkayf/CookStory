import { Client, Storage, ID } from "appwrite";
import config from "../config";

class StorageService {
    client = new Client();
    storage;

    constructor(){
        this.client.setEndpoint(config.appwriteEndpoint)
        .setProject(config.appwriteProjectId);
        this.storage = new Storage(this.client);
    }

    async uploadFile(file){
        try{
            return await this.storage.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            )
        }
        catch(e){
            console.log('Appwrite service error :: createFile', e);
            return null;
        }
    }

    async deleteFile(fileId){
        try{
            await this.storage.deleteFile(
                config.appwriteBucketId,
                fileId
            );
            return true;
        }
        catch(e){
            console.log('Appwrite service error :: deleteFile', e);
            return false;
        }
    }

    async getFilePreview(fileId){
        try{
            return this.storage.getFileView(
                config.appwriteBucketId,
                fileId
            )
        }
        catch(e){
            console.log('Appwrite service error :: getFilePreview', e);
            return null;
        }
    }
}