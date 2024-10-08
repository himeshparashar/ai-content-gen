const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://socialmorph-himeshparashars-projects.vercel.app';

module.exports = {
    siteUrl: baseUrl, 
    generateRobotsTxt: true, 
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 5000,
};
