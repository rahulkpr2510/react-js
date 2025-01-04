import React from 'react'
import { useDispatch } from "react-redux"
import authService from "../../appwrite/auth.js"
import { logout } from "../../store/authSlice.js"
import { useNavigate } from 'react-router-dom'

function LogoutButton() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logoutHandler = () => {
        authService.logout()
            .then(() => {
                dispatch(logout())
                navigate("/")
            })
            .catch((error) => {
                console.log("AppWrite Service :: logoutButton ::  Error", error)
            })
    }

    return (
        <button
            className='group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-bold text-sm text-neutral-800 rounded-full focus:outline-none'
            onClick={logoutHandler}
        >Logout</button>
    )
}

export default LogoutButton