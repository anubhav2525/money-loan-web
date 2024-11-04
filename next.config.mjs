/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aceternity.com",
        port: "", // Leave empty for default port
        pathname: "/images/**", // Adjust according to your image paths
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "", // Leave empty for default port
        pathname: "/**", // Allow all image paths from Unsplash
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        port: "", // Leave empty for default port
        pathname: "/**", // Allow all image paths from Unsplash
      },
      {
        protocol: "https",
        hostname: "flowbite.s3.amazonaws.com",
        port: "", // Leave empty for default port
        pathname: "/**", // Allow all image paths from Unsplash
      },
    ],
  },
};

export default nextConfig;
