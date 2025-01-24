import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',

        'apple-green': '#99cc33',
        'apple-green-80': '#acd55c',
        'apple-green-60': '#c2e084',
        'apple-green-40': '#d6eaad',
        'apple-green-20': '#ebf5d6',
  
        'leaf-green': '#006633',
        'leaf-green-80': '#32845c',
        'leaf-green-60': '#65a385',
        'leaf-green-40': '#99c1ac',
        'leaf-green-20': '#cbe0d5',
  
        'secondary-green': '#4da935',
        'secondary-green-80': '#71ba5d',
        'secondary-green-60': '#94cb86',
        'secondary-green-40': '#b8ddae',
        'secondary-green-20': '#dbeed7',
  
        'grey' : '#f2f2f2',
        'grey-2' : '#d8d8d8',
        'grey-3' : '#a1a1a1',
        'grey-4' : '#888888',
  
        'background-grey' : '#F6F7F9',
        'background-apple-grey' :'#e0e6d6',
  
        'black' : '#000000',
        'white' : '#ffffff',
  
        'error-red' : '#e02020',      
        'error-red-20' : '#ff6969',
        'error-red-8' : '#fdeeee',
        'error-red-dark' : '#850505',
  
        'alert-yellow' : '#f7ec67',
        'alert-yellow-40' : '#fcf7c2',
        'alert-yellow-dark' : '#D6CC5A',
      },
    },
  },
  plugins: [],
} satisfies Config;
