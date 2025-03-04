'use client';

import Image from 'next/image';

export default function Hero() {
    return (
        <div className="relative">
            <section className="w-full bg-gradient-to-b from-[#FDBE4F] from-0% via-[#FDBE4F] via-90% to-white to-100% py-12 md:py-16">
                <div className="container mx-auto max-w-6xl relative">
                    <h3 className="text-center text-[25px] leading-[36px] font-semibold mb-4 text-black font-[family-name:var(--font-geologica)] px-4">
                        Support Your Dog's Anal Gland Health with Filaquin &reg;
                    </h3>

                    <p className="text-center text-[20px] leading-[36px] mb-4 text-black font-[family-name:var(--font-roboto-condensed)] font-light px-4">
                        Filaquin™ features NMXFBR4™, our proprietary blend of yeast extract (beta-glucan), apple fiber, yeast culture (postbiotic), and psyllium husk fiber. This combination offers both insoluble and soluble fibers along with prebiotics and postbiotics. Fiber helps support normal stool consistency while prebiotics and postbiotics help support digestive health. 
                    </p>

                    <span className="text-center text-[20px] leading-[22px] text-black block font-[family-name:var(--font-roboto-condensed)] font-bold">
                        Available Exclusively From Your Veterinarian
                    </span>

                    <div className="relative h-[340px] sm:h-[380px]">
                        <div className="absolute right-0 -top-20 sm:-top-30 w-[75%] sm:w-[60%]">
                            <Image
                                src="/dogb-x-mb.webp"
                                alt="Hero Dog"
                                width={400}
                                height={350}
                                className="object-contain w-full"
                                priority
                            />
                        </div>
                        <div className="absolute right-[50%] sm:right-[45%] top-[40px] sm:top-[60px] w-[45%] sm:w-[35%]">
                            <Image
                                src="/filaquin-product-pouch-hero.webp"
                                alt="Filaquin Product Pouch"
                                width={200}
                                height={250}
                                className="object-contain w-full"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>
            <div className="h-16 sm:h-24 bg-white w-full" />
        </div>
    );
}