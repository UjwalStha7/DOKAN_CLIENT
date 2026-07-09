import { Link } from "react-router-dom"
import type { IProduct } from "../types"

interface ICardProps {
    product: IProduct
}
const Card: React.FC<ICardProps> = ({ product }) => {
    const colors = product.colors ?? ["#a8e6cf", "#3a3a3a", "#f4c2c2"]
    const variantName = product.variantName ?? "Mint"

    return (
        <div className="relative flex flex-col bg-[#f8f8f8] border border-[#dedede] w-full h-auto lg:h-105 group hover:shadow-lg transition-shadow duration-300 overflow-hidden">

            {/* Wrap the clickable portion (image + title) in the Link.
                Order is flipped per breakpoint using flex `order` utilities
                instead of duplicating markup. */}
            <Link to={`/products/${product.id}`} className="flex flex-col grow overflow-hidden">

                {/* Image: first on mobile/tablet, second on desktop */}
                <div className="order-1 lg:order-2 grow w-full flex items-center justify-center aspect-square lg:aspect-auto mt-0 lg:-mt-2">
                    <img
                        src={`https://dokan-server-yeka.onrender.com/${product.productImageUrl}`}
                        alt={product.productName}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Title: second on mobile/tablet (right under image), first (top) on desktop */}
                <div className="order-2 lg:order-1 px-4 pt-3 pb-2 flex-none z-10 lg:h-20">
                    <h3 className="text-base sm:text-lg lg:text-xl font-normal text-gray-900 uppercase tracking-wide leading-tight">
                        {product.productName}
                    </h3>
                </div>
            </Link>

            {/* Mobile/tablet (below lg): variant name + swatches, always visible, right after title */}
            <div className="order-3 lg:hidden px-4 sm:px-5 py-2 sm:py-3 flex flex-col gap-2 flex-none">
                <span className="text-sm sm:text-[15px] text-gray-800">{variantName}</span>
                <div className="flex gap-2">
                    {colors.map((color, i) => (
                        <span
                            key={i}
                            className="w-5 h-5 sm:w-6 sm:h-6 border border-gray-300"
                            style={{ backgroundColor: color }}
                        />
                    ))}
                </div>
            </div>

            {/* Desktop (lg+): hover reveal panel, slides up from behind the button */}
            <div className="hidden lg:flex absolute left-0 right-0 bottom-10 bg-white border border-transparent lg:group-hover:border-black px-5 py-4 items-center justify-between z-10 transform translate-y-full opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-300 ease-out">
                <div className="flex gap-2">
                    {colors.map((color, i) => (
                        <span
                            key={i}
                            className="w-6 h-6 border border-gray-300"
                            style={{ backgroundColor: color }}
                        />
                    ))}
                </div>
                <span className="text-[15px] text-gray-800">{variantName}</span>
            </div>

            {/* Bottom Button: always last */}
            <button
                className="order-4 lg:order-3 relative z-20 w-full bg-[#111111] text-white border border-transparent lg:group-hover:bg-[#f8f8f8] lg:group-hover:text-black lg:group-hover:border-black lg:hover:bg-[#72f2c7] lg:hover:text-[#0b1b2a] lg:hover:border-black text-sm sm:text-[15px] font-normal tracking-wide py-3 sm:py-4 transition-colors duration-300 flex-none flex justify-center items-center h-10"
                onClick={(e) => {
                    e.preventDefault();
                    console.log(`Added ${product.productName} to bag`);
                }}
            >
                <span>ADD TO CART</span>
                <span className="inline lg:hidden lg:group-hover:inline ml-2 transition-opacity duration-300">
                    | ${product.productPrice}
                </span>
            </button>
        </div>
    )
}

export default Card