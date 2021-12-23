const person = {
    name: 'Diego',
    age: 28,
    sons: ['Cristopher', 'Esteban']
}

console.log(person);
console.log(person.name);
console.log(person.sons);
console.log(person['name'] );

for(const key in person){
    console.log(key)
}

for(const key in person){
    console.log(person[key])
}

for(const son of person.sons){
    console.log(son)
}

console.log(`Hola ${person.name}, tienes ${person.age} años, y tus hijos se llaman: ${person.sons.join(" y ")}`)