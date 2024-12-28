import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            className='rounded-3xl border-black border-2'
                            src="https://imgs.search.brave.com/hTsFrA_KkMgbrPKu6K4f5Le79GCTi7T3suO0KdrCKPU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/LnR1Ymlrc3R1ZGlv/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOC8xMS9pbWFn/ZXMtaW4tdXNlci1p/bnRlcmZhY2VzLXR1/YmlrLWJsb2ctYXJ0/aWNsZS0xMDI0eDc2/OC5wbmc"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                            accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                            aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                        </p>
                        <p className="mt-4 text-gray-600">
                            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                            Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}