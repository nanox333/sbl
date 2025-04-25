// .eleventy.js
module.exports = function(eleventyConfig) {

  // Watching asset folders for changes during development
  eleventyConfig.addWatchTarget("./src/assets/css/");
  eleventyConfig.addWatchTarget("./src/assets/js/");

  // --- Passthrough Copies ---

  // 1. Copy the CMS admin interface folder
  eleventyConfig.addPassthroughCopy("src/admin");

  // 2. Copy the entire assets folder
  eleventyConfig.addPassthroughCopy("src/assets");

  // --- Base Eleventy Configuration ---
  return {
    // Define directory structure
    dir: {
      input: "src",         // Source files location
      includes: "_includes", // Nunjucks includes folder (relative to input)
      // --- CORRECTED THIS LINE ---
      // Point layouts to the same directory as includes, because base.njk is in src/_includes/
      layouts: "_includes",
      data: "_data",         // Global data folder (relative to input)
      output: "_site"        // Build output directory
    },

    // Specify which template languages to process
    templateFormats: ["md", "njk", "html"],

    // Use Nunjucks as the engine for markdown files (for includes, etc.)
    markdownTemplateEngine: "njk",

    // Use Nunjucks as the engine for standalone .html files (allows Nunjucks in HTML)
    htmlTemplateEngine: "njk"
  };
};