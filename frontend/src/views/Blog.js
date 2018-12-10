import React from 'react';
import BlogView from '../components/blog/BlogView';

const Blog = (props) => (
            <div>
                <div>
                    {props.blogPosts === null && <div>blogs are loading</div>}
                    {props.blogPosts &&
                        <BlogView   blogPosts={props.blogPosts}
                                    addView={props.addView}
                                    addLike={props.addLike}
                                    postBlog={props.postBlog}
                                    deletePost={props.deletePost}
                                    editPost={props.editPost}
                                    isAdminLoggedIn={props.isAdminLoggedIn}
                        />
                    }
                </div>
            </div>
        )


export default Blog;