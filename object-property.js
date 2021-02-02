const student = [
    {id: 21, name:'Omar Sunny'},
    {id: 31, name:'Maannaaa'},
    {id: 41, name:'Moyouri'},
    {id: 71, name:'Deepjol'},
]
const names = student.map(s =>s.name);
const ids = student.map(s =>s.id);
const bigger = student.filter(s =>s.id>40);
const bigger1 = student.find(s =>s.id>40);
console.log(names,ids);
console.log(bigger);
console.log(bigger1);