
const chartmarvel = document.querySelector('#marvel_1');
const imput = document.querySelector('#hero')
const api_url = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=bb9b583e96df64e8d90cec831f2056de&hash=19a54650dbb9d1c7dab016512c33ab09';
const client = document.getElementById('heros')
const usuario = document.getElementById('marvel_2');
document.addEventListener('DOMContentLoaded',() => {
    
z()
})
/**
fetch(api_url,) 
 .then((response) => response.json())
  .then((json) => console.log(json));
   */ 
 
const z = async () => {
    const response = await fetch(api_url)
    const json = await response.json();
    

    const {data} = json;
    console.log(data);


    const nombres =[]
    
    

    


    data.results.forEach(element => {
        const namess = nombres.find(x => x === imput.name);
        if (!namess) {
            nombres.push(element.name);
            const div = document.createElement('div');
            const p = document.createElement('ul');
            const text = document.createTextNode(element.name);
            div.appendChild(p)
            p.appendChild(text);
            marvel_4.appendChild(p);
            
        }
    })
/**
    data.results.forEach(element => {
        const id = comics.find(x => x === element.comics.available
            );
        if (!id) {
            comics.push(element.comics.available
                );
            
        }
    })
   */ /*
    const items =[]
    const datachsrt = data.results;
    const results = datachsrt.map(element => element.series.items.map(item => item.name));
    if(results){
        items.push(results);
    }
    
    console.log(results);
    console.log(items);
*/
   /*
const valorn = "Adam Warlock"
const obtener = datachsrt.filter(element => element.name === valorn)
console.log(obtener)
if (obtener){

    
    const contenthtml =` <div >hola</div>
    <h1>${obtener.map(item => item.name)}</h1>
    <p>COmics en los que a participado</p>
    <P >${obtener.map(element => element.series.items.map(item => item.name))}</P>
    <img id="imagen" src="${obtener.map(element => element.thumbnail['path'])}.${obtener.map(element => element.thumbnail['extension'])}" alt=""></div>
    `

    const ela = obtener.map(element => element.name)
    const el = obtener.map(element => element.series.items.map(item => item.name));
    const imagen =  obtener.map(element => element.thumbnail['path']);
    const imagenes =  obtener.map(element => element.thumbnail['extension']);
    const x= imagen + imagenes

    marvel_4.innerHTML =  contenthtml;
;

    console.log(x);
    console.log(ela, el, imagen, imagenes)
    
}


new Chart(marvel_1, {
    type: 'line',
    data: {
        labels: nombres, 
        datasets:[{label: 'N° de comics',
        data: comics,
        backgroundColor: ['rgba(255, 89, 132, 0.2)',
        
    ],
    }]
},
options: {
    scales: {
        y:{
            beginAtZero: true
        }
    }
}

})
*/
/*
new Chart(marvel_5, {
    type: 'doughnut',
    data:{
    labels: nombres, 
    datasets: [{
        label: 'nombres',
        data: comics,
        backgroundColor: ['rgba(229,257,204,2)',
        'rgba(269,100,204,2)',
        'rgba(267,200,208,2)',
        'rgba(256,267,200,2)'
         ],
         

}]
       
}  
},
)

 */
/*
new Chart(marvel_3, {
    type:'polarArea',
    data: {
    labels: nombres,
    datasets: [{
        label: 'Hola',
        data: comics,
        backgroundColor: ['rgb(255, 255, 255,3)',
            'rgb(255,290,574,4)','rgba(269,100,204,2)',
            'rgba(267,200,208,2)',
            'rgba(256,267,200,2)','rgba(269,100,204,2)',
            'rgba(267,200,208,2)',
            'rgba(256,267,200,2)']
        
    }],
    options: {}
}
}
)
}

*/
client.addEventListener('click', async () => {
   const response = await fetch(api_url);
   const {data} = await response.json()
   console.log(data);
   const datachsrt = data.results;
   
   const nombres = datachsrt.map(datach => datach.name)
   const numeros = datachsrt.map(datach => datach.comics.available)

   const valorn = imput.value;
   console.log(valorn);
const obtener = datachsrt.filter(element => element.name === valorn)
console.log(obtener)
if (obtener){
    
    const ela = obtener.map(element => element.name)
    const el = obtener.map(element => element.series.items.map(item => item.name));
    const imagen =  obtener.map(element => element.thumbnail['path']);
    const imagenes =  obtener.map(element => element.thumbnail['extension']);
     const numero = obtener.map(x=>x.comics.available);
     const event = obtener.map(x=>x.stories.available);
     const eventos = obtener.map(x=>x.series.available);
console.log(numero)
     const x= imagen + imagenes;
     console.log(el);
     console.log(x);
    console.log(ela, el, imagen, imagenes, numero, event, eventos);

    new Chart(chartmarvel,{
        type: 'line',
        data:{
        labels:nombres,
        datasets:[{
            label: 'n°comics',
            data: numeros,
            backgroundColor: [
        
                ' aqua',
                
            ]

        }]
    },
    options: {
        scales: {
            y:{
                beginAtZero: true
            }
        }
    },
    
     }
   
)

     new Chart(usuario,{
        type: 'bar',
        data:{
        labels: ela,
        datasets:[{
            label: 'n°comics',
            data: numero,
            backgroundColor: [
                
                ' yellow',
                
            ]

        }]
    },
    options: {
        scales: {
            y:{
                beginAtZero: true
            }
        }
    },
    
     }
   
)
new Chart(marvel_5, {
    type: 'doughnut',
    data:{
    labels: ela, 
    datasets: [{
        label: 'N° de evento',
        data: eventos,
        backgroundColor: ['red',
         ],
         

}]
       
}  
},
)
 

new Chart(marvel_3, {
    type:'polarArea',
    data: {
    labels: ela,
    datasets: [{
        label: 'N° DE historietas ',
        data: event,
        backgroundColor: ['rgb(205, 300, 255,3)',
            ]
        
    }],
    options: {}
}
}
)
}


    const contenthtml =` <div id='hhh'>
    <h1>${obtener.map(item => item.name)}</h1>
    <h2>${obtener.map(item => item.description)}</h2>
    <p>COmics en los que a participado</p>
    <ul>${obtener.map(element => element.series.items.map(item => item.name))}</ul>
    <img id="imagen" src="${obtener.map(element => element.thumbnail['path'])}.${obtener.map(element => element.thumbnail['extension'])}" alt=""></div>
    `

   
    

    marvel_4.innerHTML =  contenthtml;

    
}


)}


    
