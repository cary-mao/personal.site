import GlobalLayout from "./layouts/GlobalLayout.vue";
import { isUndef } from "./util";

export default ({ router, siteData }) => {
  router.addRoutes([
    {
      path: "/categories/:kind",
      component: GlobalLayout,
      meta: {
        kindWay: "categories",
        layout: "Posts",
      },
    },
    {
      path: "/tags/:kind",
      component: GlobalLayout,
      meta: {
        kindWay: "tags",
        layout: "Posts",
      },
    },
    {
      path: "/blog/",
      component: GlobalLayout,
      meta: {
        layout: "Posts",
      },
    },
    {
      path: "/projects/",
      component: GlobalLayout,
      meta: {
        layout: "Projects",
      },
    },
    {
      path: "/collections/",
      component: GlobalLayout,
      meta: {
        layout: "Collections",
      },
    },
  ]);

  // normalize frontmatter
  siteData.pages.forEach((page) => {
    normalizeFrontmatterArrayOption(page.frontmatter, "categories", [
      siteData.themeConfig.defaultCategory,
    ]);
    normalizeFrontmatterArrayOption(page.frontmatter, "tags", []);
  });
};

function normalizeFrontmatterArrayOption(object, key, defaultValue) {
  if (!isUndef(object[key])) {
    if (typeof object[key] === "string") {
      object[key] = [object[key]];
    }
  } else if (defaultValue) {
    object[key] = [defaultValue];
  }
}
