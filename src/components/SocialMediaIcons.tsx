import React, { SVGProps } from 'react';

interface LinkedInIconProps extends SVGProps<SVGSVGElement> {
    className?: string;
}

interface FacebookIconProps extends SVGProps<SVGSVGElement> {
    className?: string;
}

export const LinkedInIcon: React.FC<LinkedInIconProps> = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
        {...rest}
        className={`w-full h-auto ${className}`}
    >
        <path fill="none" d="M0 0h256v256H0z" />
        <g fill="none">
            <rect width={256} height={256} fill="#fff" rx={60} />
            <rect width={256} height={256} fill="#0A66C2" rx={60} />
            <path
                fill="#fff"
                d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
            />
        </g>
    </svg>
);


export const FacebookIcon: React.FC<FacebookIconProps> = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        data-name="Ebene 1"
        viewBox="0 0 1024 1024"
        {...rest}
        className={`w-full h-auto ${className}`}
    >
        <path
            fill="#1877f2"
            d="M1024 512C1024 229.23 794.77 0 512 0S0 229.23 0 512c0 255.554 187.231 467.37 432 505.778V660H302V512h130V399.2C432 270.88 508.439 200 625.39 200 681.407 200 740 210 740 210v126h-64.563C611.835 336 592 375.467 592 415.957V512h142l-22.7 148H592v357.778C836.769 979.37 1024 767.554 1024 512Z"
        />
        <path
            fill="#fff"
            d="M711.3 660 734 512H592v-96.043c0-40.49 19.835-79.957 83.437-79.957H740V210s-58.592-10-114.61-10C508.438 200 432 270.88 432 399.2V512H302v148h130v357.778a517.396 517.396 0 0 0 160 0V660Z"
        />
    </svg>
);