var _a;
var dezCores = [];
var corSorteada;
var corEscolhida;
var totalCoresrandom = [];
var totalCores = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black",
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
function escolhe10Cores() {
    var _a;
    for (var i = 0; i < 10; i++) {
        var escolheCor = totalCores[Math.floor(Math.random() * (totalCores.length + 1))];
        totalCoresrandom.push(escolheCor);
        var newParagrafo = document.createElement("p");
        var newContent = document.createTextNode(totalCoresrandom[i]);
        newParagrafo.appendChild(newContent);
        console.log(document.querySelector(".lista-cores"));
        (_a = document.querySelector(".lista-cores")) === null || _a === void 0 ? void 0 : _a.append(newParagrafo);
    }
}
function sorteador() {
    escolhe10Cores();
    console.log(dezCores);
    console.log(Math.floor(Math.random() * dezCores.length), dezCores[Math.floor(Math.random() * dezCores.length)]);
    corSorteada = totalCoresrandom[Math.floor(Math.random() * totalCoresrandom.length)];
    console.log("qualquerCoisa", corSorteada);
}
function compararResposta() {
    if (corSorteada === corEscolhida) {
        alert('Parabéns, você acertou!');
        document.getElementsByTagName('body')[0].style.backgroundColor = corSorteada;
    }
    else {
        alert("Errou feio, errou rude!");
    }
}
(_a = document.querySelector("input[name='corSorteada']")) === null || _a === void 0 ? void 0 : _a.addEventListener("change", function (event) {
    var elemento = event.target;
    corEscolhida = elemento.innerText;
    console.log(corEscolhida, corSorteada);
});
sorteador();
function append(newParagrafo) {
    throw new Error("Function not implemented.");
}
