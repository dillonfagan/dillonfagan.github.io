const AppHeader = () => {    
    return (
        <header className="w-full md:w-4/5 lg:w-2/3 max-w-5xl px-8 md:px-0 py-8 md:py-12">
            <div
                className={`float-left text-3xl cursor-default`}
            >
               <span>Dillon Fagan</span>
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