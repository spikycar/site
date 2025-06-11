/** @type {import('next').NextConfig} */
import nextMdx from '@next/mdx';
const withMDX = nextMdx({
    extension : /\.mdx?$/,
    options : {
    },
})

const nextConfig = withMDX({
    pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.spikycat.com',
                pathname: '**'
            }
        ],
    },

})

export default nextConfig;
