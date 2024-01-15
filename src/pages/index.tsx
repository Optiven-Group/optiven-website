import Head from "next/head";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Stairs from "@/components/stairs";
import Image from "next/image";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.fromTo(
      ".vertical-line",
      { scaleY: 0, visibility: "hidden", opacity: 0 },
      {
        scaleY: 1,
        opacity: 1,
        visibility: "visible",
        duration: 5,
        scrollTrigger: {
          trigger: ".vertical-line",
          start: "top bottom",
          end: "top center",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      ".horizontal-line",
      { scaleX: 0, visibility: "hidden", opacity: 0 },
      {
        scaleX: 1,
        opacity: 1,
        visibility: "visible",
        duration: 5,
        scrollTrigger: {
          trigger: ".horizontal-line",
          start: "top bottom",
          end: "top center",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  return (
    <>
      <Head>
        <title>Optiven Limited</title>
        <meta name="description" content="Inspiring Possibilities" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stairs>
        <div className="hero min-h-screen">
          <div className="hero-content text-center">
            <div className="flex justify-center items-center">
              <h1 className="text-7xl uppercase">Home</h1>
            </div>
          </div>
        </div>
        {/* Projects */}
        <div className="my-10">
          <div className="mx-4 my-10 flex flex-col items-start justify-between md:flex-row lg:flex-row">
            <h1 className="text-xl content-start md:text-4xl lg:text-5xl">
              FEATURED PROJECTS
            </h1>
            <p className="text-sm w-full md:max-w-md lg:max-w-4xl">
              Optiven is a one-stop shop offering investment solutions to you.
              Our projects are suitable for immediate residential settlement,
              commercial purposes or futuristic capital gain. We have prime
              plots in Vipingo, Machakos, Kisumu, Ngong, Kitengela, Ngong, Nyeri
              , Nakuru, Nanyuki, Naro Moru, Malindi, Konza, Kithimani and
              Kajiado. As we think of you getting VALUE in our properties, we
              have also made them very affordable, hence you can find a project
              from as little as Ksh 169,000 with affordable installments.
            </p>
          </div>
          <div>
            <div className="horizontal-line w-full horizontal-line-thickness bg-gray-800 transform origin-top"></div>
            <div className="grid grid-cols-4">
              <div className="col-span-1 p-4">
                <div className="flex flex-col justify-between">
                  <div>
                    <label className="text-xs text-gray-500">PROJECT</label>
                    <h1 className="text-xl uppercase md:text-2xl lg:text-3xl hover:underline cursor-pointer">
                      USHINDI GARDENS
                    </h1>
                  </div>
                </div>
              </div>
              <div className="vertical-line bg-gray-800 transform origin-top vertical-line-thickness lg:min-h-96 flex items-center justify-center"></div>
              <div className="p-4 col-span-2">
                <div className="carousel rounded-box">
                  <div className="carousel-item">
                    <img
                      src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                      alt="Burger"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
                      alt="Burger"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
                      alt="Burger"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
                      alt="Burger"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
                      alt="Burger"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
                      alt="Burger"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
                      alt="Burger"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="horizontal-line w-full horizontal-line-thickness bg-gray-800 transform origin-top"></div>
            <div className="grid grid-cols-4">
              <div className="col-span-1 p-4">
                <div className="flex flex-col justify-between">
                  <div>
                    <label className="text-xs text-gray-500">PROJECT</label>
                    <h1 className="text-xl uppercase md:text-2xl lg:text-3xl hover:underline cursor-pointer">
                      Ocean View Ridge - Vipingo
                    </h1>
                  </div>
                </div>
              </div>
              <div className="vertical-line bg-gray-800 transform origin-top vertical-line-thickness lg:min-h-96 flex items-center justify-center"></div>
              <div className="p-4">
                <Image
                  alt="project-image"
                  src={
                    "https://images.unsplash.com/photo-1563938419647-b9d577b75fb5?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  layout="responsive"
                  width={300}
                  height={200}
                />
              </div>
            </div>
            <div className="horizontal-line w-full horizontal-line-thickness bg-gray-800 transform origin-top"></div>
          </div>
          <div>
            <div className="horizontal-line w-full horizontal-line-thickness bg-gray-800 transform origin-top"></div>
            <div className="grid grid-cols-4">
              <div className="col-span-1 p-4">
                <div className="flex flex-col justify-between">
                  <div>
                    <label className="text-xs text-gray-500">PROJECT</label>
                    <h1 className="text-xl uppercase md:text-2xl lg:text-3xl hover:underline cursor-pointer">
                      Tulivu Gardens Phase 3 - Konza
                    </h1>
                  </div>
                </div>
              </div>
              <div className="vertical-line bg-gray-800 transform origin-top vertical-line-thickness lg:min-h-96 flex items-center justify-center"></div>
              <div className="p-4">
                <Image
                  alt="project-image"
                  src={
                    "https://images.unsplash.com/photo-1564998229935-8f4d16aa2f3e?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  layout="responsive"
                  width={300}
                  height={200}
                />
              </div>
            </div>
            <div className="horizontal-line w-full horizontal-line-thickness bg-gray-800 transform origin-top"></div>
          </div>
        </div>
        {/* Stats */}
        <div className="w-full py-16 mx-auto lg:py-20 bg-black text-white">
          <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4 lg:grid-cols-6">
            <div className="text-center md:border-r">
              <h6 className="text-4xl font-extralight lg:text-5xl xl:text-6xl">24</h6>
              <p className="text-xs my-4 uppercase lg:text-base">
                Years of Transformation
              </p>
            </div>
            <div className="text-center md:border-r">
              <h6 className="text-4xl font-extralight lg:text-5xl xl:text-6xl">
                60+
              </h6>
              <p className="text-xs my-4 uppercase lg:text-base">
                Completed Projects
              </p>
            </div>
            <div className="text-center md:border-r">
              <h6 className="text-4xl font-extralight lg:text-5xl xl:text-6xl">
                7000+
              </h6>
              <p className="text-xs my-4 uppercase lg:text-base">
                Disbursed Title Deeds
              </p>
            </div>
            <div className="text-center md:border-r">
              <h6 className="text-4xl font-extralight lg:text-5xl xl:text-6xl">
                20+
              </h6>
              <p className="text-xs my-4 uppercase lg:text-base">Awards</p>
            </div>
            <div className="text-center md:border-r">
              <h6 className="text-4xl font-extralight lg:text-5xl xl:text-6xl">
                10000+
              </h6>
              <p className="text-xs my-4 uppercase lg:text-base">
                Happy Clients
              </p>
            </div>
            <div className="text-center">
              <h6 className="text-4xl font-extralight lg:text-5xl xl:text-6xl">
                500+
              </h6>
              <p className="text-xs my-4 uppercase lg:text-base">Workforce</p>
            </div>
          </div>
        </div>
        {/* Blogs */}
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
              <a href="/" aria-label="Article">
                <img
                  src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                  className="object-cover w-full h-64 rounded"
                  alt=""
                />
              </a>
              <div className="py-5">
                <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                  13 Jul 2023
                </p>
                <a
                  href="/"
                  aria-label="Article"
                  className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  <p className="text-2xl font-bold leading-5">
                    Diving to the deep
                  </p>
                </a>
                <p className="mb-4 text-gray-700">
                  Sed ut perspiciatis unde omnis iste natus error sit sed quia
                  consequuntur magni voluptatem doloremque.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="/"
                    aria-label="Likes"
                    className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                  >
                    <div className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                      >
                        <polyline
                          points="6 23 1 23 1 12 6 12"
                          fill="none"
                          strokeMiterlimit="10"
                        />
                        <path
                          d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                          fill="none"
                          stroke="currentColor"
                          strokeMiterlimit="10"
                        />
                      </svg>
                    </div>
                    <p className="font-semibold">7.4K</p>
                  </a>
                  <a
                    href="/"
                    aria-label="Comments"
                    className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                  >
                    <div className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                      >
                        <polyline
                          points="23 5 23 18 19 18 19 22 13 18 12 18"
                          fill="none"
                          strokeMiterlimit="10"
                        />
                        <polygon
                          points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                          fill="none"
                          stroke="currentColor"
                          strokeMiterlimit="10"
                        />
                      </svg>
                    </div>
                    <p className="font-semibold">81</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
              <a href="/" aria-label="Article">
                <img
                  src="https://images.pexels.com/photos/1576937/pexels-photo-1576937.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                  className="object-cover w-full h-64 rounded"
                  alt=""
                />
              </a>
              <div className="py-5">
                <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                  4 Nov 2023
                </p>
                <a
                  href="/"
                  aria-label="Article"
                  className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  <p className="text-2xl font-bold leading-5">
                    Conquer the World
                  </p>
                </a>
                <p className="mb-4 text-gray-700">
                  Sed ut perspiciatis unde omnis iste natus error sit sed quia
                  consequuntur magni voluptatem doloremque.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="/"
                    aria-label="Likes"
                    className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                  >
                    <div className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                      >
                        <polyline
                          points="6 23 1 23 1 12 6 12"
                          fill="none"
                          strokeMiterlimit="10"
                        />
                        <path
                          d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                          fill="none"
                          stroke="currentColor"
                          strokeMiterlimit="10"
                        />
                      </svg>
                    </div>
                    <p className="font-semibold">7.4K</p>
                  </a>
                  <a
                    href="/"
                    aria-label="Comments"
                    className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                  >
                    <div className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                      >
                        <polyline
                          points="23 5 23 18 19 18 19 22 13 18 12 18"
                          fill="none"
                          strokeMiterlimit="10"
                        />
                        <polygon
                          points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                          fill="none"
                          stroke="currentColor"
                          strokeMiterlimit="10"
                        />
                      </svg>
                    </div>
                    <p className="font-semibold">81</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
              <a href="/" aria-label="Article">
                <img
                  src="https://images.pexels.com/photos/2123755/pexels-photo-2123755.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  className="object-cover w-full h-64 rounded"
                  alt=""
                />
              </a>
              <div className="py-5">
                <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                  28 Dec 2023
                </p>
                <a
                  href="/"
                  aria-label="Article"
                  className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  <p className="text-2xl font-bold leading-5">
                    Explore the beautiful
                  </p>
                </a>
                <p className="mb-4 text-gray-700">
                  Sed ut perspiciatis unde omnis iste natus error sit sed quia
                  consequuntur magni voluptatem doloremque.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="/"
                    aria-label="Likes"
                    className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                  >
                    <div className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                      >
                        <polyline
                          points="6 23 1 23 1 12 6 12"
                          fill="none"
                          strokeMiterlimit="10"
                        />
                        <path
                          d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                          fill="none"
                          stroke="currentColor"
                          strokeMiterlimit="10"
                        />
                      </svg>
                    </div>
                    <p className="font-semibold">7.4K</p>
                  </a>
                  <a
                    href="/"
                    aria-label="Comments"
                    className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                  >
                    <div className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                      >
                        <polyline
                          points="23 5 23 18 19 18 19 22 13 18 12 18"
                          fill="none"
                          strokeMiterlimit="10"
                        />
                        <polygon
                          points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                          fill="none"
                          stroke="currentColor"
                          strokeMiterlimit="10"
                        />
                      </svg>
                    </div>
                    <p className="font-semibold">81</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Stairs>
    </>
  );
}

