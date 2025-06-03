import fs from "fs";

const filesToFix = [
    "dist/src/popup/popup.js",
    "dist/src/content/main.js",
    "dist/src/background/index.js",
];

filesToFix.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, "utf-8");
        content = content.replace(/export\s*\{\s*\};/g, "");
        fs.writeFileSync(file, content, "utf-8");
        console.log(`Fixed exports in ${file}`);
    }
});
