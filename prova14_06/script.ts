
let i = 0
function adicionar(){

    i++
    let nome:string[] = []

    let input: HTMLInputElement | null = 
    document.querySelector('#aluno')!;

    if(input.value !== ""){
        let lista: HTMLUListElement | null = document.querySelector('ul')!;
        let li: HTMLLIElement = document.createElement('li');
        let card: HTMLElement = document.createElement('article');

        nome[i] = input.value

        let texto = 
        document.createTextNode(nome[i]);

        li.appendChild(card);
        card.appendChild(texto);

        lista.appendChild(li);
        console.log(nome)
    }

}


  