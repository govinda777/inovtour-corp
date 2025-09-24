import React from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
import Navbar from "@/components/navbar";
import NavbarAlt from "@/components/navbaralt";
import { cx } from "@/utils/all";
// import defaultOG from "../public/img/og-default.jpg";
// import PopupWidget from "../components/popupWidget";
import Footer from "@/components/footer";

export default function Layout(props) {
  const { children } = props;

  // Agora usamos props.openGraphImage como URL direto
  const ogimage = props?.openGraphImage || "/img/opengraph.jpg";

  return (
    <>
      <Head>
        {/* Links do Sanity removidos */}
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.url}
        openGraph={{
          url: props.url,
          title: props.title,
          description: props.description,
          images: [
            {
              url: ogimage,
              width: 800,
              height: 600,
              alt: props.title,
            },
          ],
          site_name: props.title,
        }}
        twitter={{
          handle: "@surjithctly",
          site: "@surjithctly",
          cardType: "summary_large_image",
        }}
      />
      <div
        className={cx(
          props?.fontStyle,
          "antialiased text-gray-800 dark:bg-black dark:text-gray-400"
        )}
      >
        {props.alternate ? (
          <NavbarAlt {...props} />
        ) : (
          <Navbar {...props} />
        )}
        <div>{children}</div>

        <Footer {...props} />
      </div>
    </>
  );
}
