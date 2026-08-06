import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react";
import GridProdutos from "../components/ui/GridProdutos";

const banner = [
    {
        id: 0,
        src: "/banner1.png",
        alt: "Banner 1",
    },
    {
        id: 1,
        src: "/banner2.png",
        alt: "Banner 2",
    }
]


function Main() {
    const [idBanner, setidbanner] = useState(0);
    const goBack = () => (
        setidbanner((prev) => (prev - 1 + banner.length) % banner.length)
    );

    const goForward = () => (
        setidbanner((prev) => (prev + 1) % banner.length)
    );

    return (
        <>
            <div className="relative w-full overflow-hidden shadow-lg select-none aspect-[1536-507]">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${idBanner * 100}%)` }}
                >
                    {banner.map((b) => (
                        <div
                            key={b.id}
                            className="min-w-full min-h-full"
                        >
                            <img
                                className="min-w-full h-full object-cover"
                                src={b.src}
                                alt={b.alt}
                            />
                        </div>
                    ))}
                </div>
                <button
                    onClick={goBack}
                    className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center
                    w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 
                    backdrop-blur-sm text-white transition-colors duration-200 
                    focus:outline-none focus:ring-2 focus:ring-white/70"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={goForward}
                    className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center
                    w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 
                    backdrop-blur-sm text-white transition-colors duration-200 
                    focus:outline-none focus:ring-2 focus:ring-white/70"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {banner.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setidbanner(i)}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${i === idBanner ? "bg-white w-6 " : "bg-white/50"}`}
                        />
                    ))}
                </div>
            </div>
            <GridProdutos />
        </>
    )
}


export default Main