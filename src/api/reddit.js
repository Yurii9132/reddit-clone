const API_ROOT = "https://www.reddit.com";

export const fetchSubreddits = async () => {
  const response = await fetch(`${API_ROOT}/subreddits.json`);
  const json = await response.json();
  return json.data.children.map((subreddit) => subreddit.data);
};

export const fetchPosts = async (subredditUrl) => {
  console.log(subredditUrl);
  const response = await fetch(`${API_ROOT}${subredditUrl}.json`);
  const json = await response.json();
  console.log(json.data.children[0].data);

  return json.data.children.map((post) => post.data);
};
