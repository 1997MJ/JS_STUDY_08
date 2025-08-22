// 2025.08.22
// today check List : 비동기
// 정리
// map : 모든 요소에 접근하여 새로운 배열을 생성
// filter : 특정 요소에 접근하여 새로운 배열을 생성 


// 1. setTimeOut
// 다음과같이 콜백함수를 예약후 종료, 코드와 상관없이 독립적으로 실행됨 => 비동기
// 단점 : 결과 예측이 어려움
console.log("a")

setTimeout(()=>{console.log("b")},1000 )
setTimeout(()=>{console.log("c")},2000 )

console.log("d")
// 결과 : a d b c

// 2.Promise
// resolve : 비동기 작업 성공, reject : 비동기 작업 실패
// setTimeout과 달리 예측 가능하게 비동기 작업을 수행할 수 있음
const promise1 = new Promise((resovle,reject)=>{
    resovle();
})
promise1.then(()=>{
    console.log("성공")
})
.catch(()=>{
    console.log("실패")
})



