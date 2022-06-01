export function betterThanAverage({ scores, score }: { scores: Array<number>; score: number }) {
  return score > scores.reduce((a, b) => a + b, 0) / scores.length;
}
