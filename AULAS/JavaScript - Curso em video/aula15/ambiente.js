let num = [5, 8, 2, 9, 3]

num.push(10) // Add nova key ao final com este valor

console.log(num)

num[0] = 1 // Add nova key à uma pos específica, alterando o valor 5 pelo 1

console.log(num)

for (pos in num) {
    console.log(num[pos])
}