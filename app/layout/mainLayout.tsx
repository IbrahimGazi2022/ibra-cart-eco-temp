import React, { ReactNode } from "react";

interface MainLayoutProps {
    children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="w-full">
            <div className="max-w-[1180px] mx-auto">
                {children}
            </div>
        </div>
    )
}

export default MainLayout;