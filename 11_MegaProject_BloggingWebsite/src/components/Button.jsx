import React from 'react'

export default function Button({
    children,
    type = 'button',
    textColor = 'text-white',
    className = '',
    ...props
}) {
    return (
        <button className={`px-4 py-2 rounded-full ${textColor} ${className}`} {...props} type={type}>
            {children}
        </button>
    )
}