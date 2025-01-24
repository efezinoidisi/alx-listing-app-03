import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='bg-[#222222] before:content-[""] relative before:absolute before:-top-7 before:h-[1.8125rem] before:w-full before:bg-primary text-[#CACACA] px-6 before:inset-x-0 py-6 text-xs md:text-base mt-20 md:px-[7.25rem] md:py-11 lg:px-14 lg:py-9 overflow-hidden'>
      <div className='xl:flex w-full xl:gap-32'>
        <div>
          <svg
            width='60'
            height='32'
            viewBox='0 0 60 32'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M22.191 20.7393C22.191 26.7165 17.3455 31.562 11.3683 31.562C5.39112 31.562 0.545654 26.7165 0.545654 20.7393C0.545654 14.7621 5.39112 9.91664 11.3683 9.91664C17.3455 9.91664 22.191 14.7621 22.191 20.7393ZM7.66264 20.7393C7.66264 22.7859 9.32172 24.445 11.3683 24.445C13.4149 24.445 15.074 22.7859 15.074 20.7393C15.074 18.6927 13.4149 17.0336 11.3683 17.0336C9.32172 17.0336 7.66264 18.6927 7.66264 20.7393Z'
              fill='white'
            />
            <path
              d='M15.4735 9.91664H22.9374V31.562H15.4735V9.91664Z'
              fill='white'
            />
            <path
              d='M26.6693 4.69191L34.1332 0.959961V31.562H26.6693V4.69191Z'
              fill='white'
            />
            <path
              d='M53.8773 5.42295C54.1744 5.13725 54.6469 5.14654 54.9326 5.4437L59.071 9.74813C59.3567 10.0453 59.3474 10.5178 59.0503 10.8035L42.4667 26.7473C42.1696 27.033 41.6971 27.0237 41.4114 26.7266L37.273 22.4221C36.9873 22.125 36.9966 21.6525 37.2937 21.3668L53.8773 5.42295Z'
              fill='white'
            />
            <path
              d='M58.9383 21.5913C59.2294 21.8831 59.2289 22.3557 58.9371 22.6469L54.7103 26.8645C54.4185 27.1557 53.9459 27.1552 53.6548 26.8634L37.4056 10.5789C37.1144 10.2871 37.1149 9.81456 37.4067 9.52339L41.6335 5.30574C41.9253 5.01458 42.3979 5.01509 42.6891 5.30689L58.9383 21.5913Z'
              fill='white'
            />
          </svg>

          <p className='mt-10 mb-8 font-medium md:mb-16 max-xl:max-w-[40rem]'>
            ALX is a platform where travelers can discover and book unique,
            comfortable, and affordable lodging options worldwide. From cozy
            city apartments and tranquil countryside retreats to exotic
            beachside villas, ALX connects you with the perfect place to stay
            for any trip.
          </p>
        </div>

        <div className='grid grid-cols-[1fr_auto] place-content-between w-full px-3 md:flex md:justify-between md:px-0 md:gap-24'>
          <FooterCard
            title='Explore'
            links={[
              { name: 'Apartments in Dubai', href: '' },
              { name: 'Hotels in New York', href: '' },
              { name: 'Villa in Spain', href: '' },
              { name: 'Mansion in indonesia', href: '' },
            ]}
          />
          <FooterCard
            title='Company'
            links={[
              { name: 'About us', href: '' },
              { name: 'Blog', href: '' },
              { name: 'Career', href: '' },
              { name: 'Customers', href: '' },
              { name: 'Brand', href: '' },
            ]}
          />
          <FooterCard
            title='Help'
            links={[
              { name: 'Support', href: '' },
              { name: 'Cancel booking', href: '' },
              { name: 'Refunds Process', href: '' },
            ]}
          />
        </div>
      </div>

      <hr className='opacity-[0.09] mt-24 mb-[1.125rem] md:mt-14 md:mb-11' />
      <div className='flex flex-col xl:flex-row xl:items-center xl:justify-between xl:gap-3'>
        <p className='text-center font-medium leading-7 xl:text-left'>
          Some hotel requires you to cancel more than 24 hours before check-in.
          Details{' '}
          <Link href={''} className='text-primary'>
            here
          </Link>
        </p>
        <div className='flex font-medium flex-wrap md:flex-nowrap mt-8 mb-10 items-center justify-center gap-2 md:gap-5 md:mb-0 xl:m-0'>
          <Link href={''}>Terms of Service</Link>
          <Link href={''}>Policy service</Link>
          <Link href={''}>Cookies Policy</Link>
          <Link href={''} className='hidden lg:inline-block'>
            Partners
          </Link>
        </div>
      </div>
    </footer>
  );
};

function FooterCard({
  title,
  links,
}: {
  title: string;
  links: { href: string; name: string }[];
}) {
  return (
    <div className='space-y-[1.125rem]'>
      <h5 className='font-semibold text-base md:text-[1.5625rem]'>{title}</h5>

      <ul className='flex flex-col gap-[0.5625rem]'>
        {links.map((link) => {
          return (
            <li key={link.name} className=''>
              <Link href={link.href}>{link.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Footer;
