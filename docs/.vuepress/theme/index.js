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
      ["@vuepress/nprogress"],
    ],
  };

  ctx.addPage({
    permalink: "/posts/",
    frontmatter: {
      layout: "Posts",
    },
  });

  return options;
};
