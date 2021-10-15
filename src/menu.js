const menu = () => {
    const content = document.querySelector('#content');

    const menu = document.createElement('div');
    menu.innerHTML('menu');

    // starters
    const starters = document.createElement('div');
    starters.innerHTML('starters');

    const arrancini = document.createElement('div');
    arrancini.innerHTML('sicilian arancini')
    const bruschetta = document.createElement('div');
    bruschetta.innerHTML('bruschetta w/ tomatoes, burrata, & anchovies');
    const octopus = document.createElement('div');
    octopus.innerHTML('signature octopus in garlic oil');
    const carpaccio = document.createElement('div');
    carpaccio.innerHTML('grilled wild oyster mushrooms & wagyu carpaccio');
    
    starters.appendChild(arrancini);
    starters.appendChild(bruschetta);
    starters.appendChild(octopus);
    starters.appendChild(carpaccio);

    // sides
    const sides = document.createElement('div');
    sides.innerHTML('sides');

    const vegetablePlate = document.createElement('div');
    vegetablePlate.innerHTML('vegetable plate');
    const truffleFries = document.createElement('div');
    truffleFries.innerHTML('truffle fries');
    
    sides.appendChild(vegetablePlate);
    sides.appendChild(truffleFries);

    // pasta and risotto
    const pasta = document.createElement('div');
    pasta.innerHTML('pasta & risotto');

    const seafoodSpaghetti = document.createElement('div');
    seafoodSpaghetti.innerHTML('oil spaghetti w/ fresh seafood medley');
    const trufflePasta = document.createElement('div');
    trufflePasta.innerHTML('paccheri pasta w/ truffle cream sauce')
    const bolognese = document.createElement('div');
    bolognese.innerHTML('spaghetti w/ bolognese sauce');
    const abaloneRisotto = document.createElement('div');
    abaloneRisotto.innerHTML('soft steamed abalone risotto');

    pasta.appendChild(seafoodSpaghetti);
    pasta.appendChild(trufflePasta);
    pasta.appendChild(bolognese);
    pasta.appendChild(abaloneRisotto);

    // mains
    const mains = document.createElement('div');
    mains.innerHTML('mains');

    const porkBelly = document.createElement('div');
    porkBelly.innerHTML('grilled iberico pork belly');
    const steak = document.createElement('div');
    steak.innerHTML('charcoal grilled beef rib steak');

    mains.appendChild(porkBelly);
    mains.appendChild(steak);

    // desserts
    const desserts = document.createElement('div');
    desserts.innerHTML('desserts');

    const panettone = document.createElement('div');
    panettone.innerHTML('panettone w/ vanilla ice cream')
    const affogato = document.createElement('div');
    affogato.innerHTML('affogato');

    desserts.appendChild(panettone);
    desserts.appendChild(affogato);

    // menu
    menu.appendChild(starters);
    menu.appendChild(sides);
    menu.appendChild(pasta);
    menu.appendChild(mains);
    menu.appendChild(desserts);

    content.appendChild(menu);
}

export { menu };