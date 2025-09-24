"use client";

import Script from "next/script";
import React, { useEffect } from "react";

export default function FacebookPixel({
  pixelId
}: {
  pixelId: string;
}) {
  useEffect(() => {
    if (!window.fbq) {
      const fbq: Window["fbq"] = function (...args: any[]) {
        if (fbq.callMethod) {
          fbq.callMethod(...args);
        } else {
          fbq.queue?.push(args);
        }
      } as any;

      fbq.push = fbq;
      fbq.loaded = true;
      fbq.version = "2.0";
      fbq.queue = [];

      window.fbq = fbq;

      window.fbq("init", pixelId);
      window.fbq("track", "PageView");
    }
  }, [pixelId]);

  return (
    <>
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        src="https://connect.facebook.net/en_US/fbevents.js"
      />
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
          alt="Facebook Pixel"
        />
      </noscript>
    </>
  );
}
