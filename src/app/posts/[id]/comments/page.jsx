import { getComments } from '@/services/getComments'

export default async function Comments ({ params }) {
  const { id } = params
  const comments = await getComments(id)
  return (
    <ul>
      {comments.map(comment => {
        return (
          <li key={comment.id}>
            <h2>{comment.name}</h2>
            <p>{comment.body}</p>
          </li>
        )
      })}
    </ul>
  )
}
