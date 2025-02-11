import React from 'react';

const PackageCard = ({ packageInfo }) => {
    const { image, duration, price, description, country } = packageInfo;

    const redirectToWhatsApp = () => {
        const phoneNumber = '9072121217';
    
        const whatsappUrl = `https://wa.me/${phoneNumber}`;
    
        window.open(whatsappUrl, '_blank');
      }

    return (
        <div className="border rounded-lg shadow-lg sm:w-[calc(50%-1rem)] md:w-11/12 md:w-shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl mx-auto mb-6">
            <div className="relative">
                <img className="w-full h-[200px] sm:h-[300px] object-cover" src={image} alt={country} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                    <p className="text-white text-lg sm:text-2xl font-bold">{country}</p>
                </div>
            </div>
            <div className="p-4 sm:p-6 bg-white">
                <div className="flex justify-between mb-2 sm:mb-4">
                    <p className="text-sm sm:text-lg font-medium text-gray-700">{duration}</p>
                    <p className="text-sm sm:text-lg font-medium text-gray-700">₹{price} / Person</p>
                </div>
                <p className="text-xs sm:text-base text-gray-600 mb-2 sm:mb-4">{description}</p>
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-blue-500"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M15.625 8.125C15.625 6.63316 15.0324 5.20242 13.9775 4.14752C12.9226 3.09263 11.4918 2.5 10 2.5C8.50816 2.5 7.07742 3.09263 6.02252 4.14752C4.96763 5.20242 4.375 6.63316 4.375 8.125C4.375 10.4325 6.22125 13.44 10 17.0425C13.7788 13.44 15.625 10.4325 15.625 8.125ZM10 18.75C5.41625 14.5837 3.125 11.0413 3.125 8.125C3.125 6.30164 3.84933 4.55295 5.13864 3.26364C6.42795 1.97433 8.17664 1.25 10 1.25C11.8234 1.25 13.572 1.97433 14.8614 3.26364C16.1507 4.55295 16.875 6.30164 16.875 8.125C16.875 11.0413 14.5837 14.5837 10 18.75Z"
                                fill="currentColor"
                            />
                            <path
                                d="M10 10C10.4973 10 10.9742 9.80246 11.3258 9.45083C11.6775 9.09919 11.875 8.62228 11.875 8.125C11.875 7.62772 11.6775 7.15081 11.3258 6.79917C10.9742 6.44754 10.4973 6.25 10 6.25C9.50272 6.25 9.02581 6.44754 8.67417 6.79917C8.32254 7.15081 8.125 7.62772 8.125 8.125C8.125 8.62228 8.32254 9.09919 8.67417 9.45083C9.02581 9.80246 9.50272 10 10 10ZM10 11.25C9.1712 11.25 8.37634 10.9208 7.79029 10.3347C7.20424 9.74866 6.875 8.9538 6.875 8.125C6.875 7.2962 7.20424 6.50134 7.79029 5.91529C8.37634 5.32924 9.1712 5 10 5C10.8288 5 11.6237 5.32924 12.2097 5.91529C12.7958 6.50134 13.125 7.2962 13.125 8.125C13.125 8.9538 12.7958 9.74866 12.2097 10.3347C11.6237 10.9208 10.8288 11.25 10 11.25Z"
                                fill="currentColor"
                            />
                        </svg>
                        <p className="text-sm sm:text-lg font-medium text-gray-700 ml-2">{country}</p>
                    </div>
                    <p className="text-sm sm:text-lg font-medium text-blue-500 cursor-pointer" onClick={redirectToWhatsApp}>Know More</p>
                </div>
            </div>
        </div>
    );
};

export default PackageCard;
