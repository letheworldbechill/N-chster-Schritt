const tacticsTexts = [
    {
        title: "Hoovering",
        description: `
        **Unbewusst:** Das Opfer fühlt sich geschmeichelt, wenn der Narzisst plötzlich Kontakt sucht oder Zuneigung zeigt. 
        **Bewusst:** Erkenne, dass dies eine Taktik ist, um dich zurück in die Kontrolle zu ziehen. Bleibe distanziert und halte klare Grenzen.`
    },
    {
        title: "Opfer spielen",
        description: `
        **Unbewusst:** Man empfindet Mitleid und versucht, dem Narzissten zu helfen, was die Manipulation verstärkt. 
        **Bewusst:** Erkenne, dass es ein Mittel zur Kontrolle ist. Reagiere sachlich, ohne emotional einzusteigen.`
    },
    {
        title: "Gaslighting",
        description: `
        **Unbewusst:** Das Opfer zweifelt an der eigenen Wahrnehmung und glaubt, überreagiert zu haben. 
        **Bewusst:** Dokumentiere Fakten und bleibe bei deiner Wahrheit, unabhängig von der Meinung des Narzissten.`
    },
    {
        title: "Liebesbombing",
        description: `
        **Unbewusst:** Man fühlt sich geschmeichelt und lässt sich emotional ein. 
        **Bewusst:** Sei dir bewusst, dass übertriebene Zuwendung oft ein Mittel ist, um später Kontrolle auszuüben.`
    },
    {
        title: "Spaltung",
        description: `
        **Unbewusst:** Das Opfer wird gegen andere Menschen manipuliert und isoliert. 
        **Bewusst:** Erkenne die Strategie und baue weiterhin unabhängige Beziehungen auf.`
    },
    {
        title: "Schuldzuweisungen",
        description: `
        **Unbewusst:** Man übernimmt Verantwortung für Fehler, die man nicht begangen hat. 
        **Bewusst:** Lege klare Grenzen und erkenne, dass du nicht für alles verantwortlich bist.`
    },
    {
        title: "Projektion",
        description: `
        **Unbewusst:** Das Opfer fühlt sich schuldig für Eigenschaften oder Handlungen des Narzissten. 
        **Bewusst:** Bleibe ruhig und reflektiere, dass diese Vorwürfe nicht deiner Realität entsprechen.`
    },
    {
        title: "Entwertung",
        description: `
        **Unbewusst:** Man fühlt sich wertlos und versucht, die Zuneigung des Narzissten zurückzugewinnen. 
        **Bewusst:** Erinnere dich an deinen eigenen Wert und ziehe dich aus der Dynamik zurück.`
    },
    {
        title: "Triangulation",
        description: `
        **Unbewusst:** Das Opfer fühlt sich eifersüchtig oder ersetzt durch andere Personen. 
        **Bewusst:** Erkenne, dass dies eine Manipulation ist, um Unsicherheit zu schaffen. Konzentriere dich auf deine eigenen Bedürfnisse.`
    },
    {
        title: "Stille Behandlung",
        description: `
        **Unbewusst:** Man fühlt sich verunsichert und sucht verzweifelt den Kontakt wiederherzustellen. 
        **Bewusst:** Nutze die Stille, um dich emotional zu distanzieren und auf dich selbst zu fokussieren.`
    }
];

function showTactic(index) {
    const tactic = tacticsTexts[index - 1];
    document.getElementById('tactic-text').innerHTML = `
        <h3>${tactic.title}</h3>
        <p>${tactic.description}</p>
    `;
}
