import React from 'react';
import { Link } from 'react-router-dom';

const SubNav = () => {
  return (
    <div className='fixed top-0 left-0 right-0 z-50 p-3 bg-white m-0 '>
      <nav className="relative flex flex-row w-full flex-nowrap items-center justify-between bg-primary py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 lg:py-4 text-xs">
        <div className="flex w-full flex-wrap items-center justify-between px-3">
        <div className="m-auto">
            <a href="/" className="flex items-center">
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                    News Monkey
                </span>
            </a>
        </div>
          <div className="!visible mt-2 flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto" id="navbarSupportedContent9">
            <ul className="list-style-none  m-auto flex-wrap justify-between flex flex-row pl-0 lg:mt-1 lg:flex-row">
              <li className="pl-2 lg:my-0 lg:pl-2 lg:pr-1">
                <Link className="text-black transition duration-200 hover:text-neutral-200 hover:ease-in-out focus:text-neutral-200 disabled:text-black/30 motion-reduce:transition-none lg:px-2 [&.active]:text-black/90 [&.active]:text-neutral-200" to="/business">
                  Business
                </Link>
              </li>
              <li className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1">
                <Link className="p-0 text-black transition duration-200 hover:text-neutral-200 hover:ease-in-out focus:text-neutral-200 disabled:text-black/30 motion-reduce:transition-none lg:px-2 [&.active]:text-black/90 [&.active]:text-neutral-200" to="/technology">
                  Technology
                </Link>
              </li>
              <li className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1" data-te-nav-item-ref>
                <Link className="p-0 text-black transition duration-200 hover:text-neutral-200 hover:ease-in-out focus:text-neutral-200 disabled:text-black/30 motion-reduce:transition-none lg:px-2 [&.active]:text-black/90 [&.active]:text-neutral-200" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1" data-te-nav-item-ref>
                <Link className="p-0 text-black transition duration-200 hover:text-neutral-200 hover:ease-in-out focus:text-neutral-200 disabled:text-black/30 motion-reduce:transition-none lg:px-2 [&.active]:text-black/90 [&.active]:text-neutral-200" to="/">
                  General
                </Link>
              </li>
              <li className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1" data-te-nav-item-ref>
                <Link className="p-0 text-black transition duration-200 hover:text-neutral-200 hover:ease-in-out focus:text-neutral-200 disabled:text-black/30 motion-reduce:transition-none lg:px-2 [&.active]:text-black/90 [&.active]:text-neutral-200" to="/health">
                  Health
                </Link>
              </li>
              <li className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1" data-te-nav-item-ref>
                <Link className="p-0 text-black transition duration-200 hover:text-neutral-200 hover:ease-in-out focus:text-neutral-200 disabled:text-black/30 motion-reduce:transition-none lg:px-2 [&.active]:text-black/90 [&.active]:text-neutral-200" to="/science">
                  Science
                </Link>
              </li>
              <li className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1" data-te-nav-item-ref>
                <Link className="p-0 text-black transition duration-200 hover:text-neutral-200 hover:ease-in-out focus:text-neutral-200 disabled:text-black/30 motion-reduce:transition-none lg:px-2 [&.active]:text-black/90 [&.active]:text-neutral-200" to="/sports">
                  Sports
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SubNav;
