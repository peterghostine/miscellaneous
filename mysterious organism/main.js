// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

function pAequorFactory(n, arrDNA) {
  // Add properties specimenNum and dna. 
  let pAequor = {
    specimenNum: n,
    dna: arrDNA, 
    //[ 'C', 'G', 'A', 'C', 'T', 'T', 'A', 'A', 'C', 'G', 'G', 'C', 'A', 'G', 'A' ],
    mutate: function() {
      let dnaBases = ['A', 'T', 'C', 'G'];
      // Randomly choose an index position inside this.dna.
      randDNABaseIndex = Math.floor(Math.random() * this.dna.length);
      // Read the DNA base at this random position.
      randDNABase = this.dna[randDNABaseIndex];
      // Remove the DNA base from the list of posible replacements.
      dnaBases = dnaBases.filter(item => !(item === randDNABase));
      // Randomly choose a DNA base from the list of candidates.
      const newDNABase = dnaBases[Math.floor(Math.random() * dnaBases.length)];
      // Change the DNA base in this.dna. 
      this.dna[randDNABaseIndex] = newDNABase;
      return this.dna;
    },
    compareDNA: function(some_pAequor) {
      const length = some_pAequor.dna.length;
      let similarities = 0;
      for (let i = 0; i < length ; i++) {
        // console.log(somePAequor.dna[i] === this.dna[i]);
        if (some_pAequor.dna[i] === this.dna[i]) {
          // console.log(i);
          similarities = similarities + 1;
        };
      };
      console.log(`Specimen #${this.specimenNum} and specimen #${some_pAequor.specimenNum} have ${Math.round(similarities * 10000 / length, 2) / 100}% DNA in common.`);   
    },
    willLikelySurvive: function() {
      const dnaCorG = this.dna.filter(item => (item === 'C' || item === 'G'));     
      if ((dnaCorG.length / this.dna.length) >= 0.6) {
        return true;
        } else {
        return false;
      };
    }
  }
  // Mutate pAequor before returning it.
  pAequor.mutate();
  return pAequor;
}  

// Create 30 instances of pAequor.
let pAequorArr = [];
for (let i = 0; i <= 30; i++) {
  pAequorArr.push(pAequorFactory(1, mockUpStrand()));
}

// Display the DNA property of all 30 specimens, along with their likelyhood of survival.
for (let i = 0; i < pAequorArr.length; i++){
  console.log(`Specimen #${i}: ${pAequorArr[i].dna}` + ' (' + pAequorArr[i].willLikelySurvive() + ')');
}
