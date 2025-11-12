import { useEffect, useState } from 'react';
import { PortableText } from '@portabletext/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { cookies } from '@src/lib/cookies';

const SiteBanner = ({ bannerData, initialBannerStatus }) => {
  const [bannerStatus, setBannerStatus] = useState(initialBannerStatus);

  const {
    backgroundColor,
    textColor,
    buttonText,
    buttonUrl,
    message,
    buttonColor,
    buttonTextColor,
  } = bannerData;

  // console.log('banner content', bannerData);

  const closeBanner = () => {
    cookies.set('siteBanner', 'false'); // persist dismissal for 30 days
    setBannerStatus(false);
  };

  if (!bannerStatus) return null;

  return (
    <div
      style={{ backgroundColor: backgroundColor?.hex || '#efe6dc' }}
      className={`flex justify-center w-full py-4 ${
        !bannerStatus ? 'hidden' : ''
      }`}
    >
      <div className="absolute top-0 right-0 p-4">
        <button
          className="rounded-full bg-white/50 p-1 z-99"
          onClick={closeBanner}
        >
          <XMarkIcon
            onClick={closeBanner}
            className="h-4 w-4 stroke-text-primary"
          />
        </button>
      </div>
      <div className="flex sm:flex-row xs:flex-col w-full max-w-7xl justify-between sm:items-center xs:items-start sm:px-0 xs:px-4 xs:pt-4">
        <div className="flex">
          <PortableText
            value={message}
            components={{
              block: {
                normal: ({ children }) => (
                  <p
                    style={{
                      color: textColor.hex || '#ffffff',
                    }}
                    className={`text-md leading-relaxed`}
                  >
                    {children}
                  </p>
                ),
              },
              marks: {
                link: ({ value, children }) => (
                  <a
                    href={value?.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline', color: 'inherit' }}
                  >
                    {children}
                  </a>
                ),
                underline: ({ children }) => (
                  <span style={{ textDecoration: 'underline' }}>
                    {children}
                  </span>
                ),
              },
            }}
          />
        </div>
        {buttonText && buttonUrl && (
          <div className="flex sm:pt-0 xs:pt-4">
            <a
              href={buttonUrl}
              style={{
                backgroundColor: buttonColor.hex || '#155dfc',
                color: buttonTextColor.hex || '#ffffff',
              }}
              className="inline-block px-6 py-2.5 rounded-full font-medium"
            >
              {buttonText}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default SiteBanner;
