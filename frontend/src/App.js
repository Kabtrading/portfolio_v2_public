import React, { Component } from 'react';
import axios from 'axios'
import './assets/App.css';
// import auth0Client from './auth/Auth'


import MainRouter from './routes/MainRouter'
import Navi from './components/navigation/Navi';

// MDL components
import {Layout} from 'react-mdl';

class App extends Component {
    state = {
        // must be set to null for conditional rendering
        blogPosts: null,
        pageData: {
            pageViews: null
        },
        isAdminLoggedIn: false
    }

    adminLogin = () => {
        this.setState({
            isAdminLoggedIn: true
        })
    }

    checkLogin = (data, callback) => {
        axios.post('http://kaelebdrew.com/adminlogin', {
            loginCred: data
        })
        .then((res) => {
            if(res.data === 'success'){
                callback(alert('Login Success!'))
                this.adminLogin()

            }else{
                callback(alert('Login Failed!'))
            }
        })
        .catch((err)=> {
            console.log(err)
        })
    }

    adminLogout = () => {
        this.setState({
            isAdminLoggedIn: false 
        })
        console.log('logout')
    }



    // track blog likes and views
    addLike = (id, numLikes) => {
        axios.post('http://kaelebdrew.com/bloglikecounter', {
            id: id,
            numLikes: numLikes
        })
        .then((res) => {
            this.setState({blogPosts: res.data})
        })
    }

    addView = (id, numViews) => {
        axios.post('http://kaelebdrew.com/blogviewcounter', {
            id: id,
            numViews: numViews
        })
        .then((res) => {
            this.setState({
                blogPosts: res.data
            })
        })
    }

    //Delete a blog post from the database
    deletePost = (id) => {
        axios.delete(`http://kaelebdrew.com/delete/${id}`)
        .then((res) => {
            let blogs = res.data
            this.setState({
                blogPosts: blogs
            })
        })
    }

    // send email from contact form
    sendData = (data, result) => {
        axios.post('http://kaelebdrew.com/contactdata', {
            data: data
        })
        .then((res) => {
            result(res)
        })
    }

    postBlog = (data) => {
        console.log(data)
        axios.post('http://kaelebdrew.com/postblog', {
            blog: data
        })
        // {
        //     headers: { 'Authorization': `Bearer ${auth0Client.getIdToken()}` }
        // }
        .then((res) => {
            let blogs = res.data
            this.setState({
                blogPosts: blogs
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    editPost = (editedPost) => {
        console.log(editedPost)
        axios.post('http://kaelebdrew.com/editblog', {
            blog: editedPost
        })
        
        .then((res) => {
            let blogs = res.data
            this.setState({
                blogPosts: blogs
            })
        })
        .catch((err) => {
            console.log(err)
        })

    }

    componentDidMount() {
        // get the static blog data from server
        axios.get('http://kaelebdrew.com/data')
        .then((res)=>{
            let blogs = res.data.blogs
            let [pageData] = res.data.pageData
            this.setState({
                blogPosts: blogs,
                pageData: pageData.data
            })
            
        })
        .catch((err) => console.log(err))
    }
        

  render() {
    return (
      <div className="demo-big-content">
          <Layout className='mainPage'>
              <Navi />
              <MainRouter   
                sendData={this.sendData}
                blogPosts={this.state.blogPosts}
                addView={this.addView}
                addLike={this.addLike}
                pageViews={this.state.pageData.pageViews}
                postBlog={this.postBlog}
                deletePost={this.deletePost}
                editPost={this.editPost}
                adminLogin={this.adminLogin}
                adminLogout={this.adminLogout}
                isAdminLoggedIn={this.state.isAdminLoggedIn}
                checkLogin={this.checkLogin}
              />
          </Layout>
      </div>
    );
  }
}

export default App;
