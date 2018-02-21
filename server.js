var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles ={
    'article-one'   : {
    title : 'Article One|Gisha',
    heading : 'Article One',
    date : 'Feb 19 2018',
    content:    `<p>
                   IMAD course test. creating web pages. Practice HTML & CSS
                  </p>
                   <p>
                       IMAD course. creating web pages. Practice HTML & CSS
                   </p>
                   <p>
                       IMAD course. creating web pages. Practice HTML & CSS
                   </p>`
},

    'article-two'   : {
        title : 'Article Twoe|Gisha',
        heading : 'Article Two',
        date : 'Feb 21 2018',
        content:    `<p>
                       IMAD course. creating web pages. Practice HTML & CSS.Article2
                      </p>
                       <p>
                           IMAD course. creating web pages. Practice HTML & CSS. Article2
                       </p>
                       <p>
                           IMAD course. creating web pages. Practice HTML & CSS. Article2
                       </p>`},
    'article-three' : {
        title : 'Article Three|Gisha',
        heading : 'Article Three',
        date : 'Feb 21 2018',
        content:    `<p>
                       IMAD course. creating web pages. Practice HTML & CSS. Article3
                      </p>
                       <p>
                           IMAD course. creating web pages. Practice HTML & CSS. Article3
                       </p>
                       <p>
                           IMAD course. creating web pages. Practice HTML & CSS. Article3
                       </p>`}
};

function createTemplate(data) {
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;



var htmlTemplate =
    `<html>
   <head>
       <title>
           Article One|Gisha
       </title>
       <meta name="viewport" content="width=device=width, initial-scale=1" />
       <link href="/ui/style.css" rel="stylesheet" />
       
   </head> 
      <body>
          
         <div class="container">
           <div>
               <a href='/'> Home </a>
           </div>
           <hr/>
           <h3>
               ${heading}
           </h3>
           <div>
               ${date}
           </div>
           <div>
               ${content}
           </div>
         </div>
      </body>
 

</html> `;

return htmlTemplate;
}



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter', function (req, res) {
    counter=counter+1;
  res.sen(counter.toString());
});

app.get('/:articleName', function (req, res) {
    //articleName=article-one
    var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
