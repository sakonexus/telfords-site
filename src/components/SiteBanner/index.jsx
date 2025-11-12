import { useEffect, useState } from 'react';
import { PortableText } from '@portabletext/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { cookies } from '@src/lib/cookies';

const SiteBanner = ({ bannerData, initialBannerStatus, isHomePage }) => {
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

  const closeBanner = () => {
    cookies.set('siteBanner', 'false');
    setBannerStatus(false);
  };

  if (!bannerStatus) return null;

  return (
    <div
      style={{ backgroundColor: backgroundColor?.hex || '#efe6dc' }}
      className={`flex justify-center w-full py-4  ${
        isHomePage ? 'mt-0' : 'sm:mt-22 xs:mt-16'
      }
         ${!bannerStatus ? 'hidden' : ''}`}
    >
      <div className="relative w-full max-w-7xl">
        <div className="absolute top-0 right-0 sm:pr-0 xs:pr-4">
          <button
            className="rounded-full bg-white/50 p-1 z-99 hover:cursor-pointer"
            onClick={closeBanner}
          >
            <XMarkIcon
              onClick={closeBanner}
              className="h-4 w-4 stroke-text-primary"
            />
          </button>
        </div>
        <div className="flex sm:flex-row xs:flex-col w-full max-w-7xl justify-between sm:items-center xs:items-start sm:px-0 xs:px-4 xs:pt-4">
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
          {buttonText && buttonUrl && (
            <div className="flex pr-12 sm:pt-0 xs:pt-4">
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
    </div>
  );
};

export default SiteBanner;
