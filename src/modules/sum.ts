export function sumSmallNumbers(a:number,b:number){
    if(a > 9 || b > 9 ){
        throw new Error("Les nombres doivent être inférieurs à 10")
    } else if(a < 0 || b < 0){
        throw new Error("Les nombres doivent être positifs")
    }
    return a + b;
};

export function sum(a: number, b: number){
    return a + b;
};