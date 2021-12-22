import express from 'express';
import cors from  'cors';
import axios from 'axios'
const app = express();

const port = 3030
app.use(cors())
//consumindo a api
app.get(`/pet`, async (req,res)=>{
	try{
		const {data} = await axios('https://lookao-api.herokuapp.com/pet')
		return res.json(data);
	}catch(err)
	{
		console.error(err)
	}
})
app.get('/raca', async (req,res) =>{
	try{
		const {data} = await axios('https://lookao-api.herokuapp.com/raca')
		return res.json(data);
	}catch(err)
	{
		console.error(err)
	}
})

api.get('pet', async (req,res) =>{

})
app.listen(port,() => {
	console.log(`server listen on http://localhost:${port}`);
})