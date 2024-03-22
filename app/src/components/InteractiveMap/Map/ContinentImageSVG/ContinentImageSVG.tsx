import React from "react";
import Image from "next/image";

interface ContinentImageSVGProps {
    src: string;
    alt: string;
    isHidden: boolean;
}

function ContinentImageSVG({ src, alt, isHidden }: ContinentImageSVGProps) {
    return (
        <Image
            src={src}
            alt={alt}
            fill
            style={{
                opacity: isHidden ? 0.4 : 1,
                transition: "0.3s",
            }}
        />
    );
}

export default ContinentImageSVG;
