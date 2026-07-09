import leaf from "../../media/leaf.png";
import about1 from "../../media/about1.png";
import about2 from "../../media/about2.png";
import about3 from "../../media/about3.png";
import about4 from "../../media/about4.png";
import about5 from "../../media/about5.png";
import about6 from "../../media/about6.png";
import about7 from "../../media/about7.png";
import about8 from "../../media/about8.png";
import Navbar from "../../globals/components/Navbar";
import Footer from "../../globals/components/Footer";

const About = () => {
  // Organizing the timeline data keeps the JSX clean and makes it easy to edit later.
  const timelineData = [
    {
      badge: "The Beginning",
      date: "March 2019",
      title: (
        <>
          It started on a kitchen<br />counter.
        </>
      ),
      text: "Ujwal presses his first batch of tablets by hand, using a borrowed pill press and a stack of chemistry notes.",
      image: about2,
    },
    {
      badge: "Word of mouth",
      date: "November 2019",
      title: "Friends and family, please stop asking for more.",
      text: "Word spreads through Ujwal's building. He's now pressing tablets three nights a week just to keep up.",
      image: about3,
    },
    {
      badge: "Going viral",
      date: "June 2020",
      title: "The video that wouldn't stop playing.",
      text: "A 40-second clip of a tablet fizzing into paste gets shared everywhere. Daily Bite gets its first 10,000 customers in a month.",
      image: about4,
    },
    {
      badge: "First investment",
      date: "February 2021",
      title: "A yes, finally.",
      text: "After eleven investor meetings and ten polite declines, Daily Bite closes its first funding round — enough to leave the kitchen for good.",
      image: about5,
    },
    {
      badge: "Full routine",
      date: "September 2022",
      title: "One shelf becomes a whole routine.",
      text: "Mouthwash bits, floss, and a bamboo brush join the lineup. Oral care, fully rebuilt.",
      image: about6,
    },
    {
      badge: "Certified",
      date: "May 2023",
      title: "Making it official.",
      text: "Daily Bite earns its B-Corp certification, putting the mission on paper: people and planet count as much as profit.",
      image: about7,
    },
    {
      badge: "Right now",
      date: "Today",
      title: "Better, one bite at a time.",
      text: "Together with our customers, we've kept over 180,000 plastic tubes out of landfills and oceans — and counting.",
      image: about8,
    },
  ];

  return (
    <>
      <Navbar />
      
      {/* --- FIRST SECTION: ORIGINAL "OUR STORY" --- */}
      <section className="max-w-6xl mx-7 lg:mx-auto px-6 pt-16 pb-8 flex flex-col md:flex-row items-center gap-16">
        
        {/* Left Column: Text Content */}
        <div className="flex-1 w-full max-w-lg font-vayuSans">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-12 h-0.5 bg-[#f5b82e]"></div>
            <span className="text-[#e2c275] text-sm font-bold tracking-widest uppercase">
              Our Story
            </span>
          </div>
          <h1 className="text-[#1e2532] text-4xl lg:text-5xl font-cooper leading-[1.15] mb-8">
            The End of the<br />Plastic Tube
          </h1>
          
          <p className="italic text-gray-700 text-[1.1rem] mb-6 font-vayuSans leading-relaxed">
            "I wasn't trying to start a company. I was trying to stop throwing away plastic every three months."
          </p>
          
          <p className="text-gray-500 mb-6 leading-relaxed">
            I'd worked behind a pharmacy counter for six years, handing people the same plastic tube, over and over, knowing exactly where it would end up. So one weekend I ordered a pill press, signed up for an online formulation course, and started pressing my own toothpaste tablets on my kitchen counter.
          </p>
          
          <p className="text-gray-500 mb-8 leading-relaxed">
            What began as a fix for my own bathroom cabinet turned into something bigger once friends started asking for extras. Daily Bite exists because a brighter, cleaner smile shouldn't come wrapped in plastic that outlives all of us.
          </p>
          
          <hr className="border-t border-gray-200 mb-8" />
          
          {/* Author Info */}
          <div className="flex items-center gap-5">
            <h2 className="text-[#1e2532] text-2xl font-heirloomArtcraft m-0">Ujwal Shrestha</h2>
            <div className="w-px h-10 bg-gray-300"></div>
            <div className="flex flex-col text-sm text-gray-500">
              <span>Founder & CEO,</span>
              <span>DailyBite</span>
            </div>
          </div>
        </div>

        {/* Right Column: Image Content */}
        <div className="flex-1 w-full flex justify-center lg:justify-end mt-12 lg:mt-0">
          <div className="relative w-full max-w-112.5">
            
            {/* Yellow Offset Backdrop */}
            <div className="absolute top-4 -bottom-4 left-4 -right-4 bg-[#f8e59a] rounded-3xl"></div>
            
            {/* Main Image */}
            <img
              src={about1}
              alt="Founder"
              className="relative z-10 w-full h-auto object-cover rounded-3xl"
            />
            
            {/* Floating Badge */}
            <div className="absolute bottom-10 -left-8 lg:-left-12 bg-[#f8f8f8] rounded-2xl py-4 px-5 flex items-center gap-4 shadow-[-3px_-2px_40px_19px_rgba(60,60,60,0.1)] z-20 whitespace-nowrap md:h-15 h-12">
              <img
                src={leaf}
                alt="Eco Icon"
                className="w-6 h-6 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-[#1e2532] text-[13px] md:text-sm font-bold tracking-wide">
                  100% Plastic-Free
                </span>
                <span className="text-gray-500 text-[10px] md:text-xs">
                  Zero-waste packaging
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SECOND SECTION: "THE JOURNEY" TIMELINE --- */}
      <section className="w-full font-sans pt-12">
        
        {/* Full-width Top Line */}
        <div className="w-full border-t-2 border-gray-200"></div>
        
        {/* The Journey Header (Constrained Width Container) */}
        <div className="max-w-6xl mx-7 lg:mx-auto px-6 py-16">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-12 h-0.5 bg-[#f5b82e]"></div>
            <span className="text-[#f5b82e] text-sm font-bold tracking-widest uppercase">
              The Journey
            </span>
          </div>
          
          <h1 className="text-[#1e2532] text-4xl lg:text-5xl font-extrabold leading-[1.15]">
            Here's what we've built together so far
          </h1>
        </div>

        {/* Full-width Bottom Line */}
        <div className="w-full border-t-2 border-gray-200"></div>

        {/* Timeline Items Mapping (Constrained Width Container) */}
        <div className="max-w-6xl mx-7 lg:mx-auto px-6 py-20">
          <div className="flex flex-col gap-24 lg:gap-32">
            {timelineData.map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col md:flex-row items-center lg:items-start gap-12 lg:gap-16"
              >
                
                {/* Left Column: Timeline Text */}
                <div className="flex-1 w-full max-w-lg lg:pt-4">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-[#fef4c9] text-[#855a1f] px-4 py-1.5 rounded-full text-sm font-bold whitespace-nowrap">
                      {item.badge}
                    </span>
                    <span className="text-gray-400 text-[15px] font-medium whitespace-nowrap">
                      {item.date}
                    </span>
                  </div>
                  
                  <h2 className="text-[#1e2532] text-3xl font-extrabold tracking-tight mb-3 leading-snug">
                    {item.title}
                  </h2>
                  
                  <p className="text-gray-500 text-lg leading-relaxed">
                    {item.text}
                  </p>
                </div>

                {/* Right Column: Timeline Image */}
                <div className="flex-1 w-full flex justify-center lg:justify-end mt-4 lg:mt-0">
                  <div className="relative w-full max-w-112.5">
                    
                    {/* Yellow Offset Backdrop */}
                    <div className="absolute top-4 -bottom-4 left-4 -right-4 bg-[#f8e59a] rounded-3xl"></div>
                    
                    {/* Dynamic Image */}
                    <img
                      src={item.image}
                      alt={`Timeline event: ${item.badge}`}
                      className="relative z-10 w-full h-auto object-cover rounded-3xl"
                    />
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>
        
      </section>

      <Footer />
    </>
  );
}

export default About;