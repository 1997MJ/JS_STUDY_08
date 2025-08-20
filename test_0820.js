// 2025.08.20 
// today check List : map() vs filter() vs foreach() 
// 정리
// map : 모든 요소에 접근하여 새로운 배열을 생성
// filter : 특정 요소에 접근하여 새로운 배열을 생성 


const list =[0,1,2,3,4,5,6]
// ex1) 기존 foreach
const new_list=[]
list.forEach((val)=>{
    new_list.push(val*2)
})
console.log(new_list) //[0, 2, 4, 6, 8, 10, 12]

// ex2) map()
// map은 함수 내부에서 모든 값을 반환하는 새 배열을 생성
const new_list2 = list.map(val=> val*2)
console.log(new_list2) //[0, 2, 4, 6, 8, 10, 12]

// ex3) filter()
// filter는 함수 내부에서 특정 값을 반환하는 새 배열을 생성
// true를 반환하면 유지, false를 반환하면 버림
const new_list3 = list.filter(val =>{
    return !(val%2)
})
console.log(new_list3) //[0, 2, 4, 6]

// Q1) [0,1,2,3,4,5] 배열이 있을 때 2보다 작은 배열을 얻으려면 ?
const new_list4 = list.filter(val =>{
    return val<2
})
console.log(new_list4) // [0, 1]

// Q2) Q. [0,1,2,3,4,5] 배열이 있고 인자값을 두배 늘린값으로 이루어진 배열을 얻으려면?
const new_list5 = list.map(val =>{
    return val*2
})
console.log(new_list5) // [0, 1]