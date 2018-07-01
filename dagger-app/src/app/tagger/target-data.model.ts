export class TargetData {
  public id: string;
  public name: string;
  public imageUrl: string;
  public tags: Map<string, string>;


  constructor(id: string, name: string, imageUrl: string, tags: Map<string, string>) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.tags = tags;
  }
}

