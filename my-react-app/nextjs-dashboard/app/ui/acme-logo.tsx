import { GlobeAltIcon } from '@heroicons/react/24/outline';
import lusitana from '/src/styles/fonts.module.css';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
    </div>
  );
}
