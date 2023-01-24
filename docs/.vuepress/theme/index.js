const defaultThemeConfig = require("./config");

module.exports = (opts, ctx) => {
  Object.assign(opts, defaultThemeConfig);

  const options = {
    name: "vuepress-theme-cary",
    plugins: [
      [
        "vuepress-plugin-container",
        {
          type: "tip",
          defaultTitle: "article-block",
        },
      ],
      [
        "vuepress-plugin-container",
        {
          type: "warning",
        },
      ],
      [
        "vuepress-plugin-container",
        {
          type: "danger",
        },
      ],
      "@vuepress/nprogress",
      "@vuepress/back-to-top",
      // changed router's scrollBehavior, set the scroll behavior to smoothly scroll to top when router changed
      "vuepress-plugin-smooth-scroll",
      [
        "@vuepress/active-header-links",
        {
          sidebarLinkSelector: ".sidebar-link",
          headerAnchorSelector: ".header-anchor",
        },
      ],
      require("./plugins/vuepress-plugin-filetime"),
    ],
  };

  ctx.addPage({
    permalink: "/blog/",
    frontmatter: {
      layout: "Posts",
    },
  });

  return options;
};
