export default function PostLayaout ({ children }) {
  // Second level Layout
  // Contains Breadcrumb, and All the Post as children
  return (
    <div>
      <small>Home &bull; Posts</small>
      {children}
    </div>
  )
}
