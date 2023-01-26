let posts;
export function getPosts(pages) {
  if (isUndef(posts)) {
    posts = pages.filter((page) => isUndef(page.frontmatter.layout));
  }
  return posts;
}

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function isUndef(v) {
  return typeof v === "undefined";
}
