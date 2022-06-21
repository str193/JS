
//HW_1* 
//1*: Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
//Пример: const checkAge = function(age) {
//Ваши преобразования
//}
//Вывести в консоль результат работы функции с возрастами 17, 18, 61
// let age_2 = 18
// let age_3 = 61
// const checkAge1 = function(age) {
//     let age_2 = 18
//     let age_3 = 61
//     if (age_1 < age_2) {
//         console.log("You don’t have access cause your age is " + age+ " It’s less then ");
//     }  else if (age >=  age_2 && age <  age_3) {
//         console.log("Welcome  !");
//     } else if (age  > age_3) 
//         console.log("Technical work"); 
//     }

//checkAge()    
//2*:Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.
//     let age_2 = 18
//     let age_3 = 61
// const checkAge2 = function(age) {
//     if (age != typeof(Number)) {
//         console.log("Eror, not int");
//     }  else if (age < age_2) {
//         console.log("You don’t have access cause your age is " + age + " It’s less then ");    
//     }  else if (age >=  age_2 && age <  age_3) {
//         console.log("Welcome  !");
//     } else if (age  > age_3) 
//         console.log("Technical work"); 
//     }

//checkAge2()  
//3**:Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number
//     let age_2 = 18
//     let age_3 = 61

// const checkAge3 = function(age) {    
//     if (age != typeof(Number)) 
//         age = Number(age)
//         console.log("Eror, not int");
//     if (age < age_2) 
//         console.log("You don’t have access cause your age is " + age + " It’s less then ");    
//     if (age >=  age_2 && age <  age_3) 
//         console.log("Welcome  !");
//     if (age  > age_3) 
//         console.log("Technical work"); 
//     }


//checkAge3()  
//4***:Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке

const checkAge4 = function(...age) {
    age.forEach(el => {
        if (el != typeof(Number))  {
            el = Number(el);
        }  else if (el < age_2) {
            console.log("You don’t have access cause your age is " + el + " It’s less then ");    
        }  else if (el >=  age_2 && el <  age_3) {
            console.log("Welcome  !");
        } else if (el  > age_3) 
            console.log("Technical work"); 
    })
}
    
checkAge4('3',3, 54, 43)
