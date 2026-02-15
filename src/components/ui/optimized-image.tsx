import { LazyImage } from './lazy-image';

const optimizeImageUrl = (url: string, width?: number, height?: number, quality = 80): string => {
  // If it's an external URL that supports optimization (like a CDN)
  if (url.includes('unsplash.com') || url.includes('cloudinary.com') || url.includes('imgix.com')) {
    const separator = url.includes('?') ? '&' : '?';
    let optimizedUrl = url;
    
    if (width) optimizedUrl += `${separator}w=${width}`;
    if (height) optimizedUrl += `${width ? '&' : separator}h=${height}`;
    optimizedUrl += `${width || height ? '&' : separator}q=${quality}&auto=format`;
    
    return optimizedUrl;
  }
  
  // For local images, you could implement server-side optimization
  return url;
};

export const OptimizedImage = ({ 
  src, 
  alt, 
  className, 
  width, 
  height, 
  quality = 80 
}: {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  quality?: number;
}) => {
  const optimizedSrc = optimizeImageUrl(src, width, height, quality);
  
  return (
    <LazyImage
      src={optimizedSrc}
      alt={alt}
      className={className}
      width={width}
      height={height}
    />
  );
};

export default OptimizedImage;