import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { ILoginView } from "./types/login.types";

type TabType = "login" | "signup";

type FormData = {
    lastName?: string;
    firstName?: string
    username?: string;
    email: string;
    password: string;
    confirm?: string;
};

const EyeIcon: React.FC<{ open: boolean }> = ({open}) =>
    open ? (
        <Eye className="w-4 h-4 text-[#FF4D1C]"/>
    ) : (
        <EyeOff className="w-4 h-4 text-[#FF4D1C]"/>
    );

const LoginView: React.FC<ILoginView> = (props) => {


    const [tab, setTab] = useState<TabType>("login");
    const [showPw, setShowPw] = useState(false);
    const [showCf, setShowCf] = useState(false);
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: {errors},
    } = useForm<FormData>();

    const isSignup = tab === "signup";
    const password = watch("password");

    const onSubmit = async (data: FormData) => {
        try {
            setLoading(true);

            if (!isSignup) {
                await props.handleLogin(data.email, data.password);
            } else {
                await props.handleAccountCreation(data);
            }

        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const strength =
        password?.length >= 12 ? 4 :
            password?.length >= 9 ? 3 :
                password?.length >= 6 ? 2 :
                    password?.length > 0 ? 1 : 0;

    const strengthColors = [
        "bg-gray-700",
        "bg-red-500",
        "bg-yellow-500",
        "bg-green-400",
        "bg-green-400",
    ];

    return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-900 p-5">
            <div
                className="w-full max-w-md bg-[#0F0E0D] rounded-2xl border border-neutral-800 overflow-hidden shadow-xl">

                <div className="h-1 bg-gradient-to-r from-orange-500 to-orange-400"/>

                <div className="p-8">

                    <h1 className="text-xl font-bold text-white tracking-widest flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"/>
                        SNEAKCRAFT
                    </h1>
                    <div className={'text-center'}>
                        {!isSignup ? 'Welcome back, crafter.' : 'Create your account.'}
                    </div>

                    {/* Tabs */}
                    <div className="flex bg-neutral-800 rounded-lg p-1 mt-6">
                        {["login", "signup"].map((t) => (
                            <button
                                key={t}
                                onClick={() => {
                                    setTab(t as TabType);
                                    reset();
                                }}
                                className={`flex-1 py-2 rounded-md text-sm ${
                                    tab === t ? "bg-black text-white" : "text-neutral-400"
                                }`}
                            >
                                {t === "login" ? "Sign in" : "Create account"}
                            </button>
                        ))}
                    </div>

                    {/* FORM */}
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">

                        {isSignup && (
                            <div className="flex items-center justify-between gap-[10px] space-y-3">
                                <div>
                                    <input
                                        placeholder="First name"
                                        {...register("firstName", {required: "Enter your first name"})}
                                        className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white"
                                    />
                                    {errors.firstName && (
                                        <p className="text-red-400 text-sm mt-1">{errors.firstName.message}</p>
                                    )}
                                </div>

                                <div className={'!mt-0'}>
                                    <input
                                        placeholder="Last name"
                                        {...register("lastName", {required: "Enter your last name"})}
                                        className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white"
                                    />
                                    {errors.lastName && (
                                        <p className="text-red-400 text-sm mt-1">{errors.lastName.message}</p>
                                    )}
                                </div>
                            </div>
                        )}

                        {isSignup && (
                            <div>
                                <input
                                    placeholder="Username"
                                    {...register("username", {required: "Enter username"})}
                                    className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white"
                                />
                                {errors.username && (
                                    <p className="text-red-400 text-sm mt-1">{errors.username.message}</p>
                                )}
                            </div>
                        )}

                        <div>
                            <input
                                type="email"
                                placeholder="Email"
                                {...register("email", {
                                    required: "Enter email",
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: "Invalid email",
                                    },
                                })}
                                className="text-base w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white"
                            />
                            {errors.email && (
                                <p className="text-base text-red-400 text-sm mt-1">{errors.email.message}</p>
                            )}
                        </div>

                        {/* Password */}
                        <div className="relative">
                            <input
                                type={showPw ? "text" : "password"}
                                placeholder="Password"
                                {...register("password", {
                                    required: "Enter password",
                                    minLength: {
                                        value: 6,
                                        message: "Min 6 characters",
                                    },
                                })}
                                className="text-base w-full p-3 pr-10 rounded-lg bg-neutral-800 border border-neutral-700 text-white"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPw(!showPw)}
                                className="absolute right-3 top-1/2 -translate-y-1/2"
                            >
                                <EyeIcon open={showPw}/>
                            </button>

                            {errors.password && (
                                <p className=" text-sm text-red-400 text-sm mt-1">{errors.password.message}</p>
                            )}
                        </div>

                        {/* Strength */}
                        {isSignup && password && (
                            <div className="flex gap-1">
                                {[1, 2, 3, 4].map(i => (
                                    <div
                                        key={i}
                                        className={` h-1 flex-1 rounded ${
                                            i <= strength ? strengthColors[strength] : "bg-neutral-700"
                                        }`}
                                    />
                                ))}
                            </div>
                        )}

                        {/* Confirm Password */}
                        {isSignup && (
                            <div className="relative">
                                <input
                                    type={showCf ? "text" : "password"}
                                    placeholder="Confirm password"
                                    {...register("confirm", {
                                        required: "Confirm password",
                                        validate: (value) =>
                                            value === password || "Passwords do not match",
                                    })}
                                    className=" text-base w-full p-3 pr-10 rounded-lg bg-neutral-800 border border-neutral-700 text-white"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowCf(!showCf)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2"
                                >
                                    <EyeIcon open={showCf}/>
                                </button>

                                {errors.confirm && (
                                    <p className="text-base text-red-400 text-sm mt-1">{errors.confirm.message}</p>
                                )}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className=" text-base w-full py-3 rounded-lg font-semibold text-white bg-orange-500 hover:bg-orange-600 transition disabled:opacity-60"
                        >
                            {loading ? "Loading..." : isSignup ? "Create account" : "Sign in"}
                        </button>

                    </form>

                    <div
                        className={'flex items-center gap-[12px] my-[10px]'}
                    >
                        <div
                            className={'flex-1 h-[1px] bg-[#536175]'}
                        />
                        <span className={'text-sm bg-grey'}>or continue with</span>
                        <div
                            className={'flex-1 h-[1px]  bg-[#536175]'}
                        />
                    </div>
                    <div className={'flex items-center gap-[20px]'}>
                        <button
                            className={'flex-1 text-base flex items-center   justify-center gap-[5px] p-[10px]  ' +
                            'bg-neutral-800 border border-neutral-700 text-white rounded-lg'}
                        >
                            <img src={''} className={'w-[20px] h-[20px]'}/>
                            Google
                        </button>
                        <button
                            className={'flex-1 text-base flex text-center justify-center items-center gap-[5px] p-[10px]  ' +
                            'bg-neutral-800 border border-neutral-700 text-white rounded-lg'}
                        >
                            <img src={''} className={'w-[20px] h-[20px]'}/>
                            GitHub
                        </button>
                    </div>

                    <div className={'text-sm m-5'}>
                        <span>
                            {!isSignup ? "Don't have an account?" : "Already have an account?"}
                        </span>
                        <span
                            className={'text-sm text-[#FF4D1C]'}
                            onClick={() => {
                                if (isSignup) {
                                    setTab('login')
                                } else {
                                    setTab('signup')
                                }
                            }}
                        > {!isSignup ? 'Sign Up' : 'Sign In'}</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LoginView;
