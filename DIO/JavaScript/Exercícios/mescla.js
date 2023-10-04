function mergeStrings(word1, word2) {
    let merged = '';
    let i = 0;
    let j = 0;
  
    while (i < word1.length && j < word2.length) {
      merged += word1[i] + word2[j];
      i++;
      j++;
    }
  
    while (i < word1.length) {
      merged += word1[i];
      i++;
    }
  
    while (j < word2.length) {
      merged += word2[j];
      j++;
    }
  
    return merged;
  }
  
  // Test cases
  console.log(mergeStrings("abc", "pqr")); // Output: "apbqcr"
  console.log(mergeStrings("ab", "pqrs")); // Output: "apbqrs"
  console.log(mergeStrings("abcd", "pq")); // Output: "apbqcd"
  