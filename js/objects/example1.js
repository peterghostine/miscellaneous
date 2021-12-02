class Player {
    constructor(name, hitsPerMinute) {
      this.name = name;
      this.hitsPerMinute = hitsPerMinute;
      this.balloonCount = 100;
    }
  
    status() {
      console.log(`Player: ${this.name} -- Ballons Left: ${this.balloonCount}`)
    }
  }
  
  // Write function below
  const p1 = new Player('p1', 5);
  const p2 = new Player('p2', 2);
   
  function balloonAttack(p1, p2) {
    const p1TotalHits = 10 * p1.hitsPerMinute;
    const p2TotalHits = 10 * p2.hitsPerMinute;
    p1.status();
    p2.status();
    if (p1TotalHits > p2TotalHits) {
      return p1.name;
    } else if (p2TotalHits > p1TotalHits) {
      return p2.name;
    } else {
      return 'Tie';
    }
  }