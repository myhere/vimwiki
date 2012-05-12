<?php
$base_dir = dirname(__FILE__);
$appcache_file = $base_dir . DIRECTORY_SEPARATOR . 'vimwiki.appcache';

$lines = file($appcache_file);

$results = array();


$pattern = '/(#\s*@TIMESTAMP@)\s*(\d+)/i';
$replacement = '\\1 ' . microtime(true);

foreach ($lines as $line) {
  if (preg_match($pattern, $line)) {
    $results[] = preg_replace($pattern, $replacement, $line);
  } else {
    $results[] = $line;
  }
}

file_put_contents($appcache_file, implode('', $results));

