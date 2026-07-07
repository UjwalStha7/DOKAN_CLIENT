import category1 from '../../media/category1.png'
import category2 from '../../media/category2.png'
import category3 from '../../media/category3.png'
import category4 from '../../media/category4.png'
import right from '../../media/right.png'

const categories = [
  { id: 1, title: 'Toothpaste\nBits', image: category1 },
  { id: 2, title: 'Oral Care', image: category2 },
  { id: 3, title: 'Sets', image: category3 },
  { id: 4, title: 'Body Care', image: category4 },
];

const CategoryCard = () => {
  return (
    <>
    {/* 1. Changed to CSS Grid: 2 columns on mobile, 4 on desktop */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full max-w-7xl justify-center ">
      {categories.map((cat) => (
        <div 
          key={cat.id} className="relative w-full h-35 sm:h-70 group cursor-pointer font-sans">
          
          {/* Hidden "Shop Now" Button Container */}
          <div className="absolute bottom-0 left-0 w-full h-12 md:h-14 bg-[#111111] rounded-full flex items-center justify-between px-3 md:px-5 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out z-0">
            <span className="text-white text-sm md:text-[15px] font-medium pl-1">Shop Now</span>
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#5fe2b7] flex items-center justify-center">
              <img 
                src={right} 
                alt="right arrow" 
                className="w-3 h-3 md:w-3.5 md:h-3.5 object-contain" 
              />
            </div>
          </div>

          {/* Main Image Card */}
          <div className="absolute top-0 left-0 w-full h-full rounded-2xl md:rounded-3xl bg-gray-100 overflow-hidden transition-all duration-500 ease-in-out z-10 group-hover:h-[calc(100%-3.5rem)] md:group-hover:h-[calc(100%-4rem)] shadow-sm">
            <img 
              src={cat.image} 
              alt={cat.title.replace('\n', ' ')} 
              className="absolute inset-0 w-full h-full object-cover" 
            />
            
            {/* Title Text 
              3. Scaled down mobile text to text-xl so it fits in the narrower 2-column layout 
            */}
            <h3 className="absolute left-4 md:left-6 top-[calc(100%-1.2rem)] md:top-[calc(100%-1.5rem)] -translate-y-full group-hover:top-4 md:group-hover:top-6 group-hover:translate-y-0 transition-all duration-500 ease-in-out text-xl md:text-[1.7rem] text-black leading-tight whitespace-pre-line z-20 font-heirloomArtcraft">
              {cat.title}
            </h3>
          </div>

        </div>
      ))}
    </div>
    </>
  )
}

export default CategoryCard