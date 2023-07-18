import "./Navbar.css"
import { BiCircle } from "react-icons/bi"
const Navbar = () => {
    return (
        // #3023ae
        <header class="bg-[#3023ae] px-12 bg-opacity-5 text-white hidden md:block">
            <div class="container mx-auto flex items-center h-24">

                <button class="flex items-center justify-center">
                  <BiCircle size={20} />
                </button>
                <nav class="contents font-semibold text-base lg:text-lg">
                    <ul class="mx-auto flex items-center">
                        <li class="p-5 xl:p-8 active hover:text-gray-400">
                            <button>
                              <span>Tour</span>
                            </button>
                        </li>
                        <li class="p-5 xl:p-8 hover:text-gray-400">
                            <button>
                                <span>Products</span>
                            </button>
                        </li>
                        <li class="p-5 xl:p-8 hover:text-gray-400">
                            <button>
                                <span>Pricing</span>
                            </button>
                        </li>
                  </ul>
                </nav>
                <button class="border border-white rounded-full font-bold px-8 py-2 hover:text-gray-400 hover:border-gray-400">Sign Up</button>
            </div>
        </header>
    )
}

export default Navbar