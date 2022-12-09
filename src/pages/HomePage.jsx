import React from "react";
import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponenet.jsx";


const HomePage = () => {

    return (
        <>
        
            <NavbarComponent />

            <div className="h-screen">

                <div className="mx-auto mb-10">
                    <img src="https://cdn.shopify.com/s/files/1/0259/7021/2909/files/ATMOS_-_2808_x_936_PUMA_X_MCM_SLIPSTREAM_1440x@2x.progressive.jpg?v=1666262601" alt="" />
                </div>

                <div className="text-center py-10">
                    <p className="text-[16px] md:text-[24px] font-medium">Halo!</p>
                    <p className="md:text-[18px] px-2">Wellcome to the sites that will help you to find best product from best brands.</p>
                </div>

                <div className="w-3/5 flex justify-center flex-wrap gap-8 py-10  mx-auto">

                    <img
                        className="h-[200px]"
                        src="https://cdn.shopify.com/s/files/1/0259/7021/2909/files/ATMOS_-_1500_x_1500_nike_1024x1024.jpg?v=1629082016"
                        alt=""
                    />

                    <img
                        className="h-[200px]"
                        src="https://cdn.shopify.com/s/files/1/0259/7021/2909/files/ATMOS_-_1500_x_1500_adidas_1_1024x1024.jpg?v=1629082821"
                        alt=""
                    />

                    <img
                        className="h-[200px]"
                        src="https://cdn.shopify.com/s/files/1/0259/7021/2909/files/ATMOS_-_1500_x_1500_NB_1024x1024.jpg?v=1639536893"
                        alt=""
                    />

                    <img
                        className="h-[200px]"
                        src="https://cdn.shopify.com/s/files/1/0259/7021/2909/files/ATMOS_-_1500_x_1500_VANS_1024x1024.jpg?v=1639989311"
                        alt=""
                    />

                    {/*  */}
                    <img
                        className="h-[200px]"
                        src="https://cdn.shopify.com/s/files/1/0259/7021/2909/files/ATMOS_-_1500_x_1500_asics_1024x1024.jpg?v=1629082016"
                        alt=""
                    />

                    <img
                        className="h-[200px]"
                        src="https://cdn.shopify.com/s/files/1/0259/7021/2909/files/ATMOS_-_1500_x_1500_atmos_1024x1024.jpg?v=1629082016"
                        alt=""
                    />

                    <img
                        className="h-[200px]"
                        src="https://cdn.shopify.com/s/files/1/0259/7021/2909/files/ATMOS_-_1500_x_1500_HOKA_1024x1024.jpg?v=1639989325"
                        alt=""
                    />

                    <img
                        className="h-[200px]"
                        src="https://cdn.shopify.com/s/files/1/0259/7021/2909/files/ATMOS_-_1500_x_1500_CONVERSE_1_1024x1024.jpg?v=1639995818"
                        alt=""
                    />

                </div>

                <FooterComponent />
            </div>
        </>

    )

}

export default HomePage;