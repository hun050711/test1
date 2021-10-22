export function addRecord(
  a: Record<string, number>,
  b: Record<string, number>
) {
  const result = { ...a };
  Object.entries(b).forEach(([key, value]) => {
    if (!result[key]) {
      result[key] = 0;
    }
    result[key] += value;
  });

  return result;
}

export function subtractRecord(
  a: Record<string, number>,
  b: Record<string, number>
) {
  return Object.fromEntries(
    Object.entries(a).map(([key, value]) => [key, value - (b[key] ?? 0)])
  );
}

export function filterRecord(record: Record<string, number>) {
  return Object.fromEntries(
    Object.entries(record).filter(([key, value]) => value > 0)
  );
}

export function dedupe<T>(arr: T[]): T[] {
  return Array.from(new Set(arr.map((item) => JSON.stringify(item)))).map(
    (item) => JSON.parse(item)
  );
}

export function permutator<T>(inputArr: T[]) {
  const result: T[][] = [];

  const permute = (arr: T[], m: T[] = []) => {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  };

  permute(inputArr);

  return result;
}
