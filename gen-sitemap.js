#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Read the CNAME file to get the domain
function getDomain() {
  try {
    const cname = fs.readFileSync('CNAME', 'utf8').trim();
    return `https://${cname}`;
  } catch (error) {
    console.error('Error reading CNAME file:', error.message);
    process.exit(1);
  }
}

// Read and parse the Angular routes file
function getRoutes() {
  try {
    const routesFile = fs.readFileSync('src/app/app.routes.ts', 'utf8');
    
    // Extract routes using regex - look for path: 'something' patterns
    const pathMatches = routesFile.match(/path:\s*['"]([^'"]*)['"],/g);
    
    if (!pathMatches) {
      console.error('No routes found in app.routes.ts');
      process.exit(1);
    }
    
    const routes = pathMatches
      .map(match => {
        // Extract the path value from path: 'value',
        const pathMatch = match.match(/path:\s*['"]([^'"]*)['"],/);
        return pathMatch ? pathMatch[1] : null;
      })
      .filter(path => path !== null)
      .filter(path => path !== '**') // Exclude wildcard routes
      .filter(path => path !== 'not-found') // Exclude error pages
      .map(path => path === '' ? '/' : `/${path}`); // Convert empty path to root
    
    return routes;
  } catch (error) {
    console.error('Error reading routes file:', error.message);
    process.exit(1);
  }
}

// Generate sitemap XML
function generateSitemap(domain, routes) {
  const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
`;
  sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;
  
  routes.forEach(route => {
    const url = route === '/' ? domain : `${domain}${route}`;
    sitemap += `  <url>
`;
    sitemap += `    <loc>${url}</loc>
`;
    sitemap += `    <lastmod>${currentDate}</lastmod>
`;
    sitemap += `    <changefreq>monthly</changefreq>
`;
    sitemap += `    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
`;
    sitemap += `  </url>
`;
  });
  
  sitemap += `</urlset>`;
  
  return sitemap;
}

// Main function
function main() {
  console.log('Generating sitemap.xml...');
  
  const domain = getDomain();
  const routes = getRoutes();
  
  console.log(`Domain: ${domain}`);
  console.log(`Routes found: ${routes.join(', ')}`);
  
  const sitemap = generateSitemap(domain, routes);
  
  // Write sitemap.xml
  fs.writeFileSync('sitemap.xml', sitemap);
  
  console.log('sitemap.xml generated successfully!');
  console.log(`Generated sitemap for ${routes.length} routes`);
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { getDomain, getRoutes, generateSitemap };