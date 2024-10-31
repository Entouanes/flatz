// next.config.mjs
import 'dotenv'

export default {
  // Your Next.js configuration options
  env: {
    NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
  },
  images: {
    domains: ['images.unsplash.com'],
  },
};