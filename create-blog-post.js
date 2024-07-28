const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Create blog post CLI by Leonard Walujan - walujan.com \n");

rl.question("Enter post title: ", function (title) {
  rl.question("Enter post description: ", function (description) {
    rl.question("Enter post date (format: DD/MM/YYYY): ", function (date) {
      const selectedDate = date
        ? new Date(date.split("/").reverse().join("-"))
        : new Date();
      const isoDate = selectedDate.toISOString().replace("Z", "+08:00");
      rl.question("Enter post category: ", function (category) {
        rl.question("Enter post cover image URL: ", function (coverImage) {
          const content = `---
title: ${title}
description: ${description}
date: '${isoDate}'
category: ${category}
coverImage: ${coverImage}
---
`;
          const year = selectedDate.getFullYear();
          const postDir = `contents/blog/${year}/`;
          fs.existsSync(postDir)
            ? null
            : fs.mkdirSync(postDir, { recursive: true });

          const fileName = `${postDir}${title
            .replace(/\s+/g, "-")
            .toLowerCase()}.mdx`;
          fs.writeFileSync(fileName, content);
          console.log(`\nBlog post created successfully at ${fileName}`);
          rl.close();
        });
      });
    });
  });
});
