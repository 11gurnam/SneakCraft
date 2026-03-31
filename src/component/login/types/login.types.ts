export interface ILoginView {
    handleNavigation: () => void;
    handleLogin: (email: string, password: string) => void;
    handleCreateAccount: (value: any) => void;
}

export interface SignUpData {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
};

export interface UserData {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
}
