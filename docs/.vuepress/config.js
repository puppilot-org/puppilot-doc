import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";
import { redirectPlugin } from "@vuepress/plugin-redirect";

export default defineUserConfig({
  lang: "en-US",

  title: "Puppilot",
  description: "Puppilot Document",

  theme: defaultTheme({
    logo: "https://vuejs.press/images/hero.png",

    locales: {
      "/en-US/": {
        selectLanguageName: "English",
        navbar: [
          { text: "Home", link: "/en-US/" },
          { text: "User Guide", link: "/en-US/Guide.md" },
          {
            text: "Routine Development",
            children: [
              { text: "Overview", link: "/en-US/Routine.md" },
              { text: "Routine API", link: "/en-US/Routine-api.md" },
            ],
          },
          { text: "Source Code", link: "/en-US/Repositories.md" },
        ],
      },
      "/zh-CN/": {
        selectLanguageName: "简体中文",
        navbar: [{ text: "Home", link: "/zh-CN/" }],
      },
    },

    repo: null,
    editLink: false,
    contributors: false,
  }),

  locales: {
    "/en-US/": {
      lang: "en-US",
    },
    "/zh-CN/": {
      lang: "zh-CN",
      description: "Puppilot Document",
    },
  },

  bundler: viteBundler(),

  plugins: [
    redirectPlugin({
      autoLocale: true,
      localeConfig: {
        "/en-US/": ["en-US", "en-UK", "en"],
        "/zh-CN/": ["zh-CN", "zh-TW", "zh"],
      },
    }),
  ],
});
