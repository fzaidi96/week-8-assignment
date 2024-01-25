export default function SingleBlog({params}) {
    return (
        <main className="singleBlog">
        <h2>Blog no. {params.id}</h2>
        <p>The user can read the blog that they selected here</p>
      </main>
    )
}