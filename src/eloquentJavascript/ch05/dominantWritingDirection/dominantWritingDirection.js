import SCRIPT from './script';

function countBy(items, groupName) {
  const counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function textScripts(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : 'none';
  }).filter(({ name }) => name != 'none');

  let total = scripts.reduce((n, { count }) => n + count, 0);
  if (total == 0) return 'No scripts found';

  return scripts
    .map(({ name, count }) => {
      return `${Math.round((count * 100) / total)}% ${name}`;
    })
    .join(', ');
}

function extractPercentage(description) {
  const [percentage, language] = description.split(' ');
  return {
    percentage: percentage.replace('%', '').trim(),
    language,
  };
}

function dominantDirection(text) {
  const dominantLanguages = textScripts(text).split(',');
  const mostDominantLanguage = dominantLanguages.reduce(
    (acc, curr) => {
      const { percentage, language } = extractPercentage(curr);

      if (parseInt(acc.percentage, 10) < parseInt(percentage, 10)) {
        acc.percentage = parseInt(percentage, 10);
        acc.language = language;
      }
      return acc;
    },
    {
      percentage: 0,
      language: null,
    }
  );

  for (const script of SCRIPTS) {
    if (script.name === mostDominantLanguage.language) {
      return script.direction;
    }
  }
}
