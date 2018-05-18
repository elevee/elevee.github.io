<?php
// From https://gonzalo123.com/2012/10/15/how-to-rewrite-urls-with-php-5-4s-built-in-web-server/
// mimics .htaccess in dev environment with php server
// run php -S localhost:port dev_routing.php

if (preg_match('/\.(?:png|jpg|jpeg|gif|css)$/', $_SERVER["REQUEST_URI"])) {
    return false;
} else {
    include __DIR__ . '/index.php';
}