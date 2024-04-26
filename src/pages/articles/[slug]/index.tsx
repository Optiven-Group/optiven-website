import React from "react";
import Stairs from "@/components/stairs";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { ChevronsRight } from "react-feather";
import { Popover } from "@headlessui/react";
import Link from "next/link";

type Params = {
  params: {
    slug: string;
  };
};

const index = ({ article }: any) => {
  const { articleBody } = article.data.attributes;
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
        <Link href="/articles" className="block text-gray-700 font-semibold hover:text-green-500">
          Blogs & Company News 
        </Link>
      </li>
      <ChevronsRight
      size={20}
      className="text-gray-700"
      aria-hidden="true"
       /> {article.data.attributes.articleTitle}
    </Popover.Group>
  </ol>
</div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-lg lg:py-16">
          <h1 className="text-4xl font-bold text-gray-700 lg:text-5xl sm:px-16 lg:px-48 dark:text-gray-400">
            {article.data.attributes.articleTitle}
          </h1>
          <div className="my-4 text-lg text-gray-700 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            <div className="format md:text-xl lg:text-2xl">
              <BlocksRenderer content={articleBody} />
            </div>
          </div>
        </div>
      </section>
    </Stairs>
  );
};

export async function getServerSideProps({ params }: Params) {
  const { slug } = params;
  try {
    const response = await fetch(
      `${process.env.STRAPI_URL_PROD}articles/${slug}?populate=*/`,
      {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_TOKEN_PROD}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error fetching article details: ${response.statusText}`);
    }

    const articleDetails = await response.json();
    // console.log(articleDetails.data);

    return {
      props: {
        article: articleDetails,
      },
    };
  } catch (error) {
    console.error("Error fetching article details:", error);
    return {
      props: {
        article: null,
      },
    };
  }
}

export default index;
