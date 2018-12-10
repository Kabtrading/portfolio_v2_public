const express = require('express')
const app = express()
// const firebase = require('firebase')
const bodyParser = require('body-parser')
const path = require('path')
const nodemailer = require('nodemailer')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
// const jwt = require('express-jwt')
// const jwksRsa = require('jwks-rsa')

const port = process.env.PORT || 8080
//auth
app.use(helmet())
//log http requests
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, "./../frontend/build")))
app.use(function(req, res, next) {
    var allowedOrigins = ['http://kaelebdrew.com', 'http://www.kaelebdrew.com'];
    var origin = req.headers.origin;
    if(allowedOrigins.indexOf(origin) > -1){
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    // console.log('site accessed')
    res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    return next();
});

// Firebase initialization
const admin = require('firebase-admin')
const serviceAccount = require('./serviceAccountKey.json')
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    
    // databaseURL: 'https://portfolio-f212e.firebaseio.com'
});
// firestore settings to avoid unwanted logs
const settings = {timestampsInSnapshots: true};
admin.firestore().settings(settings);
const db = admin.firestore()

//---------FUNCTIONS---------//
// returns all data from db required to for client
 getData = (data) => {
     const blogs = []
     const pageData= []
     db.collection('blogs').get()
    .then((snapshot) => {
        snapshot.forEach((doc) => {
            blogs.push({
                key: doc.id,
                data: doc.data()
            })
        })
        db.collection('pageData').get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                pageData.push({
                    key: doc.id,
                    data: doc.data()
                })
            })
            const dataArr = {blogs, pageData}
            data(dataArr)
            updateViewCount(pageData)
        })
        .catch((err) => {
            data(err)
        })
    })
    .catch((err) => {
        data(err)
    })
}

// update blog state in client
getBlogs = (blogs) => {
    const newBlogs = []
    db.collection('blogs').get()
    .then((snapshot) => {
        snapshot.forEach((doc) => {
            newBlogs.push({
                key: doc.id,
                data: doc.data()
            })
        })
        blogs(newBlogs)
    })
    .catch((err) => {
        console.log(err)
    })
}

updateViewCount = (pageData) => {
    let views = pageData[0].data.pageViews
    db.collection('pageData')
    .doc('CzHei3cz52WS8krWGzhR')
    .update({pageViews: views += 1})
    .then((res) => {
        console.log('PageView count updated')
    })
}


//----- all get endpoints-------//
app.get('/data', (req, response, next) => {
    getData((data) => {
        response.json(data)
    })
    
    // getBlogs((blogs) => {
    //     response.json(blogs)
    // })
})

// const checkJwt = jwt({
//   secret: jwksRsa.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: `https://kaelebdrew.auth0.com/.well-known/jwks.json`
//   }),

//   // Validate the audience and the issuer.
//   audience: '0TbRTrW8kTWcOLsgO5MUTsUzQJG3ghNQ',
//   issuer: `https://kaelebdrew.auth0.com/`,
//   algorithms: ['RS256']
// });

const adminSecret = {
    email: 'kaelebdrew@gmail.com',
    password: ''
}

//-----all post endpoints-----//
//Admin Login
app.post('/adminlogin', (req, response) => {
    let { email, password} = req.body.loginCred
    if(email === adminSecret.email && password === adminSecret.password){
        let approval = 'success'
        response.send(approval)
    }else{
        let approval = 'failed'
        response.send(approval)
    }
})

//updates view count for blog in firebase
app.post('/postblog', (req, response, next) => {
    let newBlog = req.body.blog
    let id = newBlog.id
    db.collection('blogs').doc(`${id}`).set(newBlog)
    .then((res) => {
        getBlogs((blogs) => {
            response.send(blogs)
        })
    })
    .catch((err) => {
        console.log(err)
    })
})

app.post('/editblog', (req, response, next) => {
    let blog = req.body.blog
    let key = blog.id
    let title = blog.title
    let subTitle = blog.subTitle
    let date = blog.date
    let content = blog.content
    db.collection('blogs')
    .doc(`${key}`)
    .update({
        title: title,
        subTitle: subTitle,
        date: date,
        content: content
    })
    .then((res) => {
        getBlogs((blogs) => {
            response.send(blogs)
        })
    })
    .catch((err) => {
        console.log(err)
    })
})



app.post('/blogviewcounter', (req, response, next) => {
    let key = req.body.id
    let numViews = req.body.numViews
    
    db.collection('blogs')
    .doc(`${key}`)
    .update({numViews: numViews += 1})
    .then((res) => {
        getBlogs((blogs) => {
            response.send(blogs)
        })
    })
    .catch((err)=>{
        console.log('Error updating', err)
    })
})

//updates like count for blog in firebase
app.post('/bloglikecounter', (req, response, next) => {
    const key = req.body.id
    let numLikes = req.body.numLikes

    db.collection('blogs')
    .doc(`${key}`)
    .update({numLikes: numLikes += 1})
    .then((res) => {
        getBlogs((blogs) => {
            response.send(blogs)
        })
    })
})


// send contact email
app.post('/contactdata', (req, res, next) => {
    const contactData = req.body.data;
    //use nodemailer to send email to my gmail
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: '465',
        secure: true,
        auth: {
            user: 'kaelebserver@gmail.com',
            pass: ''
        }
    })
    let mailOptions = {
        from: `\"${contactData.name}\" <${contactData.email}>`, 
        to: 'kaelebdrew@gmail.com',
        subject: `${contactData.email} is trying to contact you`,
        text: 'Plain text body',
        html: `<div>${contactData.message}</div>` 
    };
    //send mail
    transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
        //   console.log('Message %s sent: %s', info.messageId, info.response);
              res.render('index');
          });
    res.send('status ok')
})

app.delete('/delete/:id', (req, response) => {
    let id = req.params.id
    db.collection('blogs').doc(`${id}`).delete()
        .then((res) => {
            getBlogs((blogs) => {
                response.send(blogs)
            })
        })
})


// global app settings
app.get('*', (req, res, next) => {
    // var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    // console.log(ip)
    res.sendFile(path.join(__dirname, "./../frontend/build", "index.html"))
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

// counter
let totalRunningTime = 0
const count = 1 // one minute
// functions for logging time
clock = (time) => {
    console.log(`-----Server has been running for ${time} minutes--- :)`);
}
timer = (count) => {
totalRunningTime += count
if(totalRunningTime % 30 === 0 || totalRunningTime === 1){

        clock(totalRunningTime)
}
}
setInterval(timer, 60000, count)
// 60000 = 1 minute
// 1000 = 1 second
