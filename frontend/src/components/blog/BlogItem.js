import React, {Component} from 'react';




class BlogItem extends Component {
    state = {
        blogIsLiked: 'far fa-heart fa-2x isBlogLiked'
        
    }


    addLike = (id, numLikes) => {
        this.props.addLike(id, numLikes)
        this.setState({
            blogIsLiked: 'fas fa-heart fa-2x isBlogLikedTrue'
        })
    }

    render(){
        
        const {title, subTitle, date, content, author, numViews, numLikes, id} = this.props
        return(
            <div className='blogView animated slideInRight slow'>
            
                <div className='blogHeading'>
                    <div className='blogTitle'>
                        <h3><b>{title}</b></h3>
                    </div>
                    <div className='blogSubtitle'>
                        <h5>{subTitle}</h5>
                    </div>
                    <div className='blogDate'>
                        <p>{date}</p>
                    </div>
                </div>
                <div className='blogContent'>
                    <div>
                        <div dangerouslySetInnerHTML={{ __html: `${content}` }} />
                    </div>
                </div>
                <div className='blogFooter'>
                    <div className='blogAuthor'>
                        <p>{author}</p>
                    </div>
                    <div className='blogLikes'>
                        <p>Leave a Like if you enjoyed this post!</p>
                            <div onClick={()=>this.addLike(id, numLikes)}>
                                <i className={this.state.blogIsLiked}></i>
                            </div>
                        
                        {/* <i class="fas fa-heart"></i>  USE THIS ONE FOR FILLED IN HEART*/}
                    </div>
                
                    <p>{numLikes} likes</p>
                    <p>{numViews} views</p>
                    
                </div>
            </div>
        )
    }
}

export default BlogItem;