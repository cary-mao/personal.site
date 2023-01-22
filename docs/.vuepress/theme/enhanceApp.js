import { generateCategories } from "./util";

export default ({ Vue, siteData }) => {
  const categories = generateCategories(
    siteData.pages,
    siteData.themeConfig.defaultCategory
  );
  Vue.prototype.$custom = {
    categories,
  };
};
