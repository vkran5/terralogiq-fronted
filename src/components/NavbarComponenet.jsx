import React from "react";
import { BsCart4, BsFillPersonFill } from "react-icons/bs";


const NavbarComponent = () => {

    return (
        <div className="w-min-screen h-[80px] flex items-center shadow-xl">

            <div className="w-3/4 flex justify-between w-min-screen mx-auto">
                <div>
                    <p className="text-[18px] font-medium text-[#cd4c4c]">VAN | SHOP</p>
                </div>

                <div className="mx-auto hidden md:flex gap-3 md:gap-40">
                    <p className=" font-medium">HOME</p>
                    <p className=" font-medium">COLLECTIONS</p>
                    <p className=" font-medium">SALE</p>
                </div>

                <div className="flex gap-5">
                    <BsCart4 className="text-[18px]"/>
                    <BsFillPersonFill className="text-[18px]"/>
                </div>

            </div>




        </div>
    )
}

export default NavbarComponent;