import Rating from "./Rating"

export interface IRating {
    rating: number;
    userName: string;
    description: string;
    image: string;
}

const RatingCard = ({ rating, userName, description, image }: IRating) => {
    return (
        <div className="w-87.5 shrink-0 h-full bg-[#131313] rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col">
            <div className="p-6 sm:p-8 flex flex-col grow">
                
                {/* Stars */}
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-2">
                        <Rating value={rating}/>
                    </div>
                </div>

                {/* Description - line-clamp-[8] acts as a frontend UI safety net for the ~300 character limit */}
                <p className="text-[#d4d4d4] text-[17px] leading-relaxed font-medium mb-6 font-vayuSans grow line-clamp-8">
                    {description}
                </p>

                {/* Image and Name */}
                <div className="flex items-center justify-between mt-auto pt-2">
                    <img 
                        src={image} 
                        alt={`${userName} avatar`} 
                        className="h-24 w-24 object-cover rounded-2xl shrink-0" 
                    />
                    <p className="text-[#f6f6f6] font-cooper text-xl text-right ml-4 line-clamp-2">
                        {userName}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RatingCard