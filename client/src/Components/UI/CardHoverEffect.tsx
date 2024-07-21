import { cn } from "../../Lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Modal } from "../Modal.tsx";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    image: string; 
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<{
    title: string;
    description: string;
    image: string;
  } | null>(null);

  const handleOpenModal = (item: { title: string; description: string; image: string }) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10", className)}>
      {items.map((item, idx) => (
        <div
          key={item.title} // Changed from link to title
          className="relative group block p-2 h-full w-full cursor-pointer"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => handleOpenModal({ title: item.title, description: item.description, image: item.image })}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card image={item.image}>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </div>
      ))}
      {selectedItem && (
        <Modal
          isOpen={!!selectedItem}
          onClose={handleCloseModal}
          title={selectedItem.title}
          description={selectedItem.description}
          image={selectedItem.image}
        />
      )}
    </div>
  );
};

export const Card = ({
  className,
  children,
  image,
  onClick,
}: {
  className?: string;
  children: React.ReactNode;
  image: string; 
  onClick?: () => void;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-[20rem] w-[20rem] p-4 overflow-hidden bg-sky-950 border border-transparent dark:border-white/[0.2] group-hover:border-slate-800 relative z-20 flex flex-col justify-center items-center",
        className
      )}
      onClick={onClick}
    >
      <img src={image} alt="Card Image" className="w-32 object-cover rounded-t-2xl" />
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
