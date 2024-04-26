import React from "react";
import { fetcher } from "../../../lib/api";
import Image from "next/image";
import Stairs from "@/components/stairs";
import Link from "next/link";
import { Home,  ChevronsRight } from "react-feather";
import { Popover } from "@headlessui/react";
// Sample base64 image data for blurDataURL (usually much smaller)
const placeholderImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwAB/aurH8kAAAAASUVORK5CYII=";

const index = ({ photos }: any) => {
  const getBestAvailableImageUrl = (formats: any) => {
    let imageUrl = formats.thumbnail?.url || ""; // Default to thumbnail if available
    if (formats.large) {
      imageUrl = formats.large.url;
    } else if (formats.medium) {
      imageUrl = formats.medium.url;
    } else if (formats.small) {
      imageUrl = formats.small.url;
    }

    // Assuming 'placeholderImage' is the base64 string for the blur effect
    return { url: imageUrl, blurDataURL: placeholderImage };
  };

  return (
    <Stairs>

<div className="container mx-auto">
  <ol className="flex justify-start space-x-2 rtl:space-x-reverse">
    <Popover.Group className="hidden lg:flex lg:gap-x-4">
      <li>
        <Link href="/" className="block text-gray-700 font-semibold hover:text-green-500">
          <span className="ml-1"> Home</span>
        </Link>
      </li>
      <ChevronsRight
      size={20}
      className="text-gray-700"
      aria-hidden="true"
       />
      <li>
        Photo-Gallery
      </li>
    </Popover.Group>
  </ol>
</div>





      <div className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Master Cleanse Reliac Heirloom
            </h1>
            <p className="lg:w-2/3 mx-auto">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {photos.data.map((photo: any) => (
              <div key={photo.id} className="w-full md:w-1/2 lg:w-1/3 p-4">
                <div className="flex relative">
                  <Image
                    src={
                      getBestAvailableImageUrl(
                        photo.attributes.photo.data.attributes.formats
                      ).url
                    }
                    placeholder="blur"
                    blurDataURL={
                      getBestAvailableImageUrl(
                        photo.attributes.photo.data.attributes.formats
                      ).blurDataURL
                    }
                    height={400}
                    width={700}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    alt={`Image for ${photo.attributes.photoTitle}`}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-600 mb-1">
                      {photo.attributes.photoTitle}
                    </h2>
                    <p className="leading-relaxed">
                      {photo.attributes.photoDescription}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Stairs>
  );
};

type Photo = {
  id: number;
  attributes: {
    photo: any;
    photoTitle: string;
    photoDescription: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
};

export async function getStaticProps() {
  try {
    const photosResponse = await fetcher<Photo[]>("photo-galleries?populate=*");

    return {
      props: {
        photos: photosResponse,
      },
    };
  } catch (error) {
    console.error("Error fetching photos:", error);
    return {
      props: {
        photos: [],
      },
    };
  }
}

export default index;
