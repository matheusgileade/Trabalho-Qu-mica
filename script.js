var acidoCarboxilico = 'Ácido Carboxílico: ' +
'Os ácidos carboxílicos são compostos orgânicos que contêm o grupo funcional carboxila (-COOH).' +
'São conhecidos por sua acidez e podem formar ligações de hidrogênio, tornando-os importantes em bioquímica.';

var acidoMetano = 'Ácido Metanóico (Fórmico): ' +
'O ácido metanóico, também chamado de ácido fórmico, é o ácido carboxílico mais simples, com a fórmula HCOOH.' +
'É encontrado em picadas de formigas e pode ser usado na produção de produtos químicos industriais.';

var alcool = 'Álcool: ' +
'Os álcoois são compostos que possuem o grupo funcional hidroxila (-OH).' +
'São amplamente utilizados em produtos de consumo, como bebidas alcoólicas e produtos farmacêuticos.';

var aldeido = 'Aldeído: ' +
'Os aldeídos são compostos orgânicos que contêm o grupo funcional aldeído (-CHO).' +
'Muitos aldeídos têm aromas agradáveis e são usados na indústria de fragrâncias e aromas.'

var amida = 'Amida: ' +
'As amidas são compostos que possuem o grupo funcional amida (-CONH2).' +
'São encontradas em proteínas e em muitos produtos químicos sintéticos, incluindo medicamentos.';

var amino = 'Amino: ' +
'Os compostos com grupos funcionais amino (-NH2) são a base das proteínas e aminoácidos.' +
'São fundamentais para a vida e desempenham papéis essenciais na biologia.';

var anidridoAcetico = 'Anidrido Acético: ' +
'O anidrido acético é um composto orgânico que contém o grupo funcional anidrido (-C(O)OC(O)-).' +
'É usado na produção de plásticos e produtos farmacêuticos.';

var cetona = 'Cetona: ' +
'As cetonas são compostos que possuem o grupo funcional cetona (C=O) ligado a um átomo de carbono.' +
'Muitas cetonas são usadas como solventes e na produção de resinas.';

var ester = 'Éster: ' +
'Os ésteres são compostos com o grupo funcional éster (-COO-).' +
'Eles são responsáveis pelos sabores e aromas em muitos alimentos e também são usados ​​em perfumaria.';

var eter = 'Éter: ' +
'Os éteres são compostos orgânicos que contêm um átomo de oxigênio ligado a dois grupos alquil (-O-). ' +
'São usados como solventes e em síntese orgânica.';

var gruposFuncionais = [acidoCarboxilico, acidoMetano, alcool, aldeido, amida, amino, anidridoAcetico, cetona, ester, eter];
var j = 1;

function ExibeExplicacao(repeticao = false){
    if(repeticao){j = 1}
    var botoes = document.getElementsByClassName('btn');
    for(var i = 0; i < botoes.length; i++){
        botoes[i].style.display = 'none';
    }

    debugger
    var paragrafo = document.createElement('p');
    var texto = document.createTextNode(acidoCarboxilico);
    paragrafo.appendChild(texto)
    paragrafo.id = "textoExplicacao"
    var tela = document.getElementById('tela');
    var botaoProximo = document.createElement('button')
    var proximo = document.createTextNode('Próximo');
    botaoProximo.appendChild(proximo)
    botaoProximo.id = 'botaoProximo'
    botaoProximo.addEventListener("click", function(){
        ProximaExplicacao(paragrafo, j)
        j++;
    })
    tela.appendChild(paragrafo)
    tela.appendChild(botaoProximo)
}

function ProximaExplicacao(paragrafo, j){
    var texto = document.createTextNode(gruposFuncionais[j]);
    paragrafo.innerHTML = '';
    paragrafo.appendChild(texto);
    if(j == 10)
    {
        debugger
        document.getElementById('tela').innerText = ''
        for(var k = 0;k < 2; k++)
        {
            var tela = document.getElementById('tela');
            var botoes = document.createElement('button')            
            if(k == 0)
            {
                var proximo = document.createTextNode('Iniciar Jogo');
                botoes.appendChild(proximo)
                botoes.className = 'btn'
                botoes.addEventListener("click", function(){
                    alert('top');
                })
                tela.appendChild(botoes)
            }else
            {
                var proximo = document.createTextNode('O que são grupos funcionais?');
                botoes.appendChild(proximo)
                botoes.className = 'btn'
                botoes.addEventListener("click", function(){
                    ExibeExplicacao(true)
                })
                tela.appendChild(botoes)
            }
        }
        j = 0;
    }
}