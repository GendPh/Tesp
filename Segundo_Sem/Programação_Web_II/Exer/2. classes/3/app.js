var ImageClass = /** @class */ (function () {
    function ImageClass(id, desc, url) {
        this.id = id;
        this.description = desc;
        this.url = url;
    }
    return ImageClass;
}());
var ImageService = /** @class */ (function () {
    function ImageService() {
        this.images = [];
    }
    ImageService.prototype.GetImages = function () {
        if (this.images.length != 0) {
            this.images.forEach(function (img, index) {
                console.log("- ".concat(index + 1, " ").concat(img.id, " -> ").concat(img.description, " / ").concat(img.url));
            });
        }
        else {
            console.log("Empty Images!");
        }
    };
    ImageService.prototype.GetImage = function (id) {
        var img;
        for (var _i = 0, _a = this.images; _i < _a.length; _i++) {
            var image = _a[_i];
            if (image.id === id) {
                img = image;
                break;
            }
        }
        if (img === undefined) {
            console.error("Image with ID ".concat(id, " not found."));
        }
        else {
            console.log("IMG ID:".concat(img.id, ";\nDesc:").concat(img.description, ";\nURL: ").concat(img.url));
        }
    };
    ImageService.prototype.DeleteImage = function (id) {
        var imgIndex = -1;
        for (var i = 0; i < this.images.length; i++) {
            if (this.images[i].id === id) {
                imgIndex = i;
                break;
            }
        }
        if (imgIndex === -1) {
            console.error("Image with ID ".concat(id, " not found."));
        }
        else {
            this.images.splice(imgIndex, 1);
            console.log("Image with ID ".concat(id, " deleted successfully."));
        }
    };
    ImageService.prototype.PostNewImage = function (img) {
        var newImage = img;
        newImage.id = this.images.length + 1;
        try {
            this.images.push(newImage);
            return true;
        }
        catch (error) {
            console.error("Error adding image:", error);
            return false;
        }
    };
    ImageService.prototype.UpdateImage = function (imgId, updatedImg) {
        var imgIndex = -1;
        for (var i = 0; i < this.images.length; i++) {
            if (this.images[i].id === imgId) {
                imgIndex = i;
                break;
            }
        }
        if (imgIndex === -1) {
            console.error("Image with ID ".concat(imgId, " not found."));
        }
        else {
            this.images[imgIndex] = updatedImg;
        }
    };
    return ImageService;
}());
var imgService = new ImageService();
var newImg = new ImageClass(1, "Lorem ipsum dolor.", "./aqui/ali");
var updImg = new ImageClass(3, "Lorem ipsum dolor.", "./aqui/ali");
imgService.PostNewImage(new ImageClass(1, "Lorem ipsum dolor.", "./aqui/ali"));
console.log("");
imgService.GetImages();
console.log("");
imgService.GetImage(1);
console.log("");
imgService.DeleteImage(1);
console.log("");
imgService.DeleteImage(1);
console.log("");
imgService.GetImages();
console.log("");
imgService.PostNewImage(newImg);
console.log("");
imgService.UpdateImage(2, updImg);
console.log("");
imgService.GetImages();
console.log("");
