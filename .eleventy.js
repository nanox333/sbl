module.exports = function(eleventyConfig) {

  // Tell Eleventy to watch CSS/JS folders for changes.
  // Note: Passthrough copies are typically NOT watched by default,
  // this ensures changes trigger a rebuild during development (`eleventy --serve`).
  eleventyConfig.addWatchTarget("./src/assets/css/");
  eleventyConfig.addWatchTarget("./src/assets/js/");

<<<<<<< HEAD
  // --- Passthrough Copies for Static Files ---

  // 1. Copy the CMS admin interface
  // Copies contents of 'src/admin' to '_site/admin'
  eleventyConfig.addPassthroughCopy("src/admin");

  // 2. Copy main assets (CSS, JS, Images)
  // Copies 'src/assets/' contents to '_site/assets/'
  // This single line handles css, js, img, and the uploads folder if it's inside assets.
  eleventyConfig.addPassthroughCopy("src/assets");

  // 3. Copy the CMS content data file
  // Copies 'src/_data/content.json' to '_site/_data/content.json'
  // This makes it fetchable by the client-side script.
  // Using an object format allows specifying the output path explicitly.
  eleventyConfig.addPassthroughCopy({"src/_data": "_data"});

  // --- Keep your other Eleventy configurations below ---
  // eleventyConfig.addFilter(...);
  // eleventyConfig.addCollection(...);
=======
  // Passthrough copy for static files (like CMS admin, images, CSS, JS)
  // Copy `static` contents to the root of the build output.
  eleventyConfig.addPassthroughCopy("static");
  // Copy src/assets contents to /assets in the build output.
  eleventyConfig.addPassthroughCopy({"src/assets": "assets"});
    // Copy Netlify CMS admin files TO THE ROOT of the output
  eleventyConfig.addPassthroughCopy("admin");
>>>>>>> 50cd587b56b8bfd2d5eec63562822c767528ef84


  // Base config
  return {
    dir: {
      input: "src",       // Source directory is correct
      includes: "_includes", // Default is usually fine
      data: "_data",       // Default is usually fine (relative to input)
      output: "_site"      // Build output directory (default)
    },
    // passthroughFileCopy: true, // This is often default or handled by addPassthroughCopy,
                                // but keeping it doesn't usually hurt.
    templateFormats: ["md", "njk", "html"], // Process these file types
    htmlTemplateEngine: "njk",              // Use Nunjucks for .html files
    markdownTemplateEngine: "njk"           // Use Nunjucks within .md files
  };
};
