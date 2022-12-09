import React from "react";
import cover from '../assets/Cover.png';
import { Box } from '@chakra-ui/react';
import { TbReportAnalytics } from 'react-icons/tb';
import { AiOutlineTransaction } from 'react-icons/ai';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { CgWebsite } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {

    const navigate = useNavigate()

    const btnLogout = () => {
        navigate('/');
        localStorage.removeItem('terralogicLog');
    }

    return (
        <div className="h-screen md:flex">

            <div className="w-2/3">
                <img className="h-screen hidden md:inline" src={cover} alt="" />
            </div>

            <div className="lg:w-2/3 w-screen mt-10 md:mt-1 flex items-center">
                <div className="mx-auto ">

                    <h1 className="text-center text-[24px] font-medium">Halo Admin, have a nice day!</h1>
                    <h1 className="text-center text-[18px] mb-7">What will we do today?</h1>

                    <div className="flex container mx-auto mt-[5vh] justify-center content-center">
                        <Box
                            w="xs"
                            borderWidth="1px"
                            overflow="hidden"
                            fontWeight="semibold"
                            lineHeight="tight"
                            className="py-[20px] hover:bg-[#b54346] border-white text-center mx-2 bg-[#cd4c4c] text-white cursor-pointer"
                        >
                            <h1 className="inline">Product</h1>
                            <MdOutlineProductionQuantityLimits className="inline ml-2" />
                        </Box>
                    </div>
                    <div className="flex container mx-auto mt-[15px] justify-center content-center">
                        <Box
                            w="xs"
                            borderWidth="1px"
                            overflow="hidden"
                            fontWeight="semibold"
                            lineHeight="tight"
                            className="py-[20px] hover:bg-[#b54346] border-white text-center mx-2 bg-[#cd4c4c] text-white cursor-pointer"
                        >
                            <h1 className="inline">Transaction</h1>
                            <AiOutlineTransaction className="inline ml-2" />
                        </Box>
                    </div>
                    <div className="flex container mx-auto my-[15px] justify-center content-center">
                        <Box
                            w="xs"
                            borderWidth="1px"
                            overflow="hidden"
                            fontWeight="semibold"
                            lineHeight="tight"
                            className="py-[20px] hover:bg-[#b54346] border-white text-center mx-2 bg-[#cd4c4c] text-white cursor-pointer"
                        >
                            <h1 className="inline">Report</h1>
                            <TbReportAnalytics className="inline ml-2" />
                        </Box>
                    </div>
                    <div className="flex container mx-auto my-[15px] justify-center content-center">
                        <Box
                            w="xs"
                            borderWidth="1px"
                            overflow="hidden"
                            fontWeight="semibold"
                            lineHeight="tight"
                            className="py-[20px] hover:bg-[#b54346] border-white text-center mx-2 bg-[#cd4c4c] text-white cursor-pointer"
                        >
                            <h1 className="inline">Visit Website</h1>
                            <CgWebsite className="inline ml-2" />
                        </Box>
                    </div>
                    <div className="flex container mx-auto my-[15px] justify-center content-center">
                        <Box
                            w="xs"
                            borderWidth="1px"
                            overflow="hidden"
                            fontWeight="semibold"
                            lineHeight="tight"
                            className="py-[20px] hover:bg-[#b54346] border-white text-center mx-2 bg-[#cd4c4c] text-white cursor-pointer"
                            onClick={btnLogout}
                        >
                            <h1 className="inline">Logout</h1>
                            <CgWebsite className="inline ml-2" />
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AdminPage;