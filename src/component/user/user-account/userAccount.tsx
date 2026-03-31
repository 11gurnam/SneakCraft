import React, { useContext, useState } from 'react';
import UserAccountView from "./userAccount.view";
import { AuthContext } from "../../../context/authContext";


function UserAccount() {
    const {user} = useContext(AuthContext)
    return (
        <UserAccountView
            user={user}
        />
    );
}

export default UserAccount;
