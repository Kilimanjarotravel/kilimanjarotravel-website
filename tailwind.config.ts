import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'], theme: { extend: { colors: { forest:'#0B3D2E', gold:'#C89B3C', brown:'#4B2E13', cream:'#F7F3E9', charcoal:'#111111' }, fontFamily: { sans:['Montserrat','Arial','sans-serif'], display:['Georgia','serif'] } } }, plugins: [] };
export default config;
