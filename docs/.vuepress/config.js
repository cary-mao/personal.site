const collections = require("./data/collections");
const projects = require("./data/projects");

module.exports = {
  title: "cary-mao",
  description: "My blog",
  base: "/cary-mao/",
  themeConfig: {
    logoText: "Cary Mao",
    logoTitle: "Cary Mao website",
    author: "Cary Mao",
    githubUser: "cary-mao",
    collections,
    projects,
  },
  // 要重启headers才更新
  markdown: {
    extractHeaders: ["h2", "h3", "h4"],
  },
};
