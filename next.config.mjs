/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'swbxrvsh7sbt6vxx.public.blob.vercel-storage.com',
                port: '',
            }
        ]
    }
};

export default nextConfig;
