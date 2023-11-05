const glob = require("glob");
const sharp = require("sharp");

const convertImages = () => {
    // Récupérez tous les fichiers d'images dans le dossier public/thumb
    const images = glob.sync("public/thumb/*.{jpg,jpeg,png}");

    // Pour chaque image, convertissez en WebP et redimensionnez à 1080p
    images.forEach((image) => {
        const outputPath = image.replace(/\.(jpg|jpeg|png)$/, ".webp");

        sharp(image)
            .resize(1080, 1080, { fit: "inside", withoutEnlargement: true })
            .toFormat("webp")
            .toFile(outputPath, (err, info) => {
                if (err) {
                    console.error("Erreur lors de la conversion de l'image :", err);
                } else {
                    console.log("Image convertie avec succès :", info);
                }
            });
    });
};

convertImages();
