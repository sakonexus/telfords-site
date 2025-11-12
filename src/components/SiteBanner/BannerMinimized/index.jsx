import { useState, useRef, useEffect } from 'react';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import { PortableText } from '@portabletext/react';

const BannerMinimized = ({ bannerData }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const dialogRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        setOpenDialog(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dialogRef]);

  const { buttonText, buttonUrl, message } = bannerData;

  return (
    <div class="relative w-full">
      <div class="flex max-w-7xl">
        <div className="fixed bottom-0 left-0 p-4 z-[111]">
          <div
            ref={dialogRef}
            className={`bg-white p-2 rounded-md mb-2 flex flex-col transition-opacity duration-200 shadow-md border-slate-400 ${
              openDialog ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="">
              <PortableText
                value={message}
                components={{
                  block: {
                    normal: ({ children }) => (
                      <p className={`text-md leading-relaxed`}>{children}</p>
                    ),
                  },
                  marks: {
                    link: ({ value, children }) => (
                      <a
                        href={value?.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          textDecoration: 'underline',
                          color: 'inherit',
                        }}
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
            <div className="pt-2">
              <a
                href={buttonUrl}
                className="underline text-blue-600 font-semibold"
              >
                {buttonText}
              </a>
            </div>
          </div>
          <button
            onClick={() => setOpenDialog((prev) => !prev)}
            className="flex justify-center items-center rounded-full bg-footer w-8 h-8 shadow-sm p-1"
          >
            <InformationCircleIcon className="w-6 h-6 stroke-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerMinimized;
