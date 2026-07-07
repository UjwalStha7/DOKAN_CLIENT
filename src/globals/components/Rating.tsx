import fRating from '../../media/FRating.png'
import hRating from '../../media/HRating.png'
import eRating from '../../media/ERating.png'

const Rating = ({ value} : { value: number }) => {
  const fullStars = Math.floor(value);
  const hasHalfStar = (value % 1) >= 0.1;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  return (
    <div className="flex items-center gap-1">
      {/* Render the Full Stars */}
      {[...Array(fullStars)].map((_, index) => (
        <img key={`full-${index}`} src={fRating} alt="Full star" className="w-5 h-5" />
      ))}
      {/* Render the Half Star (only if hasHalfStar is true) */}
      {hasHalfStar && (
        <img src={hRating} alt="Half star" className="w-5 h-5" />
      )}
      {/* Render the Empty Stars */}
      {[...Array(emptyStars)].map((_, index) => (
        <img key={`empty-${index}`} src={eRating} alt="Empty star" className="w-5 h-5" />
      ))}
    </div>
  )
}

export default Rating