module.exports = {
  content: [
    './_includes/**/*.{html,md}',
    './_layouts/**/*.{html,md}',
    './_*/**/*.{html,md}',
    '!./_site/**/*.{html,md}',
    './*.{html,md}'
  ],
  theme: {
    fontFamily: {
      serif: ['Font Name', 'serif'],
      sans: ['Font Name', 'sans-serif'],
      body:  ['Font Name', 'sans-serif'],
    },
    safelist: [
      {
         pattern: /grid-cols-.*/,
         variants: ['lg, md, sm'],
      },
      { pattern: /col-span-.*/,
        variants: ['lg, md, sm'],
       },
     { pattern: /columns-.*/,
     variants: ['lg, md, sm'],
       },
      ],
    extend: {
      colors: {
        'main': '#fffff',
      },
      aspectRatio: {
        'portrait': '3/4',
        'landscape': '16/9',  
        'square': '1/1',
      },  
    },
  },
  plugins: [],
}
