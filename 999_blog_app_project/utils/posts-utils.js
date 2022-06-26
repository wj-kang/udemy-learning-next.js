import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const CONTENT_DIR = path.join(process.cwd(), 'contents');

export function getPostsFiles() {
  return fs.readdirSync(CONTENT_DIR);
}

export function getPostData(postIdentifier) {
  const slug = postIdentifier.replace(/\.md$/, ''); // remove the file ext
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const postData = {
    slug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = getPostsFiles();
  const allPostsData = postFiles.map((postFile) => getPostData(postFile));
  const sortedDescending = allPostsData.sort((a, b) => a.date - b.date < 0);

  return sortedDescending;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
