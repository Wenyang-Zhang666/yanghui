const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      results.push(file);
    }
  });
  return results;
}

const files = walk('src').filter(f => f.endsWith('.tsx'));
files.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  let changed = false;
  if (c.includes("bg-[url('/images/")) {
    c = c.replace(/bg-\[url\('\/images\//g, "bg-[url('/yanghui/images/");
    changed = true;
  }
  // also what if image paths are hardcoded in src?
  // next/image src is automatically handled by basePath if it's absolute starting with /
  // wait, what about the object slide array in HeroCarousel?
  // { image: '/images/banner.jpg' } => when passed to <Image src={slide.image}> Next.js automatically prepends basePath.
  if (changed) {
    fs.writeFileSync(f, c);
    console.log("Updated", f);
  }
});
