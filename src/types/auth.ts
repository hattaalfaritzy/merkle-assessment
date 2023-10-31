declare namespace AuthInterface {
    export interface APIParamsLogin {
        username?: string; 
        password?: string;
    }
    
    export interface ApiResponseLogin {
        token?: string;
    }
}