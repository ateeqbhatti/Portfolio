import React from 'react'

const Layout = ({children, className=""}) => {
    return (
        <div className={` w-full h-full inline-block z-0 bg-light p-32  dark:bg-dark xl:px-24 lg:px-16 md:!px-[3rem] sm:!px-[3rem] pt-0 $(className)`}>
            {children}
        </div>
    )
}

export default Layout