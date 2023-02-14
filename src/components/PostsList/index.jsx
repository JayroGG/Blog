import Link from 'next/link'
import { getPosts } from '../../services/getPosts'
import LikeButton from '../LikeButton'

export default async function PostsList () {
  const posts = await getPosts()

  return posts.slice(0, 5).map(post => (
    <article key={post.id}>
      <Link href='/posts/[id]' as={`/posts/${post.id}`}>
        <h2 style={{ color: '#09f' }}>{post.title}</h2>
        <p>{post.body}</p>
        <LikeButton id={post.id} />
      </Link>
    </article>
  ))
}
