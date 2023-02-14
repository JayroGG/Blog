import { getSinglePost } from '@/services/getSinglePost'
import Link from 'next/link'

export default async function Post ({ children, params }) {
  // Third level Layout
  // Contains the Single Post and comments as children
  const { id } = params
  const { title, body } = await getSinglePost(id)
  return (
    <article>
      <h1 style={{ color: '#09f' }}>{title}</h1>
      <p>{body}</p>
      <Link href={`/posts/${id}/comments`}>Ver comentarios</Link>
      {children}
    </article>
  )
}
