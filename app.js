// var main = function () {
//     "use strict";
//     $(".comment-input button").on("click", function (event) {
//         var $new_comment = $("<p>");       
//         // var $new_comment = $("<p>").text("Это новый комментарий");
//         var $comment_text = $(".comment-input input").val();
//         // $new_comment.text($comment_text);        
//         // var $new_comment = $("<p>").text($comment_text); 
//         $new_comment.text($comment_text);
//         if($(".comment-input input").val() !== "") {
//             $(".comments").append($new_comment);
//         } else {

//         }
               
//     });
// };
// $(document).ready(main);


/* 1.Определение глобальной ф-ции main; 2.Для выполнения  ф-ции main используем jQuery после загрузки документа и его готовности к использованию */

// var main = function () {
//     "use strict"; // запуск в "строгом режиме"
//     window.alert("Hello, world!");
// };
// $(document).ready(main);

// var main = function () {
//     "use strict";
//     window.alert("Hello, world!");
// };
// $(document).ready(main);

        // Начало непосредственной работы с интерактивностью:

            // Обработка щелчков кнопкой мыши:

// Суть кода: когда пользователь нажимает кнопку +, мы вставляем новый комментарий в секцию комментариев:

// var main = function () {
//     "use strict";    
//     $(".comment-input button").on("click", function (event) {
//         console.log("Hellow, world!");// Проверяем в консоли F12 работу кнопки        
//     })
// }
// $(document).ready(main);

            // добавляем комментарий в секцию комментариев:
            
// var main = function () {
//     "use strict";
//     $(".comment-input button").on("click", function (event) {
//         $(".comments").append("<p>Это новый комментарий!</p>")
//     })
// }
// $(document).ready(main);

            // Динамическое управление элементами DOM:

// Цель: изменять текст в тэгах абзаца на тот, что нах-ся в поле ввода.
// Здесь происходит РЕСТРУКТУРИРОВАНИЕ кода с целью упрощения настройки текста в тэгах абзаца.
// ОБЪЯВЛЯЕМ и НАЗНАЧАЕМ переменную для хранения элемента DOM, кот-й мы собираемся добавить:

// var main = function () {
//     "use strict";
//     $(".comment-input button").on("click", function (event) {
//         var $new_comment = $("<p>");// строка создает новый элемент абзаца как объект jQuery
//         $new_comment.text("Это новый комментарий!");// строка изменяет текстовое содержание абзаца
//         $(".comments").append($new_comment);
//     })
// }
// $(document).ready(main);

// объявляем переменную для хранения содержимого текствого поля вводы.
// делаем так, чтобы содержимое текстового поля ввода стало текстовым содержанием нового элемента абзаца:

// var main = function () {
//     $(".comment-input button").on("click", function (event) {
//         comment_text = $(".comment-input input").val();
//         var $new_comment = $("<p>").text(comment_text);
//         $(".comments").append($new_comment);
//     })
// }
// $(document).ready(main);

// то же, что и выше, но БЕЗ ИСПОЛЬЗОВАНИЯ ПРОМЕЖУТОЧНОЙ ПЕРЕМЕННОЙ(в одну строку):

// var main = function () {
//     $(".comment-input button").on("click", function (event) {					
//         var $new_comment = $("<p>").text($(".comment-input input").val());
//         $(".comments").append($new_comment);
//     })
// }
// $(document).ready(main);

            // Исправление ошибки:

// Перед добавлением комментария ПРОВЕРЯЕМ: есть ли текст в поле ввода:

// var main = function () {
//     "use strict";
//     $(".comment-input button").on("click", function (event) {        
//         var $new_comment;
//         if ($(".comment-input input").val() !== "") {            
//             var $new_comment = $("<p>").text($(".comment-input input").val());
//             $(".comments").append($new_comment);
//         }               
//     })
// }
// $(document).ready(main);

            // Очистка поля ввода:

