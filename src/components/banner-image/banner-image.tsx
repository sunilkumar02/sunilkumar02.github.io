import { useEffect, useState } from 'react';
import style from './banner-image.module.css'

interface BannerImageProps {
    src: string;
    label?: string;
    type?: 'hero-banner' | 'cover-banner';
    className?: string;
}

const BannerImage: React.FC<BannerImageProps> = ({ src, label, type = 'hero-banner', className }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => setIsLoaded(true);
    },[])

    return (
        <div className={`${style[`banner-image`]} ${style[`banner--${type}`]} ${className || ''}`} >

            <div className={`${style['banner-image-inner']} ${!isLoaded ? 'skeleton' : ''}`}>
                <img src={src} alt={label}/>
            </div>
            
        </div>
    );
};

export default BannerImage;
