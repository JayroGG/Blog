import { getPosts } from '../../services/getPosts'

export default async function PostsList () {
  const posts = await getPosts()

  return posts.slice(0, 5).map(post => (
    <article key={post.id}>
      <h2 style={{ color: '#09f' }}>{post.title}</h2>
      <p>{post.body}</p>
    </article>
  ))
}
