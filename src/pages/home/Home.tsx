import { Link } from "react-router-dom"
import Navbar from "../../globals/components/Navbar"
import landing from '../../media/bite.png'
import InstructionCard from "../../globals/components/InstructionCard"
import use1 from '../../media/use1.png'
import use2 from '../../media/use2.png'
import use3 from '../../media/use3.png'
import doctor from '../../media/doctor.png'
import star from '../../media/star.png'
import landing2 from '../../media/landing2.png'
import Rating from "../../globals/components/Rating"
import RatingCard from "../../globals/components/RatingCard"
import rating1 from '../../media/rating1.png';
import rating2 from '../../media/rating2.png';
import rating3 from '../../media/rating3.png';
import rating4 from '../../media/rating4.png';
import rating5 from '../../media/rating5.png';
import left from '../../media/left.png';
import right from '../../media/right.png';
import { useRef } from "react"
import CategoryCard from "../../globals/components/CategoryCard"
import last from '../../media/last.png';
import perfect from '../../media/perfect.png';
import earth from '../../media/earth.png';
import suitcase from '../../media/suitcase.png';
import better from '../../media/better.png';
import sink from '../../media/sink.png';
import protect from '../../media/protect.png';
import Footer from "../../globals/components/Footer"

function Home() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            // Adjust this number based on your card width + gap (w-87.5 + gap-6 roughly equals ~374px)
            const scrollAmount = direction === 'left' ? -374 : 374;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };
    const stepsData = [
        {
            id: 1,
            image: use1, 
            title: "Toothpaste Bits Fluoride-Free",
            description: "A single Bit all you need each time.",
            number: 1
        },
        {
            id: 2,
            image: use2,
            title: "Chew your Bit",
            description: "A soft paste will form in your mouth.",
            number: 2
        },
        {
            id: 3,
            image: use3,
            title: "Brush with a wet toothbrush",
            description: "It'll foam up, just like regular toothpaste.",
            number: 3
        }
    ];
    const rateData = [
        {
            id: 1,
            rating: 3.5,
            userName: "Sandip Kandel",
            description: "Love the minimal, plastic-free packaging! The little glass jar looks great on my counter and the bits work perfectly. Such a great starter kit.",
            image: rating1 
        },
        {
            id: 2,
            rating: 5.0,
            userName: "Marcus Nepali",
            description: "Switched to the Activated Charcoal flavor and I'm obsessed. I also love that they send the refills in compostable pouches. Zero waste routine unlocked!",
            image: rating2
        },
        {
            id: 3,
            rating: 4,
            userName: "Sophia Lamsal",
            description: "Decided to try their Neroli deodorant along with the toothpaste bits. Both are fantastic! The small sample packs are also incredibly convenient for weekend trips.",
            image: rating3
        },
        {
            id: 4,
            rating: 2.9,
            userName: "Johnson Limbu",
            description: "Got the large 248 bits jar! It foams up just like regular toothpaste and leaves my teeth feeling super clean. The 'Thanks a billion' message inside the box is a great touch.",
            image: rating4
        },
        {
            id: 5,
            rating: 3.6,
            userName: "Chena Karki",
            description: "The perfect size for a one-month supply. The mint flavor is refreshing without being overwhelming. I'm definitely keeping my subscription!",
            image: rating5
        }
    ];
    const benefitsData = [
        {
            id: 1,
            icon: perfect,
            title: "Perfectly Portioned",
            description: "Stop wasting money by using more toothpaste then you need."
        },
        {
            id: 2,
            icon: earth,
            title: "Earth-Friendly",
            description: "Infinitely refillable with no Plastic toothpaste tubes, our earth and oceans."
        },
        {
            id: 3,
            icon: suitcase,
            title: "Suitcase-Safe",
            description: "No more toothpaste explosions in your bag. Just throw a few Bits in your pack and you're good to go."
        },
        {
            id: 4,
            icon: better,
            title: "Better -for-you Formulation",
            description: "A dry tablet means we can use less harmful ingredients and still protect your teeth."
        },
        {
            id: 5,
            icon: sink,
            title: "Sink-Friendly",
            description: "Our tablets leave less mess in your sink because no glycerine-what makes most toothpaste, paste-means no sticky goop"
        },
        {
            id: 6,
            icon: protect,
            title: "Stops the Spread of Bacteria",
            description: "The top of a toothpaste tube can transfer bacteria form your partners brush to your mouth. Our Bits can stop the spread."
        }
    ];
    return (
        <>
            <Navbar />
            <main className="bg-[#ffffff]">
                <section className="flex items-center justify-center w-full md:p-0">
                    <div className="bg-[#f9f5ec] flex flex-col md:flex-row items-center w-full mx-0 md:mx-10 rounded-none md:rounded-4xl min-h-123 pb-10 md:pb-0 max-w-297">
                        
                        <div className="flex flex-col items-center justify-center font-cooper bg-[#f1fffa] w-full md:min-h-110 md:max-h-400 sm:max-h-100 md:ml-10 sm:rounded-3xl overflow-hidden max-w-130 px-10 py-10 md:py-0">
                            <h1 className="text-6xl text-center max-w-110 mb-5 md:mb-5">Bite Down Brush Up <span className="text-[#4fc09a]">Refill.</span></h1>
                            <p className="font-izmir text-[#575656] mb-5 md:mb-5 text-center">One billion plastic toothpaste tubes end up in landfills every year. We<span className="font-cooper">'</span>re here to change that. Just chew a bit, brush with a wet toothbrush, and watch it foam up like magic.</p>
                            <Link to='/products' className="bg-[#1b5a45] rounded-3xl w-full text-[#ffffff] font-izmir h-10 flex justify-center items-center">
                                Shop Now
                            </Link>
                        </div>
                        <div className="relative flex flex-col items-center justify-center font-cooper w-full max-h-100 md:ml-10  rounded-3xl overflow-hidden max-w-130 px-10">
                            <img src={landing} alt="Toothpaste bits jar" className="h-100 w-full object-cover" />
                            <div className="absolute top-9 right-12 md:top-3 md:right-36 p-2.5 rounded-[7px] bg-white/30 backdrop-blur-xs border border-white/20 shadow-lg flex gap-2.5 justify-center items-center z-10 h-10">
                                <img src={doctor} className="h-4 w-4" alt="Doctor icon" />
                                <p className="text-[10px] text-[#191715]">Recommended by doctors</p>
                            </div>
                            <div className="absolute bottom-15 left-13 md:bottom-3.5 md:left-30 p-2.5 rounded-[7px] bg-white/10 backdrop-blur-xs border border-white/30 shadow-lg flex gap-2.5 justify-center items-center z-10 h-8">
                                <img src={star} className="h-5 w-5" alt="Star icon" />
                                <p className="text-[10px] text-[#191715]">Trusted by 21,000+ People</p>
                            </div>

                        </div>
                    </div>
                </section>
                <section className="max-w-full mx-10 mt-7">
                    <div className="flex justify-between mb-2">
                        <h2 className="text-4xl font-heirloomArtcraft mb-8">How To Use</h2>
                        <Link to='/products' className="bg-[#131313] text-[#d4d4d4] rounded-3xl h-10 w-40 justify-center items-center hidden sm:flex">Shop Now</Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {stepsData.map((step) => (
                            <InstructionCard 
                                key={step.id}
                                image={step.image}
                                title={step.title}
                                description={step.description}
                                number={step.number}
                            />
                        ))}
                    </div>
                </section>
                <section className="max-w-full mx-10 mt-20 bg-[#f8f8f8] ">
                    <div className="flex flex-col md:flex-row items-center w-full  rounded-none min-h-123 pb-10 md:pb-0 max-w-297">
                        <div className="flex flex-col justify-center w-full md:min-h-110 md:max-h-400 sm:max-h-100 md:ml-10 overflow-hidden max-w-130 py-8 md:py-10 px-4 md:px-0 font-vayuSans">
                            <h1 className="text-5xl max-w-110 mb-5 md:mb-5 font-cooper">Mouthwash Bits</h1>
                            <p className="font-vayuSans text-[#909090] mb-5 md:mb-5">Mouthwash helps kill bacteria, freshen breath, and promote oral hygiene by reducing plaque and preventing gum disease. It's a quick and effective addition to your daily dental routine</p>
                            <div className="flex flex-col justify-between mb-7 sm:flex-row sm:items-center">
                                <div>
                                        <p className="font-cooper text-[#595959] text-[22px]">Rs 200</p>
                                </div>
                                <div className="flex text-[#8c8c8c] justify-start items-center gap-2">
                                    <Rating value={3.9}/>
                                    <p>[4.9/5] | 40 Sold</p>
                                </div>
                            </div>
                            <Link to='/products' className="bg-[#1b5a45] text-[#e9f9f5] h-10 w-full sm:w-50 flex justify-center items-center rounded-3xl">View Collection</Link>
                        </div>
                        <div className="relative flex flex-col items-center justify-center w-full max-h-80 md:max-h-100 md:ml-10 overflow-hidden lg:min-w-150 max-w-200">
                            <img src={landing2} alt="Toothpaste bits jar" className="h-100 w-full object-cover" />
                        </div>
                    </div>
                </section>
                <section className="relative max-w-full mt-20 mb-20 group">
                    
                    {/* Left Scroll Button */}
                    <button 
                        onClick={() => scroll('left')}
                        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-white/70 backdrop-blur-md border border-gray-200 shadow-lg hover:bg-white transition-all cursor-pointer opacity-0 group-hover:opacity-100"
                        aria-label="Scroll left"
                    >
                        <img src={left} alt='left arrow' className="w-5 h-5 object-contain" />
                    </button>

                    {/* Right Scroll Button */}
                    <button 
                        onClick={() => scroll('right')}
                        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-white/70 backdrop-blur-md border border-gray-200 shadow-lg hover:bg-white transition-all cursor-pointer opacity-0 group-hover:opacity-100"
                        aria-label="Scroll right"
                    >
                        <img src={right} alt='right arrow' className="w-5 h-5 object-contain" />
                    </button>

                    {/* Scrollable Container */}
                    <div 
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto gap-6 px-12 py-10 w-full snap-x snap-mandatory scroll-smooth scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden "
                    >
                        {rateData.map((rate) => (
                            <div key={rate.id} className="snap-center">
                                <RatingCard
                                    rating={rate.rating}
                                    userName={rate.userName}
                                    description={rate.description}
                                    image={rate.image}
                                />
                            </div>
                        ))}
                    </div>
                </section>
                <section className="max-w-full mx-10 font-bogartMedium">
                    <div>
                        <h2 className="text-4xl mb-8">Shop By Category</h2>
                    </div>
                    <div>
                        <CategoryCard />
                    </div>
                </section>
                
                {/* Updated "Why Bits are Better" Section */}
                <section className="max-w-full mx-5 md:mx-10 mt-20 mb-20">
                    <h2 className="text-3xl md:text-4xl font-cooper mb-8">Why Bits are Better</h2>
                    {/* Force flex-row on all screen sizes */}
                    <div className="flex flex-row gap-4 md:gap-10 lg:gap-16 items-center">
                        {/* Left Image Area: Force 1/2 width */}
                        <div className="w-1/2 bg-[#fafafa] rounded-xl md:rounded-3xl flex items-center justify-center min-h-62.5 sm:min-h-100 md:min-h-125 overflow-hidden">
                            <img src={last} alt="Bite Toothpaste Bits and Refill Pouch" className="w-full h-full object-cover" />
                        </div>

                        {/* Right Content Area: Force 1/2 width */}
                        <div className="w-1/2 flex flex-col gap-3 sm:gap-4 md:gap-6 lg:gap-8 justify-center">
                            {benefitsData.map((benefit) => (
                                <div key={benefit.id} className="flex items-start gap-2 sm:gap-3 md:gap-5">
                                    <div className="bg-[#f2fcf9] p-2 md:p-3 lg:p-4 rounded-full shrink-0 flex items-center justify-center">
                                        <img src={benefit.icon} alt={benefit.title} className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 object-contain" />
                                    </div>
                                    <div className="flex flex-col pt-0 sm:pt-1">
                                        <h3 className="text-[11px] sm:text-[14px] md:text-lg lg:text-xl font-cooper text-[#2a2a2a] mb-0.5 md:mb-1">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-[9px] sm:text-[11px] md:text-sm lg:text-[15px] font-izmir text-[#8c8c8c] leading-tight sm:leading-snug md:leading-relaxed">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Home