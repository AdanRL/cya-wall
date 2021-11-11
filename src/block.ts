export class Block {
  size: number;
  constructor(size:number){
    this.size = size;
  }

  getSize(){
    return this.size;
  }

  print(){
    let imageBlock  = "|";
    for (let i = 0; i < this.size; i++) {
      imageBlock += "x";
    }
    imageBlock  += "|";
    console.log(imageBlock);
  }
}