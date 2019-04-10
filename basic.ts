// 基础类型
let isDone: boolean = false;
let binaryLiteral: number = 0b1010;
let userName: string = "bob";
// 数组
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
// 元组
let x: [string, number] = ['hello', 10];
// 枚举
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
// 任意类型
let notSure: any = 4;
// void类型
function warnUser(): void {
    console.log("This is my warning message");
}
let a = 1;