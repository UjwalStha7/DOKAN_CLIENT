import { useEffect, useState } from "react";
import Navbar from "../../globals/components/Navbar";
import Card from "./components/Card";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchProducts } from "../../store/productSlice";
import Footer from "../../globals/components/Footer";

function Product() {
    const dispatch = useAppDispatch();
    const { products } = useAppSelector((store) => store.products);
    
    const [activeCategory, setActiveCategory] = useState("All");

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const categories = ["All", "Best Selling", "Oral Care", "Body Care", "Sets"];
    const sectionCategories = categories.filter(cat => cat !== "All");

    const scrollToSection = (category: string) => {
        setActiveCategory(category);
        if (category === "All") {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        const elementId = category.replace(/\s+/g, '-');
        const element = document.getElementById(elementId);
        
        if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <>
            <Navbar />
            
            {/* Hero Header Section */}
            <div className="bg-white pt-2 md:pt-15 pb-2 md:pb-7 px-12">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-joane text-center text-gray-900 mb-1 md:mb-3">
                    Everything Your Daily Routine Deserves.
                </h1>
                <p className="text-[14px] md:text-lg text-center text-gray-600 max-w-7xl mx-auto font-heirloomArtcraft">
                    From oral care essentials to everyday self-care, discover products designed to help you look, feel, and smile your best.
                </p>
            </div>

            {/* Sticky Category Navigation */}
            <div className="sticky top-0 z-40 bg-white border-b border-gray-200 mx-12">
                <nav className="flex justify-start gap-8 py-4 overflow-x-auto">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => scrollToSection(category)}
                            className={`whitespace-nowrap text-sm font-semibold tracking-wide uppercase transition-colors duration-200 pb-1 border-b-2 ${
                                activeCategory === category
                                    ? "border-black text-black"
                                    : "border-transparent text-gray-500 hover:text-gray-900"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </nav>
            </div>
            <hr></hr>

            {/* Rendered Category Sections */}
            <div className="pb-20">
                {sectionCategories.map((category, index) => {
                    const categoryProducts = products.filter(
                        (product) => product.Category?.categoryName === category
                    );
                    const isLastSection = index === sectionCategories.length - 1;

                    return (
                        <div 
                            key={category} 
                            id={category.replace(/\s+/g, '-')} 
                            className="pt-5 px-4 md:px-12 lg:px-12"
                        >
                            {/* Category Title */}
                            <h2 className="text-2xl md:text-3xl font-joane text-center text-gray-900 mb-5">
                                {category === "Best Selling" ? "Best Selling" : category}
                            </h2>

                            {/* Products Grid */}
                            <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-4 w-full mb-7 px-7">
                                {categoryProducts.length > 0 ? (
                                    categoryProducts.map((product) => (
                                        <Card key={product.id || product._id} product={product} />  
                                    )) 
                                ) : (
                                    <p className="text-gray-500 col-span-full py-10 text-center">
                                        No products available in this category.
                                    </p>
                                )}
                            </section>

                            {/* Divider — only between sections, aligned with product grid via mx-12 */}
                            {!isLastSection && (
                                <div className="border-b border-black " />
                            )}

                        </div>
                    );
                })}
            </div>
            <Footer />
        </>
    );
}

export default Product;