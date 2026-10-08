window.IS_ART=true;
// Banco de textos — gerado a partir de bank_*.py
const TEMAS={"escola": {"e": "🏫", "n": "A escola", "m": null}, "outono": {"e": "🍂", "n": "O outono", "m": [9, 10, 11]}, "smartinho": {"e": "🌰", "n": "O São Martinho", "m": [11]}, "natal": {"e": "🎄", "n": "O Natal", "m": [12]}, "inverno": {"e": "❄️", "n": "O inverno", "m": [1, 2]}, "carnaval": {"e": "🎭", "n": "O Carnaval", "m": [2, 3]}, "primavera": {"e": "🌸", "n": "A primavera", "m": [3, 4, 5]}, "festaflor": {"e": "🌺", "n": "A Festa da Flor", "m": [4, 5]}, "terra": {"e": "🌍", "n": "Cuidar do planeta", "m": null}, "livros": {"e": "📚", "n": "Os livros", "m": null}, "mar": {"e": "🌊", "n": "O mar da Madeira", "m": null}, "amizade": {"e": "🤝", "n": "A amizade", "m": null}, "animais": {"e": "🐾", "n": "Os animais", "m": null}, "tecnologia": {"e": "💻", "n": "O computador", "m": null}, "verao": {"e": "☀️", "n": "O verão", "m": [6, 7, 8, 9]}, "desporto": {"e": "⚽", "n": "O desporto", "m": null}, "eco-agua": {"e": "💧", "n": "Eco-Escolas: a água", "m": null}, "eco-energia": {"e": "⚡", "n": "Eco-Escolas: a energia", "m": null}, "eco-residuos": {"e": "♻️", "n": "Eco-Escolas: os resíduos", "m": null}, "eco-compostagem": {"e": "🌿", "n": "Eco-Escolas: a compostagem", "m": null}, "eco-horta": {"e": "🥕", "n": "Eco-Escolas: a horta", "m": null}, "eco-biodiversidade": {"e": "🦋", "n": "Eco-Escolas: a biodiversidade", "m": null}, "eco-mar": {"e": "🐢", "n": "Eco-Escolas: o mar", "m": null}, "eco-alimentacao": {"e": "🍎", "n": "Eco-Escolas: a alimentação", "m": null}, "eco-mobilidade": {"e": "🚶", "n": "Eco-Escolas: a mobilidade", "m": null}, "eco-ruido": {"e": "🤫", "n": "Eco-Escolas: o ruído", "m": null}, "eco-floresta": {"e": "🌳", "n": "Eco-Escolas: a floresta", "m": null}, "em-corpo": {"e": "🧍", "n": "Estudo do Meio: o corpo humano", "m": null}, "em-esqueleto": {"e": "🦴", "n": "Estudo do Meio: os ossos", "m": null}, "em-sentidos": {"e": "👀", "n": "Estudo do Meio: os sentidos", "m": null}, "em-higiene": {"e": "🧼", "n": "Estudo do Meio: a higiene", "m": null}, "em-sono": {"e": "😴", "n": "Estudo do Meio: o sono", "m": null}, "em-seguranca": {"e": "🚸", "n": "Estudo do Meio: a segurança", "m": null}, "em-plantas": {"e": "🌱", "n": "Estudo do Meio: as plantas", "m": null}, "em-animais": {"e": "🦎", "n": "Estudo do Meio: os animais", "m": null}, "em-tempo": {"e": "🌦️", "n": "Estudo do Meio: o estado do tempo", "m": null}, "em-ar": {"e": "🌬️", "n": "Estudo do Meio: o ar", "m": null}, "em-agua": {"e": "💦", "n": "Estudo do Meio: a água", "m": null}, "em-sistema-solar": {"e": "🌞", "n": "Estudo do Meio: o Sol e a Lua", "m": null}, "em-dia-noite": {"e": "🌗", "n": "Estudo do Meio: o dia e a noite", "m": null}, "em-madeira": {"e": "🏝️", "n": "Estudo do Meio: a Madeira", "m": null}, "em-freguesia": {"e": "🏘️", "n": "Estudo do Meio: a freguesia", "m": null}, "em-transportes": {"e": "🚌", "n": "Estudo do Meio: os transportes", "m": null}, "em-comunicacao": {"e": "✉️", "n": "Estudo do Meio: a comunicação", "m": null}, "em-profissoes": {"e": "🧰", "n": "Estudo do Meio: as profissões", "m": null}, "em-passado": {"e": "🕰️", "n": "Estudo do Meio: o passado", "m": null}, "em-historia": {"e": "⛵", "n": "Estudo do Meio: a história", "m": null}, "em-orientacao": {"e": "🧭", "n": "Estudo do Meio: a orientação", "m": null}, "em-rochas": {"e": "🌋", "n": "Estudo do Meio: as rochas", "m": null}, "em-materiais": {"e": "🧱", "n": "Estudo do Meio: os materiais", "m": null}, "em-magnetes": {"e": "🧲", "n": "Estudo do Meio: os ímanes", "m": null}};
const POOL={"g": {"p": [{"t": "escola", "ti": "O primeiro dia", "f": ["A escola abriu as portas de manhã.", "Os alunos chegaram com mochilas novas.", "Na sala, a professora sorriu para todos.", "Cada um contou o que fez nas férias.", "Foi um dia cheio de alegria."]}, {"t": "outono", "ti": "O outono chegou", "f": ["No outono, os dias ficam mais curtos.", "As folhas das árvores mudam de cor.", "Umas ficam amarelas e outras castanhas.", "O vento sopra e as folhas caem no chão.", "Gosto de as ouvir estalar debaixo dos pés."]}, {"t": "smartinho", "ti": "O Dia de São Martinho", "f": ["No dia 11 de novembro, celebra-se o São Martinho.", "Diz a lenda que Martinho deu metade da capa a um pobre.", "Nesse momento, o sol apareceu no céu.", "Hoje, assamos castanhas e fazemos festa.", "É o verão de São Martinho!"]}, {"t": "natal", "ti": "Luzes de dezembro", "f": ["Em dezembro, as ruas enchem-se de luzes coloridas.", "No Funchal, as iluminações são muito bonitas.", "Em casa, enfeitamos a árvore de Natal.", "Na cozinha, cheira a bolo de mel.", "O Natal é tempo de estar com quem gostamos."]}, {"t": "inverno", "ti": "Dias de inverno", "f": ["No inverno, faz frio e chove muitas vezes.", "Vestimos casacos, gorros e cachecóis.", "No Pico do Areeiro, às vezes, cai neve.", "À noite, sabe bem uma sopa quentinha.", "Depois, é bom ler um livro debaixo da manta."]}, {"t": "carnaval", "ti": "Festa de Carnaval", "f": ["No Carnaval, as crianças mascaram-se.", "Há fatos de piratas, fadas e super-heróis.", "No Funchal, há um grande cortejo pelas ruas.", "Ouve-se música e há serpentinas no ar.", "É uma festa muito divertida!"]}, {"t": "primavera", "ti": "Chegou a primavera", "f": ["Na primavera, os campos enchem-se de flores.", "As andorinhas voltam a fazer os ninhos.", "Os dias ficam maiores e mais quentes.", "As abelhas voam de flor em flor.", "A natureza acorda cheia de cor."]}, {"t": "festaflor", "ti": "A Festa da Flor", "f": ["Na primavera, a Madeira celebra a Festa da Flor.", "As crianças constroem o Muro da Esperança.", "Cada uma leva uma flor na mão.", "Há um cortejo com carros cheios de flores.", "O Funchal fica perfumado e colorido."]}, {"t": "terra", "ti": "Cuidar da Terra", "f": ["A Terra é a nossa casa.", "Devemos poupar água e energia.", "Podemos separar o lixo para reciclar.", "Também é importante plantar árvores.", "Se todos ajudarmos, o planeta fica mais feliz."]}, {"t": "livros", "ti": "Uma viagem num livro", "f": ["Os livros levam-nos a lugares mágicos.", "Numa página, estou num castelo.", "Na outra, navego num barco pirata.", "Ler faz-nos sonhar e aprender palavras novas.", "Na biblioteca há sempre uma história à nossa espera."]}, {"t": "mar", "ti": "O mar da Madeira", "f": ["A Madeira é uma ilha rodeada pelo mar.", "Em Câmara de Lobos, os barcos são coloridos.", "Os pescadores saem de madrugada.", "No mar vivem golfinhos, peixes e tartarugas.", "Quando olho para o mar, sinto-me em paz."]}, {"t": "amizade", "ti": "Um bom amigo", "f": ["Um bom amigo ajuda-nos quando precisamos.", "Partilha os brinquedos e o lanche.", "Brinca connosco no recreio.", "Quando estamos tristes, dá-nos um abraço.", "Ter amigos faz-nos felizes."]}, {"t": "animais", "ti": "O gato", "f": ["O gato é um animal muito curioso.", "Tem bigodes compridos e olhos brilhantes.", "Gosta de dormir ao sol.", "Quando está feliz, faz ronrom.", "É um ótimo companheiro."]}, {"t": "tecnologia", "ti": "O computador", "f": ["O computador ajuda-nos a aprender.", "Com o teclado, escrevemos palavras e frases.", "Com o rato, clicamos e escolhemos.", "Na internet, devemos ter cuidado.", "Nunca partilhamos a nossa palavra-passe."]}, {"t": "verao", "ti": "Férias de verão", "f": ["No verão, os dias são longos e quentes.", "Vamos à praia e mergulhamos no mar.", "Construímos castelos de areia.", "À tarde, comemos um gelado fresquinho.", "As férias são tempo de descansar e brincar."]}, {"t": "desporto", "ti": "Hora de mexer", "f": ["Fazer desporto faz bem à saúde.", "Na educação física, corremos e saltamos.", "Também jogamos futebol e basquetebol.", "No fim, bebemos água para nos hidratarmos.", "Mexer o corpo deixa-nos bem-dispostos."]}, {"t": "eco-agua", "ti": "Poupar água", "f": ["A água é um bem precioso.", "Sem água, não há vida no planeta.", "Quando lavo os dentes, fecho a torneira.", "No duche, demoro pouco tempo.", "Assim, cada gota de água é bem aproveitada."]}, {"t": "em-agua", "ti": "A viagem da água", "f": ["O sol aquece a água dos rios e do mar.", "A água sobe para o céu em vapor.", "Lá em cima, forma as nuvens.", "Depois, cai em forma de chuva.", "É o ciclo da água, que nunca para."]}, {"t": "eco-energia", "ti": "Poupar energia", "f": ["A energia faz funcionar muitas coisas.", "Na escola, usamos a luz natural sempre que podemos.", "Quando saímos da sala, apagamos as luzes.", "Também desligamos o computador no fim da aula.", "Poupar energia ajuda o planeta."]}, {"t": "eco-energia", "ti": "O sol e o vento", "f": ["O sol e o vento dão-nos energia limpa.", "Os painéis solares captam a luz do sol.", "As eólicas rodam com a força do vento.", "Na Madeira, há eólicas no Paul da Serra.", "Esta energia não polui o ar."]}, {"t": "eco-residuos", "ti": "O ecoponto", "f": ["No ecoponto, cada resíduo tem o seu lugar.", "O papel e o cartão vão para o azul.", "As embalagens de plástico e metal vão para o amarelo.", "O vidro vai para o vidrão verde.", "Separar o lixo é um gesto simples e importante."]}, {"t": "eco-residuos", "ti": "Os três R", "f": ["Para cuidar do planeta, seguimos a regra dos três R.", "Primeiro, reduzimos o que compramos e gastamos.", "Depois, reutilizamos o que ainda serve.", "Por fim, reciclamos o que já não usamos.", "Assim, há menos lixo no mundo."]}, {"t": "eco-compostagem", "ti": "O compostor", "f": ["Na horta da escola, temos um compostor.", "Lá dentro, pomos cascas de fruta e folhas secas.", "As minhocas ajudam a transformar tudo em terra.", "Ao fim de uns meses, temos um adubo natural.", "Com ele, as plantas crescem fortes."]}, {"t": "eco-horta", "ti": "A horta da escola", "f": ["A nossa turma cuida de uma horta.", "Semeámos alfaces, cenouras e salsa.", "Todas as semanas, regamos e tiramos as ervas daninhas.", "Aprendemos que as plantas precisam de tempo.", "No fim, vamos provar o que colhemos."]}, {"t": "eco-biodiversidade", "ti": "A Laurissilva", "f": ["A floresta Laurissilva cobre as serras da Madeira.", "É tão antiga que é Património Mundial.", "Nela vivem plantas e animais únicos.", "O pombo-trocaz só existe nesta ilha.", "Devemos proteger esta floresta especial."]}, {"t": "eco-biodiversidade", "ti": "Os insetos amigos", "f": ["As abelhas e as joaninhas são insetos amigos.", "As abelhas levam o pólen de flor em flor.", "As joaninhas comem os pulgões que estragam as plantas.", "Sem insetos, muitas frutas não cresciam.", "Por isso, não devemos usar venenos no jardim."]}, {"t": "eco-mar", "ti": "Lixo no mar", "f": ["Muitos plásticos acabam no mar.", "As tartarugas confundem os sacos com alforrecas.", "Os peixes também engolem pequenos pedaços de plástico.", "Na praia, apanhamos o lixo que encontramos.", "Um mar limpo é a casa de muitos animais."]}, {"t": "eco-mar", "ti": "Praias limpas", "f": ["No fim de um dia de praia, levamos o nosso lixo.", "Não deixamos garrafas nem papéis na areia.", "As beatas e as tampas também poluem.", "A bandeira azul mostra as praias mais limpas.", "Todos podemos ajudar a mantê-las assim."]}, {"t": "eco-alimentacao", "ti": "Comer bem", "f": ["Uma alimentação saudável dá-nos energia.", "Devemos comer fruta e legumes todos os dias.", "A água é a melhor bebida para matar a sede.", "Os doces ficam para os dias de festa.", "Comer bem ajuda-nos a crescer."]}, {"t": "eco-alimentacao", "ti": "Um lanche sem lixo", "f": ["O nosso lanche pode ter menos lixo.", "Em vez de embalagens, usamos caixas que se lavam.", "A garrafa de água pode ser sempre a mesma.", "A fruta já vem embrulhada na casca.", "É um lanche saudável e amigo do ambiente."]}, {"t": "eco-mobilidade", "ti": "A caminho da escola", "f": ["Há muitas formas de ir para a escola.", "Alguns alunos vêm a pé com um adulto.", "Outros vêm de autocarro.", "Andar a pé faz bem à saúde e não polui.", "Quanto menos carros houver, mais limpo fica o ar."]}, {"t": "eco-ruido", "ti": "Menos ruído", "f": ["O barulho em excesso faz mal aos ouvidos.", "Na sala, falamos baixinho para todos se ouvirem.", "No recreio, podemos brincar sem gritar.", "Um ambiente calmo ajuda-nos a aprender.", "O silêncio também é importante."]}, {"t": "eco-floresta", "ti": "As árvores", "f": ["As árvores dão-nos sombra e ar puro.", "As suas raízes seguram a terra das encostas.", "Nos ramos, os pássaros fazem os ninhos.", "Uma árvore demora muitos anos a crescer.", "Por isso, plantar árvores é cuidar do futuro."]}, {"t": "eco-floresta", "ti": "Prevenir os incêndios", "f": ["No verão, as matas ficam muito secas.", "Um pequeno descuido pode causar um incêndio.", "Nunca se devem fazer fogueiras na floresta.", "Também não se deixa lixo nem vidros no chão.", "Proteger a floresta é dever de todos."]}, {"t": "em-corpo", "ti": "O meu corpo", "f": ["O corpo humano tem cabeça, tronco e membros.", "Os braços e as pernas são os membros.", "Dentro do corpo, há órgãos muito importantes.", "O coração bombeia o sangue sem parar.", "Os pulmões ajudam-nos a respirar."]}, {"t": "em-esqueleto", "ti": "Os ossos", "f": ["Dentro do nosso corpo há muitos ossos.", "Juntos, formam o esqueleto.", "O esqueleto segura o corpo e protege os órgãos.", "O crânio protege o cérebro.", "Para ter ossos fortes, bebemos leite e fazemos exercício."]}, {"t": "em-sentidos", "ti": "Os cinco sentidos", "f": ["Temos cinco sentidos para conhecer o mundo.", "Com os olhos, vemos as cores e as formas.", "Com os ouvidos, ouvimos os sons.", "O nariz sente os cheiros e a língua sente os sabores.", "Com a pele, sentimos se algo está quente ou frio."]}, {"t": "em-higiene", "ti": "A higiene", "f": ["Ter boa higiene ajuda a evitar doenças.", "Lavamos as mãos antes de comer.", "Depois das refeições, escovamos os dentes.", "Tomar banho todos os dias também é importante.", "Assim, o corpo fica limpo e saudável."]}, {"t": "em-sono", "ti": "Dormir bem", "f": ["Dormir é muito importante para crescer.", "Enquanto dormimos, o corpo descansa.", "As crianças devem dormir cerca de dez horas.", "Antes de dormir, é melhor desligar os ecrãs.", "Quem dorme bem aprende melhor."]}, {"t": "em-seguranca", "ti": "Atravessar a rua", "f": ["Para atravessar a rua, usamos a passadeira.", "Antes de atravessar, olhamos para os dois lados.", "Se houver semáforo, esperamos pelo boneco verde.", "Nunca atravessamos a correr.", "A segurança está sempre em primeiro lugar."]}, {"t": "em-seguranca", "ti": "Viajar de carro", "f": ["Quando viajamos de carro, usamos sempre o cinto.", "As crianças sentam-se numa cadeira própria.", "Não devemos distrair o condutor.", "Saímos do carro pelo lado do passeio.", "Assim, viajamos em segurança."]}, {"t": "em-plantas", "ti": "As partes da planta", "f": ["As plantas têm raiz, caule, folhas, flores e frutos.", "A raiz prende a planta à terra.", "Pela raiz, a planta absorve a água.", "As folhas precisam da luz do sol.", "Das flores nascem os frutos com sementes."]}, {"t": "em-plantas", "ti": "Uma semente", "f": ["Pus um feijão num copo com algodão molhado.", "Passados uns dias, a semente abriu.", "Primeiro, apareceu uma pequena raiz.", "Depois, surgiu um caule com duas folhas.", "Afinal, uma semente guarda uma planta inteira!"]}, {"t": "em-animais", "ti": "Como nascem os animais", "f": ["Os animais nascem de formas diferentes.", "O cão e o golfinho são vivíparos.", "As aves e as tartarugas nascem de ovos.", "Por isso, chamam-se ovíparos.", "Os mamíferos alimentam as crias com leite."]}, {"t": "em-animais", "ti": "O revestimento", "f": ["O corpo dos animais tem revestimentos diferentes.", "As aves têm penas e os peixes têm escamas.", "O coelho e o gato têm pelo.", "A tartaruga tem uma carapaça dura.", "O revestimento protege os animais do frio e dos perigos."]}, {"t": "em-animais", "ti": "O que comem os animais", "f": ["Os animais alimentam-se de formas diferentes.", "Os herbívoros, como a vaca, comem plantas.", "Os carnívoros, como o lobo, comem outros animais.", "Os omnívoros comem de tudo.", "O ser humano também é omnívoro."]}, {"t": "em-tempo", "ti": "O estado do tempo", "f": ["Todos os dias, observamos o estado do tempo.", "Pode estar sol, nublado, chuva ou vento.", "O termómetro mede a temperatura do ar.", "Na Madeira, o clima é ameno quase todo o ano.", "Registamos o tempo no calendário da sala."]}, {"t": "em-ar", "ti": "O ar", "f": ["O ar está à nossa volta, mas não o vemos.", "Sentimos o ar quando sopra o vento.", "Precisamos de ar para respirar.", "As plantas ajudam a limpar o ar.", "Por isso, devemos evitar a poluição."]}, {"t": "em-agua", "ti": "Os estados da água", "f": ["A água pode estar em três estados.", "No copo, a água está no estado líquido.", "No congelador, transforma-se em gelo, que é sólido.", "Quando ferve, transforma-se em vapor.", "O vapor de água é um gás."]}, {"t": "em-sistema-solar", "ti": "O Sol e os planetas", "f": ["O Sol é uma estrela muito grande.", "À sua volta giram oito planetas.", "A Terra é o terceiro planeta a contar do Sol.", "A Lua gira à volta da Terra.", "À noite, a Lua reflete a luz do Sol."]}, {"t": "em-dia-noite", "ti": "O dia e a noite", "f": ["A Terra está sempre a rodar sobre si mesma.", "A parte virada para o Sol tem dia.", "A outra parte fica de noite.", "Uma volta completa demora vinte e quatro horas.", "É por isso que temos dia e noite."]}, {"t": "em-madeira", "ti": "A nossa ilha", "f": ["A Madeira é uma ilha no oceano Atlântico.", "A sua capital é o Funchal.", "O ponto mais alto é o Pico Ruivo.", "Juntamente com o Porto Santo, forma um arquipélago.", "Também fazem parte dele as Desertas e as Selvagens."]}, {"t": "em-madeira", "ti": "As levadas", "f": ["As levadas são canais que levam a água pela serra.", "Foram construídas há muitos anos, à mão.", "A água das levadas rega os campos e as hortas.", "Ao lado delas, há caminhos para passear.", "Percorrer uma levada é conhecer a natureza da ilha."]}, {"t": "em-madeira", "ti": "O Porto Santo", "f": ["O Porto Santo é a ilha dourada.", "Tem uma praia de areia com nove quilómetros.", "Para lá chegar, vamos de barco ou de avião.", "A água do mar é calma e transparente.", "No verão, muitas pessoas passam lá as férias."]}, {"t": "em-freguesia", "ti": "A minha freguesia", "f": ["A nossa escola fica na freguesia de São Martinho.", "Esta freguesia pertence ao concelho do Funchal.", "Tem casas, escolas, lojas e jardins.", "A festa da freguesia é em novembro.", "Conhecer o sítio onde vivemos é importante."]}, {"t": "em-transportes", "ti": "Os transportes", "f": ["Os transportes levam pessoas e mercadorias.", "Há transportes terrestres, como o autocarro e o carro.", "O barco é um transporte marítimo.", "O avião é um transporte aéreo.", "Para viajar até à Madeira, usamos o barco ou o avião."]}, {"t": "em-comunicacao", "ti": "Comunicar à distância", "f": ["Antigamente, as pessoas escreviam cartas.", "As cartas demoravam dias a chegar.", "Depois, apareceu o telefone.", "Hoje, também usamos o computador e o telemóvel.", "Comunicar ficou muito mais rápido."]}, {"t": "em-profissoes", "ti": "As profissões", "f": ["Há muitas profissões diferentes.", "O médico trata dos doentes.", "O professor ensina os alunos.", "O pescador apanha o peixe no mar.", "Todas as profissões são importantes para a comunidade."]}, {"t": "em-passado", "ti": "Brinquedos antigos", "f": ["Antigamente, muitos brinquedos eram feitos à mão.", "As crianças brincavam com piões e bonecas de trapos.", "Também jogavam ao berlinde e à macaca.", "Muitos destes jogos ainda hoje se jogam.", "Os brinquedos mudam, mas a alegria de brincar é a mesma."]}, {"t": "em-historia", "ti": "A chegada à Madeira", "f": ["Em 1418, João Gonçalves Zarco e Tristão Vaz Teixeira chegaram ao Porto Santo.", "No ano seguinte, chegaram à Madeira.", "A ilha estava coberta de árvores.", "Por isso, deram-lhe o nome de Madeira.", "Foi o início do povoamento da ilha."]}, {"t": "em-historia", "ti": "Os Descobrimentos", "f": ["Há mais de quinhentos anos, os portugueses navegaram por mares desconhecidos.", "Viajavam em caravelas, barcos leves e rápidos.", "Usavam a bússola e o astrolábio para se orientarem.", "Chegaram à Índia, ao Brasil e a muitos outros lugares.", "Esta época chama-se Descobrimentos."]}, {"t": "em-orientacao", "ti": "Os pontos cardeais", "f": ["Os pontos cardeais ajudam-nos a orientar.", "São o norte, o sul, o este e o oeste.", "O Sol nasce a este e põe-se a oeste.", "A bússola aponta sempre para norte.", "Nos mapas, o norte fica em cima."]}, {"t": "em-rochas", "ti": "As rochas da ilha", "f": ["A Madeira nasceu de vulcões, há milhões de anos.", "Por isso, muitas rochas da ilha são vulcânicas.", "O basalto é uma rocha escura e dura.", "Com ele, construíram-se muros e casas.", "Ainda hoje se veem muros feitos de pedra."]}, {"t": "em-materiais", "ti": "Os materiais", "f": ["Os objetos são feitos de materiais diferentes.", "A mesa é de madeira e a janela é de vidro.", "As latas são de metal.", "Muitos brinquedos são de plástico.", "Alguns materiais vêm da natureza e outros são fabricados."]}, {"t": "em-magnetes", "ti": "Os ímanes", "f": ["Os ímanes atraem alguns objetos de metal.", "Um prego e um clipe são atraídos pelo íman.", "A madeira e o plástico não são atraídos.", "Com um íman, podemos fazer experiências divertidas.", "A bússola também funciona com um íman."]}], "q": [{"t": "escola", "ti": "A minha escola", "v": ["Na minha escola há livros,", "há cores e muita alegria,", "aprendo coisas novas", "a cada hora do dia."]}, {"t": "escola", "ti": "No recreio", "v": ["No recreio, ao sol,", "jogamos à bola,", "depois voltamos contentes", "para dentro da escola."]}, {"t": "outono", "ti": "Folhas", "v": ["Cai a folha amarela,", "cai a folha castanha,", "o vento leva-as a dançar", "por cima da montanha."]}, {"t": "outono", "ti": "Chegou o outono", "v": ["Chegou o outono", "com vento e chuva,", "e na videira madura", "já brilha a uva."]}, {"t": "smartinho", "ti": "Castanhas", "v": ["Castanhas na fogueira,", "quentinhas a estalar,", "junto-me aos meus amigos", "e começo a cantar."]}, {"t": "smartinho", "ti": "A lenda", "v": ["Martinho deu a capa", "a quem tinha frio,", "e o sol apareceu", "sobre o monte e o rio."]}, {"t": "natal", "ti": "Luzes de Natal", "v": ["Brilham luzes na cidade,", "há estrelas a cintilar,", "o Natal chegou de mansinho", "e todos querem cantar."]}, {"t": "natal", "ti": "A minha árvore", "v": ["Na árvore de Natal", "pendurei uma estrela,", "e fiquei a olhar", "para a luz da janela."]}, {"t": "inverno", "ti": "Inverno", "v": ["Chegou o frio do inverno,", "o céu ficou cinzento,", "fecho bem a janela", "para não entrar o vento."]}, {"t": "inverno", "ti": "Bem agasalhado", "v": ["Pus o meu cachecol", "e o gorro de lã,", "para ir à escola", "logo pela manhã."]}, {"t": "carnaval", "ti": "Máscaras", "v": ["Uma máscara colorida,", "um chapéu de palhaço,", "no desfile de Carnaval", "danço a cada passo."]}, {"t": "carnaval", "ti": "O pirata", "v": ["Mascarei-me de pirata", "com espada e chapéu,", "atirei serpentinas", "que voaram até ao céu."]}, {"t": "primavera", "ti": "Primavera", "v": ["Abriu-se uma flor", "no meu jardim,", "a abelha veio vê-la", "e sorriu para mim."]}, {"t": "primavera", "ti": "A andorinha", "v": ["A andorinha voltou", "e fez o seu ninho,", "canta de manhã", "junto ao meu caminho."]}, {"t": "festaflor", "ti": "Cor e flor", "v": ["Na Festa da Flor", "o Funchal ganha cor,", "cada criança leva", "nas mãos uma flor."]}, {"t": "festaflor", "ti": "O Muro da Esperança", "v": ["Levei uma flor", "para o Muro da Esperança,", "sou pequenino mas ajudo", "como qualquer criança."]}, {"t": "terra", "ti": "O planeta", "v": ["Separo o papel,", "o vidro e o plástico,", "cuidar do planeta", "é mesmo fantástico!"]}, {"t": "terra", "ti": "Uma árvore", "v": ["Planto uma árvore", "junto ao meu quintal,", "e um dia vai crescer", "até ser um pinhal."]}, {"t": "livros", "ti": "O meu livro", "v": ["Abro o meu livro", "e começo a sonhar,", "viajo sem sair", "do meu lugar."]}, {"t": "livros", "ti": "Na biblioteca", "v": ["Na biblioteca", "há livros sem fim,", "cada um tem uma história", "que fala para mim."]}, {"t": "mar", "ti": "O mar", "v": ["O mar é azul,", "o céu também,", "da minha ilha", "gosto como ninguém."]}, {"t": "mar", "ti": "O golfinho", "v": ["Vi um golfinho", "a saltar no mar,", "fiquei na praia", "a vê-lo nadar."]}, {"t": "amizade", "ti": "Amigos", "v": ["Tenho um amigo", "que é especial,", "brincamos juntos", "no parque e no quintal."]}, {"t": "amizade", "ti": "Amizade", "v": ["Dou a mão ao meu amigo", "e partilho o meu pão,", "a amizade verdadeira", "mora no coração."]}, {"t": "animais", "ti": "O cão", "v": ["O meu cão abana", "a cauda ao chegar,", "salta de contente", "e quer ir passear."]}, {"t": "animais", "ti": "O coelho", "v": ["O coelho branquinho", "come uma cenoura,", "salta pelo prado", "e depois vai-se embora."]}, {"t": "tecnologia", "ti": "O teclado", "v": ["Carrego numa tecla,", "aparece a letra A,", "junto mais umas quantas", "e uma palavra está cá!"]}, {"t": "tecnologia", "ti": "O rato", "v": ["O rato do computador", "não come queijo,", "clica aqui e ali", "em tudo o que vejo."]}, {"t": "verao", "ti": "Verão", "v": ["Sol a brilhar,", "areia a aquecer,", "mergulho no mar", "com muito prazer."]}, {"t": "verao", "ti": "O castelo", "v": ["Na praia, ao sol,", "fiz um castelo de areia,", "veio uma onda", "e levou-o à sereia."]}, {"t": "desporto", "ti": "A bola", "v": ["A bola rola,", "rola sem parar,", "passo ao meu amigo", "e ele vai marcar."]}, {"t": "desporto", "ti": "Na ginástica", "v": ["Na aula de ginástica", "salto muito alto,", "caio no colchão", "com um grande salto."]}, {"t": "eco-agua", "ti": "A torneira", "v": ["Fecho bem a torneira", "quando escovo os dentes,", "cada gota que poupo", "deixa os rios contentes."]}, {"t": "eco-agua", "ti": "A chuva", "v": ["Cai a chuva na serra,", "corre a água na levada,", "rega a horta e o pomar", "e a terra fica molhada."]}, {"t": "eco-energia", "ti": "Energia limpa", "v": ["O sol dá-nos energia,", "o vento também a dá,", "é uma energia limpa", "que nunca se acabará."]}, {"t": "eco-energia", "ti": "Desligar", "v": ["Quando acaba o jogo", "desligo o ecrã,", "poupo energia hoje", "e também amanhã."]}, {"t": "eco-residuos", "ti": "Cada um no seu lugar", "v": ["Papel no azul,", "plástico no amarelo,", "vidro no verde,", "e o planeta fica belo."]}, {"t": "eco-residuos", "ti": "Reutilizar", "v": ["Uma garrafa velha", "pode ser um vaso novo,", "reciclar e reutilizar", "é bom para todo o povo."]}, {"t": "eco-compostagem", "ti": "A minhoca", "v": ["A minhoca trabalha", "no fundo do compostor,", "faz das cascas terra", "para a horta e para a flor."]}, {"t": "eco-horta", "ti": "A horta", "v": ["Na horta da escola", "há couves e feijão,", "quem cuida da terra", "tem sempre o seu pão."]}, {"t": "eco-floresta", "ti": "Plantar", "v": ["Plantei uma árvore", "no meio do quintal,", "vai dar sombra e frutos", "e ar puro e natural."]}, {"t": "eco-biodiversidade", "ti": "A floresta antiga", "v": ["Na serra há uma floresta", "antiga e verdejante,", "guarda plantas e aves", "num mundo fascinante."]}, {"t": "eco-mar", "ti": "A tartaruga", "v": ["A tartaruga nada", "no azul do oceano,", "não lhe deixes plástico,", "que lhe faz muito dano."]}, {"t": "eco-alimentacao", "ti": "Fruta", "v": ["Uma maçã ao lanche,", "uma laranja ao jantar,", "a fruta dá-me força", "para correr e saltar."]}, {"t": "eco-mobilidade", "ti": "A pé", "v": ["Vou a pé para a escola,", "com calma e devagar,", "não faço fumo nenhum", "e ajudo a limpar o ar."]}, {"t": "eco-ruido", "ti": "Baixinho", "v": ["Falo baixinho na sala,", "não grito no corredor,", "com menos barulho", "aprendo muito melhor."]}, {"t": "em-corpo", "ti": "O coração", "v": ["O meu coração bate", "dentro do meu peito,", "trabalha noite e dia", "sempre a seu jeito."]}, {"t": "em-sentidos", "ti": "Os sentidos", "v": ["Vejo com os olhos,", "ouço com os ouvidos,", "cheiro com o nariz,", "e assim uso os sentidos."]}, {"t": "em-higiene", "ti": "Mãos limpas", "v": ["Antes de comer", "lavo as mãos com sabão,", "esfrego bem os dedos", "e fico um campeão."]}, {"t": "em-seguranca", "ti": "A passadeira", "v": ["Na passadeira eu paro", "e olho para os dois lados,", "e só atravesso", "com os carros parados."]}, {"t": "em-plantas", "ti": "A semente", "v": ["Uma semente pequena", "dorme debaixo do chão,", "com água e com sol", "cresce e vira feijão."]}, {"t": "em-animais", "ti": "Penas e escamas", "v": ["O peixe tem escamas,", "o pássaro tem penas,", "o gato tem pelo macio", "e o caracol tem antenas."]}, {"t": "em-tempo", "ti": "O tempo", "v": ["Hoje está sol,", "amanhã vai chover,", "olho para o céu", "para o tempo saber."]}, {"t": "em-sistema-solar", "ti": "A Lua", "v": ["A Lua lá no céu", "gira à volta da Terra,", "ilumina a noite,", "o mar e a serra."]}, {"t": "em-madeira", "ti": "A Madeira", "v": ["No meio do Atlântico", "há uma ilha a brilhar,", "tem serras e levadas", "e flores de encantar."]}, {"t": "em-madeira", "ti": "O Pico Ruivo", "v": ["Subi ao Pico Ruivo,", "o mais alto da ilha,", "lá de cima vi o mar", "e o sol que tanto brilha."]}, {"t": "em-transportes", "ti": "Viagens", "v": ["O barco vai no mar,", "o avião vai no céu,", "o autocarro vai na estrada", "e eu vou de chapéu."]}, {"t": "em-profissoes", "ti": "Profissões", "v": ["O pescador vai ao mar,", "o padeiro faz o pão,", "o médico trata os doentes", "com todo o coração."]}, {"t": "em-passado", "ti": "O pião", "v": ["O pião roda, roda,", "no chão do terreiro,", "brincava-se assim", "no tempo do candeeiro."]}, {"t": "em-historia", "ti": "As caravelas", "v": ["Partiram as caravelas", "com as velas a brilhar,", "os marinheiros corajosos", "foram o mundo explorar."]}, {"t": "em-dia-noite", "ti": "Dia e noite", "v": ["A Terra gira, gira,", "e o dia vai embora,", "chega a noite escura", "até à nova aurora."]}, {"t": "em-ar", "ti": "O vento", "v": ["O vento não se vê,", "mas sente-se a passar,", "mexe as folhas e as nuvens", "e faz os moinhos rodar."]}]}, "y1": {"p": [{"t": "escola", "ti": "A escola", "f": ["Eu gosto da escola.", "Na sala há livros."]}, {"t": "outono", "ti": "O outono", "f": ["A folha caiu.", "O vento sopra."]}, {"t": "smartinho", "ti": "São Martinho", "f": ["Eu como castanhas.", "Hoje há magusto."]}, {"t": "natal", "ti": "O Natal", "f": ["A árvore tem luzes.", "A estrela brilha."]}, {"t": "inverno", "ti": "O inverno", "f": ["Está muito frio.", "Eu uso um gorro."]}, {"t": "carnaval", "ti": "O Carnaval", "f": ["Eu sou um pirata.", "A Ana é uma fada."]}, {"t": "primavera", "ti": "A primavera", "f": ["A flor abriu.", "A abelha voa."]}, {"t": "festaflor", "ti": "A Festa da Flor", "f": ["Eu levo uma flor.", "O Funchal tem cor."]}, {"t": "terra", "ti": "O planeta", "f": ["Eu poupo água.", "Eu planto uma árvore."]}, {"t": "livros", "ti": "O livro", "f": ["Eu leio um livro.", "O livro tem um rei."]}, {"t": "mar", "ti": "O mar", "f": ["O mar é azul.", "O barco navega."]}, {"t": "amizade", "ti": "Amigos", "f": ["O meu amigo é bom.", "Nós brincamos juntos."]}, {"t": "animais", "ti": "O gato", "f": ["O gato bebe leite.", "O gato dorme."]}, {"t": "tecnologia", "ti": "O computador", "f": ["Eu uso o rato.", "Eu escrevo no teclado."]}, {"t": "verao", "ti": "O verão", "f": ["Eu vou à praia.", "Eu como um gelado."]}, {"t": "desporto", "ti": "A bola", "f": ["Eu chuto a bola.", "A bola rola."]}, {"t": "eco-agua", "ti": "A água", "f": ["Eu fecho a torneira.", "A água é preciosa."]}, {"t": "eco-residuos", "ti": "O ecoponto", "f": ["O papel vai no azul.", "O vidro vai no verde."]}, {"t": "eco-energia", "ti": "A luz", "f": ["Eu apago a luz.", "Assim poupo energia."]}, {"t": "eco-horta", "ti": "A horta", "f": ["Na horta há couves.", "Eu rego a alface."]}, {"t": "eco-floresta", "ti": "A árvore", "f": ["A árvore é alta.", "Dá sombra e ar puro."]}, {"t": "eco-mar", "ti": "A praia", "f": ["Eu apanho o lixo.", "A praia fica limpa."]}, {"t": "eco-alimentacao", "ti": "A fruta", "f": ["Eu como uma maçã.", "A fruta faz bem."]}, {"t": "eco-biodiversidade", "ti": "O pombo", "f": ["O pombo voa na serra.", "Vive na floresta."]}, {"t": "em-corpo", "ti": "O corpo", "f": ["Eu tenho dois braços.", "Eu tenho duas pernas."]}, {"t": "em-sentidos", "ti": "Os olhos", "f": ["Eu vejo com os olhos.", "Eu ouço com os ouvidos."]}, {"t": "em-higiene", "ti": "Mãos limpas", "f": ["Eu lavo as mãos.", "Uso água e sabão."]}, {"t": "em-higiene", "ti": "Os dentes", "f": ["Eu escovo os dentes.", "Os dentes ficam limpos."]}, {"t": "em-seguranca", "ti": "A rua", "f": ["Eu olho para os lados.", "Depois, atravesso a rua."]}, {"t": "em-tempo", "ti": "O tempo", "f": ["Hoje está sol.", "Amanhã vai chover."]}, {"t": "em-plantas", "ti": "A semente", "f": ["A semente cresceu.", "Agora é uma planta."]}, {"t": "em-animais", "ti": "As escamas", "f": ["O peixe tem escamas.", "O peixe vive na água."]}, {"t": "em-animais", "ti": "A vaca", "f": ["A vaca come erva.", "A vaca dá leite."]}, {"t": "em-madeira", "ti": "Vivo numa ilha", "f": ["Eu vivo numa ilha.", "A ilha é a Madeira."]}, {"t": "em-transportes", "ti": "O avião", "f": ["O avião voa alto.", "O barco vai no mar."]}, {"t": "em-profissoes", "ti": "O padeiro", "f": ["O padeiro faz pão.", "O pão é quentinho."]}, {"t": "em-dia-noite", "ti": "A noite", "f": ["À noite, vejo a Lua.", "De dia, vejo o Sol."]}, {"t": "escola", "ti": "A sala", "f": ["A sala tem mesas.", "A sala tem um quadro."]}, {"t": "amizade", "ti": "O recreio", "f": ["No recreio, eu salto.", "O Rui joga à bola."]}, {"t": "animais", "ti": "O lago", "f": ["O pato nada no lago.", "O pato faz quá-quá."]}, {"t": "desporto", "ti": "O jogo", "f": ["Eu corro muito.", "Eu salto alto."]}, {"t": "livros", "ti": "A história", "f": ["Eu ouço uma história.", "A história tem uma fada."]}, {"t": "tecnologia", "ti": "O teclado", "f": ["O teclado tem letras.", "Eu carrego nas teclas."]}, {"t": "mar", "ti": "O barco", "f": ["O barco é azul.", "O barco vai ao mar."]}, {"t": "outono", "ti": "As folhas", "f": ["As folhas caem.", "As folhas são amarelas."]}, {"t": "inverno", "ti": "O gorro", "f": ["O gorro é de lã.", "O gorro é quente."]}], "q": [{"t": "escola", "ti": "Abro o livro", "v": ["Abro o livro,", "leio e sorrio."]}, {"t": "escola", "ti": "O lápis", "v": ["O meu lápis", "pinta o papel."]}, {"t": "outono", "ti": "A folha", "v": ["A folha cai", "e vai dançar."]}, {"t": "outono", "ti": "Chuva", "v": ["Pinga a chuva", "no meu chapéu."]}, {"t": "smartinho", "ti": "Castanhas", "v": ["Castanha quente", "na minha mão."]}, {"t": "smartinho", "ti": "O sol", "v": ["Martinho deu a capa", "e veio o sol."]}, {"t": "natal", "ti": "Estrela", "v": ["Brilha a estrela", "no alto da árvore."]}, {"t": "natal", "ti": "Bolo de mel", "v": ["Bolo de mel", "na mesa do Natal."]}, {"t": "inverno", "ti": "Frio", "v": ["Faz frio lá fora,", "fico a ler."]}, {"t": "inverno", "ti": "Sopa", "v": ["A sopa quente", "sabe tão bem."]}, {"t": "carnaval", "ti": "Máscara", "v": ["Ponho a máscara", "e vou dançar."]}, {"t": "carnaval", "ti": "O palhaço", "v": ["O palhaço ri", "e faz rir."]}, {"t": "primavera", "ti": "A flor", "v": ["Uma flor bonita", "no meu jardim."]}, {"t": "primavera", "ti": "A abelha", "v": ["A abelha voa", "e faz o mel."]}, {"t": "festaflor", "ti": "Flores", "v": ["Flores e cores", "na minha ilha."]}, {"t": "festaflor", "ti": "O muro", "v": ["Ponho a flor", "no muro."]}, {"t": "terra", "ti": "A Terra", "v": ["A Terra é a casa", "de todos nós."]}, {"t": "terra", "ti": "Reciclar", "v": ["Papel no azul,", "vidro no verde."]}, {"t": "livros", "ti": "Ler", "v": ["Leio um conto", "antes de dormir."]}, {"t": "livros", "ti": "A página", "v": ["Viro a página,", "vejo um dragão."]}, {"t": "mar", "ti": "O peixe", "v": ["O peixe nada", "no mar azul."]}, {"t": "mar", "ti": "A onda", "v": ["Vem a onda,", "vai a onda."]}, {"t": "amizade", "ti": "Amigo", "v": ["Dou-te a mão,", "meu amigo."]}, {"t": "amizade", "ti": "Abraço", "v": ["Um abraço", "dá alegria."]}, {"t": "animais", "ti": "O pato", "v": ["O pato nada", "no lago."]}, {"t": "animais", "ti": "O cão", "v": ["O meu cão", "gosta de correr."]}, {"t": "tecnologia", "ti": "O rato", "v": ["Clico no rato,", "abro o jogo."]}, {"t": "tecnologia", "ti": "Teclas", "v": ["Tecla a tecla", "escrevo o meu nome."]}, {"t": "verao", "ti": "Areia", "v": ["Pá e balde", "na areia."]}, {"t": "verao", "ti": "Sol", "v": ["O sol brilha,", "eu vou nadar."]}, {"t": "desporto", "ti": "Saltar", "v": ["Salto alto,", "salto baixo."]}, {"t": "desporto", "ti": "Golo", "v": ["A bola rola,", "é golo!"]}, {"t": "eco-agua", "ti": "Gota", "v": ["Uma gota de água", "vale um tesouro."]}, {"t": "eco-residuos", "ti": "Reciclo", "v": ["Papel, plástico e vidro,", "cada um no seu lugar."]}, {"t": "eco-horta", "ti": "A couve", "v": ["A couve cresce", "na horta da escola."]}, {"t": "eco-floresta", "ti": "Árvores", "v": ["Planto uma árvore", "e fico contente."]}, {"t": "eco-mar", "ti": "Mar limpo", "v": ["Mar azul e limpo,", "casa do peixinho."]}, {"t": "eco-alimentacao", "ti": "Lanche", "v": ["Pão e fruta", "no meu lanche."]}, {"t": "em-corpo", "ti": "Mexer", "v": ["Mexo os braços,", "mexo os pés."]}, {"t": "em-sentidos", "ti": "Cheirar", "v": ["Cheiro a flor", "com o nariz."]}, {"t": "em-higiene", "ti": "Sabão", "v": ["Água e sabão,", "mão na mão."]}, {"t": "em-tempo", "ti": "Chuva e sol", "v": ["Chove, chove,", "e depois faz sol."]}, {"t": "em-animais", "ti": "O galo", "v": ["O galo canta", "de manhã cedo."]}, {"t": "em-plantas", "ti": "Ao sol", "v": ["A flor abriu", "ao sol da manhã."]}, {"t": "em-madeira", "ti": "Ilha", "v": ["A minha ilha bonita", "no meio do mar."]}, {"t": "em-transportes", "ti": "O comboio", "v": ["Pouca-terra, pouca-terra,", "lá vai o comboio."]}, {"t": "em-dia-noite", "ti": "A Lua", "v": ["A Lua brilha", "e eu vou dormir."]}, {"t": "escola", "ti": "O caderno", "v": ["No meu caderno", "escrevo o meu nome."]}, {"t": "amizade", "ti": "Juntos", "v": ["Eu e tu", "somos amigos."]}, {"t": "animais", "ti": "O sapo", "v": ["O sapo salta", "para o lago."]}, {"t": "tecnologia", "ti": "Clique", "v": ["O rato do computador", "não come queijo."]}, {"t": "desporto", "ti": "A corrida", "v": ["Corro, corro,", "até à meta."]}]}, "casos": {"1": [{"c": "letra-A", "n": "a letra A", "d": "Repara na letra A: amarela.", "re": "[aáàâã]", "ti": "Abelha amarela", "f": ["A abelha voa.", "A abelha é amarela."]}, {"c": "letra-E", "n": "a letra E", "d": "Repara na letra E: elefante.", "re": "[eéê]", "ti": "O elefante", "f": ["O elefante é enorme.", "Ele bebe água."]}, {"c": "letra-I", "n": "a letra I", "d": "Repara na letra I: bonita.", "re": "[ií]", "ti": "Ilha bonita", "f": ["A ilha é bonita.", "Eu vivo na ilha."]}, {"c": "letra-O", "n": "a letra O", "d": "Repara na letra O: ovo.", "re": "[oóôõ]", "ti": "O ovo", "f": ["O ovo é branco.", "O ovo está no ninho."]}, {"c": "letra-U", "n": "a letra U", "d": "Repara na letra U: uva.", "re": "[uú]", "ti": "A uva", "f": ["A uva é doce.", "Eu como uma uva."]}, {"c": "letra-P", "n": "a letra P", "d": "Repara na letra P: pato Pipo.", "re": "p", "ti": "O pato Pipo", "f": ["O pato é pequeno.", "O pato pula na poça."]}, {"c": "letra-T", "n": "a letra T", "d": "Repara na letra T: tomate.", "re": "t", "ti": "O tomate", "f": ["O tomate é vermelho.", "Está no prato."]}, {"c": "letra-L", "n": "a letra L", "d": "Repara na letra L: leão.", "re": "l", "ti": "O leão", "f": ["O leão é lindo.", "O leão lê um livro."]}, {"c": "letra-D", "n": "a letra D", "d": "Repara na letra D: dado.", "re": "d", "ti": "O dado", "f": ["O dado tem pintas.", "O dedo toca no dado."]}, {"c": "letra-M", "n": "a letra M", "d": "Repara na letra M: mota.", "re": "m", "ti": "A mota", "f": ["A mota é amarela.", "A mota é minha."]}, {"c": "letra-N", "n": "a letra N", "d": "Repara na letra N: navio.", "re": "n", "ti": "O navio", "f": ["O navio navega.", "O navio vai ao norte."]}, {"c": "letra-V", "n": "a letra V", "d": "Repara na letra V: vaca Vivi.", "re": "v", "ti": "A vaca Vivi", "f": ["A vaca é malhada.", "A vaca vê o vale."]}, {"c": "letra-F", "n": "a letra F", "d": "Repara na letra F: foca.", "re": "f", "ti": "A foca", "f": ["A foca é feliz.", "A foca faz uma festa."]}, {"c": "letra-R", "n": "a letra R", "d": "Repara na letra R: roedor.", "re": "r", "ti": "Rato roedor", "f": ["O rato roeu a rolha.", "O rato ri."]}, {"c": "letra-S", "n": "a letra S", "d": "Repara na letra S: sapo saltitão.", "re": "s", "ti": "O sapo saltitão", "f": ["O sapo salta.", "O sapo sobe ao sofá."]}, {"c": "letra-C", "n": "a letra C", "d": "Repara na letra C: cavalo.", "re": "c", "ti": "O cavalo", "f": ["O cavalo corre.", "O cão come."]}, {"c": "letra-G", "n": "a letra G", "d": "Repara na letra G: gato gordo.", "re": "g", "ti": "O gato gordo", "f": ["O gato gosta de leite.", "O gato é gordo."]}, {"c": "letra-B", "n": "a letra B", "d": "Repara na letra B: bola bonita.", "re": "b", "ti": "A bola bonita", "f": ["A bola é bonita.", "O bebé bate na bola."]}, {"c": "letra-J", "n": "a letra J", "d": "Repara na letra J: janela.", "re": "j", "ti": "A janela", "f": ["A janela está aberta.", "Vejo o jardim."]}, {"c": "letra-Z", "n": "a letra Z", "d": "Repara na letra Z: zebra.", "re": "z", "ti": "A zebra", "f": ["A zebra tem riscas.", "A zebra está no zoo."]}], "2": [{"c": "r-final", "n": "ar, er, ir, or, ur", "d": "O r no fim da sílaba: mar, ver, ir, flor, urso.", "re": "[aeiouáéíóúâêô]r(?![aeiouáéíóúâêôãõr])", "ti": "O urso Artur", "f": ["O urso Artur gosta de dormir.", "Ao acordar, vai ao mar nadar.", "Depois, come morangos e vai brincar."]}, {"c": "r-final", "n": "ar, er, ir, or, ur", "d": "O r no fim da sílaba: mar, ver, ir, flor, urso.", "re": "[aeiouáéíóúâêô]r(?![aeiouáéíóúâêôãõr])", "ti": "A flor", "v": ["A flor do jardim", "tem perfume de mar,", "o urso vem cheirá-la", "e começa a cantar."]}, {"c": "l-final", "n": "al, el, il, ol, ul", "d": "O l no fim da sílaba: sal, mel, funil, sol, azul.", "re": "[aeiouáéíóúâêô]l(?![aeiouáéíóúâêôãõlh])", "ti": "O caracol", "f": ["O caracol saiu ao sol.", "Tem a casa às costas e anda devagar.", "No quintal, come folhas de alface."]}, {"c": "l-final", "n": "al, el, il, ol, ul", "d": "O l no fim da sílaba: sal, mel, funil, sol, azul.", "re": "[aeiouáéíóúâêô]l(?![aeiouáéíóúâêôãõlh])", "ti": "Mel e sol", "v": ["O sol é amarelo,", "o céu é azul,", "a abelha faz mel", "no jardim do sul."]}, {"c": "s-final", "n": "as, es, is, os, us", "d": "O s no fim da sílaba: festa, lápis, escola, pastel.", "re": "[aeiouáéíóúâêô]s(?![aeiouáéíóúâêôãõs])", "ti": "A festa", "f": ["Hoje há festa na escola.", "Os meninos trazem bolos e biscoitos.", "Todos cantam e dançam com alegria."]}, {"c": "s-final", "n": "as, es, is, os, us", "d": "O s no fim da sílaba: festa, lápis, escola, pastel.", "re": "[aeiouáéíóúâêô]s(?![aeiouáéíóúâêôãõs])", "ti": "As estrelas", "v": ["As estrelas pequenas", "brilham sem parar,", "fecho os meus olhos", "e começo a sonhar."]}, {"c": "n-final", "n": "an, en, in, on, un", "d": "O n no fim da sílaba: canto, dente, pintor, onda, fundo.", "re": "[aeiouáéíóúâêô]n(?![aeiouáéíóúâêôãõnh])", "ti": "O pintor", "f": ["O pintor pinta um quadro.", "Desenha uma onda e um barco.", "Depois, pinta o fundo com tinta azul."]}, {"c": "n-final", "n": "an, en, in, on, un", "d": "O n no fim da sílaba: canto, dente, pintor, onda, fundo.", "re": "[aeiouáéíóúâêô]n(?![aeiouáéíóúâêôãõnh])", "ti": "A onda", "v": ["Vem a onda a cantar", "e a areia a molhar,", "o menino contente", "corre para a apanhar."]}, {"c": "nh", "n": "nh", "d": "nh: ninho, banho, galinha, montanha.", "re": "nh", "ti": "A galinha", "f": ["A galinha tem um ninho no quintal.", "No ninho há seis ovos pequeninos.", "Amanhã de manhã, vão nascer pintainhos."]}, {"c": "nh", "n": "nh", "d": "nh: ninho, banho, galinha, montanha.", "re": "nh", "ti": "O ninho", "v": ["No ninho do pinheiro", "há um passarinho,", "canta de manhãzinha", "tão baixinho, baixinho."]}, {"c": "lh", "n": "lh", "d": "lh: folha, abelha, coelho, joelho.", "re": "lh", "ti": "Orelhas compridas", "f": ["O coelho tem orelhas compridas.", "Gosta de comer folhas de couve.", "Quando ouve barulho, salta para a toca."]}, {"c": "lh", "n": "lh", "d": "lh: folha, abelha, coelho, joelho.", "re": "lh", "ti": "A abelha", "v": ["A abelha trabalha", "de flor em flor,", "junta o mel dourado", "com todo o amor."]}, {"c": "ch", "n": "ch", "d": "ch: chuva, chave, chapéu, chocolate.", "re": "ch", "ti": "Dia de chuva", "f": ["Hoje está a chover muito.", "Calço as botas e levo o chapéu.", "Na rua, salto nas poças de chuva."]}, {"c": "ch", "n": "ch", "d": "ch: chuva, chave, chapéu, chocolate.", "re": "ch", "ti": "A chave", "v": ["Encontrei uma chave", "pequena e dourada,", "abre a caixa do chá", "que estava fechada."]}, {"c": "rr", "n": "rr", "d": "Entre vogais, o r forte escreve-se com rr: carro, terra, burro.", "re": "rr", "ti": "O cachorro", "f": ["O cachorro corre pela serra.", "Leva um osso na boca.", "Quando chega ao carro, ladra de alegria."]}, {"c": "rr", "n": "rr", "d": "Entre vogais, o r forte escreve-se com rr: carro, terra, burro.", "re": "rr", "ti": "A terra", "v": ["Corre o carro na estrada,", "corre o burro na serra,", "corre o rio para o mar", "por toda a nossa terra."]}, {"c": "ss", "n": "ss", "d": "Entre vogais, o som de s escreve-se com ss: pássaro, osso, passeio.", "re": "ss", "ti": "O pássaro", "f": ["O pássaro assobia na janela.", "Depois, vai passear pelo jardim.", "Ao fim da tarde, volta para o sossego do ninho."]}, {"c": "ss", "n": "ss", "d": "Entre vogais, o som de s escreve-se com ss: pássaro, osso, passeio.", "re": "ss", "ti": "O passeio", "v": ["Fui dar um passeio", "pela beira do mar,", "e ouvi um pássaro", "a assobiar."]}, {"c": "ç", "n": "ç", "d": "O ç tem som de s antes de a, o e u: laço, açúcar, criança.", "re": "ç", "ti": "O palhaço", "f": ["O palhaço tem um laço vermelho.", "Faz palhaçadas no circo.", "As crianças riem e batem palmas."]}, {"c": "ç", "n": "ç", "d": "O ç tem som de s antes de a, o e u: laço, açúcar, criança.", "re": "ç", "ti": "A caçarola", "v": ["Na caçarola há sopa", "de abóbora e feijão,", "bebo um copo de água", "e como um pedaço de pão."]}, {"c": "ge-gi", "n": "ge, gi", "d": "Em ge e gi, o g tem som de j: gelado, girafa, gente.", "re": "g[eiéíê]", "ti": "A girafa", "f": ["A girafa tem um pescoço muito comprido.", "Come as folhas mais altas das árvores.", "No jardim zoológico, é o animal mais alto."]}, {"c": "ge-gi", "n": "ge, gi", "d": "Em ge e gi, o g tem som de j: gelado, girafa, gente.", "re": "g[eiéíê]", "ti": "O gelado", "v": ["Comi um gelado", "de morango e limão,", "gelou-me a língua", "e o coração."]}, {"c": "gue-gui", "n": "gue, gui", "d": "Em gue e gui, o u não se lê: guitarra, foguete, águia.", "re": "gu[eiéíê]", "ti": "A guitarra", "f": ["O Guilherme toca guitarra.", "À noite, olha para o céu e vê um foguete.", "Depois, guarda a guitarra e vai dormir."]}, {"c": "gue-gui", "n": "gue, gui", "d": "Em gue e gui, o u não se lê: guitarra, foguete, águia.", "re": "gu[eiéíê]", "ti": "O foguete", "v": ["O foguete sobe,", "sobe sem parar,", "leva um astronauta", "à Lua para passear."]}, {"c": "que-qui", "n": "que, qui", "d": "Em que e qui, o u não se lê: queijo, máquina, esquilo.", "re": "qu[eiéíê]", "ti": "O piquenique", "f": ["Hoje vamos fazer um piquenique.", "Levamos queijo, pão e fruta.", "Sentamo-nos na relva, num sítio pequeno e tranquilo."]}, {"c": "que-qui", "n": "que, qui", "d": "Em que e qui, o u não se lê: queijo, máquina, esquilo.", "re": "qu[eiéíê]", "ti": "O esquilo", "v": ["O esquilo pequenino", "tem a cauda a balançar,", "esconde as nozes no tronco", "para o inverno passar."]}, {"c": "til", "n": "ã, ão", "d": "O til (~) dá som nasal: mão, maçã, leão, pão.", "re": "[ãõ]", "ti": "O sonho do cão", "f": ["O cão do João come uma maçã.", "Depois, deita-se no chão.", "Sonha que é um leão valente."]}, {"c": "til", "n": "ã, ão", "d": "O til (~) dá som nasal: mão, maçã, leão, pão.", "re": "[ãõ]", "ti": "A maçã", "v": ["Uma maçã vermelha", "caiu da árvore ao chão,", "apanhei-a contente", "e guardei-a na mão."]}, {"c": "s-z", "n": "s com som de z", "d": "Entre vogais, o s lê-se z: casa, rosa, mesa.", "re": "(?<=[aeiouáéíóúâêôãõ])s(?=[aeiouáéíóúâêôãõ])", "ti": "A casa", "f": ["A minha casa tem uma janela grande.", "No jardim, há uma rosa e uma mesa.", "À noite, a casa fica silenciosa."]}, {"c": "s-z", "n": "s com som de z", "d": "Entre vogais, o s lê-se z: casa, rosa, mesa.", "re": "(?<=[aeiouáéíóúâêôãõ])s(?=[aeiouáéíóúâêôãõ])", "ti": "A rosa", "v": ["A rosa do jardim", "é bonita e vermelha,", "tem um perfume tão doce", "que chama a abelha."]}], "3": [{"c": "h", "n": "h inicial", "d": "O h no início da palavra não se lê: hora, horta, hoje.", "re": "(?<![\\p{L}])h", "ti": "Hoje na horta", "f": ["Hoje fomos à horta da escola.", "Havia hortelã e uma hera no muro.", "O Hugo apanhou as ervas daninhas.", "À hora do lanche, estávamos cansados e felizes."]}, {"c": "h", "n": "h inicial", "d": "O h no início da palavra não se lê: hora, horta, hoje.", "re": "(?<![\\p{L}])h", "ti": "O hipopótamo", "v": ["O hipopótamo grandão", "toma banho no rio,", "à hora do almoço", "tem fome e não tem frio."]}, {"c": "x", "n": "sons do x", "d": "O x tem vários sons: xadrez, exame, táxi, próximo.", "re": "x", "ti": "O xadrez", "f": ["O Xavier joga xadrez com a Alexandra.", "É um jogo que exige muita atenção.", "No próximo sábado, há um torneio na escola.", "O vencedor ganha uma caixa de lápis."]}, {"c": "x", "n": "sons do x", "d": "O x tem vários sons: xadrez, exame, táxi, próximo.", "re": "x", "ti": "A caixa", "v": ["Na caixa do Xavier", "há um peixe de papel,", "um táxi amarelo", "e um lápis cor de mel."]}, {"c": "ch-x", "n": "ch ou x", "d": "O mesmo som pode escrever-se com ch ou x: chave, xaile, lixo, chá.", "re": "ch|x", "ti": "Chá e xarope", "f": ["Quando estou constipado, bebo chá com mel.", "Às vezes, também tomo xarope.", "Deito-me debaixo de uma manta e fecho os olhos.", "Ao fim de uns dias, já me sinto melhor."]}, {"c": "ch-x", "n": "ch ou x", "d": "O mesmo som pode escrever-se com ch ou x: chave, xaile, lixo, chá.", "re": "ch|x", "ti": "O lixo", "v": ["Não deites o lixo", "para o chão da rua,", "põe-no no caixote,", "a cidade também é tua."]}, {"c": "z", "n": "z", "d": "O z: zebra, azeite, vez, luz.", "re": "z", "ti": "A zebra", "f": ["A zebra tem riscas pretas e brancas.", "Vive em grupo nas savanas de África.", "Quando sente perigo, foge a grande velocidade.", "Cada zebra tem um desenho diferente."]}, {"c": "z", "n": "z", "d": "O z: zebra, azeite, vez, luz.", "re": "z", "ti": "A luz", "v": ["Acendo a luz", "mais uma vez,", "e vejo a zebra", "a jogar xadrez."]}, {"c": "ce-ci", "n": "ce, ci", "d": "Em ce e ci, o c tem som de s: cenoura, cidade, cinco.", "re": "c[eiéíê]", "ti": "Na cidade", "f": ["A cidade do Funchal fica à beira-mar.", "No centro, há um mercado com frutas e flores.", "Comprei cenouras, cebolas e cerejas.", "À noite, as luzes da cidade parecem estrelas."]}, {"c": "ce-ci", "n": "ce, ci", "d": "Em ce e ci, o c tem som de s: cenoura, cidade, cinco.", "re": "c[eiéíê]", "ti": "O circo", "v": ["Chegou o circo à cidade", "com cem palhaços a rir,", "o acrobata faz piruetas", "e eu não consigo dormir."]}, {"c": "m-pb", "n": "m antes de p e b", "d": "Antes de p e b, escreve-se m: campo, sombra, também.", "re": "m(?=[pb])", "ti": "No campo", "f": ["No campo, há pombas e pássaros a cantar.", "Sentei-me à sombra de uma árvore.", "Também vi um bombeiro a passar.", "O tempo ali passa devagar."]}, {"c": "m-pb", "n": "m antes de p e b", "d": "Antes de p e b, escreve-se m: campo, sombra, também.", "re": "m(?=[pb])", "ti": "A pomba", "v": ["A pomba branca", "voa sobre o campo,", "pousa no telhado", "e descansa um tempo."]}, {"c": "cao", "n": "-ção", "d": "Muitas palavras terminam em -ção: canção, lição, atenção.", "re": "ç[ãõ]", "ti": "A canção", "f": ["Na aula de música, aprendemos uma canção nova.", "Cantámos com muita atenção e emoção.", "No fim, a professora deu-nos os parabéns.", "Foi a melhor lição da semana."]}, {"c": "cao", "n": "-ção", "d": "Muitas palavras terminam em -ção: canção, lição, atenção.", "re": "ç[ãõ]", "ti": "A estação", "v": ["Na estação do comboio", "ouvi uma canção,", "cantava um passageiro", "com grande emoção."]}, {"c": "plural-ao", "n": "plurais de -ão", "d": "Plurais das palavras em -ão: leões, cães, mãos.", "re": "(ões|ães|ãos)(?![\\p{L}])", "ti": "Leões e cães", "f": ["No jardim zoológico, vimos dois leões.", "Tinham as jubas grandes e douradas.", "À saída, encontrámos uns cães a passear com os donos.", "Bati palmas com as mãos de tanta alegria."]}, {"c": "plural-ao", "n": "plurais de -ão", "d": "Plurais das palavras em -ão: leões, cães, mãos.", "re": "(ões|ães|ãos)(?![\\p{L}])", "ti": "Os pães", "v": ["Os padeiros fazem pães", "bem cedo, de manhã,", "com as mãos cheias de farinha", "e um gorro de lã."]}, {"c": "acentos", "n": "acentos", "d": "Os acentos mudam o som das vogais: café, avó, você, à.", "re": "[áéíóúàâêô]", "ti": "No café", "f": ["O café da praça é muito antigo.", "Lá vende-se pão, bolo e chá.", "O senhor José serve os clientes com um sorriso.", "À tarde, há sempre alguém a ler o jornal."]}, {"c": "acentos", "n": "acentos", "d": "Os acentos mudam o som das vogais: café, avó, você, à.", "re": "[áéíóúàâêô]", "ti": "O bebé", "v": ["O bebé está no berço", "a dormir e a sonhar,", "tem um pé de fora", "e começa a espreguiçar."]}, {"c": "inho", "n": "-inho, -zinho", "d": "Diminutivos com -inho e -zinho: gatinho, cãozinho.", "re": "z?inh[oa]s?(?![\\p{L}])", "ti": "O gatinho", "f": ["O meu gatinho é pequenino.", "Tem um focinho cor-de-rosa.", "Brinca com um novelozinho de lã.", "À noite, dorme quentinho na almofada."]}, {"c": "inho", "n": "-inho, -zinho", "d": "Diminutivos com -inho e -zinho: gatinho, cãozinho.", "re": "z?inh[oa]s?(?![\\p{L}])", "ti": "O passarinho", "v": ["Um passarinho pequenino", "fez o ninho no jardim,", "canta de manhãzinha", "uma canção só para mim."]}, {"c": "es-esa", "n": "-ês, -esa", "d": "Nacionalidades com -ês e -esa: português, portuguesa, francês.", "re": "(ês|esa|eses|esas)(?![\\p{L}])", "ti": "Amigos de vários países", "f": ["Na nossa escola, há alunos de vários países.", "A Inês é portuguesa e o Pierre é francês.", "A Mei é chinesa e o Liam é inglês.", "Todos falam português no recreio."]}, {"c": "es-esa", "n": "-ês, -esa", "d": "Nacionalidades com -ês e -esa: português, portuguesa, francês.", "re": "(ês|esa|eses|esas)(?![\\p{L}])", "ti": "O turista", "v": ["Chegou um turista inglês", "ao Funchal de manhã,", "e uma senhora francesa", "comprou uma maçã."]}, {"c": "r-forte", "n": "r e rr", "d": "O r no início da palavra e o rr têm o mesmo som forte: rato, carro.", "re": "(?<![\\p{L}])r|rr", "ti": "O rato Rui", "f": ["O rato Rui mora numa toca.", "Todos os dias, corre pelo jardim.", "Uma vez, encontrou um carro de brincar.", "Rodou-o pela terra até ao rio."]}, {"c": "r-forte", "n": "r e rr", "d": "O r no início da palavra e o rr têm o mesmo som forte: rato, carro.", "re": "(?<![\\p{L}])r|rr", "ti": "O rio", "v": ["O rio corre, corre,", "pela serra a descer,", "rega as terras e os campos", "até o sol se esconder."]}, {"c": "gua-qua", "n": "gua, qua", "d": "Em gua e qua, o u lê-se: água, guarda, quatro, quadro.", "re": "[gq]u[aoáóâ]", "ti": "Quatro amigos", "f": ["Quatro amigos foram à praia.", "Levaram água e um guarda-sol.", "Na areia, desenharam um quadrado enorme.", "Depois, mergulharam na água fresca."]}, {"c": "gua-qua", "n": "gua, qua", "d": "Em gua e qua, o u lê-se: água, guarda, quatro, quadro.", "re": "[gq]u[aoáóâ]", "ti": "A água do mar", "v": ["A água do mar", "é salgada e fria,", "quatro gaivotas", "voam com alegria."]}, {"c": "ditongos", "n": "ditongos", "d": "Ditongos são duas vogais na mesma sílaba: leite, ouro, coisa, peixe.", "re": "ei|ai|ou|oi|eu|au", "ti": "O tesouro", "f": ["Num baú antigo, havia um tesouro.", "Tinha moedas de ouro e uma coroa.", "O pirata ficou muito feliz.", "Escondeu outra vez o baú na areia."]}, {"c": "ditongos", "n": "ditongos", "d": "Ditongos são duas vogais na mesma sílaba: leite, ouro, coisa, peixe.", "re": "ei|ai|ou|oi|eu|au", "ti": "O peixe", "v": ["O peixe dourado", "nada no aquário,", "come duas vezes por dia", "e sabe o horário."]}, {"c": "ge-je", "n": "ge/gi ou je/ji", "d": "O mesmo som pode escrever-se com g ou j: gente, jeito, girafa, jipe.", "re": "g[eiéíê]|j[eiéíê]", "ti": "O jipe", "f": ["O jipe subiu a serra com muita gente.", "A estrada tinha curvas e um caminho estreito.", "Lá em cima, comemos gelado de morango.", "Que dia tão giro!"]}, {"c": "ge-je", "n": "ge/gi ou je/ji", "d": "O mesmo som pode escrever-se com g ou j: gente, jeito, girafa, jipe.", "re": "g[eiéíê]|j[eiéíê]", "ti": "A gente", "v": ["Esta gente tem jeito", "para a dança e o canto,", "cantam e dançam juntos", "e é um grande encanto."]}], "4": [{"c": "ha-a", "n": "há, à, a", "d": "há (verbo haver), à (a + a) e a (artigo): Há sol. Vou à praia. A Rita lê.", "re": "(?<![\\p{L}])(há|à|a)(?![\\p{L}])", "ti": "Uma ida à praia", "f": ["Há muito tempo que não ia à praia.", "No sábado, fui à praia do Seixal com amigos.", "Há areia escura e água muito limpa.", "A tarde passou a correr.", "À noite, ainda sentia o cheiro a mar."]}, {"c": "ha-a", "n": "há, à, a", "d": "há (verbo haver), à (a + a) e a (artigo): Há sol. Vou à praia. A Rita lê.", "re": "(?<![\\p{L}])(há|à|a)(?![\\p{L}])", "ti": "À beira-mar", "v": ["Há gaivotas a voar", "à beira do mar azul,", "a brisa vem do norte", "e as nuvens vão para sul."]}, {"c": "am-ao", "n": "-am ou -ão", "d": "Nos verbos, -am indica o passado (cantaram) e -ão indica o futuro (cantarão).", "re": "(am|ão)(?![\\p{L}])", "ti": "A visita de estudo", "f": ["Ontem, os alunos visitaram o Jardim Botânico.", "Observaram plantas de todo o mundo.", "Amanhã, escreverão um texto sobre a visita.", "Depois, apresentarão o trabalho à turma.", "Todos ficaram entusiasmados."]}, {"c": "am-ao", "n": "-am ou -ão", "d": "Nos verbos, -am indica o passado (cantaram) e -ão indica o futuro (cantarão).", "re": "(am|ão)(?![\\p{L}])", "ti": "Os pássaros", "v": ["Os pássaros cantaram", "logo pela manhã,", "e amanhã cantarão", "perto da romã."]}, {"c": "isse-ice", "n": "-isse ou -ice", "d": "-isse nos verbos (se ele partisse) e -ice nos nomes (tolice, meninice).", "re": "(isse|ice)(?![\\p{L}])", "ti": "A tolice", "f": ["Se o Rui ouvisse o conselho, não fazia aquela tolice.", "Saiu de casa sem casaco num dia de chuva.", "Se ele pedisse ajuda, alguém lhe emprestava um.", "Agora, está constipado e espirra sem parar.", "Que tolice!"]}, {"c": "isse-ice", "n": "-isse ou -ice", "d": "-isse nos verbos (se ele partisse) e -ice nos nomes (tolice, meninice).", "re": "(isse|ice)(?![\\p{L}])", "ti": "Meninice", "v": ["Se eu pudesse voltar", "ao tempo da meninice,", "ria-me à vontade", "de qualquer tolice."]}, {"c": "x", "n": "sons do x", "d": "O x tem quatro sons: xadrez, exemplo, táxi, máximo.", "re": "x", "ti": "O torneio de xadrez", "f": ["O Alexandre treinou xadrez durante o mês inteiro.", "No torneio, deu o máximo e foi exemplar.", "Apanhou um táxi com o treinador para chegar a tempo.", "Ganhou o primeiro prémio, uma caixa de madeira.", "Foi um exemplo para todos os colegas."]}, {"c": "x", "n": "sons do x", "d": "O x tem quatro sons: xadrez, exemplo, táxi, máximo.", "re": "x", "ti": "O táxi", "v": ["Apanhei um táxi", "para ir a um exame,", "o motorista tinha", "um bigode de arame."]}, {"c": "som-z", "n": "s, z ou x com som de z", "d": "O som z pode escrever-se com s, z ou x: casa, azeite, exame.", "re": "(?<=[aeiouáéíóúâêôãõ])[szx](?=[aeiouáéíóúâêôãõ])", "ti": "A Luísa", "f": ["A Luísa mora numa casa com um jardim.", "Todos os dias, rega as rosas e o azevinho.", "Na cozinha, tempera a salada com azeite.", "Na escola, teve um bom resultado no exame.", "A Luísa é uma menina dedicada e curiosa."]}, {"c": "som-z", "n": "s, z ou x com som de z", "d": "O som z pode escrever-se com s, z ou x: casa, azeite, exame.", "re": "(?<=[aeiouáéíóúâêôãõ])[szx](?=[aeiouáéíóúâêôãõ])", "ti": "A brisa", "v": ["A brisa da manhã", "traz o azul do mar,", "e a rosa abre-se", "para o sol a beijar."]}, {"c": "porque", "n": "porque e porquê", "d": "porque explica a razão; porquê aparece no fim da pergunta ou como nome.", "re": "porqu[eê]", "ti": "Porquê?", "f": ["A Rita perguntou ao professor porque é que o céu é azul.", "O professor explicou que a luz do sol se espalha no ar.", "A Rita quis saber porquê.", "Ele disse que a cor azul se espalha mais do que as outras.", "A Rita ficou contente porque aprendeu algo novo."]}, {"c": "porque", "n": "porque e porquê", "d": "porque explica a razão; porquê aparece no fim da pergunta ou como nome.", "re": "porqu[eê]", "ti": "Estrelas", "v": ["Porquê tantas estrelas", "no céu escuro e frio?", "Porque iluminam a noite", "e o caminho do rio."]}, {"c": "mas-mais", "n": "mas ou mais", "d": "mas indica uma ideia contrária; mais indica quantidade.", "re": "(?<![\\p{L}])(mas|mais)(?![\\p{L}])", "ti": "Mais um bolo", "f": ["Comi uma fatia de bolo, mas queria mais.", "A cozinheira disse que só havia mais uma.", "Dividi-a com o meu amigo, mas ele não gostou.", "Ele prefere fruta, mas eu adoro bolo.", "Para a próxima, levo mais fruta para os dois."]}, {"c": "mas-mais", "n": "mas ou mais", "d": "mas indica uma ideia contrária; mais indica quantidade.", "re": "(?<![\\p{L}])(mas|mais)(?![\\p{L}])", "ti": "Mais uma história", "v": ["Quero mais uma história,", "mas já é hora de deitar,", "amanhã leio mais", "e volto a sonhar."]}, {"c": "esdruxulas", "n": "palavras esdrúxulas", "d": "As palavras esdrúxulas levam sempre acento: pássaro, árvore, música.", "re": "[áéíóúâêô]", "ti": "A música da floresta", "f": ["Na floresta, ouve-se uma música mágica.", "Os pássaros cantam no alto das árvores.", "As folhas tremem com o vento.", "A água do ribeiro corre por cima das rochas.", "É um espetáculo fantástico."]}, {"c": "esdruxulas", "n": "palavras esdrúxulas", "d": "As palavras esdrúxulas levam sempre acento: pássaro, árvore, música.", "re": "[áéíóúâêô]", "ti": "Na árvore do quintal", "v": ["O pássaro canta", "na árvore do quintal,", "a música é tão bela", "que parece um festival."]}, {"c": "hifen", "n": "hífen nos pronomes", "d": "O pronome depois do verbo liga-se com hífen: chama-se, deu-lhe, convidámo-lo.", "re": "-(me|te|se|lhe|lhes|o|a|os|as|lo|la|los|las|nos|vos)(?![\\p{L}])", "ti": "O novo colega", "f": ["O novo colega chama-se Duarte.", "A professora apresentou-o à turma.", "Deu-lhe um lugar ao pé da janela.", "No recreio, convidámo-lo para jogar à bola.", "Ele agradeceu-nos com um sorriso."]}, {"c": "hifen", "n": "hífen nos pronomes", "d": "O pronome depois do verbo liga-se com hífen: chama-se, deu-lhe, convidámo-lo.", "re": "-(me|te|se|lhe|lhes|o|a|os|as|lo|la|los|las|nos|vos)(?![\\p{L}])", "ti": "Dá-me a mão", "v": ["Dá-me a tua mão,", "vamos passear,", "conta-me uma história", "até o sol se deitar."]}, {"c": "oso-osa", "n": "-oso, -osa", "d": "Muitos adjetivos terminam em -oso e -osa: saboroso, famosa.", "re": "os[oa]s?(?![\\p{L}])", "ti": "O bolo famoso", "f": ["A pastelaria do bairro tem um bolo famoso.", "É saboroso, fofo e muito cheiroso.", "As pessoas fazem fila para o comprar.", "O pasteleiro é um homem generoso e simpático.", "Às vezes, oferece uma fatia às crianças."]}, {"c": "oso-osa", "n": "-oso, -osa", "d": "Muitos adjetivos terminam em -oso e -osa: saboroso, famosa.", "re": "os[oa]s?(?![\\p{L}])", "ti": "Saboroso", "v": ["O bolo de mel", "é saboroso e famoso,", "cheira a canela", "e é tão gostoso."]}, {"c": "homofonas", "n": "palavras homófonas", "d": "Homófonas soam igual mas escrevem-se de forma diferente: concerto (música) e conserto (arranjo).", "re": "(?<![\\p{L}])(concertos?|consertos?|cose|coze|coser|cozer)(?![\\p{L}])", "ti": "O conserto do violino", "f": ["O violino da Marta partiu-se antes do concerto.", "Levou-o a um senhor que faz consertos de instrumentos.", "O conserto ficou pronto num dia.", "À noite, a Marta tocou no concerto da escola.", "Toda a gente aplaudiu de pé."]}, {"c": "homofonas", "n": "palavras homófonas", "d": "Homófonas soam igual mas escrevem-se de forma diferente: concerto (música) e conserto (arranjo).", "re": "(?<![\\p{L}])(concertos?|consertos?|cose|coze|coser|cozer)(?![\\p{L}])", "ti": "Coser e cozer", "v": ["A costureira cose", "um vestido de cetim,", "o cozinheiro coze", "batatas para mim."]}, {"c": "ez-eza", "n": "-ez, -eza", "d": "Muitos nomes terminam em -ez e -eza: rapidez, beleza, tristeza.", "re": "(ez|eza)(?![\\p{L}])", "ti": "A beleza da serra", "f": ["A beleza da serra da Madeira encanta os visitantes.", "Com rapidez, o nevoeiro cobre os picos.", "A natureza muda a cada momento.", "Lá em cima, sente-se a pureza do ar.", "Ninguém sai de lá com tristeza."]}, {"c": "ez-eza", "n": "-ez, -eza", "d": "Muitos nomes terminam em -ez e -eza: rapidez, beleza, tristeza.", "re": "(ez|eza)(?![\\p{L}])", "ti": "Certeza", "v": ["Tenho a certeza", "de que a natureza", "guarda em cada flor", "um pouco de beleza."]}, {"c": "c-ss", "n": "ç ou ss", "d": "Depois de consoante, não se usa ss: dança, alcançar. Entre vogais, usa-se ss: sucesso.", "re": "ç|ss", "ti": "A dança", "f": ["Na festa da escola, houve uma dança tradicional.", "Os pares dançaram o bailinho da Madeira.", "Passaram pelo palco com os braços no ar.", "O público assobiou e aplaudiu.", "Foi um sucesso!"]}, {"c": "c-ss", "n": "ç ou ss", "d": "Depois de consoante, não se usa ss: dança, alcançar. Entre vogais, usa-se ss: sucesso.", "re": "ç|ss", "ti": "Bailinho", "v": ["Dança o bailinho", "ao som do brinquinho,", "um passo para a frente,", "outro devagarinho."]}, {"c": "sc-xc", "n": "sc e xc", "d": "Algumas palavras escrevem-se com sc ou xc: nascer, piscina, exceto, excelente.", "re": "sc|xc|sç", "ti": "Na piscina", "f": ["Ao nascer do sol, fomos à piscina.", "A água estava excelente.", "Todos nadaram, exceto o Pedro, que estava constipado.", "Depois, descansámos à sombra.", "Foi uma manhã fascinante."]}, {"c": "sc-xc", "n": "sc e xc", "d": "Algumas palavras escrevem-se com sc ou xc: nascer, piscina, exceto, excelente.", "re": "sc|xc|sç", "ti": "Nascer do sol", "v": ["Ao nascer do sol", "o céu fica dourado,", "a piscina brilha", "num azul encantado."]}, {"c": "tem-teem", "n": "tem/têm, vem/vêm", "d": "tem e vem (ele, ela); têm e vêm (eles, elas).", "re": "(?<![\\p{L}])(tem|têm|vem|vêm)(?![\\p{L}])", "ti": "Quem vem à festa?", "f": ["O Tiago tem um convite para a festa.", "Os amigos dele também têm convites.", "A Ana vem de autocarro.", "Os gémeos vêm a pé.", "A festa tem música, jogos e um bolo enorme."]}, {"c": "tem-teem", "n": "tem/têm, vem/vêm", "d": "tem e vem (ele, ela); têm e vêm (eles, elas).", "re": "(?<![\\p{L}])(tem|têm|vem|vêm)(?![\\p{L}])", "ti": "Quem vem?", "v": ["Quem vem à festa", "traz um sorriso,", "os amigos que vêm", "acham-na um paraíso."]}]}};
const Y1={"etapas": [{"id": "i", "d": "2026-09-01", "n": "Vogal i", "u": ["i"]}, {"id": "u", "d": "2026-10-08", "n": "Vogal u (iu, ui)", "u": ["u"]}, {"id": "o", "d": "2026-10-15", "n": "Vogal o (oi, ou)", "u": ["o"]}, {"id": "a", "d": "2026-10-22", "n": "Vogal a (ai, au, ão)", "u": ["a"]}, {"id": "e", "d": "2026-11-02", "n": "Vogal e (ei, eu, ãe, õe)", "u": ["e"]}, {"id": "p", "d": "2026-11-16", "n": "Letra p", "u": ["p"]}, {"id": "t", "d": "2026-11-25", "n": "Letra t", "u": ["t"]}, {"id": "l", "d": "2026-12-03", "n": "Letra l e ponto final", "u": ["l", "."]}, {"id": "d", "d": "2027-01-06", "n": "Letra d", "u": ["d"]}, {"id": "m", "d": "2027-01-18", "n": "Letra m", "u": ["m"]}, {"id": "v", "d": "2027-01-27", "n": "Letra v", "u": ["v"]}, {"id": "n", "d": "2027-02-15", "n": "Letra n", "u": ["n"]}, {"id": "r", "d": "2027-02-22", "n": "Letra r e rr (ar, er, ir, or, ur)", "u": ["r"]}, {"id": "c", "d": "2027-03-03", "n": "Letra c (ca, co, cu)", "u": ["c"]}, {"id": "q", "d": "2027-03-12", "n": "Letra q e ponto de interrogação", "u": ["q", "?"]}, {"id": "b", "d": "2027-04-05", "n": "Letra b", "u": ["b"]}, {"id": "g", "d": "2027-04-12", "n": "Letra g (ga, go, gu, gue, gui)", "u": ["g"]}, {"id": "j", "d": "2027-04-19", "n": "Letra j e ge, gi", "u": ["j", "ge"]}, {"id": "f", "d": "2027-04-26", "n": "Letra f e vírgula", "u": ["f", ","]}, {"id": "s", "d": "2027-05-03", "n": "Letra s e ss", "u": ["s"]}, {"id": "ce", "d": "2027-05-10", "n": "ce, ci e ç", "u": ["ce", "ç"]}, {"id": "z", "d": "2027-05-17", "n": "Letra z", "u": ["z"]}, {"id": "h", "d": "2027-05-24", "n": "Letra h, nh, lh, ch, x e ponto de exclamação", "u": ["h", "x", "!", "-"]}, {"id": "nas", "d": "2027-06-07", "n": "Letras k, w, y e vogais nasais", "u": ["k", "w", "y", "nasal"]}, {"id": "cl", "d": "2027-06-14", "n": "Grupos br, cr, bl, cl…", "u": ["cl"]}], "p": [{"t": "escola", "ti": "A escola", "f": ["Eu gosto da escola.", "Na sala há livros."]}, {"t": "outono", "ti": "O outono", "f": ["A folha caiu.", "O vento sopra."]}, {"t": "smartinho", "ti": "São Martinho", "f": ["Eu como castanhas.", "Hoje há magusto."]}, {"t": "natal", "ti": "O Natal", "f": ["A árvore tem luzes.", "A estrela brilha."]}, {"t": "inverno", "ti": "O inverno", "f": ["Está muito frio.", "Eu uso um gorro."]}, {"t": "carnaval", "ti": "O Carnaval", "f": ["Eu sou um pirata.", "A Ana é uma fada."]}, {"t": "primavera", "ti": "A primavera", "f": ["A flor abriu.", "A abelha voa."]}, {"t": "festaflor", "ti": "A Festa da Flor", "f": ["Eu levo uma flor.", "O Funchal tem cor."]}, {"t": "terra", "ti": "O planeta", "f": ["Eu poupo água.", "Eu planto uma árvore."]}, {"t": "livros", "ti": "O livro", "f": ["Eu leio um livro.", "O livro tem um rei."]}, {"t": "mar", "ti": "O mar", "f": ["O mar é azul.", "O barco navega."]}, {"t": "amizade", "ti": "Amigos", "f": ["O meu amigo é bom.", "Nós brincamos juntos."]}, {"t": "animais", "ti": "O gato", "f": ["O gato bebe leite.", "O gato dorme."]}, {"t": "tecnologia", "ti": "O computador", "f": ["Eu uso o rato.", "Eu escrevo no teclado."]}, {"t": "verao", "ti": "O verão", "f": ["Eu vou à praia.", "Eu como um gelado."]}, {"t": "desporto", "ti": "A bola", "f": ["Eu chuto a bola.", "A bola rola."]}, {"t": "eco-agua", "ti": "A água", "f": ["Eu fecho a torneira.", "A água é preciosa."]}, {"t": "eco-residuos", "ti": "O ecoponto", "f": ["O papel vai no azul.", "O vidro vai no verde."]}, {"t": "eco-energia", "ti": "A luz", "f": ["Eu apago a luz.", "Assim poupo energia."]}, {"t": "eco-horta", "ti": "A horta", "f": ["Na horta há couves.", "Eu rego a alface."]}, {"t": "eco-floresta", "ti": "A árvore", "f": ["A árvore é alta.", "Dá sombra e ar puro."]}, {"t": "eco-mar", "ti": "A praia", "f": ["Eu apanho o lixo.", "A praia fica limpa."]}, {"t": "eco-alimentacao", "ti": "A fruta", "f": ["Eu como uma maçã.", "A fruta faz bem."]}, {"t": "eco-biodiversidade", "ti": "O pombo", "f": ["O pombo voa na serra.", "Vive na floresta."]}, {"t": "em-corpo", "ti": "O corpo", "f": ["Eu tenho dois braços.", "Eu tenho duas pernas."]}, {"t": "em-sentidos", "ti": "Os olhos", "f": ["Eu vejo com os olhos.", "Eu ouço com os ouvidos."]}, {"t": "em-higiene", "ti": "Mãos limpas", "f": ["Eu lavo as mãos.", "Uso água e sabão."]}, {"t": "em-higiene", "ti": "Os dentes", "f": ["Eu escovo os dentes.", "Os dentes ficam limpos."]}, {"t": "em-seguranca", "ti": "A rua", "f": ["Eu olho para os lados.", "Depois, atravesso a rua."]}, {"t": "em-tempo", "ti": "O tempo", "f": ["Hoje está sol.", "Amanhã vai chover."]}, {"t": "em-plantas", "ti": "A semente", "f": ["A semente cresceu.", "Agora é uma planta."]}, {"t": "em-animais", "ti": "As escamas", "f": ["O peixe tem escamas.", "O peixe vive na água."]}, {"t": "em-animais", "ti": "A vaca", "f": ["A vaca come erva.", "A vaca dá leite."]}, {"t": "em-madeira", "ti": "Vivo numa ilha", "f": ["Eu vivo numa ilha.", "A ilha é a Madeira."]}, {"t": "em-transportes", "ti": "O avião", "f": ["O avião voa alto.", "O barco vai no mar."]}, {"t": "em-profissoes", "ti": "O padeiro", "f": ["O padeiro faz pão.", "O pão é quentinho."]}, {"t": "em-dia-noite", "ti": "A noite", "f": ["À noite, vejo a Lua.", "De dia, vejo o Sol."]}, {"t": "escola", "ti": "A sala", "f": ["A sala tem mesas.", "A sala tem um quadro."]}, {"t": "amizade", "ti": "O recreio", "f": ["No recreio, eu salto.", "O Rui joga à bola."]}, {"t": "animais", "ti": "O lago", "f": ["O pato nada no lago.", "O pato faz quá-quá."]}, {"t": "desporto", "ti": "O jogo", "f": ["Eu corro muito.", "Eu salto alto."]}, {"t": "livros", "ti": "A história", "f": ["Eu ouço uma história.", "A história tem uma fada."]}, {"t": "tecnologia", "ti": "O teclado", "f": ["O teclado tem letras.", "Eu carrego nas teclas."]}, {"t": "mar", "ti": "O barco", "f": ["O barco é azul.", "O barco vai ao mar."]}, {"t": "outono", "ti": "As folhas", "f": ["As folhas caem.", "As folhas são amarelas."]}, {"t": "inverno", "ti": "O gorro", "f": ["O gorro é de lã.", "O gorro é quente."]}, {"t": "letra", "ti": "Abelha amarela", "f": ["A abelha voa.", "A abelha é amarela."]}, {"t": "letra", "ti": "O elefante", "f": ["O elefante é enorme.", "Ele bebe água."]}, {"t": "letra", "ti": "Ilha bonita", "f": ["A ilha é bonita.", "Eu vivo na ilha."]}, {"t": "letra", "ti": "O ovo", "f": ["O ovo é branco.", "O ovo está no ninho."]}, {"t": "letra", "ti": "A uva", "f": ["A uva é doce.", "Eu como uma uva."]}, {"t": "letra", "ti": "O pato Pipo", "f": ["O pato é pequeno.", "O pato pula na poça."]}, {"t": "letra", "ti": "O tomate", "f": ["O tomate é vermelho.", "Está no prato."]}, {"t": "letra", "ti": "O leão", "f": ["O leão é lindo.", "O leão lê um livro."]}, {"t": "letra", "ti": "O dado", "f": ["O dado tem pintas.", "O dedo toca no dado."]}, {"t": "letra", "ti": "A mota", "f": ["A mota é amarela.", "A mota é minha."]}, {"t": "letra", "ti": "O navio", "f": ["O navio navega.", "O navio vai ao norte."]}, {"t": "letra", "ti": "A vaca Vivi", "f": ["A vaca é malhada.", "A vaca vê o vale."]}, {"t": "letra", "ti": "A foca", "f": ["A foca é feliz.", "A foca faz uma festa."]}, {"t": "letra", "ti": "Rato roedor", "f": ["O rato roeu a rolha.", "O rato ri."]}, {"t": "letra", "ti": "O sapo saltitão", "f": ["O sapo salta.", "O sapo sobe ao sofá."]}, {"t": "letra", "ti": "O cavalo", "f": ["O cavalo corre.", "O cão come."]}, {"t": "letra", "ti": "O gato gordo", "f": ["O gato gosta de leite.", "O gato é gordo."]}, {"t": "letra", "ti": "A bola bonita", "f": ["A bola é bonita.", "O bebé bate na bola."]}, {"t": "letra", "ti": "A janela", "f": ["A janela está aberta.", "Vejo o jardim."]}, {"t": "letra", "ti": "A zebra", "f": ["A zebra tem riscas.", "A zebra está no zoo."]}, {"t": "y1", "ti": "Ai ui", "f": ["ai ui ai ui"]}, {"t": "y1", "ti": "Au au", "f": ["au au au"]}, {"t": "y1", "ti": "Oi", "f": ["oi oi oi"]}, {"t": "y1", "ti": "Eu", "f": ["eu e o ai"]}, {"t": "y1", "ti": "O pé", "f": ["O pé e a pá"]}, {"t": "y1", "ti": "A pipa", "f": ["A pipa e o pião"]}, {"t": "y1", "ti": "Eu e a pipa", "f": ["Eu e a pipa"]}, {"t": "y1", "ti": "O pato", "f": ["O pato e a pata"]}, {"t": "y1", "ti": "A tia", "f": ["A tia e o tio"]}, {"t": "y1", "ti": "O apito", "f": ["O apito e o pião"]}, {"t": "y1", "ti": "O pote", "f": ["O pote e a pipa"]}, {"t": "y1", "ti": "A lua", "f": ["A lua é alta."]}, {"t": "y1", "ti": "A lata", "f": ["A tia tapa a lata."]}, {"t": "y1", "ti": "A lula", "f": ["A lula pula."]}, {"t": "y1", "ti": "O pulo", "f": ["O pato pula alto."]}, {"t": "y1", "ti": "A Lili", "f": ["A Lili é a tia."]}, {"t": "y1", "ti": "A tela", "f": ["A tela é alta."]}, {"t": "y1", "ti": "O dado", "f": ["O Duda dá o dado."]}, {"t": "y1", "ti": "O dedo", "f": ["O dedo da Didi."]}, {"t": "y1", "ti": "O dia", "f": ["O dia é ideal."]}, {"t": "y1", "ti": "O pedal", "f": ["O pedal da tia."]}, {"t": "y1", "ti": "A data", "f": ["A tia dita a data."]}, {"t": "y1", "ti": "A mala", "f": ["A mala da Mimi."]}, {"t": "y1", "ti": "O mapa", "f": ["O mapa é do Tomé."]}, {"t": "y1", "ti": "O mel", "f": ["O Tomé ama o mel."]}, {"t": "y1", "ti": "O tomate", "f": ["O tomate e o melão."]}, {"t": "y1", "ti": "A mota", "f": ["A mota da tia."]}, {"t": "y1", "ti": "O limão", "f": ["O limão é ótimo."]}, {"t": "y1", "ti": "A meia", "f": ["A meia do Tomé."]}, {"t": "y1", "ti": "A uva", "f": ["A Mia dá uva ao pato."]}, {"t": "y1", "ti": "O ovo", "f": ["O ovo da ave."]}, {"t": "y1", "ti": "A vela", "f": ["A vela é alta."]}, {"t": "y1", "ti": "O avião", "f": ["O avião voa alto."]}, {"t": "y1", "ti": "A viola", "f": ["A viola do Davi."]}, {"t": "y1", "ti": "O vale", "f": ["A ave voa ao vale."]}, {"t": "y1", "ti": "O navio", "f": ["O navio é novo."]}, {"t": "y1", "ti": "A Nina", "f": ["A Nina nada."]}, {"t": "y1", "ti": "A neve", "f": ["A neve é alva."]}, {"t": "y1", "ti": "A menina", "f": ["A menina vai ao navio."]}, {"t": "y1", "ti": "O pano", "f": ["O pano é da Nina."]}, {"t": "y1", "ti": "A nota", "f": ["O Nuno dá a nota."]}, {"t": "y1", "ti": "O rato", "f": ["O rato rói a pera."]}, {"t": "y1", "ti": "A rua", "f": ["A Rita mora na rua da torre."]}, {"t": "y1", "ti": "O mar", "f": ["O mar é verde."]}, {"t": "y1", "ti": "O rio", "f": ["O rio vai ao mar."]}, {"t": "y1", "ti": "A arara", "f": ["A arara é amarela."]}, {"t": "y1", "ti": "A torre", "f": ["O rei mora na torre."]}, {"t": "y1", "ti": "Ler", "f": ["O Rui lê toda a tarde."]}, {"t": "y1", "ti": "A porta", "f": ["A porta da torre é alta."]}, {"t": "y1", "ti": "A vaca", "f": ["A vaca come erva."]}, {"t": "y1", "ti": "O macaco", "f": ["O macaco come pipoca."]}, {"t": "y1", "ti": "O cavalo", "f": ["O cavalo corre ao luar."]}, {"t": "y1", "ti": "O copo", "f": ["O copo de leite é da Carolina."]}, {"t": "y1", "ti": "A cama", "f": ["O cão dorme na cama."]}, {"t": "y1", "ti": "O caracol", "f": ["O caracol come a couve."]}, {"t": "y1", "ti": "A pipoca", "f": ["A Carolina come pipoca."]}, {"t": "y1", "ti": "O aquário", "f": ["O aquário é do Quico."]}, {"t": "y1", "ti": "O quarto", "f": ["O quarto da Rita é amarelo."]}, {"t": "y1", "ti": "Qual?", "f": ["Qual é a tua cor?"]}, {"t": "y1", "ti": "O Quico", "f": ["O Quico quer pipoca?"]}, {"t": "y1", "ti": "A bola", "f": ["A Bia bate a bola."]}, {"t": "y1", "ti": "O bolo", "f": ["O bolo da Bela é de coco."]}, {"t": "y1", "ti": "O barco", "f": ["O barco vai pelo mar."]}, {"t": "y1", "ti": "O lobo", "f": ["O lobo uiva à lua."]}, {"t": "y1", "ti": "A bota", "f": ["A bota do bebé é amarela."]}, {"t": "y1", "ti": "O gato", "f": ["O gato bebe água."]}, {"t": "y1", "ti": "O galo", "f": ["O galo acorda o Gui."]}, {"t": "y1", "ti": "O lago", "f": ["O pato nada no lago."]}, {"t": "y1", "ti": "A gaivota", "f": ["A gaivota voa ao pé do barco."]}, {"t": "y1", "ti": "O amigo", "f": ["O meu amigo toca guitarra."]}, {"t": "y1", "ti": "A janela", "f": ["A janela da loja é alta."]}, {"t": "y1", "ti": "O gelado", "f": ["O João come gelado."]}, {"t": "y1", "ti": "O jogo", "f": ["O jogo é divertido."]}, {"t": "y1", "ti": "A jarra", "f": ["A jarra de água caiu."]}, {"t": "y1", "ti": "A foca", "f": ["A foca é feliz."]}, {"t": "y1", "ti": "A fada", "f": ["A fada voa, voa, voa."]}, {"t": "y1", "ti": "O farol", "f": ["O farol fica ao pé do mar."]}, {"t": "y1", "ti": "A girafa", "f": ["A girafa é alta, muito alta."]}, {"t": "y1", "ti": "O sol", "f": ["O sol está alto e amarelo."]}, {"t": "y1", "ti": "A sopa", "f": ["A sopa de feijão é ótima."]}, {"t": "y1", "ti": "O sapo", "f": ["O sapo salta para o lago."]}, {"t": "y1", "ti": "A casa", "f": ["A nossa casa é amarela."]}, {"t": "y1", "ti": "Os pássaros", "f": ["Os pássaros estão a voar."]}, {"t": "y1", "ti": "O céu", "f": ["O céu é da cor do mar."]}, {"t": "y1", "ti": "A cereja", "f": ["A cereja é doce."]}, {"t": "y1", "ti": "O circo", "f": ["O circo vai à cidade."]}, {"t": "y1", "ti": "O laço", "f": ["O laço da Lúcia é amarelo."]}, {"t": "y1", "ti": "O azul", "f": ["O mar é azul.", "O céu é azul."]}, {"t": "y1", "ti": "A luz", "f": ["A luz do sol é forte."]}, {"t": "y1", "ti": "O Zé", "f": ["O Zé fez dez anos."]}], "q": [{"t": "escola", "ti": "Abro o livro", "v": ["Abro o livro,", "leio e sorrio."]}, {"t": "escola", "ti": "O lápis", "v": ["O meu lápis", "pinta o papel."]}, {"t": "outono", "ti": "A folha", "v": ["A folha cai", "e vai dançar."]}, {"t": "outono", "ti": "Chuva", "v": ["Pinga a chuva", "no meu chapéu."]}, {"t": "smartinho", "ti": "Castanhas", "v": ["Castanha quente", "na minha mão."]}, {"t": "smartinho", "ti": "O sol", "v": ["Martinho deu a capa", "e veio o sol."]}, {"t": "natal", "ti": "Estrela", "v": ["Brilha a estrela", "no alto da árvore."]}, {"t": "natal", "ti": "Bolo de mel", "v": ["Bolo de mel", "na mesa do Natal."]}, {"t": "inverno", "ti": "Frio", "v": ["Faz frio lá fora,", "fico a ler."]}, {"t": "inverno", "ti": "Sopa", "v": ["A sopa quente", "sabe tão bem."]}, {"t": "carnaval", "ti": "Máscara", "v": ["Ponho a máscara", "e vou dançar."]}, {"t": "carnaval", "ti": "O palhaço", "v": ["O palhaço ri", "e faz rir."]}, {"t": "primavera", "ti": "A flor", "v": ["Uma flor bonita", "no meu jardim."]}, {"t": "primavera", "ti": "A abelha", "v": ["A abelha voa", "e faz o mel."]}, {"t": "festaflor", "ti": "Flores", "v": ["Flores e cores", "na minha ilha."]}, {"t": "festaflor", "ti": "O muro", "v": ["Ponho a flor", "no muro."]}, {"t": "terra", "ti": "A Terra", "v": ["A Terra é a casa", "de todos nós."]}, {"t": "terra", "ti": "Reciclar", "v": ["Papel no azul,", "vidro no verde."]}, {"t": "livros", "ti": "Ler", "v": ["Leio um conto", "antes de dormir."]}, {"t": "livros", "ti": "A página", "v": ["Viro a página,", "vejo um dragão."]}, {"t": "mar", "ti": "O peixe", "v": ["O peixe nada", "no mar azul."]}, {"t": "mar", "ti": "A onda", "v": ["Vem a onda,", "vai a onda."]}, {"t": "amizade", "ti": "Amigo", "v": ["Dou-te a mão,", "meu amigo."]}, {"t": "amizade", "ti": "Abraço", "v": ["Um abraço", "dá alegria."]}, {"t": "animais", "ti": "O pato", "v": ["O pato nada", "no lago."]}, {"t": "animais", "ti": "O cão", "v": ["O meu cão", "gosta de correr."]}, {"t": "tecnologia", "ti": "O rato", "v": ["Clico no rato,", "abro o jogo."]}, {"t": "tecnologia", "ti": "Teclas", "v": ["Tecla a tecla", "escrevo o meu nome."]}, {"t": "verao", "ti": "Areia", "v": ["Pá e balde", "na areia."]}, {"t": "verao", "ti": "Sol", "v": ["O sol brilha,", "eu vou nadar."]}, {"t": "desporto", "ti": "Saltar", "v": ["Salto alto,", "salto baixo."]}, {"t": "desporto", "ti": "Golo", "v": ["A bola rola,", "é golo!"]}, {"t": "eco-agua", "ti": "Gota", "v": ["Uma gota de água", "vale um tesouro."]}, {"t": "eco-residuos", "ti": "Reciclo", "v": ["Papel, plástico e vidro,", "cada um no seu lugar."]}, {"t": "eco-horta", "ti": "A couve", "v": ["A couve cresce", "na horta da escola."]}, {"t": "eco-floresta", "ti": "Árvores", "v": ["Planto uma árvore", "e fico contente."]}, {"t": "eco-mar", "ti": "Mar limpo", "v": ["Mar azul e limpo,", "casa do peixinho."]}, {"t": "eco-alimentacao", "ti": "Lanche", "v": ["Pão e fruta", "no meu lanche."]}, {"t": "em-corpo", "ti": "Mexer", "v": ["Mexo os braços,", "mexo os pés."]}, {"t": "em-sentidos", "ti": "Cheirar", "v": ["Cheiro a flor", "com o nariz."]}, {"t": "em-higiene", "ti": "Sabão", "v": ["Água e sabão,", "mão na mão."]}, {"t": "em-tempo", "ti": "Chuva e sol", "v": ["Chove, chove,", "e depois faz sol."]}, {"t": "em-animais", "ti": "O galo", "v": ["O galo canta", "de manhã cedo."]}, {"t": "em-plantas", "ti": "Ao sol", "v": ["A flor abriu", "ao sol da manhã."]}, {"t": "em-madeira", "ti": "Ilha", "v": ["A minha ilha bonita", "no meio do mar."]}, {"t": "em-transportes", "ti": "O comboio", "v": ["Pouca-terra, pouca-terra,", "lá vai o comboio."]}, {"t": "em-dia-noite", "ti": "A Lua", "v": ["A Lua brilha", "e eu vou dormir."]}, {"t": "escola", "ti": "O caderno", "v": ["No meu caderno", "escrevo o meu nome."]}, {"t": "amizade", "ti": "Juntos", "v": ["Eu e tu", "somos amigos."]}, {"t": "animais", "ti": "O sapo", "v": ["O sapo salta", "para o lago."]}, {"t": "tecnologia", "ti": "Clique", "v": ["O rato do computador", "não come queijo."]}, {"t": "desporto", "ti": "A corrida", "v": ["Corro, corro,", "até à meta."]}, {"t": "y1", "ti": "Ai ui", "v": ["ai ui oi", "eu ei au"]}, {"t": "y1", "ti": "Pipa", "v": ["a pá e o pé", "a pipa e o pião"]}, {"t": "y1", "ti": "Pato", "v": ["o pato e a pata", "o tatu e a tia"]}, {"t": "y1", "ti": "Pula", "v": ["A lula pula.", "O pato pula."]}, {"t": "y1", "ti": "Lua", "v": ["A lua alta", "e a pipa ao pé."]}, {"t": "y1", "ti": "Dado", "v": ["O dado do Duda", "pula ao lado."]}, {"t": "y1", "ti": "Dia", "v": ["Todo o dia", "a Lili lia."]}, {"t": "y1", "ti": "Mia", "v": ["A Mimi mia", "e o pato pia."]}, {"t": "y1", "ti": "Mel", "v": ["A Mia ama mel", "o Tomé ama melão."]}, {"t": "y1", "ti": "Voa", "v": ["A ave voa", "o avião voa."]}, {"t": "y1", "ti": "Ovo", "v": ["O ovo é da ave", "a uva é da Mia."]}, {"t": "y1", "ti": "Nada", "v": ["A Nina nada", "o Nuno nada."]}, {"t": "y1", "ti": "Neve", "v": ["A neve é alva", "a lua é alta."]}, {"t": "y1", "ti": "O rato do rei", "v": ["O rato rói", "a pera do rei."]}, {"t": "y1", "ti": "Mar e rio", "v": ["A Rita vai ao mar", "e o Rui vai ao rio."]}, {"t": "y1", "ti": "O macaco", "v": ["O macaco come", "a pipoca toda."]}, {"t": "y1", "ti": "A vaca", "v": ["A vaca come erva", "e o cavalo corre."]}, {"t": "y1", "ti": "A cor da lua", "v": ["Que cor é a lua?", "A lua é amarela."]}, {"t": "y1", "ti": "Bola", "v": ["A bola bate", "e o bebé ri."]}, {"t": "y1", "ti": "O lobo", "v": ["O lobo uiva", "ao luar da serra."]}, {"t": "y1", "ti": "A gota", "v": ["A gota cai", "no lago do galo."]}, {"t": "y1", "ti": "Gelado", "v": ["O gelado de pera", "é do João."]}, {"t": "y1", "ti": "A fada", "v": ["A fada voa,", "a foca nada."]}, {"t": "y1", "ti": "O figo", "v": ["O figo, a pera", "e a uva madura."]}, {"t": "y1", "ti": "O sapo", "v": ["O sapo salta,", "a rosa é da Sara."]}, {"t": "y1", "ti": "Sol e lua", "v": ["O sol sai", "e a lua vai."]}, {"t": "y1", "ti": "Doce", "v": ["A cereja é doce,", "o bolo é mais doce."]}, {"t": "y1", "ti": "Dez", "v": ["Dez patos azuis", "vão para o lago."]}], "w": ["ai", "ui", "oi", "ou", "eu", "au", "ao", "ia", "uau", "aia", "pá", "pé", "pia", "pipa", "papa", "pião", "poupa", "pua", "tia", "tio", "tatu", "pato", "pata", "pote", "tapete", "oito", "teia", "apito", "pateta", "tutu", "lua", "lata", "lula", "pele", "leite", "tela", "ali", "alto", "pala", "lote", "pulo", "palito", "papel", "Lili", "Lulu", "Lia", "tule", "tulipa", "dado", "dedo", "dia", "lado", "tudo", "data", "ditado", "idade", "Didi", "Duda", "pedal", "dela", "dele", "doido", "dá", "mala", "mapa", "meia", "mel", "mola", "mota", "mimo", "medo", "tomate", "mamute", "lima", "limão", "melão", "Mia", "Tomé", "pomada", "moeda", "lama", "vela", "vida", "uva", "ovo", "avião", "viola", "vale", "lavado", "veludo", "ave", "voa", "vai", "uivo", "nata", "nota", "nove", "neve", "navio", "Nina", "Nuno", "menina", "pena", "lona", "pano", "ano", "novo", "nada", "anão", "rato", "rio", "rua", "rei", "roda", "rola", "rede", "pera", "arara", "terra", "torre", "remo", "rima", "rolo", "mar", "ar", "Rita", "Rui", "porta", "tarde", "verde", "rir", "ler", "ver", "cama", "copo", "cubo", "cola", "cavalo", "caneta", "macaco", "pipoca", "vaca", "cara", "cometa", "cão", "camelo", "caracol", "come", "toca", "couve", "coco", "quero", "aquário", "quilo", "quarto", "Quico", "quer", "quati", "qual", "bola", "bebé", "boca", "bota", "bule", "bico", "cabelo", "bolo", "balão", "barco", "nabo", "lobo", "abacate", "babete", "Bia", "Bela", "gato", "galo", "gota", "lago", "gaivota", "gola", "amigo", "água", "logo", "agora", "guitarra", "fogueira", "janela", "jarra", "joelho", "jogo", "gelo", "gelado", "girafa", "loja", "João", "caju", "faca", "foca", "fada", "fogo", "figo", "fila", "café", "farol", "feliz", "sofá", "sapo", "sopa", "sal", "sol", "casa", "mesa", "rosa", "sapato", "sumo", "saco", "osso", "pássaro", "Sara", "cebola", "cidade", "circo", "céu", "doce", "laço", "poço", "açúcar", "cereja", "azul", "luz", "voz", "dez", "vez", "zero", "azeite", "Zé", "buzina", "folha", "abelha", "coelho", "ninho", "galinha", "chave", "chuva", "peixe", "lixo", "bicho"]};
const ESPECIAIS=[["10-04", "10-04", "animais"], ["10-16", "10-16", "eco-alimentacao"], ["11-09", "11-13", "smartinho"], ["12-14", "12-18", "natal"], ["03-21", "03-21", "eco-floresta"], ["03-22", "03-22", "eco-agua"], ["04-22", "04-22", "terra"], ["04-23", "04-23", "livros"], ["06-01", "06-01", "amizade"], ["06-05", "06-05", "eco-residuos"]];

