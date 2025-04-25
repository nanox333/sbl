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
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_includes/layouts", // <--- MUST match the directory structure
      data: "_data",
      output: "_site"
    },

    // Specify which template languages to process
    templateFormats: ["md", "njk", "html"],

    // Use Nunjucks as the engine for markdown files (for includes, etc.)
    markdownTemplateEngine: "njk",

    // Use Nunjucks as the engine for standalone .html files (allows Nunjucks in HTML)
    htmlTemplateEngine: "njk"
  };
};