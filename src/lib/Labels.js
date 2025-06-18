const labels = new Map([
  ["required-field-label-suffix", "(required)"],
  ["close", "Close"],
  ["remove-row", "Remove"],
  ["save", "Save"],

  ["valueType.amount", "Amount"],
  ["valueType.title", "Title"],
  ["valueType.date", "Date"],

  ["condition.amount.more", "More than"],
  ["condition.amount.gte", "More than or equals"],
  ["condition.amount.less", "Less than"],
  ["condition.amount.lte", "Less than or equals"],
  ["condition.amount.equals", "Equals"],
  ["condition.title.equals", "Equals"],
  ["condition.title.contains", "Contains"],
  ["condition.title.starts_with", "Starts with"],
  ["condition.date.gte", "From"],
  ["condition.date.equals", "Equals"],
  ["condition.date.lte", "Until"],
])

const Labels = {
  get: function(labelName) {
    return labels.get(labelName) || labelName;
  }
};

export default Labels;
