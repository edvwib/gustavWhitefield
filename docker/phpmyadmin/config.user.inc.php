<?php

if (strpos($_SERVER['HTTP_HOST'], '127.0.0.1') !== false ||
    strpos($_SERVER['HTTP_HOST'], 'localhost') !== false) {
    $cfg['Servers'] = [
        1 => [
            'host' => 'mariadb',
            'port' => 3307,
            'auth_type' => 'config',
            'user' => 'root',
            'password' => 'root',
            'hide_db' => 'default|mysql|information_schema|performance_schema',
        ],
    ];
} else {
    die();
}
