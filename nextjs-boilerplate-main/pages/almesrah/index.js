import styles from '../../styles/Home.module.css'
import Link from 'next/link'
//import mongodb from '../lib1/mongodb'

 export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/blogs');
  
  const data = await res.json();

  return {
    props: { almesrah: data }
  }
} 


  
  

const Almesrah = ({almesrah }) => {

 
  console.log(almesrah)


  return (
    
  <div>
      <h1>All Almesrah</h1>


        {almesrah.map(almesrah=> (
        

        <Link href={'/almesrah/' + almesrah.id} key={almesrah.id}>
          <dev className={styles.single}>
            <h3>{ almesrah.name }</h3>
          </dev>
        </Link>
     
      ))} 
      
  </div>
  );
}
 
export default Almesrah;



// export default function Posts(props: Props) {

//   const [posts, setPosts] = useState<[Post]>(props.posts);

//   const handleDeletePost = async (postId: string) => {
//     try {
//       let response = await fetch('http://localhost:3000/api/deletePost?id=' + postId, {
//         method: 'POST',
//         headers: {
//           'Accept': 'application/json, text/plain, */*',
//           'Content-Type': 'application/json'
//         }
//       });
//       response = await response.json();
//       window.location.reload();
//     } catch (error) {
//       console.log('An error occurred while deleting ', error);
//     }
//   }

//   return (
//     <>
//       <div className="posts-body">
//         <h1 className="posts-body-heading">Top 20 Added Posts</h1>
//         {
//           posts.length > 0 ? (
//             <ul className="posts-list">
//               {posts.map((post, index) => {
//                 return (
//                   <li key={index} className="post-item">
//                     <div className="post-item-details">
//                       <h2>{post.title}</h2>
//                       <p>{post.content}</p>
//                     </div>
//                     <div className="post-item-actions">
//                       <a href={`/posts/${post._id} `}>Edit</a>
//                       <button onClick={() => handleDeletePost(post._id as string)}>Delete</button>
//                     </div>
//                   </li>
//                 )
//               })}
//             </ul>
//           ) : (
//             <h2 className="posts-body-heading">Ooops! No posts added so far</h2>
//           )
//         }
//       </div>
//       <style jsx>
//         {
//           `
//         .posts-body{
//             width:400px;
//             margin:10px auto;
//         }
//         .posts-body-heading{
//             font-family:sans-serif;
//         }
//         .posts-list{
//             list-style-type:none;
//             display:block;
//         }
//         .post-item{
//             width:100%;
//             padding:10px;
//             border: 1px solid #d5d5d5;
//         }
//         .post-item-actions{
//             display:flex;
//             justify-content:space-between;
//         }
//         .post-item-actions a{
//             text-decoration:none;
//         }
//         `
//         }
//       </style>
//     </>
//   );
// }