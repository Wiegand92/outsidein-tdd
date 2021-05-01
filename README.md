# Opinion-ate React

This is a site built to learn jest and cypress testing tools. The original tutorial is available [here](https://outsidein.dev/react/#tech-stack).

## Tech Included

  **Testing**  
  Cypress for E2E tests  
  Jest for unit tests

  **Framework**

  react  
  react-dom

  **Styles**

  sass

  - I like sass for the modularity it provides, this is optional 

  postcss

  - Postcss will handle post-processing and actually run the tailwind compiler.

  tailwindcss    

  - Makes life easier


  **Bundling and Browser Support**

  webpack  
  webpack-cli

  - This project uses webpack to bundle all of your js and css/scss

  webpack-dev-server

  - Live reloading!

  clean-webpack-plugin

  - Will make sure your public/scripts folder is emptied on re-build.

  source-map-loader    

  - Will make debugging much easier.

  @babel/core

  - Transpiles/polyfills your JS so you can use up to date syntax.

  @babel/plugin-proposal-class-properties  
  @babel/preset-env  
  @babel/preset-react  
  babel-loader  

  - These will all make babel play nice with react and allow webpack to actually run babel on our code.
  
  The following are all loaders for css in webpack. They run in the order listed here, but MUST be put in the opposite order in webpack (this is already done, but is a common source of confusion).

  postcss-loader  
  postcss-preset-env    
  sass-loader  
  css-loader    

  style-loader    

  - When we're in developer mode, style loader simply inlines our styles to make rebuilding quicker.

  mini-css-extract-plugin    

  - When we run webpack in production mode this will bundle all of our css and put it in /public/scripts/style.css.
