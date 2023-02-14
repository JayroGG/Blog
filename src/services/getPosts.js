export const getPosts = () => {
  // Incremental static regeneration
  return fetch('https://jsonplaceholder.typicode.com/posts/', {
    next: {
      revalidate: 60
    }
  })
    .then(res => res.json())
}

// getStaticProps
// -> return fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())

// getServersideProps
// ->  return fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' }).then(res => res.json())
