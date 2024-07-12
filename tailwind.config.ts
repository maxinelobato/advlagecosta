import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/app/**/*.tsx'],
  theme: {
    extend: {
      backgroundImage: {
        bgDesktop: "url('/img/bgdesktop.webp')",
        bgMobile: "url('/img/bgmobile.webp')",
      },
      colors: {
        brandWts: '#006400',
        brandBG: '#747474',
      },
    },
  },
  plugins: [require('daisyui')],
}
export default config
