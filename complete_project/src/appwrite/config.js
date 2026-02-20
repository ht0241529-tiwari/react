import conf from "../conf.js";    
import { Client,ID, Databases, Storage,Query } from "appwrite";


export class Service{
    client=new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases=new Databases(this.client);
        this.bucket=new Storage(this.client);//storage our backet ake hi mai mai bucket bol raha hu
        
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Error in createPost:", error);
        }
    }

    async updatePost(slug/*its a doucment_id ,we take as sepretly insead of search and take from the obj thats also work*/ ,{title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("Error in updatePost:", error);
        }
    }

    async deletePost({slug/*we want to only give the doucment_id then it can delete*/}){
        try {
                await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("Error in deletePost:", error);
            return false;
        }
    }

    async getPost({slug/*we want specific information from many*/}){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Error in getPost:", error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
                //pagination and filter and all other thing (we can also use search here do in future
            )
            
        } catch (error) {
            console.log("Error in getPosts:", error);
            return false;
        }
    }//enum

    //fileupload service

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
            
        } catch (error) {
            console.log("Error in uploadFile:", error);
            return false;
        }
    }

    //delete file

    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,  
                fileId
            )
            return true;

        } catch (error) {
            console.log("Error in deleteFile:", error);
            return false;
        }
    }

    getFilePreview(fileId){
        try {
            return this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("Error in getFilePreview:", error);
            return false;
        }
    }
    
}

const service=new Service();
export default service;