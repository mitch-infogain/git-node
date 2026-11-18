app.use(express.urlencoded({extended:false}));
app.use('/', router);
app.listen(port, function(){
console.log("Listening on..." + port);
});