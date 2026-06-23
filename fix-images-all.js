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

const files = walk('src').filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));
files.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  let changed = false;
  
  if (c.includes('"/images/')) {
    c = c.replace(/"\/images\//g, '"/yanghui/images/');
    changed = true;
  }
  if (c.includes("'/images/")) {
    c = c.replace(/'\/images\//g, "'/yanghui/images/");
    changed = true;
  }
  
  if (changed) {
    fs.writeFileSync(f, c);
    console.log("Updated", f);
  }
});
