import * as Tabs from '@radix-ui/react-tabs';
import { 
  ShoppingCart, 
  Heart, 
  Car, 
  Laptop, 
  Package, 
  UtensilsCrossed
} from 'lucide-react';

interface UseCase {
  industry: string;
  iconName: string;
  image: { src: string; [key: string]: any };
  challenge: string;
  solution: string;
  results: string[];
}

interface Props {
  useCases: UseCase[];
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShoppingCart,
  Heart,
  Car,
  Laptop,
  Package,
  UtensilsCrossed,
};

export default function UseCaseTabs({ useCases }: Props) {
  // Get unique industries
  const industries = Array.from(new Set(useCases.map((uc) => uc.industry)));
  return (
    <Tabs.Root defaultValue={industries[0]} className="w-full">
      <Tabs.List className="flex flex-wrap gap-2 border-b-2 border-gray-200 mb-8 pb-2">
        {industries.map((industry) => {
          return (
            <Tabs.Trigger
              key={industry}
              value={industry}
              className="group px-6 py-3 text-sm font-semibold text-gray-600 border-b-2 border-transparent hover:text-blue-600 hover:border-blue-300 transition-all duration-200 data-[state=active]:text-blue-600 data-[state=active]:border-blue-600 flex items-center gap-2"
            >
              
              {industry}
            </Tabs.Trigger>
          );
        })}
      </Tabs.List>

      {industries.map((industry) => {
        const useCase = useCases.find((uc) => uc.industry === industry);
        if (!useCase) return null;
        return (
          <Tabs.Content 
            key={industry} 
            value={industry} 
            className="space-y-6 animate-fadeIn"
          >
            
            <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 ">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                {useCase.results.map((result, idx) => (
                <div className="lg:col-span-6 relative h-64 lg:h-auto overflow-hidden group m-5" >
                  <img
                    src={result.img.src}
                    alt={useCase.industry}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                      
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>
               
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">
                      {result.title}
                    </h2>
                  </div>
                </div>
                ))}
              </div>
            </div>
          </Tabs.Content>
        );
      })}
    </Tabs.Root>
  );
}
