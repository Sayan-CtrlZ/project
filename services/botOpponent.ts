// Bot answers after a random delay, with configurable accuracy
export class BotOpponent {
  name = 'NOVA_BOT';
  rank = Math.floor(Math.random() * 20) + 40; // ranks 40-60
  accuracy = 0.65; // bot gets 65% right — beatable but challenging

  async getAnswer(correctIndex: number, totalOptions: number): Promise<number> {
    const thinkTime = 3000 + Math.random() * 5000; // 3-8s fake "thinking"
    await new Promise(r => setTimeout(r, thinkTime));

    if (Math.random() < this.accuracy) return correctIndex;
    // wrong answer — pick any other index
    const wrong = Array.from({length: totalOptions}, (_,i) => i)
      .filter(i => i !== correctIndex);
    return wrong[Math.floor(Math.random() * wrong.length)];
  }
}
