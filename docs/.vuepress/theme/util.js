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

export function normalizeLang(v) {
  const map = {
    html: "HTML",
    css: "CSS",
    js: "JavaScript",
    ts: "TypeScript",
  };
  return map[v];
}

let repos;
export function getGithubRepos(user) {
  if (repos) {
    return Promise.resolve(repos);
  }

  return fetch(`https://api.github.com/users/${user}/repos`).then((res) => {
    repos = res.json();
    return repos;
  });
}

// projects is from data/projects.js
export async function getProjectsList(themeConfig) {
  const repos = await getGithubRepos(themeConfig.githubUser);
  return themeConfig.projects.map((project) => {
    const repo = repos.find((repo) => repo.name === project.project);
    return {
      ...project,
      name: project.project,
      link: repo.html_url,
      star: repo.stargazers_count,
      fork: repo.forks_count,
    };
  });
}
