import up from '../../media/up.png'

export interface ICategory{
    image : string, 
    title : string,
    description : string,
    number : number
}
const InstructionCard = ({image, title, description, number}: ICategory) => {
  return (
    <div className="relative w-full h-70 md:h-100 rounded-3xl overflow-hidden group"> 
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      <div className="hidden h-10 w-10 md:flex absolute bottom-11 left-1/2 -translate-x-1/2 flex-col items-center gap-1 group-hover:opacity-0 group-hover:-translate-y-8 transition-all duration-500 ease-out z-10">
        <div className="p-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-md">
          <img src={up} alt='up arrow'/>
        </div>
        <span className=" font-izmir text-[11px] ">Details</span>
      </div>
      {/* Gradient Overlay 
      inset-0 forces an element to stretch and fill the exact dimensions of its closest positioned parent. It applies top,right,bottom,left to 0px. Element position must be fixed or absolute. if absolute then parent container must be relative.*/}
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 w-full p-5 flex items-end justify-between opacity-100 translate-y-0 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300">
            <div className="flex-1 pr-4 font-heirloomArtcraft">
                <h3 className="text-white font-serif text-xl mb-1.5 leading-tight">
                    {title}
                </h3>
                <p className="text-gray-300 text-xs font-sans">
                    {description}
                </p>
            </div>
            <div className="text-white font-serif text-5xl leading-none pb-1">  
                {number}
            </div>
      </div>

    </div>
  )
}

export default InstructionCard
