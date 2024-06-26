import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  AlignRight,
  Camera,
  ChevronDown,
  Download,
  Facebook,
  Film,
  Gift,
  Info,
  Loader,
  Plus,
  Radio,
  Rss,
  Twitter,
  Users,
  Video,
  X,
  Youtube,
} from "react-feather";
import Image from "next/image";
import Link from "next/link";
import SlideButton from "./testimonials-page/slidebutton";
import { useRouter } from "next/router";

const aboutMenuItems = [
  {
    name: "Who We Are",
    description: "Get a better understanding of what we're about",
    href: "/about",
    icon: Info,
  },
  {
    name: "Our Team",
    description: "Meet our core leadership team",
    href: "/team",
    icon: Users,
  },
  {
    name: "Why Us",
    description: "Get to know why we're trusted by thousands of Kenyans",
    href: "/why-us",
    icon: Loader,
  },
  {
    name: "Awards and Milestones",
    description: "Explore our recognition and achievements",
    href: "/awards-and-milestones",
    icon: Gift,
  },
  {
    name: "Corporate and Social Responsibility",
    description: "Learn about our commitment to society",
    href: "/corporate-and-social-responsibility",
    icon: Radio,
  },
];

const infoCenterMenuItems = [
  {
    name: "Projects Updates",
    description: "Get the latest updates on our projects",
    href: "/projects-updates",
    icon: Info,
  },
  {
    name: "Customer Information",
    description: "Get information about our customers",
    href: "/customer-information",
    icon: Users,
  },
  {
    name: "FAQs",
    description: "Frequently Asked Questions about our services",
    href: "/faqs",
    icon: Plus,
  },
  {
    name: "Blogs & Company News",
    description: "Read our latest blogs and company news",
    href: "/articles",
    icon: Rss,
  },
  {
    name: "Photo Gallery",
    description: "Explore our photo gallery",
    href: "/photo-gallery",
    icon: Camera,
  },
  {
    name: "Video Gallery",
    description: "Watch videos from our gallery",
    href: "https://www.youtube.com/@OptivenKenyaLimited/videos",
    icon: Video,
  },
  {
    name: "Newsletters & Downloads",
    description: "Download our newsletters and resources",
    href: "/newsletters-and-downloads",
    icon: Download,
  },
  // {
  //   name: "Optiven in the Media",
  //   description: "Explore Optiven's presence in the media",
  //   href: "/optiven-in-the-media",
  //   icon: Film,
  // },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const router = useRouter();

  const handleClick = () => {
    router.push("/contact");
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-50">
      {/* Top banner */}
      <div className="relative isolate flex items-center justify-between gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
        <div
          className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
            }}
          />
        </div>
        <div
          className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
            }}
          />
        </div>

        {/* Phone number on the left side for medium/large devices */}
        <div className="hidden sm:flex items-center text-gray-900 font-semibold whitespace-nowrap">
          <span>
            Call us:{" "}
            <Link
              href={"tel:+254790300300"}
              className="hover:text-green-500 sm:mr-3 un"
            >
              +254 790 300 300
            </Link>
          </span>
        </div>

        {/* Middle links */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 justify-center w-full sm:order-2">
          <div className="text-center border-r sm:border-none">
            <Link
              href="/diaspora"
              className="text-md leading-6 text-gray-900 font-semibold hover:text-green-500 sm:mr-3 un"
            >
              Diaspora
            </Link>
          </div>
          <div className="text-center border-r sm:border-none">
            <Link
              href="/past-projects"
              className="text-md leading-6 text-gray-900 font-semibold hover:text-green-500 sm:mr-3 un"
            >
              Past Projects
            </Link>
          </div>
          <div className="text-center">
            <Link
              href="/projects-updates"
              className="text-md leading-6 text-gray-900 font-semibold hover:text-green-500 un"
            >
              Project Updates
            </Link>
          </div>
        </div>

        {/* Social media links on the right side for medium/large devices */}
        <div className="hidden sm:flex items-center space-x-4 text-gray-900 sm:order-3">
          <Link
            href="https://www.facebook.com/Optivenlimited/"
            aria-label="Facebook"
          >
            <Facebook className="hover:text-green-500 transform transition-transform duration-300 hover:scale-150" />
          </Link>
          <Link
            href="https://www.twitter.com/OptivenLimited"
            aria-label="Twitter"
            className="-m-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              height="50"
              viewBox="0 0 50 50"
              fill="currentColor"
              className="transition-transform duration-300 hover:fill-current hover:text-green-600 transform hover:scale-150"
            >
              <path d="M 3.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z "></path>
            </svg>
          </Link>
          <Link
            href="https://www.youtube.com/@OptivenKenyaLimited"
            aria-label="YouTube"
          >
            <Youtube className="hover:text-green-500 transform transition-transform duration-300 hover:scale-150" />
          </Link>
        </div>
      </div>
      <nav
        className="mx-auto flex items-center justify-between p-4"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Optiven Limited</span>
            <Image
              src="/optiven-logo.png"
              alt="Optiven Logo"
              height={100}
              width={160}
            />
          </Link>
        </div>
        {/* Mobile Hamburger */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open Main Menu</span>
            <AlignRight className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        {/* Menu Links */}
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/"
            className="leading-6 text-gray-900 text-lg un hover:text-green-600"
          >
            Home
          </Link>
          <Popover className="relative">
            <Popover.Button className="text-lg flex items-center gap-x-1 leading-6 text-gray-900">
              About
              <ChevronDown
                size={20}
                className="text-gray-700"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {aboutMenuItems.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-green-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <Link
                          href={item.href}
                          className="block text-gray-700 font-semibold"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Link
            href="/projects"
            className=" leading-6 text-gray-900 text-lg un hover:text-green-600"
          >
            Properties
          </Link>
          <Link
            href="/testimonials"
            className=" leading-6 text-gray-900 text-lg un hover:text-green-600"
          >
            Testimonials
          </Link>
          <Popover className="relative">
            <Popover.Button className="text-lg flex items-center gap-x-1 leading-6 text-gray-900">
              Information Center
              <ChevronDown
                size={20}
                className="text-gray-700"
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4 md:p-2">
                  {infoCenterMenuItems.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 md:p-2 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-green-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <Link
                          href={item.href}
                          className="block text-gray-700 font-semibold"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link
            href="/careers"
            className=" leading-6 text-gray-900 text-lg un hover:text-green-600"
          >
            Careers
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <SlideButton onClick={() => router.push("/contact")} />
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="-m-1.5 p-1.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Optiven Limited</span>
              <Image
                src="/optiven-logo.png"
                alt="Optiven Logo"
                height={100}
                width={160}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close Menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href="/"
                  className="-mx-3 font-semibold block rounded-lg px-3 py-2 text-base leading-7 text-gray-700 hover:bg-gray-50"
                >
                  Home
                </Link>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <div>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-700 hover:bg-gray-50">
                        About
                        <ChevronDown
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...aboutMenuItems].map((aboutMenuItem) => (
                          <Disclosure.Button
                            onClick={() => setMobileMenuOpen(false)}
                            key={aboutMenuItem.name}
                            as="a"
                            href={aboutMenuItem.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-gray-900 hover:bg-gray-50"
                          >
                            - {aboutMenuItem.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href="/projects"
                  className="-mx-3 font-semibold block rounded-lg px-3 py-2 text-base leading-7 text-gray-700 hover:bg-gray-50"
                >
                  Properties
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href="/testimonials"
                  className="-mx-3 font-semibold block rounded-lg px-3 py-2 text-base leading-7 text-gray-700 hover:bg-gray-50"
                >
                  Testimonials
                </Link>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <div>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-700 hover:bg-gray-50">
                        Information Center
                        <ChevronDown
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...infoCenterMenuItems].map((infoCenterItem) => (
                          <Disclosure.Button
                            onClick={() => setMobileMenuOpen(false)}
                            key={infoCenterItem.name}
                            as="a"
                            href={infoCenterItem.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-gray-900 hover:bg-gray-50"
                          >
                            - {infoCenterItem.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href="/careers"
                  className="-mx-3 font-semibold block rounded-lg px-3 py-2 text-base leading-7 text-gray-700 hover:bg-gray-50"
                >
                  Careers
                </Link>
              </div>
              <div className="py-6">
                <SlideButton onClick={handleClick} />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
