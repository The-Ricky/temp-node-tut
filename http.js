const http = require('http')

const server = http.createServer((req,res)=>{
if(req.url === '/'){
    res.end('Welcome to the homepage')
}
if(req.url === '/about'){
    res.end('About page')
}
res.end(`
<h1>Problem found</h1>
    <p>No page found</p>
    <a href="/">Home</a>`)
})

server.listen(3000)
