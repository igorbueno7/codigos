const names= ["Pedro", "João", "Paulo", "Matheus"]
const ages= [18, 19, 20, 21]
for (let i=0;i < names.length; i++){
    if (ages [i] == 18){
        console.log(`${names [i]} é muito novo`);
    }
    else if (ages[i] > 18){
        console.log(`${names [i]} 'é muito velho`);
    }
}