import React, { useContext } from "react";
import Navbar from "../navbar/navbar";
import { AuthContext } from "../../context/authContext";
import headers from "../../resources/header";
import { getInitials } from "../utils/utils";
import { useNavigate } from 'react-router-dom';
import { LogIn } from "lucide-react";

const Header = () => {

    const navigate = useNavigate();
    const {user} = useContext(AuthContext);

    const resource = headers;

    const navigateToUserAccount = () => {
        navigate('/my-account', {replace: true});
    }

    const navigateToLogin=()=>{
        navigate('/login' )

    }

    return (
        <div className={'header flex justify-between items-center gap-[10px]  mx-[10px]'}>
            <Navbar/>
            {!user ? (
                <button
                className="
                       w-max
                       h-fit
                       flex items-center gap-2
                       px-[22px] py-[9px]
                       rounded-full
                       bg-transparent
                       border border-[rgba(255,255,255,0.18)]
                       text-[16px] font-medium tracking-[0.4px]
                       text-[var(--white)]
                       cursor-pointer
                       transition-all duration-200 ease-in-out
                       no-underline
                       hover:border-[#0f0f0f]
                       hover:bg-[rgba(255,255,255,0.05)]
                      "
                onClick={navigateToLogin}
            >
                <LogIn
                    className="transition-transform duration-200 ease-in-out group-hover:translate-x-[2px]"
                />
                {resource.loginButtonText}
            </button>) : (
                <button
                    className={'flex items-center justify-between text-[13px] gap-[10px] font-medium tracking-[0.4px] text-[var(--white)]'}
                    onClick={navigateToUserAccount}
                >
                    <span
                        className={'flex items-center w-[40px] h-[40px] p-[10px] rounded-full bg-yellow-500 ' +
                        'text-black hover:bg-yellow-400 text-[16px]'}>
                        {getInitials(user)}</span>
                    {user.email}
                </button>
            )}

        </div>

    )
}

export default Header;
