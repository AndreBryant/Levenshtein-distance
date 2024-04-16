import { levenshteinDistance } from "./Levenshtein.js"
import Levenshtein from "./Levenshtein.js"

console.log(levenshteinDistance('Male andre bryant', 'andre bryant male'))
console.log(levenshteinDistance('cart', 'cra'))

// This will run very slowly
// console.log(Levenshtein.distance('Male andre bryan', 'andre bryant male'))