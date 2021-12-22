const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const cardContainer = document.querySelector(".card-container");
const Card = document.querySelector(".card")


async function getContent(){
	try{
		const response = await fetch('http://localhost:3030/raca');
		console.log(response.json())
	}catch(err){
		console.error(err)
	}
		
}

getContent()
// const listasPet = () => {
// 	const card = document.createElement('div');
// 	card.classList.add("card");
// 	cardContainer.appendChild(card);
// 	console.log("fez")
// }

// document.body.onload = listasPet();

inputBox.onkeyup = (e) =>{
	const CEP = e.target.value;

	const validaCEP = /^[0-9]{8}$/
	
	if (CEP == "") {
		searchWrapper.classList.remove('active');
		suggBox.innerHTML = ``;		

	}
	if (validaCEP.test(CEP)) {
		
		const script = document.createElement('script');
		script.src = `https://viacep.com.br/ws/${CEP}/json/?callback=resultCEP`;
		document.body.appendChild(script);
	}
	else
	{
		resultPet(CEP)
	}

}
const resultPet = (search) =>{
	const filter = pet.filter((pets)=>{
		return pets.raca == search || pets.especie == search;
	})
	
	console.log(filter);
	let btnAll = document.getElementById('todos')
	btnAll.classList.add('btn-active')
	searchWrapper.classList.add('active')
	suggBox.innerHTML = `<li>Resultado para: ${search}</li>`;

}

const resultCEP = (res) =>{
	if(!("erro" in res))
	{
		suggBox.innerHTML = `<li>Resultado para: ${res.logradouro}, ${res.bairro} </li>`		
		searchWrapper.classList.add('active')
	}

}

const SwitchOption = (value) =>{
	let buttons = document.querySelectorAll('.btn-filter')
	buttons.forEach(btn =>{
		if (value.toLowerCase() == btn.innerText.toLowerCase()) {
			btn.classList.add('btn-active')
			const filter = pet.filter((pets)=>{
				return pets.situacao == value.toLowerCase()
			})
			if (filter.length != 0) {
				console.log(filter);
			}
			else{
				console.log(pet)
			}

		}
		else{
			btn.classList.remove('btn-active')
		}
	})
}


const pet = [

				{
					id:1,
					name:"mylon",
					raca:"viralata",
					especie:"canina",
					situacao: "perdido",
					endereco:11347640,
					img:"./img/pet1.jpg",
					descricao:"ele esta perdido, na região do bairro Rio Branco, desde o dia 15/10.  Ele é um viralata muito docio da cor caramelo, ele tem uma faixa branca perto do seu rabo"
				},


				{
					id:2,
					name:"edu",
					raca:"viralata",
					especie:"canina",
					situacao: "perdido",
					endereco:11347640,
					img:"./img/pet1.jpg",
					descricao:"ele esta perdido, na região do bairro Rio Branco, desde o dia 15/10.  Ele é um viralata muito docio da cor caramelo, ele tem uma faixa branca perto do seu rabo"
				},


				{
					id:3,
					name:"loke",
					raca:"pinsher",
					especie:"canina",
					situacao: "localizado",
					endereco: 11704710,
					img:"./img/pet2.jpg",
					descricao:" Ele ainda é um filhote, e é bem medroso. Caso tenha encontrado ele aproxime-se bem devagar"
				},
		]