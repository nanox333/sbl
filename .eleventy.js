// .eleventy.js
module.exports = function(eleventyConfig) {

  // Watching asset folders for changes during development
  eleventyConfig.addWatchTarget("./src/assets/css/");
  eleventyConfig.addWatchTarget("./src/assets/js/");

  // --- Passthrough Copies ---

  // 1. Copy the CMS admin interface folder **CRITICAL**
  // Copies src/admin/index.html and src/admin/config.yml to _site/admin/
  eleventyConfig.addPassthroughCopy("src/admin");

  // 2. Copy the entire assets folder **CRITICAL**
  // Copies src/assets/* to _site/assets/*
  // This includes CSS, JS, images, cv, and the uploads folder for media.
  eleventyConfig.addPassthroughCopy("src/assets");

  // 3. Copying _data is NOT needed for Eleventy's data cascade. **REMOVE THIS**
  // Eleventy automatically reads from src/_data/. Copying it to the output
  // (_site/_data) is usually unnecessary unless specifically fetched client-side.
  // eleventyConfig.addPassthroughCopy({"src/_data": "_data"});


  // --- Base Eleventy Configuration ---
  return {
    // Define directory structure
    dir: {
      input: "src",         // Source files location
      includes: "_includes", // Nunjucks includes folder (relative to input)
      layouts: "_includes/layouts", // Layouts folder (if you create one, relative to input) - Your base.njk is currently in _includes, adjust if needed.
      data: "_data",         // Global data folder (relative to input)
      output: "_site"        // Build output directory
    },

    // Specify which template languages to process
    templateFormats: ["md", "njk", "html"],

    // Use Nunjucks as the engine for markdown files (for includes, etc.)
    markdownTemplateEngine: "njk",

    // Use Nunjucks as the engine for standalone .html files (allows Nunjucks in HTML)
    // Be cautious if you have many static HTML files you *don't* want processed.
    htmlTemplateEngine: "njk"
  };
};