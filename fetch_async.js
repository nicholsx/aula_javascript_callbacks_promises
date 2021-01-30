// ******** Fetch ********

/*fetch('/data.json')
    .then(responseStream => {
        
        responseStream.json()
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
    console.log('Erro: ', err);
    });*/

// ******** ES7 - Async / Await 
// async geralmente utilizado em parceria com await
// await quando você quer aguardar com uma promisse para ser resolvida
// processamento assincrono sequencial

const asyncTimer = () => 
    new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(12345);
    }, 1000);
});

const simpleFunc = async () => {
    //const data = await asyncTimer();
    const data = await Promise.all([
        asyncTimer(), 
        fetch('/data.json').then(resStream => resStream.json())
    ]);
    //throw new Error('Oh no!');
    //console.log(data);
    /*const dataJSON = await fetch('/data.json').then(resStream => 
        resStream.json()
        );*/

    return data;
};

simpleFunc().then(data => {
    console.log(data); // Retorna uma promise ja resolvida
})
.catch(err => {
    console.log(err);
})


