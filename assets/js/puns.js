const puns = [
    {
        setup: "Por que o programador não gosta de natureza?",
        punchline: "Porque tem muitos bugs! 🐛"
    },
    {
        setup: "Quantos programadores são necessários para trocar uma lâmpada?",
        punchline: "Nenhum, isso é problema de hardware! 💡"
    },
    {
        setup: "Por que o Java usa óculos?",
        punchline: "Porque ele não C#! 👓"
    },
    {
        setup: "O que é um terapeuta para um programador?",
        punchline: "Um depurador de vida! 🛋️"
    },
    {
        setup: "Por que o computador foi ao médico?",
        punchline: "Porque estava com vírus! 🤒"
    },
    {
        setup: "O que o código disse para o comentário?",
        punchline: "Ninguém te lê mesmo! 📝"
    },
    {
        setup: "Por que o desenvolvedor front-end terminou o namoro?",
        punchline: "Porque não tinha química, só CSS! 🎨"
    },
    {
        setup: "Por que o programador ficou preso no chuveiro?",
        punchline: "Porque as instruções diziam: Enxague, Repita! 🚿"
    },
    {
        setup: "Qual é o animal favorito do Linux?",
        punchline: "O Pinguim! 🐧"
    },
    {
        setup: "O que o banco de dados disse para a tabela?",
        punchline: "Nossa relação é muito complexa! 💾"
    },
    {
        setup: "Como um programador chama um pedido de namoro?",
        punchline: "Um pull request! 💍"
    },
    {
        setup: "Existem 10 tipos de pessoas no mundo...",
        punchline: "As que entendem binário e as que não entendem! 0️⃣1️⃣"
    },
    {
        setup: "O que o pato disse para a pata?",
        punchline: "Vem Quá! 🦆"
    },
    {
        setup: "Por que o menino estava falando ao telefone deitado?",
        punchline: "Para não cair a ligação! 📞"
    },
    {
        setup: "Qual é a fórmula da água benta?",
        punchline: "H Deus O! 💧"
    },
    {
        setup: "O que uma impressora disse para a outra?",
        punchline: "Essa folha é sua ou é impressão minha? 🖨️"
    },
    {
        setup: "Por que a velhinha não usa relógio?",
        punchline: "Porque ela é sem hora! 👵"
    },
    {
        setup: "Qual é o rei dos queijos?",
        punchline: "O Requeijão! 🧀"
    },
    {
        setup: "O que o tomate foi fazer no banco?",
        punchline: "Tirar extrato! 🍅"
    },
    {
        setup: "Por que o jacaré tirou o filho da escola?",
        punchline: "Porque ele réptil de ano! 🐊"
    },
    {
        setup: "Qual é o contrário de volátil?",
        punchline: "Vem cá tio! 👴"
    },
    {
        setup: "O que o zero disse para o oito?",
        punchline: "Que cinto bonito! 0️⃣8️⃣"
    },
    {
        setup: "Por que o pinheiro não se perde na floresta?",
        punchline: "Porque ele tem uma pinha (pinha)! 🌲"
    },
    {
        setup: "O que a Lua disse ao Sol?",
        punchline: "Nossa, você é tão grande e não te deixam sair à noite! 🌙"
    },
    {
        setup: "Qual é o cúmulo da força?",
        punchline: "Dobrar a esquina! 💪"
    },
    {
        setup: "Por que o livro de matemática se suicidou?",
        punchline: "Porque tinha muitos problemas! 📐"
    },
    {
        setup: "O que o pagodeiro foi fazer na igreja?",
        punchline: "Foi cantar 'Pá God'! 🎶"
    },
    {
        setup: "Qual é o doce preferido do átomo?",
        punchline: "Pé de molécula! 🍬"
    },
    {
        setup: "Por que o bombeiro não gosta de andar?",
        punchline: "Porque ele socorre! 🚒"
    },
    {
        setup: "Qual é a cidade que não tem táxi?",
        punchline: "Uberlândia! 🚗"
    },
    {
        setup: "O que o advogado do frango foi fazer na delegacia?",
        punchline: "Foi soltar a franga! 🐔"
    },
    {
        setup: "Por que o fantasma entrou no elevador?",
        punchline: "Para elevar o espírito! 👻"
    },
    {
        setup: "O que o cavalo foi fazer no orelhão?",
        punchline: "Passar um trote! 🐴"
    },
    {
        setup: "Qual é o vinho que não tem álcool?",
        punchline: "O Ovinho de codorna! 🥚"
    },
    {
        setup: "Por que a aranha é o animal mais carente do mundo?",
        punchline: "Porque ela é um aracneedyou! 🕷️"
    },
    {
        setup: "O que o tijolo falou para o outro?",
        punchline: "Há um ciumento entre nós! 🧱"
    },
    {
        setup: "Por que o policial não usa sabão em pó?",
        punchline: "Porque ele prefere deter gente! 👮"
    },
    {
        setup: "O que a banana suicida falou?",
        punchline: "Macacos me mordam! 🍌"
    },
    {
        setup: "Qual é o pé mais rápido?",
        punchline: "O pé-lé! ⚽"
    },
    {
        setup: "O que o lápis disse para o papel?",
        punchline: "Você está me desapontando! ✏️"
    },
    {
        setup: "Por que o boi sobe o morro?",
        punchline: "Porque não pode passar por baixo! 🐂"
    },
    {
        setup: "O que é um pontinho verde na Antártida?",
        punchline: "Um pinquim! 🐧"
    },
    {
        setup: "Qual é o estado que quer ser carro?",
        punchline: "Sergipe (Ser Jipe)! 🚙"
    },
    {
        setup: "O que o azeite disse para o vinagre?",
        punchline: "Não me venha com essa acidez! 🥗"
    },
    {
        setup: "Por que o esqueleto não brigou com ninguém?",
        punchline: "Porque ele não tem estômago para isso! 💀"
    },
    {
        setup: "O que o canibal vegetariano come?",
        punchline: "A planta do pé e a batata da perna! 🦶"
    },
    {
        setup: "Qual é o animal que dissolve na água?",
        punchline: "O orango-tango! 🍹"
    },
    {
        setup: "Por que a galinha atravessou a fita de Moebius?",
        punchline: "Para chegar ao mesmo lado! 🐔"
    },
    {
        setup: "O que o próton disse para o elétron?",
        punchline: "Hoje você está muito negativo! ⚛️"
    },
    {
        setup: "Qual é o prato favorito do Thor?",
        punchline: "Thor-resmo! 🔨"
    },
    {
        setup: "Por que o cego não gosta de lixa?",
        punchline: "Porque ele acha o texto muito áspero! 📜"
    },
    {
        setup: "O que o tubarão disse quando comeu o peixe-palhaço?",
        punchline: "Que gosto engraçado! 🦈"
    },
    {
        setup: "Qual é o cúmulo da paciência?",
        punchline: "Encher pneu de trem com bomba de bicicleta! 🚂"
    },
    {
        setup: "Por que o anão não pode lutar boxe?",
        punchline: "Porque ele dá golpe baixo! 🥊"
    },
    {
        setup: "O que o sal disse para a pimenta?",
        punchline: "Você é muito quente! 🌶️"
    },
    {
        setup: "Qual é o país que cabe na geladeira?",
        punchline: "O Peru! 🦃"
    },
    {
        setup: "Por que o computador foi preso?",
        punchline: "Porque executou um programa ilegal! 💻"
    },
    {
        setup: "O que o martelo foi fazer na igreja?",
        punchline: "Pregar! 🔨"
    },
    {
        setup: "Qual é o santo que protege os calçados?",
        punchline: "Santa Dália! 👡"
    },
    {
        setup: "Por que o gato mia para a Lua?",
        punchline: "Porque ele quer ser astro-nauta! 🐱"
    },
    {
        setup: "O que o 4 disse para o 40?",
        punchline: "Passa a bola! ⚽"
    },
    {
        setup: "Qual é o lugar mais certo do Brasil?",
        punchline: "O Sertão! 🌵"
    },
    {
        setup: "Por que o cachorro entrou na igreja?",
        punchline: "Porque ele é um pastor alemão! 🐕"
    },
    {
        setup: "O que a lâmpada disse para o interruptor?",
        punchline: "Você me liga! 💡"
    },
    {
        setup: "Qual é o peixe que caiu do prédio?",
        punchline: "Aaaaaaatum! 🐟"
    },
    {
        setup: "Por que o rádio não pode ter filhos?",
        punchline: "Porque ele é estéreo! 📻"
    },
    {
        setup: "O que o Ketchup disse para a Mostarda?",
        punchline: "Calma, não precisa ficar vermelha! 🌭"
    },
    {
        setup: "Qual é o cúmulo do egoísmo?",
        punchline: "Não vou te contar! 🤐"
    },
    {
        setup: "Por que o elefante não usa computador?",
        punchline: "Porque ele tem medo do mouse! 🐘"
    },
    {
        setup: "O que o nadador faz para bater o recorde?",
        punchline: "Nada! 🏊"
    },
    {
        setup: "Qual é a panela que está sempre triste?",
        punchline: "A panela depressão! 🍲"
    },
    {
        setup: "Por que o astronauta não conseguiu reservar mesa no restaurante da Lua?",
        punchline: "Porque estava cheio, mas não tinha atmosfera! 🌑"
    },
    {
        setup: "O que o milho disse para a pipoca?",
        punchline: "Aah, que estouro! 🍿"
    }
];