const IMG={
 "pixel_ola": "img/pixel_ola.webp",
 "pixel_pensar": "img/pixel_pensar.webp",
 "pixel_ajuda": "img/pixel_ajuda.webp",
 "pixel_festa": "img/pixel_festa.webp",
 "pixel_uau": "img/pixel_uau.webp",
 "mega_ola": "img/mega_ola.webp",
 "mega_pensar": "img/mega_pensar.webp",
 "mega_ajuda": "img/mega_ajuda.webp",
 "mega_festa": "img/mega_festa.webp",
 "mega_uau": "img/mega_uau.webp",
 "giga_ola": "img/giga_ola.webp",
 "giga_pensar": "img/giga_pensar.webp",
 "giga_ajuda": "img/giga_ajuda.webp",
 "giga_festa": "img/giga_festa.webp",
 "giga_uau": "img/giga_uau.webp",
 "byte_ola": "img/byte_ola.webp",
 "byte_festa": "img/byte_festa.webp",
 "byte_pensar": "img/byte_pensar.webp",
 "byte_ajuda": "img/byte_ajuda.webp",
 "byte_uau": "img/byte_uau.webp"
};
'use strict';
// ═══════════════════════════════════════════════════════════
// CONFIGURAÇÃO
// ═══════════════════════════════════════════════════════════
const YEARS = {
  1:{k:'byte',nome:'Byte',ano:'1.º ano',cor:'#2F86C8',soft:'#E3F0FA',prosa:1,prosaApoio:1,versosApoio:2,aq:5,},
  2:{k:'pixel',nome:'Pixel',ano:'2.º ano',cor:'#7C5CC4',soft:'#EFE9FB',prosa:2,prosaApoio:1,versosApoio:2,aq:6,},
  3:{k:'mega',nome:'Mega',ano:'3.º ano',cor:'#2E9A3E',soft:'#E3F4E5',prosa:3,prosaApoio:2,versosApoio:4,aq:8,},
  4:{k:'giga',nome:'Giga',ano:'4.º ano',cor:'#DE6B12',soft:'#FDEBD9',prosa:5,prosaApoio:3,versosApoio:4,aq:8,}
};
const PW = ['62a797b2e0f5ad663568edf2e838e64fad8008988e5178049d65dabe9dbce7f1'];
const FONTS = {
  'Aptos':"Aptos, Calibri, Carlito, 'Segoe UI', sans-serif",
  'Arial':"Arial, Helvetica, 'Liberation Sans', sans-serif",
  'Arial Black':"'Arial Black', Arial, sans-serif",
  'Calibri':"Calibri, Carlito, sans-serif",
  'Comic Sans MS':"'Comic Sans MS', 'Comic Neue', cursive",
  'Courier New':"'Courier New', monospace",
  'Georgia':"Georgia, serif",
  'Times New Roman':"'Times New Roman', Times, serif",
  'Verdana':"Verdana, sans-serif"
};
const SIZES = [8,9,10,11,12,14,16,18,20,22,24,26,28,36,48,72];
const DEF = {font:'Aptos',size:11,bold:false,ital:false,und:false,align:'left'};
const LS = 'gaveta_escritores_teclado_v1';
const WEEK = ['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sábado'];
const MONTH = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];

