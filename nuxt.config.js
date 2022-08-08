const path = require('path')

  /* Retrieve images list and write it to file */

  var fs = require('fs');
  var arr = [];
  var files = fs.readdirSync('assets/customers');
  files.map((item) => {
    var file = '"'+item+'"';
    arr.push(file)
  })
  arr.shift();
  var text = `let images = [${arr}]; export default images;`

  fs.writeFile("images.js", text, (err) => {
    if (err)
      console.log(err);
    else {
      console.log("File written successfully\n");
    }
  })

  /* Retrieve images list and write it to file */

module.exports = { files }

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
