function solution(n, k) {
    
    const service = parseInt(n/10)
    const drinks = k-service
    return (n*12000 + drinks * 2000);
}