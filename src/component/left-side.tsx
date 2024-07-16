import { siteConfig } from '@/config/site-config'
import { Mail, MapPin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Footer from "../component/footer";

const leftSide = () => {
    return (
        <div className=" container px-8 pt-8 flex-1 w-full h-full  xl:max-w-md xl:p-8 ">
            <div className="flex flex-col    h-full rounded-md  space-y-6 ">
                {/* Avatar */}

                <Image
                    className="rounded-full aspect-square  object-cover"
                    alt="avatar"
                    src="/pp-png.jpg"
                    height="120"
                    width="120"
                    priority
                    loading="eager"
                />
                {/* Title */}
                <div>
                    <div className="text-xl  font-semibold text-primary">
                        {siteConfig.title}
                    </div>
                    {/* Full name */}
                    <h1 className="mt-2 text-3xl font-bold"> {siteConfig.creator}</h1>
                    {/* bio */}
                    <p className="text-1xl font-light  text-neutral-500">
                        {siteConfig.bio}
                    </p>
                </div>

                {/* Buttons Container */}
                <div className=" flex  items-center justify-between gap-6  text-sm">
                    <a
                        className="flex items-center    w-full gap-2 py-2 px-2   border rounded-md border-neutral-200 dark:border-neutral-800"
                        href={siteConfig.locationLink}
                    >
                        <MapPin size="16" />
                        {siteConfig.location}
                    </a>
                    <a
                        className="flex items-center  w-full gap-2 py-2 px-3 border rounded-md border-neutral-200 dark:border-neutral-800"
                        href={`mailto:${siteConfig.email}`}
                    >
                        <Mail size="16" />
                        Contact Me
                    </a>
                </div>

                <div className='hidden xl:flex '>
                    {/* Footer */}
                    <br />
                      <Footer />
                </div>
            </div>
        </div>
    )
}

export default leftSide