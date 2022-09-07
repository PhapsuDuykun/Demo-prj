class Control {
    constructor() {
     this.movePlayer = 24;
    window.addEventListener('keydown', (e) =>{
    const leftpos = parseInt(window.getComputedStyle(currentBlock).getPropertyValue("left"));
    const toppos = parseInt(window.getComputedStyle(currentBlock).getPropertyValue("top"));
    switch(e.key){
            case 'a':
            currentBlock.style.left = leftpos - movePlayer + 'px';
            break;
            case 'd':
            currentBlock.style.left = leftpos + movePlayer + 'px';
            break;
            case 'w':
            currentBlock.style.top = toppos - movePlayer + 'px';
            break;
            case 's':
            currentBlock.style.top = toppos + movePlayer + 'px';
            break;
             }
       });
    }
}
    