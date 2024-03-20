class ImageClass {
  id: number;
  description: string;
  url: string;

  constructor(id: number, desc: string, url: string) {
    this.id = id;
    this.description = desc;
    this.url = url;
  }
}

interface ImageInt {
  GetImages(): void;
  GetImage(id: number): void;
  DeleteImage(id: number): void;
  PostNewImage(img: ImageClass): boolean;
  UpdateImage(imgId: number, updatedImg: ImageClass): void;
}

class ImageService implements ImageInt {
  images: ImageClass[] = [];


  GetImages(): void {
    this.images.sort((a, b) => a.id - b.id);
    if (this.images.length != 0) {
      this.images.forEach((img, index) => {
        console.log(`- ${index + 1} ${img.id} -> ${img.description} / ${img.url}`);
      });
    } else {
      console.log("Empty Images!");
    }
  }
  GetImage(id: number): void {
    let img: ImageClass | undefined;
    for (const image of this.images) {
      if (image.id === id) {
        img = image;
        break;
      }
    }
    if (img === undefined) {
      console.error(`Image with ID ${id} not found.`);
    } else {
      console.log(`IMG ID:${img.id};\nDesc:${img.description};\nURL: ${img.url}`);
    }
  }
  DeleteImage(id: number): void {
    let imgIndex = -1;
    for (let i = 0; i < this.images.length; i++) {
      if (this.images[i].id === id) {
        imgIndex = i;
        break;
      }
    }
    if (imgIndex === -1) {
      console.error(`Image with ID ${id} not found.`);
    } else {
      this.images.splice(imgIndex, 1);
      console.log(`Image with ID ${id} deleted successfully.`);
    }
  }
  PostNewImage(img: ImageClass): boolean {
    const newImage = img;
    newImage.id = this.images.length + 1;

    try {
      this.images.push(newImage);
      return true;
    } catch (error) {
      console.error("Error adding image:", error);
      return false;
    }
  }
  UpdateImage(imgId: number, updatedImg: ImageClass): void {
    let imgIndex = -1;
    for (let i = 0; i < this.images.length; i++) {
      if (this.images[i].id === imgId) {
        imgIndex = i;
        break;
      }
    }
    if (imgIndex === -1) {
      console.error(`Image with ID ${imgId} not found.`);
    } else {
      this.images[imgIndex] = updatedImg;
    }
  }

}

const imgService: ImageService = new ImageService();
const newImg: ImageClass = new ImageClass(1, "Lorem ipsum dolor.", "./aqui/ali");
const updImg: ImageClass = new ImageClass(4, "Lorem ipsum dolor.", "./aqui/ali");

imgService.PostNewImage(newImg);
imgService.PostNewImage(new ImageClass(2, "Lorem ipsum dolor lorem.", "./aqui/ali/algures"));
imgService.PostNewImage(new ImageClass(3, "Lorem ipsum dolor lorem.", "./aqui/ali/algures"));
console.log("");

imgService.GetImages();
console.log("");

imgService.GetImage(1);
console.log("");

imgService.GetImage(4);
console.log("");

imgService.DeleteImage(1);
console.log("");

imgService.DeleteImage(1);
console.log("");

imgService.GetImages();
console.log("");

imgService.UpdateImage(2, updImg);

imgService.GetImages();
console.log("");