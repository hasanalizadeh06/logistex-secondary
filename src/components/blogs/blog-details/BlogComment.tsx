import BlogForm from "@/components/form/BlogForm"
import Image from "next/image"
import Link from "next/link"

import avatar_1 from "@/assets/img/blog/comment01.png"
import avatar_2 from "@/assets/img/blog/comment02.png"

const BlogComment = () => {
   return (
      <div className="blog-post-comment">
         <div className="comment-wrap">
            <div className="comment-wrap-title">
               <h4 className="title">02 Comments</h4>
            </div>
            <div className="latest-comments">
               <ul className="list-wrap">
                  <li>
                     <div className="comments-box">
                        <div className="comments-avatar">
                           <Image src={avatar_1} alt="img" />
                        </div>
                        <div className="comments-text">
                           <div className="avatar-name">
                              <h6 className="name">Jessica Rose</h6>
                              <span className="date">25 Nov, 2024</span>
                           </div>
                           <p>Maximus ligula eleifend id nisl quis interdum. Sed malesuada tortor non turpis semper bibendum. Ut ac nisi porta, malesuada risus nonVestibulum ante ipsum primisMaximus ligula eleifend id nisl quis interdum. </p>
                           <div className="comment-reply">
                              <Link href="#" className="comment-reply-link">Reply</Link>
                           </div>
                        </div>
                     </div>
                  </li>
                  <li>
                     <div className="comments-box">
                        <div className="comments-avatar">
                           <Image src={avatar_2} alt="img" />
                        </div>
                        <div className="comments-text">
                           <div className="avatar-name">
                              <h6 className="name">Parker Willy</h6>
                              <span className="date">25 Nov, 2024</span>
                           </div>
                           <p>Maximus ligula eleifend id nisl quis interdum. Sed malesuada tortor non turpis semper bibendum. Ut ac nisi porta, malesuada risus nonVestibulum ante ipsum primis</p>
                           <div className="comment-reply">
                              <Link href="#" className="comment-reply-link">Reply</Link>
                           </div>
                        </div>
                     </div>
                  </li>
               </ul>
            </div>
         </div>
         <div className="comment-respond">
            <h4 className="comment-reply-title">Post a comment</h4>
            <BlogForm />
         </div>
      </div>
   )
}

export default BlogComment
