class Block {
    constructor(row, col, angle = 0) {
        if (this.constructor === Block) {

        }
        this.row = row;
        this.col = col;
        this.angle = angle;
    };

    get shape() {
        return this.constructor.shapes[this.angle];
    };

    get width() {
        return this.shape[0].length;
    };

    get height() {
        return this.shape.length ;
    };

    fall() {
        this.row += 1 ;
    };

    rotate() {
        if (this.angle < 3) {
            this.angle += 1
          } else {
            this.angle = 0
          };
    };
    move(direction) {
        if (direction === 'left') {
          this.col -= 1
        } else if (direction === 'right') {
          this.col += 1
        };
      };
};

class LShape extends Block { }

LShape. shapes =
[[[1, 0],
[1, 0],
[1, 1]],

[[1, 1, 1],
[1, 0, 0]],

[[1, 1],
[0, 1],
[0, 1]],

[[0, 0, 1],
[1, 1, 1]]] ;

LShape.color = 'blue';

class JShape extends Block { }

JShape.shapes =
  [[[0, 2],
    [0, 2],
    [2, 2]],

   [[2, 0, 0],
    [2, 2, 2]],

   [[2, 2],
    [2, 0],
    [2, 0]],

   [[2, 2, 2],
    [0, 0, 2]]] ;

JShape.color = 'green';

class OShape extends Block { }

OShape.shapes =
  [[[3, 3],
    [3, 3]],

   [[3, 3],
    [3, 3]],

   [[3, 3],
    [3, 3]],

   [[3, 3],
    [3, 3]]] ;

    OShape.color = 'red';

    class IShape extends Block { }
IShape.shapes =
  [[[4],
    [4],
    [4],
    [4]],

   [[4, 4, 4, 4]],

   [[4],
   [4],
   [4],
   [4]],

   [[4, 4, 4, 4]]] ;

IShape.color = 'black';