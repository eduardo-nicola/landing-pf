// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  ssr: true,

  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxtjs/i18n"],

  app: {
    head: {
      title: "Influid",
      link: [{ rel: "icon", type: "image/svg+xml", href: "/logo-influid.svg" }],
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",

      meta: [
        {
          name: "description",
          content:
            "Influid is a digital design studio creating amazing websites, apps, systems, and interactive experiences that truly flow.",
        },
        {
          name: "keywords",
          content:
            "design studio, websites, apps, branding, interactive experiences, digital design",
        },
        {
          name: "robots",
          content: "index, follow",
        },
        {
          property: "og:title",
          content: "Influid Design Studio - Digital Experiences that Flow",
        },
        {
          property: "og:description",
          content:
            "We create digital experiences through websites, applications, and branding that inspire, engage, and elevate businesses.",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: "https://influid.vercel.app/",
        },
        {
          property: "og:image",
          content: "https://influid.vercel.app/cover-influid.png?v=2",
        },
        {
          property: "og:image:width",
          content: "1200",
        },
        {
          property: "og:image:height",
          content: "630",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:title",
          content: "Influid Design Studio",
        },
        {
          name: "twitter:description",
          content:
            "We craft digital products that provide seamless interaction, fluency, and identity.",
        },
      ],
    },
  },

  css: ["./assets/css/main.css", "./assets/css/tailwind.css"],

  image: {
    dir: "assets/images",
  },

  i18n: {
    vueI18n: "./i18n/i18n.config.ts",
  },

  runtimeConfig: {
    sendgridApiBase: process.env.NUXT_SENDGRID_API_BASE,
    sendgridKey: process.env.NUXT_SENDGRID_API_KEY,
    sendgridSender: process.env.NUXT_SENDGRID_SENDER,
  },

  routeRules: {
    "/": { headers: { "Cache-Control": "s-maxage=600, stale-while-revalidate=300" } },
  },

  build: {
    transpile: ["influid"],
  },

  nitro: {
    compressPublicAssets: true,
    prerender: {
      routes: ["/sitemap.xml"],
      ignore: ["/api/**", "/dashboard/**"], // Ignora páginas dinâmicas
      failOnError: false, // Evita crash na build
    },
    routeRules: {
      "/": { cache: { swr: true, maxAge: 3600 } }, // Cache da página inicial por 1 hora
    },
  },
});
