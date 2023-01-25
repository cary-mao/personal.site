module.exports = {
  title: "cary-mao",
  description: "My blog",
  base: "/cary-mao/",
  themeConfig: {
    logoText: "Cary Mao",
    logoTitle: "Cary Mao website",
    author: "Cary Mao",
  },
  // 要重启headers才更新
  markdown: {
    extractHeaders: ["h2", "h3", "h4"],
  },
};