const $ = id => document.getElementById(id);
const page = $('page');

// ═══════════════════════════════════════════════════════════
// ESTADO E ARMAZENAMENTO
// ═══════════════════════════════════════════════════════════
let store = {};
try { store = JSON.parse(localStorage.getItem(LS)) || {}; } catch(e) { store = {}; }
store.anos = store.anos || {};
store.cfg = store.cfg || {ajudas:'auto'};
function save(){ try { localStorage.setItem(LS, JSON.stringify(store)); } catch(e){} }

const S = { method:'escrever', ano:null, nome:'', perfil:'turma', dataFixa:null, missions:[], idx:0, docs:{}, helps:{}, tries:{},
            askStep:-1, checked:null, unlockAll:false, lastRange:null, list:null, hintKey:'' };

// ═══════════════════════════════════════════════════════════
// UTILITÁRIOS
// ═══════════════════════════════════════════════════════════
const noAcc = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g,'');
const clean = s => (s||'').replace(/\u00a0/g,' ').replace(/[“”«»]/g,'"').replace(/[‘’]/g,"'").replace(/\s+/g,' ').trim();
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const cap = s => s.replace(/(^|\s)(\S)/g,(a,b,c)=>b+c.toUpperCase());
const isUpper = c => c && c.toLowerCase()!==c.toUpperCase() && c===c.toUpperCase();
const isLetter = c => c && c.toLowerCase()!==c.toUpperCase();
const words = s => clean(s).split(' ').filter(w => /[\p{L}\p{N}]/u.test(w));
function curDate(){ return S.dataFixa ? new Date(S.dataFixa+'T12:00:00') : new Date(); }
function keyOf(d){ return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'); }
function dayNum(d){ return Math.floor(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate())/864e5); }
function dateLabel(d){ return WEEK[d.getDay()]+', '+d.getDate()+' de '+MONTH[d.getMonth()]; }
function Y(){ return YEARS[S.ano]; }
function img(pose){ return IMG[(Y()?Y().k:'pixel')+'_'+pose]; }
function shuffleSeed(arr, seed){ const a=arr.slice(); let s=seed; for(let i=a.length-1;i>0;i--){ s=(s*9301+49297)%233280; const j=Math.floor(s/233280*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }

let toastT=null;
function toast(msg, anchor){
  const t=$('toast'); t.textContent=msg;
  let x, y;
  if(anchor){ const r=anchor.getBoundingClientRect(); x=r.left; y=r.bottom+10; }
  else { const r=$('word').getBoundingClientRect(); x=r.left+r.width/2-170; y=r.top+140; }
  t.style.left=Math.max(8,Math.min(x,innerWidth-350))+'px'; t.style.top=Math.max(8,Math.min(y,innerHeight-90))+'px';
  t.classList.add('show'); clearTimeout(toastT); toastT=setTimeout(()=>t.classList.remove('show'),3600);
}

// SHA-256 (apenas ASCII)
function sha256(ascii){function r(v,a){return(v>>>a)|(v<<(32-a))}var mp=Math.pow,mw=mp(2,32),res='',w=[],bl=ascii.length*8,h=[],k=[],pc=0,ic={};for(var c=2;pc<64;c++){if(!ic[c]){for(var i=0;i<313;i+=c){ic[i]=c}h[pc]=(mp(c,.5)*mw)|0;k[pc++]=(mp(c,1/3)*mw)|0}}ascii+='\x80';while(ascii.length%64-56)ascii+='\x00';for(i=0;i<ascii.length;i++){var j=ascii.charCodeAt(i);if(j>>8)return'';w[i>>2]|=j<<((3-i)%4)*8}w[w.length]=((bl/mw)|0);w[w.length]=bl;for(j=0;j<w.length;){var ww=w.slice(j,j+=16),oh=h;h=h.slice(0,8);for(i=0;i<64;i++){var w15=ww[i-15],w2=ww[i-2],a=h[0],e=h[4],t1=h[7]+(r(e,6)^r(e,11)^r(e,25))+((e&h[5])^((~e)&h[6]))+k[i]+(ww[i]=(i<16)?ww[i]:(ww[i-16]+(r(w15,7)^r(w15,18)^(w15>>>3))+ww[i-7]+(r(w2,17)^r(w2,19)^(w2>>>10)))|0),t2=(r(a,2)^r(a,13)^r(a,22))+((a&h[1])^(a&h[2])^(h[1]&h[2]));h=[(t1+t2)|0].concat(h);h[4]=(h[4]+t1)|0}for(i=0;i<8;i++){h[i]=(h[i]+oh[i])|0}}for(i=0;i<8;i++){for(j=3;j+1;j--){var b=(h[i]>>(j*8))&255;res+=((b<16)?0:'')+b.toString(16)}}return res}

// Dicas de teclado (teclado português)
function keyTip(ch){
  const m = {
    'á':['´','A'],'é':['´','E'],'í':['´','I'],'ó':['´','O'],'ú':['´','U'],
    'à':['Shift','´','A'],'â':['Shift','~','A'],'ê':['Shift','~','E'],'ô':['Shift','~','O'],
    'ã':['~','A'],'õ':['~','O'],'ç':['Ç']
  };
  const lo = ch.toLowerCase();
  if(m[lo]){
    const keys = m[lo].slice(); if(ch!==lo && lo!=='ç') keys.splice(keys.length-1,0,'Shift');
    if(lo==='ç') return 'Para o <b>ç</b> usa a tecla <span class="kbd">Ç</span>, ao lado do <span class="kbd">L</span>.';
    return 'Para <b>'+ch+'</b>: carrega em '+keys.map(k=>'<span class="kbd">'+k+'</span>').join(' ')+
      ' — primeiro o acento, larga, e depois a letra.';
  }
  if(isUpper(ch)) return 'Letra maiúscula: mantém <span class="kbd">Shift</span> carregado e carrega em <span class="kbd">'+ch+'</span>.';
  if(ch==='-') return 'O hífen <b>-</b> está na tecla <span class="kbd">-</span>, ao lado do <span class="kbd">Shift</span> da direita.';
  if(ch===',') return 'A vírgula <b>,</b> está na tecla <span class="kbd">,</span> ao lado do <span class="kbd">M</span>.';
  if(ch==='.') return 'O ponto <b>.</b> está na tecla <span class="kbd">.</span> ao lado da vírgula.';
  if(ch===':') return 'Para <b>:</b>: <span class="kbd">Shift</span> + <span class="kbd">.</span>';
  if(ch===';') return 'Para <b>;</b>: <span class="kbd">Shift</span> + <span class="kbd">,</span>';
  if(ch==='!') return 'Para <b>!</b>: <span class="kbd">Shift</span> + <span class="kbd">1</span>.';
  if(ch==='?') return 'Para <b>?</b>: <span class="kbd">Shift</span> + <span class="kbd">\'</span> (ao lado do 0).';
  return '';
}
const plainTip = ch => keyTip(ch).replace(/<[^>]+>/g,'');

// ═══════════════════════════════════════════════════════════
// VOZ (só no 1.º ano, quando o aluno carrega em 🔊)
// ═══════════════════════════════════════════════════════════
let ptVoice=null;
function pickVoice(){ try{ const vs=speechSynthesis.getVoices(); ptVoice=vs.find(v=>/pt[-_]PT/i.test(v.lang))||vs.find(v=>/^pt/i.test(v.lang))||null; }catch(e){} }
try{ pickVoice(); speechSynthesis.onvoiceschanged=pickVoice; }catch(e){}
function speak(t){
  try{ speechSynthesis.cancel();
    const say=String(t).replace(/«|»/g,'').replace(/⏎/g,'').replace(/⌫/g,'apagar').replace(/▼/g,'').replace(/\bN\b/g,'N, de negrito');
    const u=new SpeechSynthesisUtterance(say); u.lang='pt-PT'; if(ptVoice) u.voice=ptVoice; u.rate=0.9; speechSynthesis.speak(u);
  }catch(e){}
}
const SPK = (id,lbl) => S.ano===1 ? `<button class="spk" id="${id}" title="Ouvir">🔊${lbl?' '+lbl:''}</button>` : '';
function bindSpk(id, fn){ const b=$(id); if(b){ b.addEventListener('mousedown',e=>e.preventDefault()); b.onclick=()=>speak(fn()); } }

// ═══════════════════════════════════════════════════════════
// TEMAS DO DIA E MISSÕES
// ═══════════════════════════════════════════════════════════
// ═══════════════════════════════════════════════════════════
// ESCOLHA DOS TEXTOS DO DIA — rotação: um texto só volta depois de saírem os outros
// ═══════════════════════════════════════════════════════════
function schoolDay(d){ const diff=dayNum(d)-dayNum(new Date(2026,7,31)); const w=Math.floor(diff/7), r=((diff%7)+7)%7; return w*5+Math.min(r,5); }
const ORDER={};
function ordered(key, list, seed){ return ORDER[key] || (ORDER[key]=shuffleSeed(list, seed)); }
function inSeason(it, m){ const t=TEMAS[it.t]; return !t || !t.m || t.m.includes(m); }
function temaOf(it){ const t=TEMAS[it.t]||{e:'📝',n:'Texto'}; return {emoji:t.e, nome:t.n}; }
function specialTheme(d){
  const md=String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
  const sp=ESPECIAIS.find(e=>md>=e[0] && md<=e[1]); if(!sp) return null;
  const st=new Date(d.getFullYear(), +sp[0].slice(0,2)-1, +sp[0].slice(3), 12); return {t:sp[2], i:schoolDay(d)-schoolDay(st)};
}
function dayTexts(d, ano){
  const k=schoolDay(d), off=ano*13, mth=d.getMonth()+1;
  const pool = ano===1 ? POOL.y1 : POOL.g, key = ano===1 ? 'y1' : 'g';
  const isSeas = it => TEMAS[it.t] && TEMAS[it.t].m;
  // textos gerais: rotação fixa, sem repetições até se esgotar a lista
  const P = ordered(key+'p', pool.p.filter(it=>!isSeas(it)), 7);
  const Q = ordered(key+'q', pool.q.filter(it=>!isSeas(it)), 11);
  const pick=(L,i)=>L[((2*k+i+off)%L.length+L.length)%L.length];
  let p1=pick(P,0), pB=pick(P,1), q1=pick(Q,0), q2=pick(Q,1);
  // textos da época (outono, Natal, Carnaval…): entram de duas em duas semanas
  const sP=pool.p.filter(it=>isSeas(it) && inSeason(it,mth)), sQ=pool.q.filter(it=>isSeas(it) && inSeason(it,mth));
  const r=((k+off)%10+10)%10, cyc=Math.floor((k+off)/10);
  if(r===0 && sP.length) p1=sP[cyc%sP.length];
  if(r===5 && sQ.length) q1=sQ[cyc%sQ.length];
  // dias especiais (S. Martinho, Dia da Água, Dia do Livro…)
  const sp=specialTheme(d);
  if(sp){
    const xP=pool.p.filter(it=>it.t===sp.t), xQ=pool.q.filter(it=>it.t===sp.t), i=sp.i;
    if(i===0 && xP[0]) p1=xP[0];
    if(i===0 && xQ[0]) q1=xQ[0];
    if(i===1 && xQ[1]) q1=xQ[1];
    if(i===2 && xP[1]) p1=xP[1];
  }
  if(pB===p1) pB=pick(P,2);
  if(q2===q1) q2=pick(Q,2);
  const C=POOL.casos[ano]; const c=C[((k+off)%C.length+C.length)%C.length];
  return {p1,q1,c,q2,pB,k};
}
// ═══════════════════════════════════════════════════════════
// 1.º ANO — segue a ordem das letras do manual (só usa letras já trabalhadas)
// ═══════════════════════════════════════════════════════════
function unitsOf(str){
  const u=new Set(), low=String(str).toLowerCase();
  if(/[bcdfgptv][lr]/.test(low)) u.add('cl');
  if(/[aeiouáéíóúâêôãõ][mn](?![aeiouáéíóúâêôãõh])/.test(low)) u.add('nasal');
  if(/c[eiéêí]/.test(low)) u.add('ce');
  if(/g[eiéêí]/.test(low)) u.add('ge');
  for(const ch of low){
    if('.,?!-'.includes(ch)) u.add(ch);
    else if(ch==='ç') u.add('ç');
    else { const b=ch.normalize('NFD')[0]; if(b>='a' && b<='z') u.add(b); }
  }
  return u;
}
const ucache=new WeakMap();
function itemUnits(it){ if(!ucache.has(it)) ucache.set(it, unitsOf(it.ti+' '+(it.f||it.v||[]).join(' '))); return ucache.get(it); }
function y1Stage(d){
  const E=Y1.etapas;
  let h=''; try{ h=decodeURIComponent(location.hash||''); }catch(e){}
  const hm=h.match(/^#letra-([a-z]+)$/); if(hm){ const i=E.findIndex(e=>e.id===hm[1]); if(i>=0) return i; }
  const c=store.cfg.y1; if(c && c!=='auto'){ const i=E.findIndex(e=>e.id===c); if(i>=0) return i; }
  const key=keyOf(d); let idx=0; E.forEach((e,i)=>{ if(e.d<=key) idx=i; }); return idx;
}
function y1Known(idx){ const k=new Set(); Y1.etapas.slice(0,idx+1).forEach(e=>e.u.forEach(x=>k.add(x))); return k; }
const subset=(a,b)=>{ for(const x of a) if(!b.has(x)) return false; return true; };
const VOW=['a','e','i','o','u'], DIT=['ui','iu','oi','ou','ai','au','ão','ei','eu','ãe','õe'];
function sylls(id, known, k){
  const vk=VOW.filter(v=>known.has(v));
  if(VOW.includes(id)) return [id,id.toUpperCase(),id,id.toUpperCase(),...DIT.filter(d=>d.includes(id) && subset(unitsOf(d),known))];
  const T={c:['ca','co','cu'], g:['ga','go','gu','gue','gui'], q:['qua','que','qui','quo'], j:['ja','je','ji','jo','ju','ge','gi'],
    ce:['ce','ci','ça','ço','çu'], r:['ra','re','ri','ro','ru','ar','er','or','rr'], l:['la','le','li','lo','lu','al','el'],
    s:['sa','se','si','so','su','as','os','ss'], z:['za','ze','zi','zo','zu','az','ez']};
  if(id==='h'){ const o=[['ha','he','hi','ho','hu'],['nha','nhe','nho'],['lha','lhe','lho'],['cha','che','chi','cho','chu'],['xa','xe','xi','xo','xu']]; return o[k%o.length]; }
  if(id==='nas'){ const o=[['an','en','in','on','un'],['am','em','im','om','um'],['ka','wa','ya']]; return o[k%o.length]; }
  if(id==='cl'){ const o=[['bra','cra','dra','fra','gra','pra','tra'],['bla','cla','fla','gla','pla']]; return o[k%o.length]; }
  return T[id] || vk.map(v=>id+v);
}
function y1Day(d){
  const idx=y1Stage(d), E=Y1.etapas[idx], known=y1Known(idx), k=schoolDay(d);
  const newL=E.u.filter(x=>/^[a-zç]+$/.test(x));
  const reNew = E.id==='nas' ? '[aeiou][mn]' : E.id==='cl' ? '[bcdfgptv][lr]' : E.id==='ce' ? 'c[ei]|ç' : E.id==='j' ? 'j|g[ei]' : E.id==='h' ? 'h|x' : '['+newL.join('')+']';
  const hasNew = it => new RegExp(reNew,'iu').test(it.ti+' '+(it.f||it.v).join(' '));
  const P=ordered('y1bp', Y1.p, 7).filter(it=>subset(itemUnits(it),known));
  const Q=ordered('y1bq', Y1.q, 11).filter(it=>subset(itemUnits(it),known));
  const W=shuffleSeed(Y1.w.filter(w=>subset(unitsOf(w),known)), k+3);
  const Wn=W.filter(w=>new RegExp(reNew,'iu').test(w)), Wo=W.filter(w=>!Wn.includes(w));
  const words=n=>{ const out=[]; for(const w of [...Wn.slice(0,Math.ceil(n/2)),...Wo,...Wn.slice(Math.ceil(n/2))]) if(out.length<n && !out.includes(w)) out.push(w); return out; };
  const sy=sylls(E.id, known, k), syS=shuffleSeed(sy, k+1);
  const cap=w=>w.charAt(0).toUpperCase()+w.slice(1);
  const letterT = E.id==='nas' ? 'Sons nasais' : E.id==='cl' ? 'Grupos' : (newL[0]||'i');
  const titleL = /^[a-zç]{1,2}$/.test(letterT) ? cap(letterT)+' '+letterT : letterT;
  const titleOk = subset(unitsOf(titleL), known) ? titleL : cap(sy[0])+' '+sy[0];
  const lead = newL.length ? newL[0].charAt(0) : '';
  const capS = syS.filter(x=>lead && x.startsWith(lead) && x!=='rr' && x!=='ss' && !VOW.includes(x)).map(cap);
  const gen1 = {ti:titleOk, f:[[...syS, ...capS].join(' ')]};
  const pick=(L,i,avoid)=>{ if(!L.length) return null; for(let j=0;j<L.length;j++){ const it=L[((k*2+i+j)%L.length+L.length)%L.length]; if(!avoid.includes(it)) return it; } return null; };
  const fallbackWords = (n, avoid) => { const ws=words(n+1); if(ws.length>=2) return {ti:cap(ws[0]), f:[ws.slice(1).join(' ')]}; return {ti:titleOk, f:[shuffleSeed(sy,k+9).join(' ')]}; };
  const recentP=P.filter(hasNew);
  const m3 = pick(recentP,0,[]) || pick(P,0,[]) || fallbackWords(4,[]);
  const recentQ=Q.filter(hasNew);
  const m4 = pick(recentQ.length?recentQ:Q,0,[]) || {ti:titleOk, v:[shuffleSeed(sy,k+4).slice(0,3).join(' '), shuffleSeed(sy,k+5).slice(0,3).join(' ')]};
  const bonus = pick(P,1,[m3]) || fallbackWords(4,[m3]);
  const wl = words(6);
  const m2 = wl.length>=3 ? {ti:cap(wl[0]), v:wl.slice(1)} : {ti:titleOk, v:[shuffleSeed(sy,k+6).slice(0,3).join(' '), shuffleSeed(sy,k+7).slice(0,3).join(' ')]};
  return {idx, E, known, reNew, gen1, m2, m3, m4, bonus, aq:words(5).length>=3?words(5):sy.slice(0,5)};
}
function buildMissions1(d){
  const T=y1Day(d); S.dateKey=keyOf(d); S.day=T;
  const caso={n:T.E.n, d:'Repara: '+T.E.n+'.', re:T.reNew};
  const tm={emoji:'🔤', nome:T.E.n};
  const desc=(it,kind)=>'🔤 '+it.ti+' ('+kind+')';
  S.missions=[
    {id:'aq', tipo:'aq', nome:'Aquecimento dos dedos', desc:'Letras e palavras no teclado', y1aq:T.aq},
    {id:'m1', tipo:'copiar', gen:'prosa', src:T.gen1, caso, tema:tm, nome:'A letra nova', desc:desc(T.gen1,'letras')},
    {id:'m2', tipo:'copiar', gen:'poesia', src:T.m2, caso, tema:tm, nome:'Copiar palavras', desc:desc(T.m2,'uma por linha')},
    {id:'m3', tipo:'copiar', gen:T.m3.v?'poesia':'prosa', src:T.m3, caso, tema:tm, nome:'Letra do dia', desc:desc(T.m3,'frase')},
    {id:'m4', tipo:'copiar', gen:'poesia', src:T.m4, caso, tema:tm, nome:'Copiar um poema', desc:desc(T.m4,'poesia')},
    {id:'bonus', tipo:'copiar', gen:T.bonus.v?'poesia':'prosa', src:T.bonus, caso, tema:tm, nome:'Desafio extra: copiar uma frase', desc:'🔤 '+T.bonus.ti+' (para quem acaba primeiro)', bonus:true}
  ];
  const apoio=S.perfil==='apoio';
  S.missions.forEach(m=>{
    if(m.tipo==='aq'){ m.exp={palavras: apoio ? m.y1aq.slice(0,4) : m.y1aq}; return; }
    const it=m.src;
    if(it.v) m.exp={titulo:it.ti, linhas: apoio ? it.v.slice(0, m.id==='m2'?2:2) : it.v.slice(), poema:true, caso};
    else m.exp={titulo:it.ti, linhas:[apoio ? it.f[0] : it.f.join(' ')], poema:false, caso};
  });
}
function buildMissions(){
  const d=curDate(), ano=S.ano;
  if(ano===1) return buildMissions1(d);
  const T=dayTexts(d, ano);
  S.dateKey=keyOf(d); S.day=T;
  const ct={emoji:'🔤', nome:(ano===1?'Letra do dia: ':'Caso: ')+T.c.n};
  const kind=it=>it.v?'poesia':'prosa';
  S.missions=[
    {id:'aq', tipo:'aq', nome:'Aquecimento dos dedos', desc:'Palavras do dia no teclado'},
    {id:'m1', tipo:'copiar', gen:'prosa',  src:T.p1, tema:temaOf(T.p1), nome:'Copiar um texto', desc:temaOf(T.p1).emoji+' '+T.p1.ti+' (prosa)'},
    {id:'m2', tipo:'copiar', gen:'poesia', src:T.q1, tema:temaOf(T.q1), nome:'Copiar um poema', desc:temaOf(T.q1).emoji+' '+T.q1.ti+' (poesia)'},
    {id:'m3', tipo:'copiar', gen:kind(T.c), src:T.c, caso:T.c, tema:ct, nome:ano===1?'Letra do dia':'Caso de leitura e escrita', desc:'🔤 '+ct.nome.replace(/^Caso: /,'')+' · '+T.c.ti+' ('+kind(T.c)+')'},
    {id:'m4', tipo:'copiar', gen:'poesia', src:T.q2, tema:temaOf(T.q2), nome:'Copiar outro poema', desc:temaOf(T.q2).emoji+' '+T.q2.ti+' (poesia)'},
    {id:'bonus', tipo:'copiar', gen:'prosa', src:T.pB, extra:1, tema:temaOf(T.pB), nome:'Desafio extra: copiar um texto', desc:temaOf(T.pB).emoji+' '+T.pB.ti+' (para quem acaba primeiro)', bonus:true}
  ];
  S.missions.slice(1).forEach(m=>m.exp=expected(m, dayNum(d)));
  S.missions[0].exp=expected(S.missions[0], dayNum(d));
}
const STOP=new Set(['para','pela','pelo','pelas','pelos','como','quando','depois','sempre','também','muito','muitos','muitas','todos','todas','uma','umas','uns','com','sem','que','dos','das','nos','nas','não','mais','mas','está','são','tem','têm','há','até']);
function warmWords(n, seed){
  const srcs=[S.missions[1],S.missions[2],S.missions[3]].map(m=>m.exp.linhas.join(' '));
  const seen=new Set(), pri=[], rest=[];
  const maxL = S.ano===1 ? 7 : 11;
  srcs.join(' ').split(/\s+/).forEach(w=>{
    w=w.replace(/^[^\p{L}]+|[^\p{L}]+$/gu,''); if(!w || w.includes('-')) return;
    const lw=w.toLowerCase(); if(lw.length<3 || lw.length>maxL || STOP.has(lw) || seen.has(lw)) return;
    seen.add(lw);
    const word = (S.ano===1 && !/^(Madeira|Funchal|Lua|Sol|Terra|Rui|Ana)$/.test(w)) ? lw : w;
    (/[áéíóúàâêôãõç]/i.test(lw) ? pri : rest).push(word);
  });
  const a=shuffleSeed(pri,seed), b=shuffleSeed(rest,seed+3);
  const out=a.slice(0,Math.ceil(n/2)); b.forEach(w=>{ if(out.length<n) out.push(w); }); a.slice(Math.ceil(n/2)).forEach(w=>{ if(out.length<n) out.push(w); });
  return shuffleSeed(out, seed+5);
}
function expected(m, dn){
  const y=Y(), apoio=S.perfil==='apoio';
  if(m.tipo==='aq') return {palavras: warmWords(apoio?Math.min(5,y.aq):y.aq, dn)};
  const it=m.src, caso=m.caso?{n:m.caso.n, d:m.caso.d, re:m.caso.re}:null;
  if(it.v){
    const lim = apoio ? y.versosApoio : it.v.length;
    return {titulo:it.ti, linhas:it.v.slice(0,lim), poema:true, caso};
  }
  let n;
  if(m.caso) n = apoio ? Math.ceil(it.f.length/2) : it.f.length;
  else if(S.ano===1) n = apoio ? 1 : 1+(m.extra||0);
  else n = Math.min(5,(apoio?y.prosaApoio:y.prosa)+(m.extra||0));
  return {titulo:it.ti, linhas:[it.f.slice(0,n).join(' ')], poema:false, caso};
}
function expTokens(E){
  const toks=[];
  E.linhas.forEach(l=>clean(l).split(' ').forEach(w=>{
    const mm=w.match(/^(.*)\{([^}]+)\}(.*)$/);
    toks.push(mm ? {alts:mm[2].split('|').map(x=>mm[1]+x+mm[3]), blank:true} : w);
  }));
  return toks;
}
const tokStr = t => typeof t==='string' ? t : t.alts[0];

// ═══════════════════════════════════════════════════════════
// PROGRESSO
// ═══════════════════════════════════════════════════════════
function yearStore(){ const a=store.anos[S.ano]=store.anos[S.ano]||{dias:{}}; return a; }
function dayStore(){ return regEntry().m; } // progresso de cada aluno (nome+turma+ano+dia)
function doneStars(id){ return (dayStore()[id])||0; }
function daysPlayed(){ return Object.values(store.reg||{}).filter(r=>r.nome===S.nome&&String(r.ano)===String(S.ano)&&(r.turma||'')===(S.turma||'')&&Object.keys(r.m||{}).length).length; }
function regEntry(){
  store.reg=store.reg||{};
  const k=[S.dateKey,S.ano,S.turma||'',S.nome].join('|');
  const r=store.reg[k]=store.reg[k]||{d:S.dateKey,ano:S.ano,turma:S.turma||'',nome:S.nome,m:{},ini:Date.now()};
  r.perfil=S.perfil; r.ult=Date.now(); return r;
}
function markDone(id, stars){ const ds=dayStore(); ds[id]=Math.max(ds[id]||0, stars);
  const r=regEntry(); r.m[id]=Math.max(r.m[id]||0, stars); save(); sendReg(r); }
// Envio para a base de dados: ver js/registo.js (Firebase)
// ═══════════ CÓDIGO PARA O PROFESSOR ═══════════

const SEGREDO = 'zCKODaw_tJTQwMVx8tJue2YR';
function fnv(str){ let h=0x811c9dc5; for(let i=0;i<str.length;i++){ h^=str.charCodeAt(i); h=Math.imul(h,0x01000193)>>>0; } return h.toString(36).padStart(7,'0'); }
function b64u(str){ return btoa(unescape(encodeURIComponent(str))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,''); }
function unb64u(c){ c=c.replace(/-/g,'+').replace(/_/g,'/'); while(c.length%4) c+='='; return decodeURIComponent(escape(atob(c))); }
const MIDS_C=['aq','m1','m2','m3','m4','bonus'];
function gerarCodigo(){
  const r=regEntry();
  const est=MIDS_C.map(id=>Math.min(3,r.m[id]||0)).join('');
  const p=['1',r.d.replace(/-/g,''),r.ano,r.turma||'',r.nome,est].join('~');
  return 'ET'+b64u(p+'~'+fnv(SEGREDO+p));
}
function lerCodigo(cod){
  try{
    cod=String(cod||'').replace(/\s+/g,'');
    if(!/^ET[A-Za-z0-9_-]+$/.test(cod)) return null;
    const t=unb64u(cod.slice(2)).split('~'); if(t.length!==7) return null;
    const chk=t.pop(), p=t.join('~');
    const d=t[1];
    return {valido:fnv(SEGREDO+p)===chk, dia:d.slice(0,4)+'-'+d.slice(4,6)+'-'+d.slice(6,8), ano:t[2], turma:t[3], nome:t[4],
            m:Object.fromEntries(MIDS_C.map((id,i)=>[id,+t[5][i]||0]))};
  }catch(e){ return null; }
}
function sendReg(r){
  store.pend=store.pend||{};
  const k=[r.d,r.ano,r.turma,r.nome].join('|');
  store.pend[k]={chave:k,dia:r.d,turma:r.turma,ano:r.ano,nome:r.nome,modo:r.perfil,ini:r.ini,ult:r.ult,m:Object.assign({},r.m),cod:gerarCodigo()};
  save(); flushReg();
}
let flushing=false;
function nuvem(){ return !!(window.REG && REG.pronto); }
// Envia para a base de dados o que ainda está pendente neste computador
function flushReg(){
  const items=Object.values(store.pend||{}); if(!items.length||flushing||!nuvem()) return;
  flushing=true;
  REG.enviar(items).then(()=>{
    items.forEach(it=>{ if(store.pend[it.chave]&&store.pend[it.chave].ult===it.ult) delete store.pend[it.chave]; });
    save(); flushing=false; S.sendErr='';
    if(Object.keys(store.pend||{}).length) setTimeout(flushReg,0);
  }, e=>{ flushing=false; S.sendErr=(e&&e.message)||String(e||'erro'); });
}
setInterval(flushReg,30000);
// Chamado por js/registo.js quando o professor valida um aluno: apaga-o deste computador
window.aoValidar=function(lista){
  let atual=false, nomes=[];
  lista.forEach(({chave,ini})=>{
    const r=store.reg&&store.reg[chave]; if(!r||r.ini!==ini) return;
    if(S.nome && chave===[S.dateKey,S.ano,S.turma||'',S.nome].join('|')) atual=true;
    nomes.push(r.nome); delete store.reg[chave]; if(store.pend) delete store.pend[chave];
  });
  if(!nomes.length) return;
  save();
  if(atual){ S.nome=''; $('nameIn').value=''; renderHome(); show('home');
    $('homeMsg').style.color='var(--green)'; $('homeMsg').textContent='✔ O professor validou o teu trabalho. Obrigado, '+nomes[0].split(' ')[0]+'!'; }
};
window.addEventListener('online',flushReg);
function firstUndone(){ const i=S.missions.findIndex(m=>!m.bonus && !doneStars(m.id)); return i<0 ? S.missions.length-1 : i; }
function unlocked(i){
  if(S.unlockAll) return true;
  const m=S.missions[i];
  if(m.bonus) return !!doneStars('m4');
  return i<=firstUndone() || !!doneStars(m.id);
}
function helpMode(m){
  if(S.perfil==='apoio') return 'seta';
  const a=store.cfg.ajudas; if(a && a!=='auto') return a;
  if(S.ano===1) return 'seta';
  const d=daysPlayed();
  const t = d<6 ? {m1:'seta',m2:'seta',m3:'passos',m4:'passos',bonus:'pedido'}
          : d<12 ? {m1:'seta',m2:'passos',m3:'passos',m4:'pedido',bonus:'pedido'}
          : {m1:'passos',m2:'passos',m3:'pedido',m4:'pedido',bonus:'pedido'};
  return t[m.id]||'passos';
}

// ═══════════════════════════════════════════════════════════
// ECRÃS
// ═══════════════════════════════════════════════════════════
function show(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.toggle('on', s.id===id));
  closeList(); hidePointer(); window.scrollTo(0,0);
  $('teacherBtn').classList.toggle('hidden', id==='editor' || id==='warm');
}
function setAccent(){
  document.body.classList.toggle('y1', S.ano===1);
  const y=Y(); document.documentElement.style.setProperty('--acc', y?y.cor:'#E8834A');
  document.documentElement.style.setProperty('--acc-soft', y?y.soft:'#FCE9DC');
  document.querySelectorAll('.curMascot').forEach(i=>i.src=img('ola'));
  document.querySelectorAll('.curName').forEach(s=>s.textContent=S.nome+' ('+y.ano+')');
}

// ---------- início ----------
function renderHome(){
  $('homeDate').textContent = 'Desafio de '+dateLabel(curDate());
  $('years').innerHTML = Object.entries(YEARS).map(([n,y])=>
    `<button class="year ${S.ano==n?'sel':''}" data-y="${n}" style="--c:${y.cor};--cs:${y.soft}">
      <img src="${IMG[y.k+'_ola']}" alt=""><div><b style="color:${y.cor}">${y.nome}</b><br><small>${y.ano}</small></div></button>`).join('');
  $('years').querySelectorAll('.year').forEach(b=>b.onclick=()=>{ S.ano=+b.dataset.y; renderHome(); });
}
const PARTIC=new Set(['da','de','do','das','dos','e']);
function nameCase(n){ return n.split(' ').map((w,i)=> i>0 && PARTIC.has(w.toLowerCase()) ? w.toLowerCase() : w.charAt(0).toUpperCase()+w.slice(1)).join(' '); }
$('nameIn').addEventListener('keydown',e=>{ if(e.key==='Enter') $('goBtn').click(); });
$('perfilSeg').querySelectorAll('button').forEach(b=>b.onclick=()=>{
  S.perfil=b.dataset.p; $('perfilSeg').querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b));
});
$('goBtn').onclick=()=>{
  if(!S.ano){ $('homeMsg').textContent='Escolhe primeiro o teu ano.'; return; }
  const n=clean($('nameIn').value);
  if(n.replace(/[^\p{L}]/gu,'').length<2){ $('homeMsg').textContent='Escreve o teu nome para começar.'; $('nameIn').focus(); return; }
  if(/[^\p{L}\s'-]/u.test(n)){ $('homeMsg').textContent='No nome só podes usar letras.'; $('nameIn').focus(); return; }
  S.nome=nameCase(n);
  S.turma=clean($('turmaIn').value).toUpperCase();
  try{ store.cfg.turma=S.turma; }catch(e){}
  $('homeMsg').textContent=''; S.started=true; S.docs={}; S.helps={}; S.tries={};
  setAccent(); buildMissions(); const r0=regEntry(); save(); sendReg(r0); renderMap(); show('map');
};
try{ if(store.cfg.turma) $('turmaIn').value=store.cfg.turma; }catch(e){}
$('turmaIn').addEventListener('keydown',e=>{ if(e.key==='Enter') $('goBtn').click(); });

// ---------- mapa ----------
function renderMap(){
  const y=Y(), M=S.missions, A=M[1].tema, B=M[2].tema;
  $('mapMascot').src=img('ola'); $('mapWho').textContent=S.nome+' ('+y.ano+')';
  $('mapTitle').innerHTML='Desafio do dia<small>'+dateLabel(curDate())+(S.perfil==='apoio'?' (modo apoio)':'')+'</small>';
  $('dayImg').src=img('ola');
  const nm=t=>{ const x=t.nome.replace(/^(Eco-Escolas|Estudo do Meio): /,''); return x.charAt(0).toLowerCase()+x.slice(1); };
  $('daySay').innerHTML = S.ano===1
    ? `Olá, ${esc(S.nome.split(' ')[0])}! Eu sou o ${y.nome}. Hoje vamos treinar: <b>${esc(M[1].caso.n)}</b>. Só vais copiar letras e palavras que já aprendeste.
    Em todas as missões começas pelo <b>teu nome</b>, escrito como no início: <b>${esc(S.nome)}</b>.`
    : `Olá, ${esc(S.nome.split(' ')[0])}! Eu sou o ${y.nome}. Hoje vamos copiar textos sobre <b>${esc(nm(A))}</b> e <b>${esc(nm(B))}</b>${S.ano===1?` e treinar: <b>${esc(M[3].caso.n)}</b>`:` e treinar o caso <b>${esc(M[3].caso.n)}</b>`}.
    Em todas as missões começas pelo <b>teu nome</b>, escrito como no início: <b>${esc(S.nome)}</b>. Depois copias e formatas o título e o texto: podes escrever tudo e formatar no fim, ou escolher a letra antes de escrever.`;
  $('daySay').innerHTML += SPK('spkDay');
  bindSpk('spkDay',()=>$('daySay').innerText.replace('🔊',''));
  $('dayThemes').innerHTML=(S.ano===1?[M[1].tema]:[A,B,M[3].tema]).map(t=>`<span class="tag">${t.emoji} ${esc(t.nome)}</span>`).join('');
  const fu=firstUndone();
  $('path').innerHTML=S.missions.map((m,i)=>{
    const st=doneStars(m.id), un=unlocked(i);
    const cls = st?'done':(i===fu&&un?'next':'');
    const n = m.id==='aq'?'⌨️':(m.bonus?'★':String(i));
    return `<button class="stop ${cls}" data-i="${i}" ${un?'':'disabled'}>
      <span class="n">${n}</span><span class="t"><b>${m.bonus?'':(m.id==='aq'?'':'Missão '+i+': ')}${m.nome}</b><span>${m.desc}</span></span>
      <span class="s">${st?'⭐'.repeat(st):(un?'▶':'🔒')}</span></button>`;
  }).join('');
  $('path').querySelectorAll('.stop').forEach(b=>b.onclick=()=>openMission(+b.dataset.i));
  const tot=S.missions.reduce((a,m)=>a+doneStars(m.id),0);
  $('dayStars').textContent='Estrelas de hoje: '+tot+' ⭐';
  $('dayStreak').textContent='Dias de treino: '+daysPlayed();
  const cod=gerarCodigo(); save();
  $('codeTxt').textContent=cod; $('codeMsg').textContent='';
  $('codeSend').style.display='none';
  $('codeMsg').textContent = nuvem() ? '✔ As tuas missões ficam guardadas automaticamente.' : '';
}
$('codeSend').onclick=()=>{ setTimeout(()=>{ $('codeMsg').textContent='Abriu-se uma janela: confirma que diz «Registado».'; },300); };
$('codeCopy').onclick=async()=>{
  const t=$('codeTxt').textContent; let ok=false;
  try{ await navigator.clipboard.writeText(t); ok=true; }catch(e){}
  if(!ok){ try{ const r=document.createRange(); r.selectNodeContents($('codeTxt')); const sel=getSelection(); sel.removeAllRanges(); sel.addRange(r); ok=document.execCommand('copy'); }catch(e){} }
  $('codeMsg').textContent= ok?'Copiado! Cola-o na tarefa do Classroom.':'Seleciona o código e usa Ctrl+C.';
};
$('mapExit').onclick=()=>{ renderHome(); show('home'); };

function openMission(i){
  if(!unlocked(i)) return;
  S.idx=i; const m=S.missions[i]; S.m=m;
  if(m.tipo==='aq') startWarm(); else startEditor();
  updateNav();
}
function updateNav(){
  const ok = unlocked(S.idx+1<S.missions.length ? S.idx+1 : S.idx) && S.idx+1<S.missions.length && (doneStars(S.m.id)||S.unlockAll);
  document.querySelectorAll('.navNext').forEach(b=>{ b.disabled=!ok; b.title=ok?'':'Termina esta missão primeiro'; });
  document.querySelectorAll('.navPrev').forEach(b=>b.disabled=S.idx===0);
}
document.querySelectorAll('.navHome').forEach(b=>b.onclick=()=>{ renderMap(); show('map'); });
document.querySelectorAll('.navPrev').forEach(b=>b.onclick=()=>{ if(S.idx>0) openMission(S.idx-1); });
document.querySelectorAll('.navNext').forEach(b=>b.onclick=()=>{ if(S.idx+1<S.missions.length) openMission(S.idx+1); });

// ═══════════════════════════════════════════════════════════
// AQUECIMENTO
// ═══════════════════════════════════════════════════════════
let W={};
function startWarm(){
  W={list:S.m.exp.palavras, i:0, errs:0};
  show('warm'); setAccent(); drawWarm(); setTimeout(()=>$('warmIn').focus(),50);
}
function drawWarm(){
  const w=W.list[W.i];
  $('warmCount').textContent='Palavra '+(W.i+1)+' de '+W.list.length;
  $('warmWord').innerHTML=esc(w)+SPK('spkWarm'); bindSpk('spkWarm',()=>w); $('warmIn').value=''; $('warmIn').className='';
  const special=[...w].find(c=>keyTip(c));
  $('warmTip').innerHTML = special ? '💡 '+keyTip(special) : '';
  $('warmDots').innerHTML=W.list.map((x,i)=>`<i class="${i<W.i?'ok':(i===W.i?'cur':'')}"></i>`).join('');
}
$('warmIn').addEventListener('keydown',e=>{
  if(e.key!=='Enter') return;
  e.preventDefault();
  const w=W.list[W.i], v=$('warmIn').value.trim();
  if(!v) return;
  if(v===w){
    $('warmIn').className='ok';
    setTimeout(()=>{ W.i++; if(W.i>=W.list.length) finishWarm(); else drawWarm(); },350);
  } else {
    W.errs++; $('warmIn').className='bad'; void $('warmIn').offsetWidth;
    let tip='Olha bem para a palavra e tenta outra vez.';
    if(noAcc(v)===noAcc(w)){ const c=[...w].find((c,i)=>c!==[...v][i]); tip='Quase! Falta o acento. '+(keyTip(c||'')||''); }
    else if(v.toLowerCase()===w.toLowerCase()) tip='Quase! Repara nas letras maiúsculas e minúsculas.';
    $('warmTip').innerHTML='✋ '+tip;
  }
});
function finishWarm(){
  const stars = W.errs<=2?3:(W.errs<=5?2:1);
  markDone('aq', stars); updateNav();
  celebrate(stars, 'Dedos aquecidos!', 'Agora já estás pronto para a primeira missão.', false);
}

// ═══════════════════════════════════════════════════════════
// EDITOR — PARÁGRAFOS E FORMATAÇÃO
// ═══════════════════════════════════════════════════════════
try { document.execCommand('defaultParagraphSeparator', false, 'p'); } catch(e){}
function paras(){ return [...page.children].filter(e=>e.tagName==='P'); }
function pText(p){ return clean(p ? p.textContent : ''); }
function pLines(p){
  const out=[]; let cur='';
  (function walk(n){ n.childNodes.forEach(c=>{ if(c.nodeType===3) cur+=c.textContent; else if(c.tagName==='BR'){ out.push(cur); cur=''; } else walk(c); }); })(p);
  out.push(cur); return out.map(clean).filter(Boolean);
}
function fmt(p){
  const d=p.dataset;
  return {font:d.font||DEF.font, size:+(d.size||DEF.size), bold:d.bold==='1', ital:d.ital==='1', und:d.und==='1', align:d.align||'left'};
}
function applyFmt(p,f){
  p.dataset.font=f.font; p.dataset.size=f.size; p.dataset.bold=f.bold?'1':'0'; p.dataset.ital=f.ital?'1':'0'; p.dataset.und=f.und?'1':'0'; p.dataset.align=f.align;
  p.setAttribute('style', `font-family:${FONTS[f.font]||f.font};font-size:${f.size}pt;font-weight:${f.bold?700:400};font-style:${f.ital?'italic':'normal'};text-decoration:${f.und?'underline':'none'};text-align:${f.align}`);
}
function setF(p,patch){ applyFmt(p, Object.assign(fmt(p), patch)); }
function newP(f){ const p=document.createElement('p'); p.appendChild(document.createElement('br')); applyFmt(p, f||DEF); return p; }

function normalize(){
  let changed=false, prev=DEF;
  [...page.childNodes].forEach(n=>{
    if(n.nodeType===3){
      if(!n.textContent.length){ n.remove(); changed=true; return; }
      const p=newP(prev); p.innerHTML=''; page.insertBefore(p,n); p.appendChild(n); changed=true; prev=fmt(p); return;
    }
    if(n.nodeType!==1){ n.remove(); changed=true; return; }
    let p=n;
    if(n.tagName!=='P'){
      p=document.createElement('p');
      if(n.dataset && n.dataset.font) Object.assign(p.dataset, n.dataset);
      if(n.tagName==='BR') p.appendChild(document.createElement('br'));
      else if(/^(DIV|H\d|LI|UL|OL|BLOCKQUOTE|SECTION)$/.test(n.tagName)){ while(n.firstChild) p.appendChild(n.firstChild); }
      else { page.insertBefore(p,n); p.appendChild(n); n=null; }
      if(n) n.replaceWith(p);
      changed=true;
    }
    if(!p.dataset.font){ Object.assign(p.dataset, {}); applyFmt(p, prev); changed=true; }
    p.querySelectorAll('*').forEach(el=>{
      if(el.tagName==='BR' || !el.parentNode) return;
      const par=el.parentNode; while(el.firstChild) par.insertBefore(el.firstChild, el); el.remove(); changed=true;
    });
    applyFmt(p, fmt(p));
    prev=fmt(p);
  });
  if(!page.querySelector('p')){ page.innerHTML=''; page.appendChild(newP(DEF)); changed=true; }
  return changed;
}
function posOf(node,off){
  if(node===page) return {i:Math.min(off,page.childNodes.length-1), o:0};
  let top=node; while(top && top.parentNode!==page) top=top.parentNode;
  if(!top) return {i:0,o:0};
  const r=document.createRange(); r.setStart(top,0); r.setEnd(node,off);
  return {i:[...page.childNodes].indexOf(top), o:r.toString().length};
}
function saveCaret(){
  const s=getSelection(); if(!s.rangeCount) return null;
  const r=s.getRangeAt(0); if(!page.contains(r.startContainer)) return null;
  return {a:posOf(r.startContainer,r.startOffset), b:posOf(r.endContainer,r.endOffset)};
}
function locate(pp){
  const ps=page.children; const p=ps[Math.max(0,Math.min(pp.i, ps.length-1))];
  let rem=pp.o; const w=document.createTreeWalker(p, NodeFilter.SHOW_TEXT); let t, last=null;
  while((t=w.nextNode())){ last=t; if(rem<=t.length) return [t,rem]; rem-=t.length; }
  return last ? [last,last.length] : [p,0];
}
function restoreCaret(c){
  if(!c) return;
  try{ const r=document.createRange(); const a=locate(c.a), b=locate(c.b); r.setStart(a[0],a[1]); r.setEnd(b[0],b[1]);
    const s=getSelection(); s.removeAllRanges(); s.addRange(r); } catch(e){}
}

// ---------- seleção ----------
function getRange(){
  const s=getSelection();
  if(s.rangeCount){ const r=s.getRangeAt(0); if(page.contains(r.commonAncestorContainer)) return r; }
  if(S.lastRange && page.contains(S.lastRange.commonAncestorContainer)) return S.lastRange;
  return null;
}
function offIn(p,node,off){ const r=document.createRange(); r.setStart(p,0); r.setEnd(node,off); return r.toString().length; }
function selInfo(){
  const r=getRange(); if(!r) return null;
  const cov=[];
  paras().forEach(p=>{
    const len=p.textContent.length, txt=p.textContent;
    const a=r.comparePoint(p,0), b=r.comparePoint(p,p.childNodes.length);
    if(a===1 || b===-1) return;
    const s = a===0 ? 0 : offIn(p,r.startContainer,r.startOffset);
    const e = b===0 ? len : offIn(p,r.endContainer,r.endOffset);
    const lead = len - txt.replace(/^[\s\u00a0]+/,'').length, trail = len - txt.replace(/[\s\u00a0]+$/,'').length;
    const has = txt.trim().length>0;
    const inside = a===0 && b===0;
    const caret = r.collapsed;
    const touched = caret || e>s || inside || (!has && a<=0 && b>=0);
    if(!touched) return;
    if(!r.collapsed && e<=s && has && !inside) return;
    cov.push({p, full: has && s<=lead && e>=len-trail, has});
  });
  return {r, collapsed:r.collapsed, touched:cov};
}
function restoreSel(r){ page.focus({preventScroll:true}); const s=getSelection(); s.removeAllRanges(); s.addRange(r); }
function caretIn(el){ const i=selInfo(); return !!(i && i.collapsed && i.touched.length && i.touched[0].p===el); }
function fullySelected(els){ const i=selInfo(); if(!i || i.collapsed) return false; return els.every(el=>i.touched.some(c=>c.p===el && c.full)); }
function touchesAll(els){ const i=selInfo(); if(!i) return false; return els.every(el=>i.touched.some(c=>c.p===el)); }

// ---------- comandos da barra ----------
// Regras: o nome vem sempre primeiro.
// "Escrevo primeiro": só se formata texto depois de o escrever todo.
// "Formato primeiro": escolhe-se a letra numa linha vazia e só depois se escreve.
function formatLocked(anchor){
  const V=validate();
  if(!V.R[0].ok){ toast('Primeiro escreve o teu nome na primeira linha.', anchor); return true; }
  const info=selInfo(), touched=info?info.touched:[];
  if(!touched.length) return false;
  if(!touched.some(c=>c.has)){
    if(S.method!=='formatar'){ S.method='formatar'; S.hintKey=''; toast('Estás a escolher a letra antes de escrever: também está certo! A ajuda mostra agora esta maneira.', anchor); schedule(); }
    return false;
  }
  if(S.method==='escrever' && !writingDone(V)){
    toast('Acaba primeiro de escrever o título e o texto todo; depois selecionas e formatas. Se preferires formatar antes de escrever, clica numa linha vazia.', anchor);
    return true;
  }
  return false;
}
function cmdFormat(patchFn, anchor){
  if(formatLocked(anchor)) return;
  const info=selInfo();
  if(!info){ toast('Primeiro clica na folha, no sítio que queres mudar.', anchor); return; }
  if(!info.touched.length){ toast('Primeiro seleciona o texto que queres mudar: clica 3 vezes em cima da linha ou arrasta o rato por cima das palavras.', anchor); return; }
  restoreSel(info.r);
  if(info.collapsed){
    const c=info.touched[0];
    if(!c.has){ const patch=patchFn([c.p]); setF(c.p, patch); S.lastAct={key:Object.keys(patch)[0], paras:[c.p]}; return afterCmd(); }
    toast('Primeiro seleciona o texto que queres mudar: clica 3 vezes em cima da linha ou arrasta o rato por cima.', anchor);
    return;
  }
  const full=info.touched.filter(c=>c.full||!c.has).map(c=>c.p);
  const part=info.touched.filter(c=>!c.full && c.has);
  if(full.length){ const patch=patchFn(full.filter(p=>pText(p)).length?full.filter(p=>pText(p)):full); full.forEach(p=>setF(p,patch)); S.lastAct={key:Object.keys(patch)[0], paras:full}; }
  if(part.length) toast(full.some(p=>pText(p)) ? 'Algumas linhas só estavam selecionadas em parte e não mudaram. Seleciona as linhas inteiras.'
                                              : 'Selecionaste só uma parte da linha. Para mudar a linha toda, clica 3 vezes em cima dela.', anchor);
  afterCmd();
}
function cmdAlign(al){
  if(formatLocked($('aCenter'))) return;
  const info=selInfo();
  if(!info || !info.touched.length){ toast('Primeiro clica na linha que queres alinhar.', $('aCenter')); return; }
  restoreSel(info.r); info.touched.forEach(c=>setF(c.p,{align:al})); S.lastAct={key:'align', paras:info.touched.map(c=>c.p)}; afterCmd();
}
function afterCmd(){ S.docs[S.m.id]=page.innerHTML; closeList(); schedule(); }
const toggle = key => ps => ({[key]: !ps.every(p=>fmt(p)[key])});

function bindRibbon(){
  $('ribbon').querySelectorAll('button').forEach(b=>b.addEventListener('mousedown',e=>e.preventDefault()));
  $('bBold').onclick=()=>cmdFormat(toggle('bold'), $('bBold'));
  $('bItal').onclick=()=>cmdFormat(toggle('ital'), $('bItal'));
  $('bUnd').onclick=()=>cmdFormat(toggle('und'), $('bUnd'));
  $('aLeft').onclick=()=>cmdAlign('left');
  $('aCenter').onclick=()=>cmdAlign('center');
  $('aRight').onclick=()=>cmdAlign('right');
  $('aJust').onclick=()=>cmdAlign('justify');
  $('cFont').onclick=()=>openList('font');
  $('cSize').onclick=()=>openList('size');
  $('wPaste').onclick=()=>toast('Neste jogo escreves tudo com o teclado. ⌨️', $('wPaste'));
  $('wTabs').querySelectorAll('.w-tab').forEach(t=>{ t.addEventListener('mousedown',e=>e.preventDefault());
    t.onclick=()=>{ if(t.dataset.tab!=='Base') toast('Para esta rotina só precisas do separador Base.', t); }; });
}
function openList(kind){
  if(!(S.list && S.list.kind===kind) && formatLocked(kind==='font'?$('cFont'):$('cSize'))) return;
  if(S.list && S.list.kind===kind){ closeList(); schedule(); return; }
  closeList();
  const anchor = kind==='font'?$('cFont'):$('cSize');
  const L=document.createElement('div'); L.className='w-list';
  const cur = anchor.querySelector('.v').textContent;
  if(kind==='font'){
    L.innerHTML='<div class="sec">Todos os tipos de letra</div>'+Object.keys(FONTS).map(f=>
      `<div data-v="${f}" style="font-family:${FONTS[f].replace(/"/g,"'")}" class="${f===cur?'cur':''}">${f}</div>`).join('');
  } else {
    L.innerHTML=SIZES.map(s=>`<div data-v="${s}" class="${String(s)===cur?'cur':''}">${s}</div>`).join('');
  }
  L.addEventListener('mousedown',e=>e.preventDefault());
  L.querySelectorAll('[data-v]').forEach(o=>o.onclick=()=>{
    const v=o.dataset.v; closeList();
    cmdFormat(()=> kind==='font'?{font:v}:{size:+v}, anchor);
  });
  document.body.appendChild(L);
  const r=anchor.getBoundingClientRect();
  L.style.left=r.left+'px'; L.style.top=(r.bottom+2)+'px'; L.style.minWidth=r.width+'px';
  L.style.maxHeight=Math.max(160, innerHeight-r.bottom-20)+'px';
  S.list={kind, el:L};
  const c=L.querySelector('.cur'); if(c) c.scrollIntoView({block:'nearest'});
  schedule();
}
function closeList(){ if(S.list){ S.list.el.remove(); S.list=null; } }
document.addEventListener('mousedown',e=>{
  if(S.list && !S.list.el.contains(e.target) && !e.target.closest('.w-combo')){ closeList(); schedule(); }
});
document.addEventListener('keydown',e=>{ if(e.key==='Escape' && S.list){ closeList(); schedule(); } });

function updateRibbon(){
  const i=selInfo(); let ps=[];
  if(i && i.touched.length) ps=i.touched.map(c=>c.p);
  const fs=ps.map(fmt);
  const same=k=> fs.length && fs.every(f=>f[k]===fs[0][k]) ? fs[0][k] : null;
  const f=same('font'), s=same('size');
  $('cFont').querySelector('.v').textContent = fs.length ? (f||'') : 'Aptos';
  $('cFont').querySelector('.v').style.fontFamily = f ? FONTS[f] : '';
  $('cSize').querySelector('.v').textContent = fs.length ? (s||'') : '11';
  $('bBold').classList.toggle('on', fs.length>0 && fs.every(x=>x.bold));
  $('bItal').classList.toggle('on', fs.length>0 && fs.every(x=>x.ital));
  $('bUnd').classList.toggle('on', fs.length>0 && fs.every(x=>x.und));
  const al=same('align');
  [['left','aLeft'],['center','aCenter'],['right','aRight'],['justify','aJust']].forEach(([a,id])=>$(id).classList.toggle('on', al===a));
}

// ---------- eventos da folha ----------
page.addEventListener('keydown',e=>{
  if((e.ctrlKey||e.metaKey) && ['b','i','u'].includes(e.key.toLowerCase())){ e.preventDefault(); toast('Usa os botões N, I e S da barra.', $('bBold')); }
  if(e.key==='Tab'){ e.preventDefault(); }
});
page.addEventListener('paste',e=>{ e.preventDefault(); toast('Neste jogo escreves tudo com o teclado. ⌨️'); });
page.addEventListener('drop',e=>{ e.preventDefault(); });
page.addEventListener('input',()=>{
  const c=saveCaret();
  if(normalize()) restoreCaret(c);
  if(S.m) S.docs[S.m.id]=page.innerHTML;
  schedule();
});
document.addEventListener('selectionchange',()=>{
  const s=getSelection();
  if(s.rangeCount && page.contains(s.getRangeAt(0).commonAncestorContainer)) S.lastRange=s.getRangeAt(0).cloneRange();
  if($('editor').classList.contains('on')) schedule();
});
let sched=0;
function schedule(){ if(sched) return; sched=requestAnimationFrame(()=>{ sched=0; refresh(); }); }
window.addEventListener('resize',schedule);
$('canvas').addEventListener('scroll',schedule);

// ═══════════════════════════════════════════════════════════
// VALIDAÇÃO
// ═══════════════════════════════════════════════════════════
function docModel(){
  const ps=paras(), np=ps.filter(p=>pText(p));
  const emptyAfter = el => { if(!el) return null; const i=ps.indexOf(el); const n=ps[i+1]; return n && !pText(n) ? n : null; };
  const nameEl=np[0]||null, titleEl=np[1]||null, bodyEls=np.slice(2);
  return {ps, np, nameEl, titleEl, bodyEls,
          titleSlot: titleEl || emptyAfter(nameEl),
          bodySlot: bodyEls[0] || emptyAfter(titleEl),
          firstEl: ps[0]};
}
// tokens do documento com posição (para sublinhar e apontar erros)
function charMap(p){
  let str=''; const segs=[];
  (function walk(n){ n.childNodes.forEach(c=>{ if(c.nodeType===3){ segs.push({n:c,start:str.length}); str+=c.textContent; } else if(c.tagName==='BR') str+='\n'; else walk(c); }); })(p);
  return {p, str, segs};
}
function cmNode(cm,i){ for(let k=cm.segs.length-1;k>=0;k--){ const sg=cm.segs[k]; if(i>=sg.start) return [sg.n, Math.min(i-sg.start, sg.n.length)]; } return [cm.p,0]; }
function cmRange(cm,a,b){ const r=document.createRange(); const x=cmNode(cm,a), y=cmNode(cm,b); try{ r.setStart(x[0],x[1]); r.setEnd(y[0],y[1]); }catch(e){ r.selectNodeContents(cm.p); } return r; }
function tokensOf(els){
  const out=[]; let line=0;
  els.forEach(p=>{ const cm=charMap(p); let off=0;
    cm.str.split('\n').forEach(part=>{ const re=/[^\s ]+/g; let m, first=true;
      while((m=re.exec(part))){ out.push({w:clean(m[0]), cm, s:off+m.index, e:off+m.index+m[0].length, line, first}); first=false; }
      if(!first) line++; off+=part.length+1; }); });
  return out;
}
// posição do cursor (se a seleção estiver fechada dentro da folha)
function caretPos(){
  const sel=getSelection(); if(!sel.rangeCount) return null;
  const r=sel.getRangeAt(0); if(!r.collapsed || !page.contains(r.startContainer)) return null;
  let p=r.startContainer; while(p && p.parentNode!==page) p=p.parentNode;
  if(!p || p.tagName!=='P') return null;
  const cm=charMap(p);
  if(r.startContainer.nodeType===3){ const sg=cm.segs.find(x=>x.n===r.startContainer); if(sg) return {p, i:sg.start+r.startOffset}; }
  for(const sg of cm.segs){ if(r.comparePoint(sg.n,0)>=0) return {p, i:sg.start}; }
  return {p, i:cm.str.length};
}
const PUNCT={',':'a vírgula','.':'o ponto final','!':'o ponto de exclamação','?':'o ponto de interrogação',':':'os dois pontos',';':'o ponto e vírgula'};
const B = w => '<b>«'+esc(w)+'»</b>';
// devolve [{html, tok, before, ei, gj}] — tok: índice do token errado; before: palavra em falta antes deste token
function lcsDiff(exp, got, verseStarts){
  const eq=(e,g)=> typeof e==='string' ? e===g.w : e.alts.includes(g.w);
  const n=exp.length, m=got.length, T=Array.from({length:n+1},()=>new Array(m+1).fill(0));
  for(let i=n-1;i>=0;i--) for(let j=m-1;j>=0;j--) T[i][j]= eq(exp[i],got[j]) ? T[i+1][j+1]+1 : Math.max(T[i+1][j],T[i][j+1]);
  const ops=[]; let i=0,j=0;
  while(i<n && j<m){ if(eq(exp[i],got[j])){ ops.push(['=',i,j]); i++; j++; } else if(T[i+1][j]>=T[i][j+1]) ops.push(['-',i++,j]); else ops.push(['+',i,j++]); }
  while(i<n) ops.push(['-',i++,j]); while(j<m) ops.push(['+',i,j++]);
  const issues=[]; let k=0;
  while(k<ops.length){
    const o=ops[k];
    if(o[0]==='='){
      const [_,ei,gj]=o;
      if(verseStarts && gj>0 && ei>0){
        if(verseStarts.has(ei) && !got[gj].first)
          issues.push({tok:gj, html:`${B(got[gj].w)} começa uma linha nova. Clica antes desta palavra e carrega em <span class="kbd">Enter ⏎</span>.`});
        else if(!verseStarts.has(ei) && got[gj].first)
          issues.push({tok:gj, html:`Aqui não se muda de linha. Clica antes de ${B(got[gj].w)} e carrega em <span class="kbd">⌫</span> para juntar à linha de cima.`});
      }
      k++; continue;
    }
    const del=[], ins=[];
    while(k<ops.length && ops[k][0]!=='='){ if(ops[k][0]==='-') del.push(ops[k]); else ins.push(ops[k]); k++; }
    const p=Math.min(del.length,ins.length);
    for(let q=0;q<p;q++) issues.push({tok:ins[q][2], html:explain(exp[del[q][1]], got[ins[q][2]].w)});
    del.slice(p).forEach(d=>{ d=[d[0],d[1], p>0 ? ins[p-1][2]+1 : d[2]]; issues.push({before:d[2], html:`Falta a palavra ${B(tokStr(exp[d[1]]))}${d[2]<m?' antes de '+B(got[d[2]].w):''}.`}); });
    ins.slice(p).forEach(g=>issues.push({tok:g[2], html:`Esta palavra está a mais: ${B(got[g[2]].w)}. Apaga-a.`}));
  }
  return issues;
}
function explain(e,g){
  const w = typeof e==='string' ? e : e.alts[0];
  const strip=x=>x.replace(/[^\p{L}\p{N}-]/gu,'');
  if(noAcc(w)===noAcc(g) && w!==g){
    const c=[...w].find((ch,i)=>ch!==[...g][i]) || '';
    return `Escreveste ${B(g)}, mas é ${B(w)}. ${keyTip(c)}`;
  }
  if(w.toLowerCase()===g.toLowerCase()){
    return isUpper(w[0]) ? `${B(w)} começa com letra maiúscula: <span class="kbd">Shift</span> + <span class="kbd">${esc(w[0])}</span>.` : `${B(g)} escreve-se com letra minúscula: ${B(w)}.`;
  }
  if(strip(w)===strip(g)){
    const tw=w.replace(/^[\p{L}\p{N}-]+/u,''), tg=g.replace(/^[\p{L}\p{N}-]+/u,'');
    if(tw && !tg && PUNCT[tw]) return `Falta ${PUNCT[tw]} depois de ${B(strip(w))}. ${keyTip(tw)}`;
    if(!tw && tg && PUNCT[tg]) return `Depois de ${B(strip(w))} não há ${PUNCT[tg].replace(/^(a|o|os) /,'')}. Apaga-o.`;
    return `Confere a pontuação: escreveste ${B(g)}, mas é ${B(w)}. ${tw.length===1?keyTip(tw):''}`;
  }
  return `Escreveste ${B(g)}, mas é ${B(w)}.`;
}
const txt = h => h.replace(/<[^>]+>/g,'').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&amp;/g,'&').replace(/\s+/g,' ').trim();
function fmtIssues(els, want, what){
  const out=[], fs=els.map(fmt);
  if(fs.some(f=>f.font!==want.font)){ const bad=fs.find(f=>f.font!==want.font); out.push(`${what} deve estar em ${want.font} (está em ${bad.font}).`); }
  if(fs.some(f=>f.size!==want.size)){ const bad=fs.find(f=>f.size!==want.size); out.push(`${what} deve ter tamanho ${want.size} (está em ${bad.size}).`); }
  if(want.bold && fs.some(f=>!f.bold)) out.push(`${what} deve estar em negrito: clica no N.`);
  if(!want.bold && fs.some(f=>f.bold)) out.push(`${what} não leva negrito: seleciona-o e clica no N para o tirar.`);
  return out;
}
function verseStartsOf(E){ const st=new Set(); let n=0; E.linhas.forEach(l=>{ st.add(n); n+=clean(l).split(' ').length; }); return st; }
function contentCheck(){
  const E=S.m.exp, D=docModel();
  const tTok = D.titleEl ? tokensOf([D.titleEl]) : [];
  const bTok = tokensOf(D.bodyEls);
  const et=expTokens(E);
  const out={tTok, bTok, et, progress:Math.min(bTok.length/et.length,1)};
  out.titleIss = lcsDiff(clean(E.titulo).split(' '), tTok, null);
  out.bodyIss = lcsDiff(et, bTok, verseStartsOf(E));
  out.title = out.titleIss.map(x=>txt(x.html));
  out.body = out.bodyIss.map(x=>txt(x.html));
  return out;
}
// escrita terminada = nome certo + título + texto completo (condição para começar a formatar)
function writingDone(V){
  V=V||validate();
  return V.R[0].ok && !!V.D.titleEl && V.D.bodyEls.length>0 && V.C.progress>=1;
}
function locOf(iss, toks){
  if(iss.tok!=null){ const t=toks[iss.tok]; return {cm:t.cm, a:t.s, b:t.e}; }
  if(iss.before!=null){
    if(iss.before<toks.length){ const t=toks[iss.before]; return {cm:t.cm, a:t.s, b:t.s, gap:true}; }
    const t=toks[toks.length-1]; if(t) return {cm:t.cm, a:t.e, b:t.e, gap:true};
  }
  return null;
}
function nameIssue(D){
  const t=D.nameEl?pText(D.nameEl):'';
  if(!t) return {html:'Falta o teu nome na primeira linha.', loc:{para:D.firstEl}};
  const loc={cm:charMap(D.nameEl), a:0, b:D.nameEl.textContent.length};
  const letters=t.replace(/[^\p{L}]/gu,'');
  if(letters.length<2) return {html:'Escreve o teu nome completo na primeira linha.', loc};
  if(/\d/.test(t)) return {html:'Na linha do nome só ficam letras.', loc};
  if(S.nome){
    const toks=tokensOf([D.nameEl]), iss=lcsDiff(S.nome.split(' '), toks, null);
    if(iss.length) return {html:'Nome: '+iss[0].html+' Escreve o nome como no início: <b>'+esc(S.nome)+'</b>.', loc:locOf(iss[0],toks)||loc};
    return null;
  }
  const f=t.replace(/^[^\p{L}]+/u,'')[0];
  if(!isUpper(f)) return {html:`O nome começa com letra maiúscula: <span class="kbd">Shift</span> + <span class="kbd">${esc(f.toUpperCase())}</span>.`, loc:{cm:loc.cm,a:0,b:Math.max(1,(D.nameEl.textContent.match(/^\S+/)||[''])[0].length)}};
  if(words(t).length>5) return {html:'Na primeira linha fica só o teu nome. O título vai na linha de baixo: carrega em <span class="kbd">Enter ⏎</span> depois do nome.', loc};
  return null;
}
function fmtItems(els, want, what, ctlFirst){
  const fs=els.map(fmt), out=[], para=els[0];
  const bad=k=>fs.find(f=>f[k]!==want[k]);
  if(bad('font')) out.push({html:`${what} deve estar em <b>Arial</b> (está em ${esc(bad('font').font)}). Seleciona-o e escolhe Arial.`, loc:{para, ctl:'font'}});
  if(bad('size')) out.push({html:`${what} deve ter tamanho <b>${want.size}</b> (está em ${bad('size').size}). Seleciona-o e escolhe ${want.size}.`, loc:{para, ctl:'size'}});
  if(want.bold && fs.some(f=>!f.bold)) out.push({html:`${what} deve estar em <b>negrito</b>: seleciona-o e clica no <b>N</b>.`, loc:{para, ctl:'bold'}});
  if(!want.bold && fs.some(f=>f.bold)) out.push({html:`${what} não leva negrito: seleciona-o e clica no <b>N</b> para o tirar.`, loc:{para, ctl:'bold'}});
  return out;
}
function validate(){
  const D=docModel(), C=contentCheck(), R=[];
  const mk = items => ({ok:!items.length, items, msgs:items.map(x=>txt(x.html))});
  // 1 nome
  { const n=nameIssue(D); R.push(mk(n?[n]:[])); }
  // 2 copiar título e texto
  { const items=[];
    if(!D.titleEl) items.push({html:'Falta o título, na linha a seguir ao nome.', loc:{para:D.titleSlot||D.nameEl||D.firstEl}});
    else C.titleIss.forEach(x=>items.push({html:'Título: '+x.html, loc:locOf(x,C.tTok)||{para:D.titleEl}}));
    if(!D.bodyEls.length) items.push({html:'Falta o texto, nas linhas a seguir ao título.', loc:{para:D.bodySlot||D.titleEl||D.firstEl}});
    else C.bodyIss.forEach(x=>items.push({html:x.html, loc:locOf(x,C.bTok)||{para:D.bodyEls[0]}}));
    const r=mk(items); r.progress=C.progress; R.push(r); }
  // 3 formatar título
  R.push(mk(D.titleEl ? fmtItems([D.titleEl],{font:'Arial',size:14,bold:true},'O título') : [{html:'Primeiro escreve o título.', loc:{para:D.titleSlot||D.firstEl}}]));
  // 4 formatar texto
  R.push(mk(D.bodyEls.length ? fmtItems(D.bodyEls,{font:'Arial',size:12,bold:false},'O texto') : [{html:'Primeiro escreve o texto.', loc:{para:D.bodySlot||D.firstEl}}]));
  // 5 centrar
  { const els=[D.titleEl,...D.bodyEls].filter(Boolean); const items=[];
    if(!D.titleEl || !D.bodyEls.length) items.push({html:'Primeiro escreve o título e o texto; depois centra-os.', loc:{para:D.firstEl}});
    else { const bad=els.find(p=>fmt(p).align!=='center'); if(bad) items.push({html:'O título e o texto ficam <b>centrados</b>: seleciona-os e clica em Centrar.', loc:{para:bad, ctl:'center'}}); }
    R.push(mk(items)); }
  return {R, D, C};
}

// ═══════════════════════════════════════════════════════════
// ERROS EM DIRETO — sublinhado vermelho e balão junto ao cursor
// ═══════════════════════════════════════════════════════════
// Uma palavra só conta como "acabada" quando o cursor já não está nela.
function liveIssues(V){
  const D=V.D, C=V.C, out=[], cp=caretPos();
  const tokAt = toks => cp ? toks.findIndex(t=>t.cm.p===cp.p && cp.i>=t.s && cp.i<=t.e) : -1;
  // nome
  if(D.nameEl && !S.nome){
    const n=nameIssue(D);
    const typing = cp && cp.p===D.nameEl && !/\s$/.test(D.nameEl.textContent.slice(0,cp.i)) && cp.i>=D.nameEl.textContent.replace(/\s+$/,'').length;
    if(n && !typing) out.push(Object.assign({zone:'nome'}, n));
  }
  // título e texto: compara só as palavras acabadas
  const zone=(toks, exp, vs, prefix, endCheck)=>{
    if(!toks.length) return;
    const ct=tokAt(toks);
    const here = cp && toks.some(t=>t.cm.p===cp.p);
    const keep=toks.map((t,i)=>i).filter(i=>i!==ct);
    const sub=keep.map(i=>toks[i]);
    const iss=lcsDiff(exp, sub, vs);
    iss.forEach(x=>{
      if(x.before!=null){
        if(x.before>=sub.length && (!endCheck || here)) return;   // ainda por escrever (fim)
        if(ct>=0 && keep[x.before]>ct && (x.before===0 || keep[x.before-1]<ct)) return; // está a escrever aqui
      }
      const y=Object.assign({}, x); if(y.tok!=null) y.tok=keep[y.tok]; if(y.before!=null) y.before=keep[y.before];
      out.push({zone:'texto', html:prefix+x.html, loc:locOf(y,toks)});
    });
  };
  if(S.nome && D.nameEl) zone(tokensOf([D.nameEl]), S.nome.split(' '), null, 'Nome: ', true);
  zone(C.tTok, clean(S.m.exp.titulo).split(' '), null, 'Título: ', true);
  zone(C.bTok, C.et, verseStartsOf(S.m.exp), '');
  return out;
}
// erro de formatação provocado pela última ação na barra
function roleOf(p,D){ if(p===D.titleEl || (!D.titleEl && p===D.titleSlot)) return 'title'; if(D.bodyEls.includes(p) || (!D.bodyEls.length && p===D.bodySlot)) return 'body'; return null; }
function actionIssue(D){
  const a=S.lastAct; if(!a) return null;
  const ps=a.paras.filter(p=>page.contains(p)); if(!ps.length) return null;
  const want={title:{font:'Arial',size:14,bold:true,align:'center'}, body:{font:'Arial',size:12,bold:false,align:'center'}};
  const NM={title:'O título', body:'O texto'};
  for(const p of ps){
    const role=roleOf(p,D); if(!role) continue;
    const f=fmt(p), w=want[role];
    if(a.key==='font' && f.font!==w.font) return {html:`${NM[role]} é em <b>Arial</b>. Escolheste ${esc(f.font)}: abre outra vez a lista e escolhe Arial.`, loc:{para:p, ctl:'font'}};
    if(a.key==='size' && f.size!==w.size) return {html:`${NM[role]} é tamanho <b>${w.size}</b>. Escolheste ${f.size}: abre outra vez a lista e escolhe ${w.size}.`, loc:{para:p, ctl:'size'}};
    if(a.key==='bold' && f.bold!==w.bold) return {html: w.bold ? `${NM[role]} leva <b>negrito</b>: clica outra vez no <b>N</b>.` : `${NM[role]} não leva negrito: clica outra vez no <b>N</b> para o tirar.`, loc:{para:p, ctl:'bold'}};
    if(a.key==='align' && f.align!==w.align) return {html:`${NM[role]} fica <b>centrado</b>. Usa o botão Centrar (o segundo).`, loc:{para:p, ctl:'center'}};
    if((a.key==='ital'||a.key==='und') && f[a.key]) return {html:`${NM[role]} não leva ${a.key==='ital'?'itálico':'sublinhado'}: clica outra vez no <b>${a.key==='ital'?'I':'S'}</b> para o tirar.`, loc:{para:p, ctl:a.key==='ital'?'ital':'und'}};
  }
  return null;
}
const CTL={font:'cFont',size:'cSize',bold:'bBold',ital:'bItal',und:'bUnd',center:'aCenter'};
function locRects(loc){
  if(!loc) return [];
  if(loc.cm){
    if(loc.gap){ const r=cmRange(loc.cm,loc.a,loc.a); let rc=r.getClientRects()[0]||r.getBoundingClientRect();
      if(!rc || (!rc.height && !rc.width)){ rc=loc.cm.p.getBoundingClientRect(); }
      return [{left:rc.left, top:rc.top, width:0, height:rc.height||16, gap:true}]; }
    return [...cmRange(loc.cm,loc.a,loc.b).getClientRects()].filter(r=>r.width>0);
  }
  if(loc.para){ const r=document.createRange(); r.selectNodeContents(loc.para); const rs=[...r.getClientRects()].filter(x=>x.width>0); return rs.length?rs:[loc.para.getBoundingClientRect()]; }
  return [];
}
function drawMarks(list){
  const L=$('marks'), cv=$('canvas'), cr=cv.getBoundingClientRect();
  L.innerHTML='';
  list.forEach((it,k)=>{
    if(!it.loc || !it.loc.cm) return;
    locRects(it.loc).forEach(r=>{
      const d=document.createElement('div'); d.className = r.gap ? 'mk-gap' : 'mk-err'+(k===0?' first':'');
      d.style.left=(r.left-cr.left+cv.scrollLeft-(r.gap?2:0))+'px'; d.style.top=(r.top-cr.top+cv.scrollTop)+'px';
      if(!r.gap) d.style.width=r.width+'px'; d.style.height=r.height+'px';
      L.appendChild(d);
    });
  });
}
function showBubble(it, extra){
  const Bx=$('bubble');
  document.querySelectorAll('.ring-err').forEach(e=>e.classList.remove('ring-err'));
  if(!it){ Bx.style.display='none'; return false; }
  let anchor=null;
  if(it.loc && it.loc.ctl){ const c=$(CTL[it.loc.ctl]); c.classList.add('ring-err'); anchor=c.getBoundingClientRect(); }
  else { const rs=locRects(it.loc); if(rs.length) anchor=rs[0]; }
  if(!anchor){ Bx.style.display='none'; return false; }
  Bx.querySelector('.bb-msg').innerHTML=it.html;
  Bx.querySelector('.bb-more').textContent = extra>0 ? (extra===1?'Há mais 1 coisa para corrigir.':'Há mais '+extra+' coisas para corrigir.') : '';
  Bx.style.display='block';
  const bw=Bx.offsetWidth, bh=Bx.offsetHeight, cv=$('canvas').getBoundingClientRect();
  let x=anchor.left+(anchor.width||0)/2-30, y=anchor.top+anchor.height+10, up=true;
  if(!it.loc.ctl && y+bh>Math.min(innerHeight,cv.bottom)-4){ y=anchor.top-bh-10; up=false; }
  x=Math.max(6,Math.min(x,innerWidth-bw-6));
  Bx.style.left=x+'px'; Bx.style.top=Math.max(6,y)+'px';
  Bx.classList.toggle('up',up); Bx.classList.toggle('down',!up);
  Bx.style.setProperty('--ax', Math.max(14,Math.min(anchor.left+(anchor.width||0)/2-x, bw-20))+'px');
  return true;
}
function liveFeedback(V){
  if(S.focus){
    const all=V.R.flatMap(r=>r.items);
    const still=all.find(x=>txt(x.html)===S.focus.msg);
    if(still) S.focus.it=still; else S.focus=null;
  }
  const act=actionIssue(V.D); if(!act) S.lastAct=null;
  const live=liveIssues(V);
  drawMarks(S.focus && S.focus.it.loc && S.focus.it.loc.cm ? [S.focus.it, ...live.filter(x=>x.html!==S.focus.it.html)] : live);
  let first = act || (S.focus && S.focus.it) || live[0] || null;
  if(S.list && first && first.loc && first.loc.ctl) first=null;
  const extra = live.length - (first && live.includes(first) ? 1 : 0);
  return showBubble(first, act||S.focus ? 0 : extra);
}

// ═══════════════════════════════════════════════════════════
// AJUDAS PASSO A PASSO — ordem fixa: nome → copiar → formatar → centrar
// ═══════════════════════════════════════════════════════════
const STEPS = [
  ['Escrever o nome','Na primeira linha'],
  ['Copiar o título e o texto','Igual ao modelo'],
  ['Formatar o título','Arial 14, negrito'],
  ['Formatar o texto','Arial 12'],
  ['Centrar','O título e o texto']
];
function subList(step, D){
  const E=S.m.exp, poem=E.poema;
  const oneLine = D.bodyEls.length<=1 && !poem;
  if(step===0) return [['click','Clica na primeira linha da folha.'],['write','Escreve o teu nome: '+S.nome+'.']];
  if(step===1) return [
    ['enter1','No fim do teu nome, carrega em Enter ⏎ para passar para a linha de baixo.'],
    ['title','Copia o título: «'+E.titulo+'».'],
    ['enter2','No fim do título, carrega em Enter ⏎.'],
    ['text', poem ? 'Copia o poema. No fim de cada verso, carrega em Enter ⏎.' : 'Copia o texto, sem carregar em Enter.'],
    ['fix','Confere se está tudo igual ao modelo.']];
  if(step===2) return [
    ['select','Seleciona o título: clica 3 vezes em cima dele (ou arrasta o rato por cima das palavras).'],
    ['font','Clica na setinha ▼ do tipo de letra e escolhe Arial.'],
    ['size','Clica na setinha ▼ do tamanho e escolhe 14.'],
    ['bold','Clica no N para pôr em negrito.']];
  if(step===3) return [
    ['select', oneLine ? 'Seleciona o texto: clica 3 vezes em cima dele.'
                       : 'Seleciona o texto todo: clica antes da primeira palavra, mantém o botão do rato carregado e arrasta até à última palavra.'],
    ['font','Clica na setinha ▼ do tipo de letra e escolhe Arial.'],
    ['size','Clica na setinha ▼ do tamanho e escolhe 12.'],
    ['bold','Clica no N para tirar o negrito.']];
  return [['select','Seleciona o título e o texto: clica antes da primeira letra do título, mantém o botão do rato carregado e arrasta até ao fim do texto.'],
          ['center','Clica no botão Centrar, no grupo Parágrafo.']];
}
const SEQ_B = [
  ['enter1','No fim do teu nome, carrega em Enter ⏎ para passar para a linha de baixo.'],
  ['place1','Clica na linha nova, onde vai ficar o título.'],
  ['font1','Clica na setinha ▼ do tipo de letra e escolhe Arial.'],
  ['size1','Clica na setinha ▼ do tamanho e escolhe 14.'],
  ['bold1','Clica no N para ligar o negrito.'],
  ['write1','Agora copia o título.'],
  ['enter2','No fim do título, carrega em Enter ⏎. A linha nova fica igual ao título (Arial 14, negrito).'],
  ['place2','Clica na linha nova, por baixo do título.'],
  ['font2','Confirma que o tipo de letra é Arial.'],
  ['size2','Muda o tamanho para 12.'],
  ['bold2','Clica no N para desligar o negrito.'],
  ['write2','Agora copia o texto.'],
  ['fix','Confere se está tudo igual ao modelo.']
];
function currentSubB(V){
  const D=V.D, E=S.m.exp;
  const need=(el,want,sfx)=>{ const f=fmt(el);
    if(f.font!=='Arial') return {id:'font'+sfx,target:{ctl:'font',val:'Arial'},lbl:'Arial'};
    if(f.size!==want.size) return {id:'size'+sfx,target:{ctl:'size',val:String(want.size)},lbl:String(want.size)};
    if(f.bold!==want.bold) return {id:'bold'+sfx,target:{ctl:'bold'},lbl:want.bold?'N':'Tirar o N'};
    return null; };
  const fallback=(els,want,what)=>{ const fs=els.map(fmt);
    const note='Esta parte já tem texto escrito: para a mudar, seleciona-a primeiro.';
    if(!fullySelected(els)) return {id:'sel',fb:what,target:{para:els[0]},lbl:els.length===1?'3 cliques aqui':'Arrasta daqui',note};
    if(fs.some(f=>f.font!=='Arial')) return {id:'sfont',fb:what,target:{ctl:'font',val:'Arial'},lbl:'Arial',note};
    if(fs.some(f=>f.size!==want.size)) return {id:'ssize',fb:what,target:{ctl:'size',val:String(want.size)},lbl:String(want.size),note};
    return {id:'sbold',fb:what,target:{ctl:'bold'},lbl:want.bold?'N':'Tirar o N',note}; };
  const T={size:14,bold:true}, X={size:12,bold:false};
  if(!D.titleSlot) return {id:'enter1',target:{para:D.nameEl,end:true},lbl:'Enter ⏎'};
  if(!D.titleEl){
    if(!caretIn(D.titleSlot)) return {id:'place1',target:{para:D.titleSlot},lbl:'Clica aqui'};
    return need(D.titleSlot,T,'1') || {id:'write1',target:{para:D.titleSlot},lbl:'Escreve aqui'};
  }
  if(!V.R[2].ok) return fallback([D.titleEl],T,'o título');
  if(!D.bodySlot){
    if(V.C.title.length && clean(D.titleEl.textContent).split(' ').length < clean(E.titulo).split(' ').length)
      return {id:'write1',target:{para:D.titleEl,end:true},lbl:'Continua aqui'};
    return {id:'enter2',target:{para:D.titleEl,end:true},lbl:'Enter ⏎'};
  }
  if(!D.bodyEls.length){
    if(!caretIn(D.bodySlot)) return {id:'place2',target:{para:D.bodySlot},lbl:'Clica aqui'};
    return need(D.bodySlot,X,'2') || {id:'write2',target:{para:D.bodySlot},lbl:'Escreve aqui'};
  }
  if(!V.R[3].ok) return fallback(D.bodyEls,X,'o texto');
  if(V.C.progress<1) return {id:'write2',target:{para:D.bodyEls[D.bodyEls.length-1],end:true},lbl:'Continua aqui'};
  return {id:'fix',target:{para:D.bodyEls[0]},lbl:'Confere',fix:V.R[1].msgs[0]};
}
function currentSub(step, V){
  const D=V.D;
  if(step===0){
    const el=D.firstEl;
    if(!pText(el)) return caretIn(el) ? {id:'write',target:{para:el},lbl:'Escreve aqui'} : {id:'click',target:{para:el},lbl:'Clica aqui'};
    return {id:'write',target:{para:D.nameEl||el},lbl:'Corrige aqui',fix:V.R[0].msgs[0]};
  }
  if(step===1){
    if(!D.titleSlot) return {id:'enter1',target:{para:D.nameEl,end:true},lbl:'Enter ⏎'};
    if(!D.titleEl) return {id:'title',target:{para:D.titleSlot},lbl:'Escreve aqui'};
    if(!D.bodySlot){
      if(V.C.title.length && clean(V.D.titleEl.textContent).split(' ').length < clean(S.m.exp.titulo).split(' ').length)
        return {id:'title',target:{para:D.titleEl,end:true},lbl:'Continua aqui'};
      return {id:'enter2',target:{para:D.titleEl,end:true},lbl:'Enter ⏎'};
    }
    if(!D.bodyEls.length) return {id:'text',target:{para:D.bodySlot},lbl:'Escreve aqui'};
    if(V.C.progress<1) return {id:'text',target:{para:D.bodyEls[D.bodyEls.length-1],end:true},lbl:'Continua aqui'};
    return {id:'fix',target:{para:D.bodyEls[0]},lbl:'Confere',fix:V.R[1].msgs[0]};
  }
  if(step===2 || step===3){
    const want = step===2 ? {size:14,bold:true} : {size:12,bold:false};
    const els = step===2 ? [D.titleEl] : D.bodyEls;
    const fs=els.map(fmt);
    if(!fullySelected(els)) return {id:'select',target:{para:els[0]},lbl: els.length===1?'3 cliques aqui':'Arrasta daqui'};
    if(fs.some(f=>f.font!=='Arial')) return {id:'font',target:{ctl:'font',val:'Arial'},lbl:'Arial'};
    if(fs.some(f=>f.size!==want.size)) return {id:'size',target:{ctl:'size',val:String(want.size)},lbl:String(want.size)};
    return {id:'bold',target:{ctl:'bold'},lbl:want.bold?'N':'Tirar o N'};
  }
  const els=[D.titleEl,...D.bodyEls].filter(Boolean);
  if(touchesAll(els)) return {id:'center',target:{ctl:'center'},lbl:'Centrar'};
  return {id:'select',target:{para:els[0]},lbl:'Arrasta daqui'};
}

// ═══════════════════════════════════════════════════════════
// ATUALIZAÇÃO DO PAINEL, CHECKLIST E SETA
// ═══════════════════════════════════════════════════════════
function refresh(){
  if(!$('editor').classList.contains('on') || !S.m) return;
  updateRibbon();
  const V=validate();
  const nw=words(paras().map(p=>p.textContent).join(' ')).length;
  $('wWords').textContent = nw+(nw===1?' palavra':' palavras');
  const mode=helpMode(S.m);
  const step=V.R.findIndex(r=>!r.ok);
  if(S.askStep>=0 && step!==S.askStep) S.askStep=-1;
  const live = mode!=='pedido';
  // checklist
  $('checks').innerHTML = STEPS.map((n,i)=>{
    let st='';
    if(live) st = V.R[i].ok?'ok':'';
    else if(S.checked) st = S.checked[i].ok?'ok':'bad';
    const cur = (live && i===step) ? ' cur' : '';
    return `<div class="ck ${st}${cur}${V.R[i].ok?'':' clk'}" data-i="${i}" title="${V.R[i].ok?'':'Clica para veres onde'}"><div class="ic">${st==='ok'?'✓':(st==='bad'?'!':'')}</div><div><b>${i+1}. ${n[0]}</b><span>${n[1]}</span></div></div>`;
  }).join('');
  $('checks').querySelectorAll('.ck.clk').forEach(c=>{ c.addEventListener('mousedown',e=>e.preventDefault()); c.onclick=()=>focusStep(+c.dataset.i); });
  // ajuda
  const showSteps = mode==='seta' || mode==='passos' || (mode==='pedido' && S.askStep===step && step>=0);
  const showArrow = mode==='seta' || (mode==='pedido' && S.askStep===step && step>=0);
  let html='', target=null, lbl='';
  if(step<0){
    html=`<div class="hint-head"><img src="${img('uau')}" alt=""><b>Está tudo pronto!</b></div><div class="hint-note">Clica em <b>Terminei! Verificar</b> para confirmar.</div>`;
  } else if(!showSteps){
    html=`<div class="hint-head"><img src="${img('pensar')}" alt=""><b>Consegues fazer sozinho!</b></div>
      <div class="hint-note">Lembra-te da rotina: <b>nome → título (Arial 14, negrito) → texto (Arial 12) → centrar</b>. Podes escrever tudo e formatar no fim, ou escolher a letra antes de escrever.</div>
      <button class="btn ghost ask" id="askBtn">💡 Pedir ajuda (−1 ⭐)</button>`;
  } else {
    const B = S.method==='formatar' && step>=1 && step<=3;
    const cs = B ? currentSubB(V) : currentSub(step,V);
    const methods = step>=1 && step<=3 ? `<div class="methods">
        <button data-m="escrever" class="${S.method==='escrever'?'on':''}">✍️ Escrevo primeiro</button>
        <button data-m="formatar" class="${S.method==='formatar'?'on':''}">🎨 Formato primeiro</button></div>
      <div class="hint-note" style="margin-bottom:6px">${S.method==='escrever'
        ? 'Escreves o título e o texto com a letra que aparece. No fim, selecionas cada parte e escolhes a letra, o tamanho e o negrito.'
        : 'Escolhes a letra antes de escrever: clicas na linha vazia, escolhes Arial, o tamanho e o negrito, e só depois escreves. As duas maneiras estão certas.'}</div>` : '';
    let list, head;
    if(B && cs.fb){
      list=[['sel','Seleciona '+cs.fb+'.'],['sfont','Escolhe Arial.'],['ssize','Escolhe o tamanho '+(cs.fb==='o título'?'14':'12')+'.'],['sbold', cs.fb==='o título'?'Clica no N para pôr em negrito.':'Clica no N para tirar o negrito.']];
      head='Passo: Formatar '+cs.fb;
    } else if(B){ list=SEQ_B; head='Passo 2: Formatar e escrever'; }
    else { list=subList(step, V.D); head='Passo '+(step+1)+': '+STEPS[step][0]; }
    const ci=list.findIndex(x=>x[0]===cs.id);
    const shown = list.filter(x=>x[0]!=='fix' || cs.id==='fix').filter(x=>(x[0]!=='font2' && x[0]!=='place2') || cs.id===x[0]);
    const cj=shown.findIndex(x=>x[0]===cs.id);
    html=`<div class="hint-head"><img src="${img('ajuda')}" alt=""><b>${head}</b></div>${methods}
      ${cs.note?`<div class="hint-note">${cs.note}</div>`:''}
      ${!B && step>=2 && step<=3?'<div class="hint-note" style="margin:6px 0">Agora que já escreveste tudo, vais formatar.</div>':''}
      <ol class="steps">${shown.map((x,i)=>`<li class="${i<cj?'done':(i===cj?'now':'')}">${esc(x[1])}</li>`).join('')}</ol>
      ${cs.fix?`<div class="fix">🔎 ${esc(cs.fix)}</div>`:''}`;
    if(showArrow){ target=cs.target; lbl=cs.lbl; }
  }
  if(S.ano===1) html=html.replace('</b></div>','</b>'+SPK('spkHint','Ouvir')+'</div>');
  const key=html;
  if(key!==S.hintKey){
    $('hintbox').innerHTML=html; S.hintKey=key;
    const now=$('hintbox').querySelector('li.now'); if(now){ const pn=now.closest('.panel'), r=now.getBoundingClientRect(), pr=pn.getBoundingClientRect(); if(r.bottom>pr.bottom-70 || r.top<pr.top) pn.scrollTop += r.top-pr.top-160; }
    $('hintbox').querySelectorAll('.methods button').forEach(b=>{ b.addEventListener('mousedown',e=>e.preventDefault()); b.onclick=()=>{ S.method=b.dataset.m; S.hintKey=''; schedule(); }; });
    bindSpk('spkHint',()=>{ const bx=$('bubble'); if(bx.style.display==='block') return bx.querySelector('.bb-msg').innerText; const n=$('hintbox').querySelector('li.now'); return n?n.innerText:$('hintbox').innerText; });
    const ab=$('askBtn'); if(ab){ ab.addEventListener('mousedown',e=>e.preventDefault()); ab.onclick=()=>{ S.askStep=validate().R.findIndex(r=>!r.ok); S.helps[S.m.id]=(S.helps[S.m.id]||0)+1; updateStars(); schedule(); }; }
  }
  const bubbled=liveFeedback(V);
  placePointer(bubbled?null:target, lbl);
}
function updateStars(){ $('edStars').textContent = '⭐'.repeat(calcStars()); }
function calcStars(){ const h=S.helps[S.m.id]||0, t=S.tries[S.m.id]||0; return Math.max(1, 3-h-(t>=3?1:0)); }

function hidePointer(){ $('bubble').style.display='none'; $('pointer').style.display='none'; document.querySelectorAll('.ring').forEach(e=>e.classList.remove('ring')); }
function placePointer(t, lbl){
  document.querySelectorAll('.ring').forEach(e=>e.classList.remove('ring'));
  const P=$('pointer');
  if(!t){ P.style.display='none'; return; }
  let el=null, rect=null, dir='up';
  if(t.ctl){
    const map={font:'cFont',size:'cSize',bold:'bBold',center:'aCenter'};
    el=$(map[t.ctl]);
    if(S.list && S.list.kind===t.ctl && t.val){
      const o=S.list.el.querySelector(`[data-v="${t.val}"]`);
      if(o){ el=o; o.scrollIntoView({block:'nearest'}); dir='left'; lbl='Clica em '+t.val; }
    }
    el.classList.add('ring'); rect=el.getBoundingClientRect();
  } else if(t.para){
    el=t.para; const r=document.createRange(); r.selectNodeContents(el);
    const tr=r.getBoundingClientRect(), pr=el.getBoundingClientRect();
    const cv=$('canvas').getBoundingClientRect();
    if(pr.bottom<cv.top || pr.top>cv.bottom){ P.style.display='none'; return; }
    if(t.end && tr.width>0){ rect={left:tr.right,right:tr.right,top:tr.top,bottom:tr.bottom,width:0,height:tr.height}; dir='left'; }
    else { const x = tr.width>0 ? tr.left : (fmt(el).align==='center' ? pr.left+pr.width/2 : (fmt(el).align==='right'?pr.right:pr.left));
      rect={left:x,right:x,top:pr.top,bottom:pr.bottom,width:0,height:pr.height}; dir='right'; }
  }
  P.className=dir; P.style.display='flex';
  P.querySelector('.hand').textContent = dir==='up'?'👆':(dir==='right'?'👉':'👈');
  P.querySelector('.lbl').textContent=lbl;
  const pw=P.offsetWidth, ph=P.offsetHeight;
  let x,y;
  if(dir==='up'){ x=rect.left+rect.width/2-pw/2; y=rect.bottom+4; }
  else if(dir==='right'){ x=rect.left-pw-4; y=rect.top+rect.height/2-ph/2; }
  else { x=rect.right+6; y=rect.top+rect.height/2-ph/2; }
  P.style.left=Math.max(4,Math.min(x,innerWidth-pw-4))+'px'; P.style.top=Math.max(4,Math.min(y,innerHeight-ph-4))+'px';
}

// ═══════════════════════════════════════════════════════════
// ABRIR MISSÃO NO EDITOR
// ═══════════════════════════════════════════════════════════
function startEditor(){
  const m=S.m, E=m.exp, y=Y();
  show('editor'); setAccent(); $('toast').classList.remove('show');
  S.askStep=-1; S.checked=null; S.hintKey=''; S.lastRange=null; S.focus=null; S.lastAct=null;
  S.tries[m.id]=S.tries[m.id]||0; S.helps[m.id]=S.helps[m.id]||0;
  $('edTitle').innerHTML = (m.bonus?'':'Missão '+S.idx+': ')+m.nome+'<small>'+m.tema.emoji+' '+m.tema.nome+'</small>';
  // painel da missão
  const say = (m.gen==='prosa' ? 'Copia este texto para a folha.' : 'Copia este poema para a folha. Cada verso fica numa linha: no fim de cada verso carrega em Enter ⏎.')
    + ' Começa sempre pelo teu nome. Depois podes escrever tudo e formatar no fim, ou escolher a letra antes de escrever.';
  const hl = t => { t=esc(t); if(!E.caso) return t; try{ return t.replace(new RegExp(E.caso.re,'giu'), x=>'<mark class="caso">'+x+'</mark>'); }catch(e){ return t; } };
  const model = `${E.caso?`<div class="caso-box"><b>🔤 ${S.ano===1?'Letra do dia':'Caso de leitura e escrita'}: ${esc(E.caso.n)}</b><br>${esc(E.caso.d)}</div>`:''}<div class="lab">Título</div><div class="mt">${hl(E.titulo)}</div><div class="lab">${m.gen==='prosa'?'Texto':'Poema'}</div>
      <div class="mx">${E.linhas.map(l=>`<span class="verse">${hl(l)}</span>`).join('')}</div>`;
  const sayTxt = S.ano===1 ? (m.gen==='prosa' ? 'Escreve o teu nome. Depois copia o título e a frase.' : 'Escreve o teu nome. Depois copia o título e o poema. No fim de cada linha, carrega em Enter.') : say;
  $('missionPanel').innerHTML = `<div class="m-head"><img src="${img('ola')}" alt=""><div class="m-kind">${m.nome}<small>${m.gen==='prosa'?'Prosa':'Poesia'} · ${y.nome}</small></div></div>
    <div class="m-say">${esc(sayTxt)} ${SPK('spkSay')}</div><div class="model">${model}${S.ano===1?'<div style="margin-top:10px">'+SPK('spkModel','Ouvir o texto')+'</div>':''}</div>`;
  bindSpk('spkSay',()=>sayTxt); bindSpk('spkModel',()=>E.titulo+'. '+E.linhas.join(' '));
  // documento
  page.innerHTML = S.docs[m.id] || '';
  normalize();
  $('wDocName').textContent = 'Documento'+S.idx+' - Guardado neste computador';
  updateStars(); updateNav(); schedule();
}

// ═══════════════════════════════════════════════════════════
// VERIFICAR E CELEBRAR
// ═══════════════════════════════════════════════════════════
$('deliverBtn').onclick=()=>{
  const V=validate(); const m=S.m;
  S.tries[m.id]++;
  if(V.R.every(r=>r.ok)){
    const st=calcStars(); markDone(m.id, st); updateNav();
    celebrate(st, 'Missão cumprida!', 'Cumpriste a rotina toda: nome, cópia do título e do texto, formatação e centrar.', true);
  } else {
    S.checked=V.R; S.hintKey=''; updateStars();
    const fi=V.R.findIndex(r=>!r.ok), first=V.R[fi].items[0];
    const total=V.R.reduce((a,r)=>a+r.items.length,0);
    const items=V.R.map((r,i)=>`<li class="${r.ok?'':'clk'}" data-i="${i}"><span class="ic">${r.ok?'✅':'✋'}</span><div>${i+1}. ${STEPS[i][0]}${r.ok?'':'<small>'+r.items.slice(0,2).map(x=>x.html).join('<br>')+(r.items.length>2?'<br>…':'')+'</small>'}</div>${r.ok?'':'<span class="go">Ver ▶</span>'}</li>`).join('');
    $('resBox').innerHTML=`<img class="mimg" src="${img('ajuda')}" alt=""><h2 class="center">Quase lá!</h2>
      <div class="firstfix"><div class="ff-lab">Começa por aqui (${fi+1}. ${STEPS[fi][0]}):</div><div class="ff-msg">${first.html}</div>
        <button class="btn" id="resShow">👉 Mostra-me onde</button></div>
      ${total>1?`<details class="more"><summary>Ver a lista toda (${total} coisas para corrigir)</summary><ul class="res">${items}</ul></details>`:''}`;
    $('resModal').classList.add('on');
    $('resShow').onclick=()=>focusStep(fi);
    $('resBox').querySelectorAll('li.clk').forEach(li=>li.onclick=()=>focusStep(+li.dataset.i));
    schedule();
  }
};
function focusStep(i){
  $('resModal').classList.remove('on');
  const V=validate(), it=V.R[i] && V.R[i].items[0]; if(!it) return;
  S.focus={msg:txt(it.html), it};
  if(it.loc){ const el = it.loc.cm ? it.loc.cm.p : it.loc.para; if(el) el.scrollIntoView({block:'center', behavior:'smooth'}); }
  page.focus({preventScroll:true});
  if(it.loc && it.loc.cm){ try{ const r=cmRange(it.loc.cm, it.loc.gap?it.loc.a:it.loc.b, it.loc.gap?it.loc.a:it.loc.b); const s=getSelection(); s.removeAllRanges(); s.addRange(r); }catch(e){} }
  S.hintKey=''; setTimeout(schedule,350); schedule();
}
function celebrate(stars, title, msg, isDoc){
  confetti();
  const next = S.idx+1<S.missions.length && unlocked(S.idx+1);
  $('resBox').innerHTML=`<img class="mimg" src="${img('festa')}" alt=""><h2 class="center">${title}</h2>
    <div class="bigstars">${'⭐'.repeat(stars)}${'☆'.repeat(3-stars)}</div>
    <p class="center" style="font-weight:700">${msg}</p>
    <div class="mbtns">${isDoc && !window.IS_ART?'<button class="btn ghost" id="resPrint">🖨️ Imprimir o meu texto</button>':''}
      ${next?'<button class="btn" id="resNext">Próxima missão ▶</button>':'<button class="btn" id="resMap">Ver o mapa do dia</button>'}</div>`;
  $('resModal').classList.add('on');
  if(isDoc && $('resPrint')) $('resPrint').onclick=()=>{ $('resModal').classList.remove('on'); hidePointer(); setTimeout(()=>window.print(),100); };
  if(next) $('resNext').onclick=()=>{ $('resModal').classList.remove('on'); openMission(S.idx+1); };
  else $('resMap').onclick=()=>{ $('resModal').classList.remove('on'); renderMap(); show('map'); };
}
function confetti(){
  const c=$('confetti'), cols=['#E8834A','#5BA3D0','#6BBF59','#FFC857','#7C5CC4','#E85A8A'];
  for(let i=0;i<70;i++){ const e=document.createElement('i'); e.style.left=Math.random()*100+'vw'; e.style.background=cols[i%cols.length];
    e.style.animationDuration=(2+Math.random()*2)+'s'; e.style.animationDelay=(Math.random()*.6)+'s'; c.appendChild(e); }
  setTimeout(()=>c.innerHTML='',4800);
}

// ═══════════════════════════════════════════════════════════
// PAINEL DO PROFESSOR
// ═══════════════════════════════════════════════════════════
$('teacherBtn').onclick=()=>{
  $('tBox').innerHTML=`<h2>Painel do professor</h2><label for="tPw">Palavra-passe</label>
    <input type="password" id="tPw" style="width:100%"><div class="home-msg" id="tMsg"></div><p class="note" style="text-align:right;margin:0">versão 7</p>
    <div class="mbtns"><button class="btn ghost" id="tCancel">Fechar</button><button class="btn" id="tEnter">Entrar</button></div>`;
  $('tModal').classList.add('on'); $('tPw').focus();
  $('tCancel').onclick=()=>$('tModal').classList.remove('on');
  const go=()=>{
    const pw=$('tPw').value.trim().toLowerCase(); if(!pw) return;
    const gs=(window.google&&google.script&&google.script.run);
    if(gs){
      $('tMsg').textContent='A verificar…';
      google.script.run.withSuccessHandler(ok=>{ if(ok){ S.tpw=pw; teacherPanel(); } else $('tMsg').textContent='Palavra-passe errada.'; })
        .withFailureHandler(e=>{ $('tMsg').textContent='Erro do servidor: '+((e&&e.message)||e); })
        .verificar(pw);
    } else if(PW.includes(sha256(pw))){ S.tpw=pw; teacherPanel(); }
    else $('tMsg').textContent='Palavra-passe errada.';
  };
  $('tEnter').onclick=go; $('tPw').onkeydown=e=>{ if(e.key==='Enter') go(); };
};
function teacherPanel(){
  const d=curDate();
  const dayInfo = S.ano===1 ? (()=>{ const T=y1Day(d); return `1.º ano nesta data: <b>${esc(T.E.n)}</b>. Textos: «${esc(T.gen1.ti)}», «${esc(T.m2.ti)}», «${esc(T.m3.ti)}», «${esc(T.m4.ti)}» e «${esc(T.bonus.ti)}».`; })() : S.ano ? (()=>{ const T=dayTexts(d,S.ano); return `Textos desta data (${Y().ano}): «${esc(T.p1.ti)}», «${esc(T.q1.ti)}», ${S.ano===1?'letra':'caso'} «${esc(T.c.n)}» («${esc(T.c.ti)}»), «${esc(T.q2.ti)}» e, no desafio extra, «${esc(T.pB.ti)}».`; })() : 'Escolhe um ano no ecrã inicial para veres os textos desta data.';
  const jump = S.ano && S.missions.length ? `<label>Ir diretamente para uma missão (${Y().ano})</label><div class="jump">${S.missions.map((m,i)=>`<button class="btn ghost" data-j="${i}">${m.id==='aq'?'Aquecimento':(m.bonus?'Extra':'Missão '+i)}</button>`).join('')}</div>` : '<p class="note">Para saltar para uma missão, escolhe primeiro o ano e o nome no ecrã inicial.</p>';
  $('tBox').innerHTML=`<h2>Painel do professor</h2>
    <label for="tAj">Ajudas</label>
    <select id="tAj">
      <option value="auto">Automáticas (diminuem com os dias de treino)</option>
      <option value="seta">Sempre com seta e passos</option>
      <option value="passos">Só os passos escritos</option>
      <option value="pedido">Só quando o aluno pede</option>
    </select>
    <p class="note">Automáticas: nos primeiros 6 dias há seta nas missões 1 e 2 e passos nas 3 e 4; depois a seta vai desaparecendo. O modo Apoio mostra sempre seta e passos.</p>
    <label for="tY1">1.º ano: em que letra está a turma?</label>
    <select id="tY1"><option value="auto">Automático, pela data (ordem do manual)</option>${Y1.etapas.map(e=>`<option value="${e.id}">${esc(e.n)} (a partir de ${e.d.slice(8)}/${e.d.slice(5,7)})</option>`).join('')}</select>
    <p class="note">Os textos do 1.º ano só usam as letras já trabalhadas. A escolha fica guardada neste computador. Para todos os computadores, partilhe o link acabado em <b>#letra-</b> seguido da letra (por exemplo <b>#letra-p</b>).</p>
    <label for="tDate">Data do desafio</label>
    <input type="date" id="tDate" value="${keyOf(d)}"> <button class="btn ghost" id="tToday" style="padding:8px 12px;font-size:14px">Hoje</button>
    <p class="note">${dayInfo}</p>
    <label><input type="checkbox" id="tUnlock" ${S.unlockAll?'checked':''}> Desbloquear todas as missões nesta sessão</label>
    ${jump}
    <label>Validar código de um aluno</label>
    <div style="display:flex;gap:8px"><input id="tCod" placeholder="Cole aqui o código (começa por ET)" style="flex:1;min-width:0"><button class="btn" id="tCodOk" style="padding:8px 14px;font-size:14px">Validar</button></div>
    <div id="tCodRes" class="note" style="margin-top:6px"></div>
    <label>Quem fez o desafio</label><button class="btn" id="tReg" style="padding:8px 14px;font-size:14px">📋 Ver registo dos alunos</button>
    <p class="note">Aqui vê só este computador. Para ver e validar todos os alunos, abra o <a href="professor.html" target="_blank">painel do professor</a>.</p>
    <label>Progresso</label><button class="btn ghost" id="tReset" style="padding:8px 12px;font-size:14px">Apagar o progresso guardado neste computador</button>
    <div class="mbtns"><button class="btn" id="tClose">Fechar</button></div>`;
  $('tAj').value=store.cfg.ajudas||'auto';
  $('tY1').value=store.cfg.y1||'auto';
  $('tY1').onchange=()=>{ store.cfg.y1=$('tY1').value; save(); if(S.ano===1 && S.started){ buildMissions(); renderMap(); } teacherPanel(); };
  $('tAj').onchange=()=>{ store.cfg.ajudas=$('tAj').value; save(); S.hintKey=''; schedule(); };
  const setDate=v=>{ S.dataFixa=v; if(S.ano && S.started){ buildMissions(); renderMap(); } renderHome(); teacherPanel(); };
  $('tDate').onchange=()=>setDate($('tDate').value||null);
  $('tToday').onclick=()=>setDate(null);
  $('tUnlock').onchange=()=>{ S.unlockAll=$('tUnlock').checked; if(S.missions.length) renderMap(); };
  $('tReset').onclick=()=>{ const b=$('tReset');
    if(!b.dataset.ok){ b.dataset.ok='1'; b.textContent='Clica outra vez para apagar as estrelas e os dias de treino'; b.style.borderColor='#D9312B'; b.style.color='#B5251F'; return; }
    store.anos={}; Object.values(store.reg||{}).forEach(r=>r.m={}); save(); if(S.missions.length) renderMap(); b.dataset.ok=''; b.textContent='Progresso apagado'; b.disabled=true; };
  $('tBox').querySelectorAll('[data-j]').forEach(b=>b.onclick=()=>{ S.unlockAll=true; $('tModal').classList.remove('on'); openMission(+b.dataset.j); });
  $('tClose').onclick=()=>$('tModal').classList.remove('on');
  $('tCodOk').onclick=()=>{
    const r=lerCodigo($('tCod').value), o=$('tCodRes');
    if(r&&r.valido&&(window.google&&google.script&&google.script.run)){
      o.innerHTML='A validar…';
      google.script.run.withSuccessHandler(res=>{
        if(!res||!res.ok){ o.innerHTML='<b style="color:#B5251F">❌ '+esc((res&&res.erro)||'Não foi possível validar.')+'</b>'; return; }
        const st=n=>n?'⭐'.repeat(n):'·', f=['m1','m2','m3','m4'].filter(id=>r.m[id]).length;
        o.innerHTML=`<b style="color:var(--green)">✔ ${res.repetido?'Já estava validado':'Validado e guardado na folha'}</b><br><b>${esc(r.nome)}</b> · ${esc(r.turma||'sem turma')} · ${esc(r.ano)}.º ano · ${r.dia.slice(8)}/${r.dia.slice(5,7)}/${r.dia.slice(0,4)}<br>Aq. ${st(r.m.aq)} · M1 ${st(r.m.m1)} · M2 ${st(r.m.m2)} · M3 ${st(r.m.m3)} · M4 ${st(r.m.m4)} · Extra ${st(r.m.bonus)} · <b>${f}/4 missões</b><br><span class="note">O registo deste aluno será apagado do computador dele no próximo minuto.</span>`;
        $('tCod').value=''; $('tCod').focus();
      }).withFailureHandler(e=>{ o.innerHTML='<b style="color:#B5251F">❌ Erro do servidor: '+esc((e&&e.message)||String(e))+'</b>'; })
        .validar(S.tpw||'', $('tCod').value.replace(/\s+/g,''));
      return;
    }
    if(!r){ o.innerHTML='<b style="color:#B5251F">❌ Código inválido.</b>'; return; }
    const st=n=>n?'⭐'.repeat(n):'·', f=['m1','m2','m3','m4'].filter(id=>r.m[id]).length;
    o.innerHTML=(r.valido?'<b style="color:var(--green)">✔ Código válido</b>':'<b style="color:#B5251F">❌ Código alterado: não é válido</b>')+
      `<br><b>${esc(r.nome)}</b> · ${esc(r.turma||'sem turma')} · ${esc(r.ano)}.º ano · ${r.dia.slice(8)}/${r.dia.slice(5,7)}/${r.dia.slice(0,4)}<br>`+
      `Aq. ${st(r.m.aq)} · M1 ${st(r.m.m1)} · M2 ${st(r.m.m2)} · M3 ${st(r.m.m3)} · M4 ${st(r.m.m4)} · Extra ${st(r.m.bonus)} · <b>${f}/4 missões</b>`;
  };
  $('tCod').addEventListener('keydown',e=>{ if(e.key==='Enter') $('tCodOk').click(); });
  $('tReg').onclick=()=>{ S.regFonte=(window.google&&google.script&&google.script.run)?'folha':'local'; regPanel(keyOf(curDate()),''); };
}
const MIDS=[['aq','Aq.'],['m1','M1'],['m2','M2'],['m3','M3'],['m4','M4'],['bonus','Extra']];
function carregarFolha(dia, turma){
  $('tBox').innerHTML='<h2>📋 Registo dos alunos</h2><p class="note">A carregar a folha…</p>';
  google.script.run.withSuccessHandler(lista=>{
      if(lista===null){ S.regErr='Palavra-passe recusada pelo servidor.'; S.regFonte='local'; }
      else { S.regRemote=lista; S.regErr=''; }
      regPanel(dia, turma, true);
    }).withFailureHandler(e=>{ S.regErr='Não foi possível ler a folha: '+((e&&e.message)||e); S.regFonte='local'; regPanel(dia, turma, true); })
    .listar(S.tpw||'');
}
function regPanel(dia, turma, carregado){
  const gs=(window.google&&google.script&&google.script.run);
  if(S.regFonte==='folha' && gs && !carregado){ carregarFolha(dia, turma); return; }
  const remoto=S.regFonte==='folha' && gs && S.regRemote;
  const all=remoto ? S.regRemote : Object.values(store.reg||{});
  const turmas=[...new Set(all.map(r=>r.turma).filter(Boolean))].sort();
  let rows=all.filter(r=>(!dia||r.d===dia)&&(!turma||r.turma===turma));
  rows.sort((a,b)=>(a.d<b.d?1:a.d>b.d?-1:0)||String(a.turma).localeCompare(b.turma)||String(a.ano).localeCompare(String(b.ano))||a.nome.localeCompare(b.nome,'pt'));
  const fmtD=k=>k.slice(8)+'/'+k.slice(5,7);
  const hora=t=>t?new Date(t).toTimeString().slice(0,5):'';
  const st=n=>n?'⭐'.repeat(n):'·';
  const feitas=r=>MIDS.slice(1,5).filter(([id])=>r.m[id]).length;
  const tbl=rows.length?`<div style="overflow-x:auto;margin-top:10px"><table style="border-collapse:collapse;width:100%;font-size:13px">
    <tr style="background:#F2ECE4;text-align:left"><th style="padding:6px">Nome</th><th>Turma</th><th>Ano</th>${dia?'':'<th>Dia</th>'}<th>Hora</th>${MIDS.map(m=>`<th style="text-align:center">${m[1]}</th>`).join('')}<th style="text-align:center">Feitas</th>${remoto?'<th style="text-align:center">Validado</th>':''}</tr>
    ${rows.map(r=>`<tr style="border-top:1px solid var(--line)"><td style="padding:6px;font-weight:800">${esc(r.nome)}${r.perfil==='apoio'?' 🤝':''}</td><td>${esc(r.turma||'')}</td><td>${esc(String(r.ano))}.º</td>${dia?'':`<td>${fmtD(r.d)}</td>`}<td>${hora(r.ini)}</td>${MIDS.map(([id])=>`<td style="text-align:center;white-space:nowrap">${st(r.m[id])}</td>`).join('')}<td style="text-align:center;font-weight:900;color:${feitas(r)===4?'var(--green)':'var(--muted)'}">${feitas(r)}/4</td>${remoto?`<td style="text-align:center">${r.val?'✔':''}</td>`:''}</tr>`).join('')}
  </table></div>`:'<p class="note" style="margin-top:12px">Ainda não há alunos registados com estes filtros.</p>';
  $('tBox').style.maxWidth='980px';
  $('tBox').innerHTML=`<h2>📋 Registo dos alunos</h2>
    <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:flex-end">
      <div><label for="rDia">Dia</label><input type="date" id="rDia" value="${dia}"></div>
      <button class="btn ghost" id="rTodos" style="padding:8px 12px;font-size:14px">Todos os dias</button>
      <div><label for="rTurma">Turma</label><select id="rTurma"><option value="">Todas</option>${turmas.map(t=>`<option ${t===turma?'selected':''}>${esc(t)}</option>`).join('')}</select></div>
    </div>
    ${gs?`<div class="seg" style="margin-top:10px"><button id="rFolha" class="${remoto?'on':''}">🌐 Todos os computadores</button><button id="rLocal" class="${remoto?'':'on'}">💻 Só este computador</button></div>`:''}
    ${S.regErr?`<p class="note" style="color:#B5251F;font-weight:800">${esc(S.regErr)}</p>`:''}
    <p class="note">${rows.length} registo(s). Estrelas por missão; «Feitas» conta as missões 1 a 4. 🤝 = modo Apoio.
    ${gs?`<br>Envio para a folha: ${Object.keys(store.pend||{}).length?`<b style="color:#B5251F">${Object.keys(store.pend).length} por enviar${S.sendErr?' ('+esc(S.sendErr)+')':''}</b>`:'<b style="color:var(--green)">tudo enviado ✔</b>'}`:''}</p>
    ${tbl}
    <textarea id="rTxt" readonly style="position:absolute;left:-9999px"></textarea>
    <div class="mbtns" style="flex-wrap:wrap">
      <button class="btn ghost" id="rApagar">Apagar registo</button>
      <button class="btn ghost" id="rVoltar">◀ Voltar</button>
      <button class="btn ghost" id="rCopiar" ${rows.length?'':'disabled'}>Copiar para Excel</button>
      <button class="btn" id="rFechar">Fechar</button>
    </div><div class="home-msg" id="rMsg" style="color:var(--green)"></div>`;
  if($('rFolha')){ $('rFolha').onclick=()=>{ S.regFonte='folha'; regPanel(dia,turma); };
                  $('rLocal').onclick=()=>{ S.regFonte='local'; S.regErr=''; regPanel(dia,turma,true); }; }
  $('rDia').onchange=()=>regPanel($('rDia').value,turma,true);
  $('rTodos').onclick=()=>regPanel('',turma,true);
  $('rTurma').onchange=()=>regPanel(dia,$('rTurma').value,true);
  $('rVoltar').onclick=()=>{ $('tBox').style.maxWidth=''; teacherPanel(); };
  $('rFechar').onclick=()=>{ $('tBox').style.maxWidth=''; $('tModal').classList.remove('on'); };
  $('rCopiar').onclick=async()=>{
    const head=['Nome','Turma','Ano','Dia','Hora',...MIDS.map(m=>m[1]),'Feitas'];
    const txt=[head,...rows.map(r=>[r.nome,r.turma||'',r.ano+'.º',fmtD(r.d),hora(r.ini),...MIDS.map(([id])=>r.m[id]||0),feitas(r)+'/4'])].map(a=>a.join('\t')).join('\n');
    let ok=false; try{ await navigator.clipboard.writeText(txt); ok=true; }catch(e){}
    if(!ok){ try{ const t=$('rTxt'); t.value=txt; t.select(); ok=document.execCommand('copy'); }catch(e){} }
    $('rMsg').textContent= ok ? 'Copiado. Cole numa folha de Excel.' : 'Não foi possível copiar neste navegador.';
  };
  $('rApagar').onclick=()=>{ const b=$('rApagar');
    if(!b.dataset.ok){ b.dataset.ok='1'; b.textContent='Clica outra vez para apagar o registo deste computador (a folha não é alterada)'; b.style.color='#B5251F'; b.style.borderColor='#D9312B'; return; }
    store.reg={}; save(); regPanel(dia,turma,true); };
}

// ═══════════════════════════════════════════════════════════
// ARRANQUE
// ═══════════════════════════════════════════════════════════
bindRibbon();
renderHome();
