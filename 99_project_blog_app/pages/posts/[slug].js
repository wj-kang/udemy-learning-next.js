import PostContent from '../../components/posts/post-detail/post-content';
import { getPostData, getPostsFiles } from '../../utils/posts-utils';

function PostDetailPage(props) {
  return <PostContent post={props.post} />;
}

export async function getStaticPaths() {
  const postFilenames = getPostsFiles();
  const slugs = postFilenames.map((filename) => filename.replace(/\.md$/, ''));
  const paths = slugs.map((slug) => ({ params: { slug: slug } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export default PostDetailPage;
