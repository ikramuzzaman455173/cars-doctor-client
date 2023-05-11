module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {

"primary": "#570DF8",

"secondary": "#a855f7",

"accent": "#37CDBE",

"neutral": "#3D4451",

"base-100": "#FFFFFF",

"info": "#3ABFF8",

"success": "#36D399",

"warning": "#FBBD23",

"error": "#FF3811",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
};
