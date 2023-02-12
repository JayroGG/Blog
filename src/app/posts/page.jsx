import { getPosts } from '../../services/getPosts'

export default async function PostsPage () {
  const posts = await getPosts()
  return (
    <section>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </article>
      ))}
    </section>
  )
}
