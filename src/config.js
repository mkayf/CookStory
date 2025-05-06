const config = {
    appwriteEndpoint : String(import.meta.env.VITE_APPWRITE_ENDPOINT),
    appwriteProjectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteBlogCollectionId : String(import.meta.env.VITE_APPWRITE_BLOG_COLLECTION_ID),
    appwriteBucketId : String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    tinyMCEAPIKey : String(import.meta.env.VITE_TINYMCE_API_KEY)
}

export default config;