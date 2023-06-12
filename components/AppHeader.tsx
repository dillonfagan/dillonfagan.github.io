"use client"
import { useState } from "react";

const AppHeader = () => {
    const [mousedOver, setMousedOver] = useState<boolean>(false);
    
    return (
        <header className="p-8 md:p-12">
            <div
                className={`float-left text-3xl cursor-default ${mousedOver && 'text-gray-400'}`}
                onMouseEnter={() => setMousedOver(true)}
                onMouseLeave={() => setMousedOver(false)}
            >
               {mousedOver ? 'Full-Stack Software Engineer' : 'Dillon Fagan'}
            </div>
            <div className="float-right flex flex-row gap-3">
                <a href="https://github.com/dillonfagan" target="_blank">
                    <img className="h-8 w-8" src="/icons/github-mark.svg" alt="GitHub" />
                </a>
            </div>
        </header>
    )
}

export default AppHeader