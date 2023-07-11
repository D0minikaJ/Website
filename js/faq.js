function cardControl() {
  var cta = document.getElementById('cta');
  var rate = document.getElementById('rate');
  var content = document.getElementById('faqContent');
  var article = document.getElementById('firstArticle');

  articleStyleDisplay = window
    .getComputedStyle(article)
    .getPropertyValue('display');

  if (articleStyleDisplay === 'none') {
    article.style.display = 'block';
    cta.style.display = 'none';
    rate.style.display = 'block';
    content.style.display = 'none';
  } else {
    article.style.display = 'none';
    cta.style.display = 'block';
    rate.style.display = 'none';
    content.style.display = 'block';
  }
}
