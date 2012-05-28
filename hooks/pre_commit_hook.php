#! /d/work/program/php-5.4.3/php
<?php
$base_dir = realpath(dirname(__FILE__) . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR . 'wiki_html');
$appcache_file = $base_dir . DIRECTORY_SEPARATOR . 'vimwiki.appcache';


$lines = file($appcache_file);

$results = array();


$pattern = '/^(?:\s*)(#\s*@TIMESTAMP@)(?:.*)$/';
$replacement = '\\1 ' . microtime(true);

foreach ($lines as $line) {
  if (preg_match($pattern, $line)) {
    $results[] = preg_replace($pattern, $replacement, $line);
  } else {
    $results[] = $line;
  }
}

file_put_contents($appcache_file, implode('', $results));

?>
