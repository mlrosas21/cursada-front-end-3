import { posts } from './Posts'
import LikeButton  from './LikeButton'
import './BlogStyles.css'
import BlogStyles from './BlogStyles.module.css'


const BlogSection = () => {
  return (
    <>
      <h1 
        className={BlogStyles.title}
        >Blog de gatitos</h1>
        {console.log(BlogStyles.title)}
      <ul>
        {posts.map(post => (
          <section className={BlogStyles.postCard}key={post.id}>
            <h2 >{post.title}</h2>
            <p>{post.body}</p>
            <p>{post.user.name} {post.user.lastname}</p>
            <img src={post.img} alt={post.title}  className={BlogStyles.postImg}/>
            <LikeButton />
          </section>
        ))}
      </ul>
    </>
  )
}

export default BlogSection