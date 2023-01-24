const fs = require("fs");
const dayjs = require("dayjs");

module.exports = (options) => {
  const format = options.format || "YYYY-MM-DD HH:mm:ss";

  return {
    name: "vuepress-plugin-filetime",
    extendPageData($page) {
      const { _filePath } = $page;

      const stats = fs.statSync(_filePath);
      // birth time, created time
      // access time, read or exec
      // modified time, content changed
      // change time, content or other file properties changed
      ["birthtime", "atime", "mtime", "ctime"].forEach((time) => {
        const timeMs = `${time}Ms`;
        $page[timeMs] = stats[timeMs];
        $page[time] = dayjs(stats[timeMs]).format(format);
      });
    },
  };
};
