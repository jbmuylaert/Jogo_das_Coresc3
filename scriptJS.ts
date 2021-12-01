var dezCores: Array<string> = [];

var corSorteada: string;

var corEscolhida: string;

var totalCoresrandom: Array<string> = [];

var totalCores: Array<string> = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black",
"BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral",
"CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey",
"DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon",
"DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink",
"DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia",
"Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink",
"IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue",
"LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink",
"LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue",
"LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid",
"MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed",
"MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab",
"Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip",
"PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue",
"SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue",
"SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise",
"Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"];

function escolhe10Cores(): void {
    for (let i = 0; i < 10; i++) {
        let escolheCor: string = totalCores[Math.floor(Math.random() * (totalCores.length + 1))];
        totalCoresrandom.push(escolheCor);
        const newParagrafo = document.createElement("p");
        const newContent = document.createTextNode(totalCoresrandom[i]);
        newParagrafo.appendChild(newContent);
        console.log(document.querySelector(".lista-cores"));
        let elemento = document.querySelector(".lista-cores");
        if (elemento){
           elemento.append(newParagrafo);     
        }
    }
}

function sorteador(): void {
    escolhe10Cores();
    console.log(dezCores);
    console.log(Math.floor(Math.random() * dezCores.length), dezCores[Math.floor(Math.random() * dezCores.length)]);
    corSorteada  = totalCoresrandom[Math.floor(Math.random() * totalCoresrandom.length)];
    console.log(corSorteada);
}

function compararResposta(): void {
    if (corSorteada === corEscolhida) {
        alert('Parabéns, você acertou!');
        document.getElementsByTagName('body')[0].style.backgroundColor = corSorteada;
    } else {
        alert("Errou feio, errou rude!");
    }
}
let elementoCorsorteada = document.querySelector("input[name='corSorteada']");
    if (elementoCorsorteada){
        elementoCorsorteada.addEventListener("change", (event) => {
            let elemento: HTMLInputElement = event.target as HTMLInputElement;
            corEscolhida = (elemento).value;
            console.log(corEscolhida, corSorteada);
        });
    }

sorteador();


