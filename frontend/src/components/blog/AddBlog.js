import React, {Component} from 'react';
const uniqid = require('uniqid')
const UniqueNum = require('unique-number')

const uniqueNum = new UniqueNum()

class AddBlog extends Component {
    state = {
        blogPost: {
            title: '',
            subTitle: '',
            date: '',
            content: '',
            author: 'Kaeleb Drew',
            id: uniqid(),
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
        blogPost.key = uniqueNum.generate()
        this.props.handleBlogPost(blogPost)
        // (confirmation) => {
        //     console.log(confirmation)
        // })

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
                                onChange={this.handleTitle}
                                type='text' className='form-control' id='title' name='title' placeholder='Title' required />
                        </div>
                    </div>
                    <div className='blogSubtitle'>
                        <div className='form-group'>
                            <input 
                                onChange={this.handleSubtitle}
                                type='text' className='form-control' id='subTitle' name='subTitle' placeholder='Subtitle'/>
                        </div>
                    </div>
                    <div className='blogDate'>
                        <div className='form-group'>
                            <input onChange={this.handleDate}
                            type='text' className='form-control' id='date' name='date' placeholder='date' required />
                        </div>
                    </div>
                    <div className='blogContent'>
                        <div className='form-group'>
                            <textarea onChange={this.handleContent}
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

export default AddBlog;
