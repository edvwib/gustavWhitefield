<?php

declare (strict_types=1);

if (function_exists('register_taxonomy')) {
    register_taxonomy('categories', 'page', [
        'labels' => [
            'name' => 'Kategori',
            'singular_name' => 'Kategori',
            'menu_name' => 'Kategorier',
            'add_new_item' => 'Lägg till kategori',
        ],
        'hierarchical' => true,
        'public' => current_user_can('administrator') ? true : false,
    ]);
}
