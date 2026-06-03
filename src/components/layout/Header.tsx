import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  ShoppingBag,
  Menu,
  X,
  ArrowLeft,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

import logo from "@/assets/logo.png";
import navbarBg from "@/assets/navbar-bg.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { itemCount, openCart } = useCart();

  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const showBackButton = !isHomePage;

  return (
    <>
      <header
        style={{
          backgroundImage: `url(${navbarBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={cn(
          "sticky top-0 z-50 w-full bg-[#F8EFE5]"
        )}
      >
        <div className="container mx-auto px-4">

          <div className="flex h-[55px] md:h-[90px] items-center justify-between">

            {/* LEFT */}
            <div className="flex items-center">

              {showBackButton ? (
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden"
                  onClick={() => navigate(-1)}
                >
                  <ArrowLeft className="h-6 w-6" />
                </Button>
              ) : (
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  onClick={() => setIsMobileMenuOpen(true)}
                >
                  <Menu className="h-7 w-7 text-[#5A3E2B]" />
                </Button>
              )}

            </div>

            {/* CENTER LOGO */}

            <Link
              to="/"
              className="flex items-center gap-2 md:gap-3"
            >
              <img
                src={logo}
                alt="KBS Traders"
                className="h-9 md:h-11 w-auto"
              />

              <h1 className="text-base md:text-2xl font-serif font-bold text-[#C89B5E] tracking-wide">
                KBS TRADERS
              </h1>
            </Link>

            {/* RIGHT CART */}
            <div>

              <Button
                variant="ghost"
                size="icon"

                className="relative"
                onClick={openCart}
              >
                <ShoppingBag className="h-7 w-7 text-[#5A3E2B]" />

                {itemCount > 0 && (
                  <span
                    className="
                    absolute
                    -top-1
                    -right-1
                    h-5
                    w-5
                    rounded-full
                    bg-[#C89B5E]
                    text-white
                    text-xs
                    flex
                    items-center
                    justify-center
                   
                  "
                  >
                    {itemCount}
                  </span>
                )}
              </Button>

            </div>

          </div>

        </div>
      </header>

      {/* MOBILE DRAWER */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-40  "
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer */}
          <div
            className="
            fixed
            top-0
            left-0
            h-full
            w-72
            bg-white
            z-50
            shadow-xl
            p-6
             md:hidden
          "
          >
            {/* Top */}
            <div className="flex items-center justify-between mb-10 ">

              <h2 className="text-xl font-semibold text-[#5A3E2B] ">
                Menu
              </h2>

              <button
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="h-6 w-6  " />
              </button>

            </div>

            {/* Menu Items */}
            <nav className="flex flex-col gap-6  ">

              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="
                text-lg
                font-medium
                text-[#5A3E2B]
                hover:text-[#C89B5E]
                
              "
              >
                Home
              </Link>

              <Link
                to="/about-us"
                onClick={() => setIsMobileMenuOpen(false)}
                className="
                text-lg
                font-medium
                text-[#5A3E2B]
                hover:text-[#C89B5E]
                
              "
              >
                About Us
              </Link>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);

                  setTimeout(() => {
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}
                className="text-left text-lg font-medium text-[#5A3E2B] hover:text-[#C89B5E]"
              >
                Contact Us
              </button>

            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default Header;