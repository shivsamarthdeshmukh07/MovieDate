import React from 'react'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { RiPlayFill } from '@remixicon/react';

export const Hero = () => {
  return (
    <section className='relative bg-[url(/Image/hero-bg-img.png)] bg-cover bg-center'>
        <div className="container">
            {/* image */}
            <div className="">
                <Image src={"Image/play-logo.svg"} alt='Hero logo' width={200} height={200}/>
            </div>

            <div className="">
                <h1 className='watch Evertything ypu love'></h1>
                <p className=''>
                    Unlimited movies. Endless shows. Zero waiting. StreamVibe puts thousands of titles at your fingertips—new releases, classics, and everything in between. Create custom watchlists, stream on any device, and dive into your next favorite story whenever inspiration strikes.

                </p>
                <Button>
                    <span>
                    <RiPlayFill/>
                    </span>
                    Start Watching now
                </Button>
            </div>
        </div>
    </section>
  )
}
