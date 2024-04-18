abstract class TakePhoto {
  // abstract classes are like blueprint
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;
  getReelTime(): number {
    // some complex calc
    return 8;
  }
}

class Instagramm extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("Sepia");
  }
}

const pawancj = new Instagramm("test", "test", 3);
