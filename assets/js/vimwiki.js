// google analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-31669836-1']);
_gaq.push(['_trackPageview']);
(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

/* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
var disqus_shortname = 'vimwiki'; // required: replace example with your forum shortname
/* * * DON'T EDIT BELOW THIS LINE * * */
(function() {
  var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
  dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
})();


// google-custom-search 初始化
google.load('search', '1', {language : 'zh-CN', style : google.loader.themes.V2_DEFAULT});
google.setOnLoadCallback(function() {
  var customSearchOptions = {};
  var orderByOptions = {};
  orderByOptions['keys'] = [{label: 'Relevance', key: ''},{label: 'Date', key: 'date'}];
  customSearchOptions['enableOrderBy'] = true;
  customSearchOptions['orderByOptions'] = orderByOptions;
  customSearchOptions['adoptions'] = {'layout': 'noTop'};
  var customSearchControl = new google.search.CustomSearchControl(
    '012464808749419081758:npjtdj7teoa', customSearchOptions);
  customSearchControl.setResultSetSize(google.search.Search.FILTERED_CSE_RESULTSET);
  var options = new google.search.DrawOptions();
  options.setSearchFormRoot('gse-form');
  options.setAutoComplete(true);
  customSearchControl.draw('gsc-result', options);

  // 成功隐藏 content 和 disqus
  customSearchControl.setSearchCompleteCallback(null, function() {
    $('#content').hide();
    $('#disqus_thread').hide()
  });
  // 清空搜索框
  $('#gs_cb0').click(function() {
    $('#content').show();
    $('#disqus_thread').show()
  });


}, true);

