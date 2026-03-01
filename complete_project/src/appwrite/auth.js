import conf from '../conf/conf.js';
import { Client, Account, ID, Avatars } from "appwrite";

export class AuthService {
    client = new Client();
    account;
    avatars;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
        this.avatars = new Avatars(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return await this.login({ email, password });
            }
            return userAccount;
        } catch (error) {
            console.error("AuthService :: createAccount :: error", error);
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            const session = await this.getCurrentUser();
            if (session) return session;
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.error("AuthService :: login :: error", error);
            throw error;
        }
    }

    async loginWithGoogle() {
        try {
            return this.account.createOAuth2Session(
                'google',
                `${window.location.origin}/home`,
                `${window.location.origin}/login`
            );
        } catch (error) {
            console.error("AuthService :: loginWithGoogle :: error", error);
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            return null;
        }
    }

    async logout() {
        try {
            await this.account.deleteSessions();
            return true;
        } catch (error) {
            console.error("AuthService :: logout :: error", error);
            return false;
        }
    }

    // --- NEW: EMAIL VERIFICATION ---
    async sendVerification() {
        try {
            return await this.account.createVerification(`${window.location.origin}/verify-email`);
        } catch (error) {
            console.error("AuthService :: sendVerification :: error", error);
            throw error;
        }
    }

    // --- NEW: PASSWORD RECOVERY (FORGOT PASSWORD) ---
    
    // Step 1: Send the recovery email to the user
    async createPasswordRecovery(email) {
        try {
            return await this.account.createRecovery(
                email, 
                `${window.location.origin}/reset-password` // This is your frontend route
            );
        } catch (error) {
            console.error("AuthService :: createPasswordRecovery :: error", error);
            throw error;
        }
    }

    // Step 2: Update the password once user clicks the link
    async updatePasswordRecovery(userId, secret, password) {
        try {
            return await this.account.updateRecovery(
                userId,
                secret,
                password,
                password // Password confirmation
            );
        } catch (error) {
            console.error("AuthService :: updatePasswordRecovery :: error", error);
            throw error;
        }
    }

    // --- UI HELPER: AVATARS ---
    getUserAvatar(name) {
        try {
            return this.avatars.getInitials(name);
        } catch (error) {
            console.error("AuthService :: getUserAvatar :: error", error);
            return null;
        }
    }
}

const authService = new AuthService();
export default authService;



































// import conf from '../conf/conf.js';
// import { Client, Account, ID } from "appwrite";


// export class AuthService {
//     client = new Client();
//     account;

//     constructor() {
//         this.client
//             .setEndpoint(conf.appwriteUrl)
//             .setProject(conf.appwriteProjectId);
//         this.account = new Account(this.client);
            
//     }

//     // async createAccount({email, password, name}) {
//     //     try {
//     //         const userAccount = await this.account.create(ID.unique(), email, password, name);
//     //         if (userAccount) {
//     //             // call another method
//     //             return this.login({email, password});
//     //         } else {
//     //            return  userAccount;
//     //         }
//     //     } catch (error) {
//     //         throw error;
//     //     }
//     // }
//     async createAccount({email, password, name}) {
//     try {
//         const userAccount = await this.account.create(ID.unique(), email, password, name);
//         if (userAccount) {
//             // Log them in immediately after signup
//             return this.login({email, password});
//         } else {
//             return userAccount;
//         }
//     } catch (error) {
//         throw error;
//     }
// }

// //     async login({email, password}) {
// //         try {
// //           // New version (Appwrite 14+)
// // const session = await this.account.createEmailPasswordSession(email, password);
// //         } catch (error) {
// //             throw error;
// //         }
// //     }
// async login({email, password}) {
//     try {
//         // Optional: Try to get current user first
//         // If it succeeds, a session is already active
//         const currentUser = await this.getCurrentUser();
//         if (currentUser) return currentUser;

//         return await this.account.createEmailPasswordSession(email, password);
//     } catch (error) {
//         throw error;
//     }
// }

//     async getCurrentUser() {
//         try {
//             return await this.account.get();
//         } catch (error) {
//             console.log("Appwrite serive :: getCurrentUser :: error", error);
//         }

//         return null;
//     }

//     async logout() {

//         try {
//             await this.account.deleteSessions();
//         } catch (error) {
//             console.log("Appwrite serive :: logout :: error", error);
//         }
//     }
// }

// const authService = new AuthService();

// export default authService