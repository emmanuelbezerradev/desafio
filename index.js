let mes = prompt("Digite o mês do seu nascimento (ex: jan):")
let dia = prompt("Digite o dia do seu nascimento (ex:1 - 31):")

let mesEscolhido = "Digite apenas 3 letras no campo mês!";  
let diaEscolhido = "Escolha de 1 a 31";

switch (mes) {
    case "jan":
        mesEscolhido = "Sabugo"
    break;
    case "fev":
        mesEscolhido = "Seborreio"
    break;
    case "mar":
        mesEscolhido = "Sirico"
        break;
    case "abr":
        mesEscolhido = "Xoxoto"
    case "mai":
        mesEscolhido = "Menstruado"
        break;
        case "jun":
            mesEscolhido = "Delicio"
        break;
        case "jul":
            mesEscolhido = "Caga tronco"
        break;
    case "ago":
        mesEscolhido = "Mestruado"
        break;
    case "set":
        mesEscolhido = "Pertubados"
        break;
    case "out":
        mesEscolhido = "Hemorroido"
        break;
    case "nov":
        mesEscolhido = "Testosterono"
        break;
    case "dez":
        mesEscolhido = "Lapiseiro"
        break;
    default:
        mesEscolhido;
    }


switch (dia){
    case "1":
        diaEscolhido = "do Tuti fruto"
    break;
    case "2":
        diaEscolhido = "do Tadalafilo"
        break;
    case "3":
        diaEscolhido = "do Prexeco"
        break;
    case "4":
        diaEscolhido = "do Tilápio"
        break;
    case "5":
        diaEscolhido = "do Camisinho"
        break;
    case "6":
        diaEscolhido = "do Macaxeiro"
        break;
    case "7":
        diaEscolhido = "do Jiboio"
        break;
    case "8":
        diaEscolhido = "do Cenouro"
        break;
    case "9":
        diaEscolhido = "do Surubo"
        break;
    case "10":
        diaEscolhido = "do Lagartixo"
        break;
    case "11":
        diaEscolhido = "do Toscano"
        break;
    case "12":
        diaEscolhido = "dO Janjolão"
        break;
    case "13":
        diaEscolhido = "do Pitango"
    break;
    case "14":
        diaEscolhido = "do Vidoco"
    break;
    case "15":
        diaEscolhido = "do Danono"
    break;
    case "16":
        diaEscolhido = "do Bisteco"
    break;
    case "17":
        diaEscolhido = "do Sandálio"
    break;
    case "18":
        diaEscolhido = "do Chupeto"
    break;
    case "19":
        diaEscolhido = "do Lesmo"
    break;
    case "20":
        diaEscolhido = "do Borboleto"
    break;
    case "21":
        diaEscolhido = "do Monnaliso"
    break;
    case "22":
        diaEscolhido = "do Virilho"
    break;
    case "23":
        diaEscolhido = "do Cervejo"
    break;
    case "24":
        diaEscolhido = "do Gasolino"
    break;
    case "25":
        diaEscolhido = "do Tigreso"
    break;
    case "27":
        diaEscolhido = "do Caniço"
    break;
    case "28":
        diaEscolhido = "do Margarido"
    break;
    case "29":
        diaEscolhido = "do Bariátrico"
    break;
    case "30":
        diaEscolhido = "do Cerejo"
    break;
    case "31":
        diaEscolhido = "do Lacraio"
    break;
    default:
        diaEscolhido;
}
alert(`Calma ${mesEscolhido} ${diaEscolhido}`);



