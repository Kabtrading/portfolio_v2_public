import React, {Component} from 'react';

class EditBlog extends Component {
    state = {
        blogPost: {
            title: '',
            subTitle: '',
            date: '',
            content: '',
            author: 'Kaeleb Drew',
            id: '',
            numViews: 0,
            numLikes: 0,
            key: 0
        }
    }

    handleTitle = (e) => {
        let blogPost = this.state.blogPost
        blogPost.title = e.target.value
        this.setState({
            blogPost
        })
        
    }
    handleSubtitle = (e) => {
        let blogPost = this.state.blogPost
        blogPost.subTitle = e.target.value
        this.setState({
            blogPost
        })
    }
    handleDate = (e) => {
        let blogPost = this.state.blogPost
        blogPost.date = e.target.value
        this.setState({
            blogPost
        })
    }
    handleContent = (e) => {
        let blogPost = this.state.blogPost
        blogPost.content = e.target.value
        this.setState({
            blogPost
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const blogPost = this.state.blogPost
        this.props.editPost(blogPost)
        // (confirmation) => {
        //     console.log(confirmation)
        // })
    }



    componentDidMount() {
        let newPost = this.props.editData.data
        let blogPost = this.state.blogPost
        blogPost.title = newPost.title
        blogPost.subTitle = newPost.subTitle
        blogPost.date = newPost.date
        blogPost.content = newPost.content
        blogPost.author = newPost.author
        blogPost.id = newPost.id
        blogPost.numViews = newPost.numViews
        blogPost.numLikes = newPost.numLikes
        blogPost.key = newPost.key
        this.setState({
            blogPost
        })
    }
    
    render(){

        // console.log(this.state.blogPost)
        return(
            <div className='blogView'>
                <div className='blogHeading'>
                <form onSubmit={this.handleSubmit}>
                    <div className='blogTitle'>
                        <div className='form-group'>
                            <input 
                                onChange={this.handleTitle} value={this.state.blogPost.title}
                                type='text' className='form-control' id='title' name='title' placeholder='Title' required />
                        </div>
                    </div>
                    <div className='blogSubtitle'>
                        <div className='form-group'>
                            <input 
                                onChange={this.handleSubtitle} value={this.state.blogPost.subTitle}
                                type='text' className='form-control' id='subTitle' name='subTitle' placeholder='Subtitle'/>
                        </div>
                    </div>
                    <div className='blogDate'>
                        <div className='form-group'>
                            <input onChange={this.handleDate} value={this.state.blogPost.date}
                            type='text' className='form-control' id='date' name='date' placeholder='date' required />
                        </div>
                    </div>
                    <div className='blogContent'>
                        <div className='form-group'>
                            <textarea onChange={this.handleContent} value={this.state.blogPost.content}
                            id="content" name="content" placeholder="Write something.." style={{height: '600px'}}></textarea>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <input type="submit" className='btn btn-success' value="Submit"/>
                    </div>
                </form>
            </div>
            </div>
        )
    }
}

export default EditBlog;