const exercicios = {
    Monday: [
        { nome: "Supino Reto", series: "4x12", grupo: "Peito" },
        { nome: "Press peito iso-lateral", series: "3x12", grupo: "Peito" },
        { nome: "Crucifixo peck deck", series: "3x12", grupo: "Peito" },
        { nome: "Desenvolvimento ombro máquina", series: "4x12", grupo: "Ombro" },
        { nome: "Tríceps corda no pulley", series: "4x12", grupo: "Tríceps" },
    ],
    Tuesday: [
        "Pulldown frente máquina - 4x10",
        "Remada baixa - 4x10",
        "Rosca direta polia - 4x10",
        "Rosca martelo - 3x12",
        "Encolhimento de ombros - 4x12"
    ],
    Wednesday: [
        "Leg press 45º - 4x12",
        "Agachamento rack - 3x12",
        "Cadeira abdutora/adutora - 3x15",
        "Panturrilha em pé - 4x20"
    ],
    Thursday: [
        "Crucifixo inclinado - 4x10",
        "Supino inclinado máquina - 3x10",
        "Paralela assistida - 3x12",
        "Tríceps francês - 3x12"
    ],
    Friday: [
        "Pulldown frente - 4x10",
        "Remada alta - 4x10",
        "Rosca concentrada - 4x10",
        "Rosca 21 - 3x12"
    ],
    Saturday: [
        "Flexão de braço - 3x12",
        "Agachamento com halteres - 3x15",
        "Abdômen + prancha + superman - 3x combo"
    ],
    Sunday: ["Corrida leve ou descanso ativo"]
};

const botoes = document.querySelectorAll(".days button");
const container = document.getElementById("exerciseCards");

botoes.forEach((btn) => {
    btn.addEventListener("click", () => {
        const dia = btn.textContent;
        mostrarTreinos(dia);
    });
});

function mostrarTreinos(dia) {
    const treinos = exercicios[dia] || [];
    container.innerHTML = " ";

    if (treinos.length === 0) {
        container.innerHTML = "<p>No exercises found for this day.</p>";
        return;
    }

    treinos.forEach((ex) => {
        const card = document.createElement("div");
        card.className = "exercise-card";
        card.innerHTML = `
      <i class="fa-solid ${ex.icon}"></i>
      <h3>${ex.nome}</h3>
      <h4>${ex.series}</h4>
      <p>${ex.grupo}</p>
    `;
        container.appendChild(card);
    });
}
