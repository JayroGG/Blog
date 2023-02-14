import { getSinglePost } from '@/services/getSinglePost'

export default async function Post ({ params }) {
  const { id } = params
  const { title, body } = await getSinglePost(id)
  return (
    <article>
      <h1 style={{ color: '#09f' }}>{title}</h1>
      <p>{body}</p>
    </article>
  )
}