let currentPunIndex = -1;
const cardContainer = document.getElementById('pun-card-container');
const nextBtn = document.getElementById('next-pun-btn');

function getRandomPun() {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * puns.length);
    } while (newIndex === currentPunIndex && puns.length > 1);
    
    currentPunIndex = newIndex;
    return puns[currentPunIndex];
}

function createCard(pun) {
    const card = document.createElement('div');
    card.className = 'pun-display-card';
    
    card.innerHTML = `
        <div class="pun-inner">
            <div class="pun-front">
                <div class="pun-icon">🤔</div>
                <p class="pun-text">${pun.setup}</p>
                <span class="tap-hint">Toque para ver a resposta</span>
            </div>
            <div class="pun-back">
                <div class="pun-icon">😂</div>
                <p class="pun-text">${pun.punchline}</p>
            </div>
        </div>
    `;

    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
        if (card.classList.contains('flipped')) {
            triggerConfetti(card);
        }
    });

    return card;
}

function showNextPun() {
    // Disable button temporarily
    nextBtn.disabled = true;
    
    const oldCard = cardContainer.querySelector('.pun-display-card');
    const newPun = getRandomPun();
    const newCard = createCard(newPun);

    // Prepare new card (start off-screen right)
    newCard.classList.add('entering');
    cardContainer.appendChild(newCard);

    // Animate old card out (to left)
    if (oldCard) {
        oldCard.classList.add('exiting');
        setTimeout(() => {
            oldCard.remove();
        }, 500); // Match CSS transition
    }

    // Animate new card in
    requestAnimationFrame(() => {
        newCard.classList.remove('entering');
    });

    setTimeout(() => {
        nextBtn.disabled = false;
    }, 500);
}

function triggerConfetti(element) {
    // Simple emoji burst effect
    const rect = element.getBoundingClientRect();
    const center = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
    };

    for (let i = 0; i < 10; i++) {
        createEmojiParticle(center.x, center.y);
    }
}

function createEmojiParticle(x, y) {
    const emojis = ['😂', '🤣', '😹', '💀', '✨'];
    const particle = document.createElement('div');
    particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    particle.className = 'emoji-particle';
    
    const angle = Math.random() * Math.PI * 2;
    const velocity = 100 + Math.random() * 100;
    const tx = Math.cos(angle) * velocity;
    const ty = Math.sin(angle) * velocity;

    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    particle.style.setProperty('--tx', `${tx}px`);
    particle.style.setProperty('--ty', `${ty}px`);

    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 1000);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    showNextPun();
    nextBtn.addEventListener('click', showNextPun);
});
