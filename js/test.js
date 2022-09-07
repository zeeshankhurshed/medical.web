function show() {
    let x = document.getElementById('box');
    if (box.style.transform == 'translateX(-350px)') {
        box.style.transform = 'translateX(0)';
    } else {
        box.style.transform = 'translateX(-350px)';
    }
}