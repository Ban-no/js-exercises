const data = [
  { name: "Alice", class: "A", math: 10, chemistry: 30, geography: 20 },
  { name: "Bob", class: "A", math: 50, chemistry: 50, geography: 60 },
  { name: "Carol", class: "A", math: 70, chemistry: 55, geography: 30 },
  { name: "Dave", class: "B", math: 40, chemistry: 20, geography: 60 },
  { name: "Ellen", class: "B", math: 60, chemistry: 70, geography: 40 },
  { name: "Frank", class: "B", math: 90, chemistry: 70, geography: 80 },
  { name: "Isaac", class: "C", math: 70, chemistry: 40, geography: 50 },
  { name: "Justin", class: "C", math: 80, chemistry: 40, geography: 30 },
  { name: "Mallet", class: "C", math: 60, chemistry: 70, geography: 90 },
];

// 1. mathの全員の合計点
const totalMath = data.reduce((sum, student) => sum + student.math, 0);
console.log("1. mathの全員の合計点:", totalMath);

// 2. クラスAのchemistryの平均点
const classA = data.filter((s) => s.class === "A");
const avgChemA =
  classA.reduce((sum, s) => sum + s.chemistry, 0) / classA.length;
console.log("2. クラスAのchemistryの平均点:", avgChemA);

// 3. 3科目合計点のクラスC内での平均点
const classC = data.filter((s) => s.class === "C");
const avgTotalC =
  classC
    .map((s) => s.math + s.chemistry + s.geography)
    .reduce((sum, val) => sum + val, 0) / classC.length;
console.log("3. クラスCの3科目合計の平均点:", avgTotalC);

// 4. 3科目合計点が最も高い人のname
const topScorer = data
  .map((s) => ({
    name: s.name,
    total: s.math + s.chemistry + s.geography,
  }))
  .reduce((max, current) => (current.total > max.total ? current : max));
console.log("4. 合計点が最も高い人:", topScorer.name);

// 5. geographyの標準偏差
const geoScores = data.map((s) => s.geography);
const geoMean = geoScores.reduce((sum, x) => sum + x, 0) / geoScores.length;
const geoVariance =
  geoScores.map((x) => (x - geoMean) ** 2).reduce((sum, val) => sum + val, 0) /
  geoScores.length;
const geoStdDev = Math.sqrt(geoVariance);
console.log("5. geographyの標準偏差:", geoStdDev.toFixed(2));
