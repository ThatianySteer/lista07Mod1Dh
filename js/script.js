// 01 Quest 
function imparOuPar(numeroDesejado){
    if(numeroDesejado % 2 == 0){
        console.log("O numero é par");
    }else{
        console.log("O numero é impar");
        }
}
//imparOuPar(31);



// 02 Quest
const verificadorPrimo = (num) => {
    if (num ==2) {
        console.log("Primo")
    }
    for (let i =2; i< num; i++){
        if (num % 1 == 0){
            console.log("Não é Primo!")
            return;
        }
    }
};
// verificadorPrimo(7);



// 03 Quest

function contador(condition){
    setTimeout(function number() {
        if (condition === 0) {
           console.log("Happy New Year !!!")
        }else {
            console.log(condition);
            condition -= 1;
            contador(condition);
        }
    }, 1000)
}
//  contador(10);



// 04 Quest

const contadorRegressivoComPromise = new Promise((resolve, reject) => {
    console.log("Now is promise!");
    let n = 10;
    while (n > 0) {
        console.log(n--);
    }
    if (n > 0) {
        reject(console.log(Error("its still 2020!")));
    }
    resolve("Happy New Year!!!");
});

contadorRegressivoComPromise.then((result)=>
console.log('\nPromise: ${result}')
);
//



// 05 quest

const contadorRegressivoAsync = async () => {
    console.log("Now is Async!");
    let contador = new Promise((resolve, reject) => {
        let n = 10;
        while (n > 0){
            console.log(n--);
        }
        resolve("\nAsync: Happy New Year!!");
    });

    let cheers = await contador;

    console.log(cheers);

};
//contadorRegressivoAsync();



//06 quest

function notasAcima7(){
    let array =[5.3, 4.7, 8.5, 7.1, 6.4, 9.2, 9.8, 5.5, 7.4, 7.0];
    return array.filter(function (notas){
        return notas > 7.0;
    })       
}
// console.log(notasAcima());



// 07 Quest

function produtosMercado(){
    let list = [
        {
            produto: 'acucar',
            preco: 3.00
        },
        {
            produto: 'sal',
            preco: 4.00
        },
        {
            produto: 'oleo',
            preco: 8.00
        },
        {
            produto: 'arroz',
            preco: 6.00
        },
        {
            produto: 'feijao',
            preco: 5.00
        },
        {
            produto: 'cafe',
            preco: 8.00
        },
        {
            produto: 'leite',
            preco: 3.00
        }
    ]
    return list.reduce(function (total, n) {
        return total + n.preco
    }, 0)
}
//console.log(produtosMercado())



// 08 Quest

function alunos(){
    arr.map(function (n) {
        return n.serie ==='8' ? n.disciplina = 'historia' : n.disciplina = 'fisica'
    })

    return arr;
}

let arr =[
    {
        nome: 'Thatiany Steer',
        serie: '9'
    },
    {
        nome: 'Lindy Starling',
        serie: '8'
    },
    {
        nome: 'Fabio Akita',
        serie: '8'
    },
    {
        nome: 'Rick Martin',
        serie: '8'
    },
    {
        nome: 'Gary Oldman',
        serie: '9'
    },
    {
        nome: 'Harrison ford',
        serie: '9'
    },
]

//console.log(alunos(arr))