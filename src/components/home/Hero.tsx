import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import heroImage from "@/assets/hero-spices.png";

const Hero = () => {
  return (
    <section className="relative  overflow-hidden   bg-[#F8EFE5] text-[#5A3E2B]">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover  bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Beige Gradient Overlay */}
        <div className="absolute inset-0 " />
      </div>

      <div className="container relative mx-auto px-4 py-16 md:py-24">
        <div className="max-w-2xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-10 rounded-full 
            bg-[#E8D2B8]/40 border border-[#C89B5E]/40">
            
            <Sparkles className="h-4 w-4 text-[#C89B5E]" />
            <span className="text-sm font-medium text-[#C89B5E]">
              Trusted Quality Since 1970
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Pure & Authentic Foods <br />
            <span className="text-[#C89B5E]">
              From Trusted Sources to Your Table
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-[#7A5C45] mb-8 leading-relaxed">
            Experience world-class quality with our carefully curated Dates, Nuts,
            Dry fruits, Spices, Chocolates and luxury gift hampers, delivered fresh
            to your doorstep.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">

            {/* Shop Button */}
            <Button
              asChild
              size="lg"
              className="bg-[#C89B5E] text-white hover:bg-[#B88A4F] transition-all duration-300"
            >
              <a href="#categories">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>

            {/* About Button */}
            <Button
              asChild
              size="lg"
              className="bg-transparent border border-[#C89B5E] text-[#5A3E2B]
              hover:bg-[#F5E6D3] transition-all duration-300"
            >
              <Link to="/about-us">
                About Us
              </Link>
            </Button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;