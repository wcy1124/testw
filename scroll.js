// var ul = document.querySelector("#goods ul");
// var li = document.querySelectorAll('#goods li');
// var move = 108;
// var count = 0;
// var step = 260; // 每次滑動的距離
// ul.style.marginLeft = "108px"; // 確保初始值為 0px

// // 滑鼠滾輪事件
// function mouse_wheel(e) {
//     e = e || window.event;
//     e.preventDefault();

//     // 向下滾動
//     if (e.wheelDelta <= 0 || e.detail > 0) {
//         if (count < li.length - 2) { // 保持在範圍內
//             move -= step;
//             ul.style.marginLeft = move + "px";
//             count++;
//         }
//     } 
//     // 向上滾動
//     else {
//         if (count > 0) { // 保持在範圍內
//             move += step;
//             ul.style.marginLeft = move + "px";
//             count--;
//         }
//     }
// }

// // 將事件偵聽器附加到 ul 而非 window
// if ("onmousewheel" in ul) {
//     ul.onmousewheel = mouse_wheel;
// } else if ("onmousewheel" in document) {
//     ul.onmousewheel = mouse_wheel;
// } else if ("addEventListener" in window) {
//     ul.addEventListener("mousewheel", mouse_wheel, false);
//     ul.addEventListener("DOMMouseScroll", mouse_wheel, false);
// }

var goods = document.querySelector('#goods');

goods.addEventListener('wheel', function(event) {
    event.preventDefault();
    let scrollSpeed = 0.6;
    goods.scrollLeft += event.deltaY * scrollSpeed;

    // 使用 requestAnimationFrame 來平滑滾動
    function smoothScroll() {
        goods.scrollLeft += (targetScrollLeft - goods.scrollLeft) * 0.5; // 公式
        if (Math.abs(targetScrollLeft - goods.scrollLeft) > 1) {
            requestAnimationFrame(smoothScroll);
        }
    }

    smoothScroll()
}, { passive: false });
