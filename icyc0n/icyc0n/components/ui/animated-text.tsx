import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  highlightedWords?: Record<string, string>;
}

export const AnimatedText = ({ 
  text, 
  className = '', 
  highlightedWords = {} 
}: AnimatedTextProps) => {
  const words = text.split(' ');

  return (
    <div className={className}>
      {words.map((word, index) => {
        const highlightClass = highlightedWords[word];
        const isHighlighted = !!highlightClass;
        
        return (
          <motion.span
            key={`${word}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              ease: "easeOut"
            }}
            className={isHighlighted 
              ? `inline-block ${highlightClass} bg-clip-text text-transparent` 
              : 'inline-block'}
          >
            {word}
            {index < words.length - 1 && '\u00A0'}
          </motion.span>
        );
      })}
    </div>
  );
};
