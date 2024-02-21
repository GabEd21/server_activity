const http = require('http')
const fs = require(`fs`)

const server = http.createServer((req, res) => {
    console.log(req.url)
    res.setHeader(`Content-Type`, `text/html`)

    let myurl = './views/'

    if(req.url == '/'){
        myurl += 'main.html'
    }else if(req.url == '/about'){
        myurl += 'about.html'
    }else{
        myurl += 'error.html'
        res.statusCode = 404
    }
    fs.readFile(myurl, (err, data) => {
        if(err){
            console.log(err)
        }else{
            res.write(data)
            res.end()
        }
    })
})

server.listen(3000, `localhost`, () => {
    console.log(`

░██╗░░░░░░░██╗███████╗██╗░░░░░░█████╗░░█████╗░███╗░░░███╗███████╗
░██║░░██╗░░██║██╔════╝██║░░░░░██╔══██╗██╔══██╗████╗░████║██╔════╝
░╚██╗████╗██╔╝█████╗░░██║░░░░░██║░░╚═╝██║░░██║██╔████╔██║█████╗░░
░░████╔═████║░██╔══╝░░██║░░░░░██║░░██╗██║░░██║██║╚██╔╝██║██╔══╝░░
░░╚██╔╝░╚██╔╝░███████╗███████╗╚█████╔╝╚█████╔╝██║░╚═╝░██║███████╗
░░░╚═╝░░░╚═╝░░╚══════╝╚══════╝░╚════╝░░╚════╝░╚═╝░░░░░╚═╝╚══════╝
`)
})