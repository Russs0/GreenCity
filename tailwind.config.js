// tailwind.config.js

module.exports = {
  content: [
    "./Screens/*.{js,jsx,ts,tsx}",
      "./Screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {

  extend: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      'inter-thin': ['Inter Thin', 'sans-serif'],
      'inter-extralight': ['Inter ExtraLight', 'sans-serif'],
      'inter-light': ['Inter Light', 'sans-serif'],
      'inter-medium': ['Inter Medium', 'sans-serif'],
      'inter-semibold': ['Inter SemiBold', 'sans-serif'],
      'inter-bold': ['Inter Bold', 'sans-serif'],
      'inter-extrabold': ['Inter ExtraBold', 'sans-serif'],
      'inter-black': ['Inter Black', 'sans-serif'],
      'playfair':['PlayFair','sans-serif']
    },
    colors:{ primary:"#0ED250"},
  },
},
plugins: [],
}
