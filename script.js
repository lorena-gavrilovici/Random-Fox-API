const foxImage = document.getElementById('fox-image');
const foxFact = document.getElementById('fox-fact');
const foxSpecies = document.getElementById('fox-species');
const loadBtn = document.getElementById('load-btn');
const loader = document.getElementById('loader');
const specSize = document.getElementById('spec-size');
const specHabitat = document.getElementById('spec-habitat');
const specActivity = document.getElementById('spec-activity');

const facts = [
    "Vulpile au pupile verticale, la fel ca pisicile.",
    "O vulpe poate auzi un ceas ticăind de la 40 de metri distanță!",
    "Vulpea roșie este cea mai răspândită specie de carnivor din lume.",
    "Vulpile folosesc câmpul magnetic al Pământului pentru a vâna.",
    "Spre deosebire de lupi, vulpile sunt animale solitare.",
    "O vulpe poate scoate peste 40 de sunete diferite.",
    "Coada unei vulpi o ajută la echilibru și la încălzire iarna."
];

// Date despre diferite specii pentru diversitate
const speciesData = [
    { name: "Vulpea Roșie (Vulpes vulpes)", size: "70 - 90 cm", habitat: "Păduri / Urban", activity: "Nocturnă" },
    { name: "Vulpea Arctică (Vulpes lagopus)", size: "50 - 60 cm", habitat: "Tundră / Gheață", activity: "Diurnă" },
    { name: "Vulpea Fennec (Vulpes zerda)", size: "24 - 41 cm", habitat: "Deșert", activity: "Nocturnă" },
    { name: "Vulpea Gri (Urocyon cinereoargenteus)", size: "76 - 112 cm", habitat: "Păduri dense", activity: "Crepusculară" },
    { name: "Vulpea de Stepă (Vulpes corsac)", size: "45 - 65 cm", habitat: "Stepă / Semideșert", activity: "Nocturnă" }
];

async function getFoxData() {
    loadBtn.disabled = true;
    loader.style.display = 'block';
    
    try {
        const response = await fetch('https://randomfox.ca/floof/');
        const data = await response.json();

        const tempImg = new Image();
        tempImg.src = data.image;

        tempImg.onload = () => {
            foxImage.src = data.image;
            foxImage.style.display = 'block';
            loader.style.display = 'none';
            
            // Alegem un fapt aleatoriu
            foxFact.textContent = facts[Math.floor(Math.random() * facts.length)];
            
            // Alegem o specie și populăm tabelul
            const randomSpecies = speciesData[Math.floor(Math.random() * speciesData.length)];
            foxSpecies.textContent = randomSpecies.name;
            specSize.textContent = randomSpecies.size;
            specHabitat.textContent = randomSpecies.habitat;
            specActivity.textContent = randomSpecies.activity;
            
            loadBtn.disabled = false;
        };
    } catch (error) {
        foxFact.textContent = "Eroare la încărcare.";
        loader.style.display = 'none';
        loadBtn.disabled = false;
    }
}

loadBtn.addEventListener('click', getFoxData);
window.addEventListener('DOMContentLoaded', getFoxData);