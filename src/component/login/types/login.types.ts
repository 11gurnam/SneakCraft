export interface ILoginView {
    handleNavigation:()=>void;
    handleLogin:(email:string,password:string)=>void;
    handleCreateAccount:(value:any)=>void;
}
