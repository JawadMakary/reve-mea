const Post = ({ post }) => {
  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p>{post.id}</p>
    </article>
  );
};
export default Post