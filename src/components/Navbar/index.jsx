import InputSearch from "./inputSearch"

const { default: Link } = require("next/link")

const Navbar = 
() =>{
    return (
        <header className="bg-color-accent ">
            <div className="flex md:flex-row flex-col justify-between p-4 gap-2 md:items-center">
                <Link href="/" className="font-bold text-2xl">
                    Cuy Animelist
                </Link>
                <InputSearch/>
            </div>
        </header>
    )
}

export default Navbar