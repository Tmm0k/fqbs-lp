import Image from 'next/image'

export default function NmxUnmatched() {
    return (
        <section className="bg-white">
            <div className="relative">
                <div className="w-full">
                    <Image
                        src="/pets-cat-dog-mb.webp"
                        alt="Cat and Dog Friends"
                        width={400}
                        height={400}
                        className="w-full h-auto"
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[110%] w-[45%] max-w-[200px] z-10">
                        <Image
                            src="/nmx-unmatched-quality-mb.webp"
                            alt="Nutramax Unmatched Quality"
                            width={200}
                            height={200}
                            className="w-full"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
