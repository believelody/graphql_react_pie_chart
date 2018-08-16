/*  Data should come back to an array of object like:
[
  { color: 'color1', id: 'string id', label: 'string label', value: intValue },
  ...
]
*/

export const topLanguages = repositories => {
  const langObject = repositories.nodes.reduce((langs, repo) => {

    //  Reduce each repo nodes to return a language object which contains its occurence value from languages nodes
    let repoLangObject = repo.languages.nodes.reduce((repoLangs, language) => {
      if (!repoLangs[language.name]) {
        repoLangs[language.name] = { count: 0, color: language.color };
      }
      repoLangs[language.name].count++;
      return repoLangs;
    }, langs);

    return repoLangObject;
  }, {});

  const langArray = Object.entries(langObject).map(([key, value]) => ({
    id: key,
    value: value.count,
    color: value.color,
    label: key
  }));

  return langArray
    .filter(lang => lang.value > 1 && lang.color)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);
}
