/**
 * Created by lenovo on 17/10/10 010.
 */
/**
 * Created by lenovo on 17/10/10 010.
 */
window.onload = function () {
    var li = document.querySelectorAll("#nav li");
    var o = true;
    li[li.length - 1].onclick = function () {
        for (var i = 0; i < li.length; i++) {
            var n = i - 6;
            if (o) {
                n = n * 15;
            } else {
                n = 360;
            }
            li[i].style.transform = "rotate(" + n + "deg)";
        }
        o = !o;
    }
    for (var i = 0; i < li.length - 1; i++) {
        li[i].index = i;
        li[i].onclick = function () {
            //点击当前导航  旋转至0度
            this.style.transform = "rotate(0deg)"
            //点击当前的左边导航。依次旋转。
            console.log(this.index);
            var leftDeg = 0;
            for (var i = this.index - 1; i >= 0; i--) {
                leftDeg = leftDeg - 15;
                li[i].style.transform = "rotate(" + leftDeg + "deg)"
            }
            var rightDeg = 15;
            for (var i = this.index + 1; i < li.length; i++) {
                rightDeg = rightDeg + 15;
                li[i].style.transform = "rotate(" + rightDeg + "deg)"
            }
            ;
        }
    }

}