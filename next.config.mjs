/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: async () => {
    return [
      // Add Link header with preconnect for all pages
      // This results in faster retrieval of the first image by the browser
      {
        source: "/:path*",
        has: [
          {
            type: "header",
            key: "Sec-Fetch-Dest",
            value: "document", // Match only on page/document requests
          },
        ],
        headers: [
          {
            key: "Link",
            value: "<https://example.com>; rel=preconnect",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
