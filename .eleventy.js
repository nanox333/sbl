module.exports = function(eleventyConfig) {

  // Tell Eleventy to watch CSS/JS folders for changes.
  eleventyConfig.addWatchTarget("./src/assets/css/");
  eleventyConfig.addWatchTarget("./src/assets/js/");

  // Passthrough copy for static files (like CMS admin, images, CSS, JS)
  // Copy `static` contents to the root of the build output.
  eleventyConfig.addPassthroughCopy("static");
  // Copy src/assets contents to /assets in the build output.
  eleventyConfig.addPassthroughCopy({"src/assets": "assets"});


  // Base config
  return {
    dir: {
      input: "src",       // Source directory
      includes: "_includes", // Folder for layouts, partials
      data: "_data",       // Folder for global data files
      output: "_site"      // Build output directory (default)
    },
    passthroughFileCopy: true,
    templateFormats: ["md", "njk", "html"], // Template formats to process
    htmlTemplateEngine: "njk", // Use Nunjucks for HTML files too
    markdownTemplateEngine: "njk" // Use Nunjucks for Markdown files
  };
};