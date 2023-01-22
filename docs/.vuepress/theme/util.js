export function generateCategories(pages, defaultCategory) {
  // map
  const categoriesToPages = {};

  pages.forEach((page) => {
    let categories = page.frontmatter.categories;
    if (categories instanceof Array) {
      categories.forEach((category) => {
        pushPageToMap(category, page);
      });
    } else {
      // set default category if undef
      if (!categories) {
        categories = defaultCategory;
      }

      // categories is single category here
      pushPageToMap(categories, page);
    }
  });

  return categoriesToPages;

  function pushPageToMap(category, page) {
    if (!categoriesToPages[category]) {
      categoriesToPages[category] = [];
    }
    categoriesToPages[category].push(page);
  }
}
