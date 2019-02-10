<?php

declare(strict_types=1);

if (env('WP_ENV') === 'local') {
    header('Access-Control-Allow-Origin: *');
}

require_once __DIR__ . '/pages.php';
require_once __DIR__ . '/news.php';
require_once __DIR__ . '/application.php';
