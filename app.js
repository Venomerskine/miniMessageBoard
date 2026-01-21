const express =  require("express")
const path = require("path");

const app = express()

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.use('/', require('./routes/index'))
app.use('/new', require('./routes/new'))



app.listen(3000, () => {
    console.log("server running")
})