// var main = function () {
//     "use strict";
//     $(".comment-input button").on("click", function (event) {
//         var $new_comment;
//         if ($(".comment-input input").val() !== "") { 
//             $new_comment = $("<p></p>").text($(".comment-input input").val());
//             $(".comments").append($new_comment);
//             $(".comment-input input").val("");
// // Отсебятина: если поле ввода пустое, то при щелчке по + появляется в поле ввода предупреждение: "Введите данные"(с текстом красного цвета) и в поле появляется "фокус"(моргающий курсор):
//         } else {
//             $(".comment-input input").val("Введите данные").focus().css({
//                 'color' : 'red'
//             })              
//         }
//     })
    
// }
// $(document).ready(main);

            // Ожидаемое действие кнопки Enter:

// Для отправки коммента при нажатии на клавишу Enter добавляем дополнительный обработчик событий keypress.
// keypress улавливает нажатие клавиши НЕПОСРЕДСТВЕННО в элементе ввода(input):

// var main = function () {
//     "use strict";
//     $(".comment-input input").on("keypress", function (event) {
//         console.log("Hellow, World!");
//     })    
// }
// $(document).ready(main);

/*Два различия между обработчиками click и keypress: 1) первый настроен на улавливание щелчка кнопкой мыши, а второй - на нажатие клавиши клавиатуры;*/
/* 2. в разных обработчиках мы перехватываем события в разных элементах(в первом: button, во втором: input)*/

// При нажатии ЛЮБОЙ клавиши у нас добавляется в консоли запись "Hellow, World!". Но нам нужно, чтобы нажатие всех других клавиш, кроме Enter, были проигнорены.
// Для этого нужно "вычислить" код нужной нам клавиши Enter. Для этого восп-ся локальной переменной event.keyCode, кот будет хранить значение с инф-й о нажатой клавише:

// var main = function () {
//     "use strict";
//     $(".comment-input input").on("keypress", function (event) {
//         console.log("Это значение keyCode" + event.keyCode);
//     })    
// }
// $(document).ready(main);

// Т.о. мы узнали, что значение keyCode для клавиши Enter - 13;

// Теперь, исп-в оператор if мы сделаем так, чтобы код реагировал ТОЛЬКО на нажатие клавиши Enter:

// var main = function () {
//     "use strict";
//     $(".comment-input input").on("keypress", function (event) {
//         if (event.keyCode === 13) {
//             console.log("Это значение keyCode" + event.keyCode);
//         }        
//     })    
// }
// $(document).ready(main);

// И теперь просто копируем и вставляем код предыдущего обработчика события click(который добавляет новый коммент) в полученный код:

// var main = function () {
//     "use strict";
//     $(".comment-input input").on("keypress", function (event) {
//         var $new_comment;
//         if (event.keyCode == 13) {
//             if ($(".comment-input input").val() !== "") {               
//                 $new_comment = $("<p></p>").text($(".comment-input input").val());
//                 $(".comments").append($new_comment);
//                 $(".comment-input input").val("");                
//             }           
//         }
//     })    
// }
// $(document).ready(main);

// (отсебятина, но которая в книге будет добавлена позднее - просто для ясности) соединяем коды обеих обработчиков(click и keypress) в один код:

// var main = function () {
//     "use strict";
//     $(".comment-input button").on("click", function (event) {
//         var $new_comment;
//         if ($(".comment-input input").val() !== "") {
//             $new_comment = $("<p></p>").text($(".comment-input input").val());
//             $(".comments").append($new_comment);
//             $(".comment-input input").val("");
//         }
//     })
//     $(".comment-input input").on("keypress", function (event) {
//         var $new_comment;
//         if (event.keyCode == 13) {
//             if ($(".comment-input input").val() !== "") {
//                 $new_comment = $("<p></p>").text($(".comment-input input").val());
//                 $(".comments").append($new_comment);
//                 $(".comment-input input").val("");
//             }
//         }                
//     })
// }
// $(document).ready(main);

// И теперь новый коммент из текстового поля ввода вставляется и через нажатие кнопки + и через нажатие клавиши Enter.

// (отсебятина: нижеприведенный код - в кач. эксперимента: заменил в выборке тэг input на класс input - все работает!):

