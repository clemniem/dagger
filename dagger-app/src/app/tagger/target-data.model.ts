export class TargetData {
  public id: string;
  public name: string;
  public imageUrl: string;
  public tag: string;
  public left: string;
  public right: string;

  constructor(id: string, name: string, imageUrl: string, tag: string, left: string, right: string) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.tag = tag;
    this.left = left;
    this.right = right;
  }
}

