export default function PostLayaout ({ children }) {
  // Breadcrumb Layout
  return (
    <div>
      <small>Home &bull; Posts</small>
      {children}
    </div>
  )
}
