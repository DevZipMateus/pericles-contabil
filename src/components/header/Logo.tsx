
import { cn } from "@/lib/utils";

interface LogoProps {
  scrolled: boolean;
}

const Logo = ({ scrolled }: LogoProps) => {
  return (
    <a href="#início" className="flex items-center z-10 relative">
      <div className="flex items-center gap-3">
        <img 
          src="/lovable-uploads/3c511863-2339-48ba-939c-344171028f59.png" 
          alt="Péricles Vilela Santos - Contador" 
          className={cn(
            "transition-all duration-300",
            scrolled ? "h-12" : "h-16"
          )}
        />
        <div className="flex flex-col">
          <div
            className={cn(
              "font-bold transition-all duration-300",
              scrolled ? "text-lg text-primary" : "text-xl text-primary"
            )}
          >
            PÉRICLES VILELA
          </div>
          <div
            className={cn(
              "text-sm font-medium transition-all duration-300",
              scrolled ? "text-gray-600" : "text-gray-700"
            )}
          >
            CONTADOR
          </div>
        </div>
      </div>
    </a>
  );
};

export default Logo;