// var main = function () {
//     "use strict";
//     $(".comment-input button").on("click", function (event) {
//         var $new_comment;
//         if ($(".comment-input .input").val() !== "") {
//             $new_comment = $("<p></p>").text($(".comment-input .input").val());
//             $(".comments").append($new_comment);
//             $(".comment-input .input").val("");
//         }
//     })
//     $(".comment-input .input").on("keypress", function (event) {
//         var $new_comment;
//         if (event.keyCode == 13) {
//             if ($(".comment-input .input").val() !== "") {
//                 $new_comment = $("<p></p>").text($(".comment-input .input").val());
//                 $(".comments").append($new_comment);
//                 $(".comment-input .input").val("");
//             } 
//         }
//     })
// }
// $(document).ready(main);

            // Плавное появление комментария:

// Для ПЛАВНОГО появления нового коммента исп-м метод fadeIn().
// Но, для того, чтобы сработал метод fadeIn()? необх-мо, чтобы этот элемент ВНАЧАЛЕ был скрыт.
// Для этого применяет перед методом fadeIn() метод hide():

// var main = function () {
//     "use strict";
//     $(".comment-input button").on("click", function (event) {
//         var $new_comment;
//         if ($(".comment-input input").val() !== "") {
//             $new_comment = $("<p></p>").text($(".comment-input input").val());
//             $new_comment.hide();
//             $(".comments").append($new_comment);
//             $new_comment.fadeIn();
//             $(".comment-input input").val("").focus();
//         }
//     })
//     $(".comment-input input").on("keypress", function (event) {
//         var $new_comment;
//         if (event.keyCode == 13) {
//             if ($(".comment-input input").val() !== "") {
//                 $new_comment = $("<p></p>").text($(".comment-input input").val());
//                 $new_comment.hide();
//                 $(".comments").append($new_comment);
//                 $new_comment.fadeIn();
//                 $(".comment-input input").val("");
//             }
//         }                
//     })
// }
// $(document).ready(main);

// отсебятина: в 1-й части кода добавил метод focus(), т.к. в отличие от keypress в методе click после нажатия на кнопку + в поле текстовгог ввода теряется фокус.

// отсебятина: код ниже: работает т.ж.. только код - короче(применил цепной метод):

// var main = function () {
//     "use strict";
//     $(".comment-input button").on("click", function (event) {
//         var $new_comment;
//         if ($(".comment-input input").val() !== "") {
//             $new_comment = $("<p></p>").text($(".comment-input input").val()).hide().fadeIn();
//             $(".comments").append($new_comment);
//             $(".comment-input input").val("").focus();
//         }
//     })
//     $(".comment-input input").on("keypress", function (event) {
//         var $new_comment;
//         if (event.keyCode == 13) {
//             if ($(".comment-input input").val() !== "") {
//                 $new_comment = $("<p></p>").text($(".comment-input input").val()).hide().fadeIn();
//                 $(".comments").append($new_comment);
//                 $(".comment-input input").val("");
//             }
//         }                
//     })
// }
// $(document).ready(main);

            // Переработка для упрощения

// Для того, чтобы соблюсти Принцип разработки DRY, делаем дублирующийся код АБСТРАКТНОЙ ФУНКЦИЕЙ.
// Эту ф-цию объявляем переменной для хранения ф-ций.
// далее вызываем и определяем эту ф-цию в каждом из обработчиков событий. 

    var main = function () {
        "use strict";        
        var addCommentFromInputBox = function () {
            var $new_comment;
            if ($(".comment-input input").val() !== "") {
                $new_comment = $("<p></p>").text($(".comment-input input").val());
                $new_comment.hide();
                $(".comments").append($new_comment);
                $new_comment.fadeIn();
                $(".comment-input input").val("").focus();
            }
        }
        $(".comment-input button").on("click", function (event) {
            addCommentFromInputBox();
        })
        $(".comment-input input").on("keypress", function (event) {            
            if (event.keyCode == 13) {
                addCommentFromInputBox();
            }                
        })
    }
    $(document).ready(main);