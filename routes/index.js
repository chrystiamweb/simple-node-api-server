module.exports = (app) =>{

app.get('/', (req,res)=>{
	res.statusCode = 200;
	res.setHeader('contet-type', 'text/html');
	res.end('<h1>Ola</h1>');
});

}