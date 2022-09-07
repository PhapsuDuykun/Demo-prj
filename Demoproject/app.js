 class Tetris {
    constructor() {
this.score = 0 ;
this.boardWidth = 10 ;
this.boardHeight = 18;
this.currentBoard = new Array(this.boardHeight).fill(0).map(() => new Array(this.boardWidth).fill(0));
this.landedBoard = new Array(this.boardHeight).fill(0).map(() => new Array(this.boardWidth).fill(0));
this.currentBlock = this.randomBlock() ;
this.canvas = document.getElementById('canvas');
this.ctx = this.canvas.getContext('2d');
 };
draw(blockSize = 24, padding = 4) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.lineWidth = 2 ;
    this.ctx.rect(padding, padding, blockSize*this.boardWidth+padding*(this.boardWidth+1), blockSize*(this.boardHeight-3)+padding*(this.boardHeight-3+1));
    this.ctx.stroke();
    for (let i = 3; i < this.boardHeight; i++) {
      for (let j = 0; j < this.boardWidth; j++) {
        if (this.currentBoard[i][j] > 0) {
          this.ctx.fillStyle = 'rgb(0, 0, 0)'
        } else {
          this.ctx.fillStyle = 'rgb(248, 248, 248)'
        };
        this.ctx.fillRect(padding*2+j*(blockSize+padding), padding*2+(i-3)*(blockSize+padding), blockSize, blockSize)
      };
    };
  };
randomBlock() {
    const randNum = Math.floor(Math.random() * Math.floor(4))
    switch (randNum) {
      case 0:
        return new LShape(1, 4) ;
      case 1: 
        return new JShape(1, 4) ;
      case 2:
        return new OShape(2, 4) ;
      case 3:
        return new IShape(0, 4) ;
};
}

play() {
    setInterval(() => {
      this.progress();
      this.updateCurrentBoard();
      this.draw();
    }, 800);
  }
  
  progress() {
    this.currentBlock.fall()
  };
  
  updateCurrentBoard() {
    for (let i = 0; i < this.boardHeight; i++) {
      for (let j = 0; j < this.boardWidth; j++) {
        this.currentBoard[i][j] = this.landedBoard[i][j]
      };
    };

    for (let i = 0; i < this.currentBlock.height; i++) {
      for (let j = 0; j < this.currentBlock.width; j++) {
        if (this.currentBlock.shape[i][j] > 0) {
          this.currentBoard[this.currentBlock.row + i][this.currentBlock.col + j] = this.currentBlock.shape[i][j];
        };
      };
    };
  };
 }





document.addEventListener('DOMContentLoaded', () => {
    const game = new Tetris();
    game.updateCurrentBoard();
  game.draw();
  game.play();
  });
 