import config from "./config";

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "spa",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",

  router: {
    middleware: "refreshToken"
  },
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/datatables.net-bs4/css/dataTables.bootstrap4.min.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/datatables.net-buttons-bs4/css/buttons.bootstrap4.min.cs"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/datatables.net-select-bs4/css/select.bootstrap4.min.css"
      }
    ],
    script: [
      {
        src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        type: "text/javascript"
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
        type: "text/javascript"
      },
      {
        src:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
        type: "text/javascript"
      },
      {
        src: "/datatables.net/js/jquery.dataTables.min.js",
        type: "text/javascript"
      },
      {
        src: "/datatables.net-bs4/js/dataTables.bootstrap4.min.js",
        type: "text/javascript"
      },
      {
        src: "/datatables.net-responsive/js/dataTables.responsive.min.js",
        type: "text/javascript"
      },
      {
        src: "/datatables.net-responsive-bs4/js/responsive.bootstrap4.min.js",
        type: "text/javascript"
      },
      {
        src: "/datatables.net-buttons/js/dataTables.buttons.min.js",
        type: "text/javascript"
      },
      {
        src: "/datatables.net-buttons-bs4/js/buttons.bootstrap4.min.js",
        type: "text/javascript"
      },
      {
        src: "/datatables.net-buttons/js/buttons.html5.min.js",
        type: "text/javascript"
      },
      {
        src: "/datatables.net-buttons/js/buttons.flash.min.js",
        type: "text/javascript"
      },
      {
        src: "/datatables.net-buttons/js/buttons.print.min.js",
        type: "text/javascript"
      },
      {
        src: "/datatables.net-keytable/js/dataTables.keyTable.min.js",
        type: "text/javascript"
      },
      {
        src: "/datatables.net-select/js/dataTables.select.min.js",
        type: "text/javascript"
      },
      {
        src: "/pdfmake/build/pdfmake.min.js",
        type: "text/javascript"
      },
      {
        src: "/pdfmake/build/vfs_fonts.js",
        type: "text/javascript"
      },
      {
        src: "/js/datatables.init.js",
        type: "text/javascript"
      },
      {
        src: "/js/app.js",
        type: "text/javascript"
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    "~/plugins/formatter.js",
    "~/plugins/api.js",
    "~/plugins/vueSelect.js",
    "~/plugins/vuelidate",
    "~/plugins/vueMoment.js",
    "~/plugins/vueFileAgent",
    "~/plugins/vueDateRanger",
    "~/plugins/vue2-google-maps",
    { src: "~/plugins/localStorage.js", ssr: false }
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios"
  ],
  bootstrapVue: {
    bootstrapCSS: true,
    bootstrapVueCSS: true,
    icons: true
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: config.apiUrl
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    babel: {
      compact: true
    },
    extend(config) {
      config.module.rules.push({
        test: /\.(csv|xlsx|xls)$/,
        loader: "file-loader",
        options: {
          name: `files/[name].[ext]`
        }
      });
    }
  }
};
