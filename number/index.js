/*
新建一个index.js文件，任意写一个循环，实现如下要求：从0到20，判断是奇数还是偶数，输出。输出如下：

1 is odd number.
2 is even number.
3 is odd number.
……
19 is odd number.
20 is even number.
 */
for(var i = 0;i< 21;i++){
    if(i % 2 === 0){
        console.log(i+" is even number");
    }else{
        console.log(i+" is odd number");
    }
}
