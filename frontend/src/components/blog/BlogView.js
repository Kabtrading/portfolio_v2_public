import React, {Component} from 'react';
import BlogItem from './BlogItem';
import AddBlog from './AddBlog'
import EditBlog from './EditBlog'
// import auth0Client from '../../auth/Auth'

class BlogView extends Component {
    state = {
        postSelect: '',
        isUserLoggedIn: false,
        togglePost: false,
        toggleEdit: false,
        editData: null
    }

    // set which current blog is displayed
    setPost = (key, numViews) => {
        this.props.addView(key, numViews)
        this.setState({
            postSelect: key,
            togglePost: false,
            toggleEdit: false
        })
    }

    // deletePost = (id) => {
    //     this.props.deletePost(id)
    // }

    toggleAddPost = () => {
        let isTrue = !this.state.togglePost
        let isEditTrue = this.state.toggleEdit
        if(isEditTrue){ this.setState({toggleEdit: false}) }
        this.setState({togglePost: isTrue})
        
    }

    toggleEditPost = () => {
        let isTrue = !this.state.toggleEdit
        let isPostTrue = this.state.togglePost
        if(isPostTrue){this.setState({togglePost: false})}
        this.setState({toggleEdit: isTrue})
        
    }

    handleBlogPost = (blogPost) => {
        this.toggleAddPost()
        this.props.postBlog(blogPost)
    }

    handlePostEdit = (blogPost) => {
        this.toggleEditPost()
        this.props.editBlog(blogPost)
    }

    editPost = (id) => {
        let [selectedBlog] = this.props.blogPosts.filter((blog) => {
            return blog.key === id
        })
        this.setState({
            editData: selectedBlog
        })
        this.toggleEditPost()
    }

    componentDidMount() {
        //this props isAdminAuth
        if(this.props.isAdminLoggedIn){
            this.setState({
                isUserLoggedIn: true
            })
        }else{
            this.setState({
                isUserLoggedIn: false
            })
        }
    }


    render(){
        // filters blog to be displayed via key
        const [activeBlog] = this.props.blogPosts.filter((blog) => {
            return blog.key === this.state.postSelect
        });
        // creates the links to view each blog
        const blogList = this.props.blogPosts.map((blog, i) => 
            <div>
                {this.state.isUserLoggedIn && 
                    <button 
                        className='btn btn-info btn-sm'
                        onClick={() => this.editPost(blog.data.id)}>Edit
                    </button>
                }
                {this.state.isUserLoggedIn && 
                    <button 
                        className='btn btn-danger btn-sm'
                        onClick={() => this.props.deletePost(blog.data.id)}>Delete
                    </button>
                }
                
                <button 
                    className='btn btn-primary' 
                    onClick={() => this.setPost(blog.key, blog.data.numViews)}>
                    {blog.data.date}
                </button>
            
            </div>
        );
        
        return(
            <div className='container'>
                <div className='blogContainer'>
                    <div className='blogList animated slideInLeft slow'>
                        { this.state.isUserLoggedIn &&
                            <button onClick={this.toggleAddPost} className='btn btn-success'>Add Post</button>
                        }
                        {blogList}
                    </div>
                    {/* <div className='verticalSpacer animated slideInDown slow'></div> */}
                    <div>
                        {(this.state.isUserLoggedIn && this.state.toggleEdit && !(this.state.editData === null)) &&
                            <EditBlog handlePostEdit={this.handlePostEdit} editData={this.state.editData} editPost={this.props.editPost}/>
                        }
                        {(this.state.isUserLoggedIn && this.state.togglePost) && 
                            <AddBlog  handleBlogPost={this.handleBlogPost}/>
                        }
                        {(activeBlog && !this.state.togglePost && !this.state.toggleEdit) &&
                            <BlogItem 
                                title={activeBlog.data.title}
                                subTitle={activeBlog.data.subTitle}
                                date={activeBlog.data.date}
                                content={activeBlog.data.content}
                                author={activeBlog.data.author}
                                numViews={activeBlog.data.numViews}
                                numLikes={activeBlog.data.numLikes}
                                addLike={this.props.addLike}
                                id={activeBlog.data.id}
                            /> 
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default BlogView;

