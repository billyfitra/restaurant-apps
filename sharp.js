/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable linebreak-style */
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

// Direktori sumber dan tujuan
const sourceDir = path.join(__dirname, 'src/public/images/heros');
const outputDir = path.join(__dirname, 'dist/images/heros');

// Pastikan direktori tujuan ada
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Daftar ukuran yang diinginkan
const sizes = [480, 768, 1024, 1200];

// Fungsi untuk mengubah ukuran gambar
const resizeImage = async (inputPath, outputPath, width) => {
    await sharp(inputPath)
        .resize(width)
        .toFile(outputPath);
};

// Proses gambar hero
const processHeroImage = async (filename) => {
    const inputPath = path.join(sourceDir, filename);
    for (const size of sizes) {
        const outputPath = path.join(outputDir, `${path.parse(filename).name}-${size}${path.extname(filename)}`);
        await resizeImage(inputPath, outputPath, size);
    }
};

// Jalankan proses untuk gambar tertentu
processHeroImage('hero-image_2.jpg')
    .then(() => console.log('Images processed successfully'))
    .catch((err) => console.error('Error processing images', err));
