const collections = require("./data/collections");
const libraries = require("./data/libraries");
const projects = require("./data/projects");
const anchor = require("markdown-it-anchor");

module.exports = {
  title: "cary-mao",
  description: "My blog",
  head: [["link", { ref: "icon", type: "image/x-icon", href: "/favicon.ico" }]],
  themeConfig: {
    logoText: "Cary Mao",
    logoTitle: "Cary Mao website",
    author: "Cary Mao",
    githubUser: "cary-mao",
    collections,
    projects,
    libraries,
  },
  // 要重启headers才更新
  markdown: {
    extractHeaders: ["h2", "h3", "h4"],
    anchor: {
      permalink: false,
    },
    extendMarkdown: (md) => {
      md.use(anchor, {
        permalink: anchor.permalink.headerLink(),
      });
    },
  },
};
