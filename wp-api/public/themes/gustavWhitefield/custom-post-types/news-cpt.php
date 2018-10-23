<?php

declare (strict_types = 1);

register_extended_post_type('news', [
    'admin_cols' => [
        'published' => [],
        'date' => [
            'title' => 'Datum',
            'default' => 'DESC',
        ]
    ],
    'labels' => [
        'name' => 'Nyheter',
        'singular_name' => 'Nyhet',
        'menu_name' => 'Nyheter',
        'name_admin_bar' => 'Nyhet',
        // 'archives' => 'Item Archives',
        // 'attributes' => 'Item Attributes',
        // 'parent_item_colon' => 'Parent Item:',
        'all_items' => 'Alla nyheter',
        'add_new_item' => 'Lägg till nyhet',
        'add_new' => 'Lägg till nyhet',
        'new_item' => 'Ny nyhet',
        'edit_item' => 'Redigera nyhet',
        'update_item' => 'Uppdatera nyeht',
        'view_item' => 'Visa nyhet',
        'view_items' => 'Visa nyheter',
        'search_items' => 'Sök efter nyhet',
        'not_found' => 'Hittade inga nyheter.',
        'not_found_in_trash' => 'Hittade inga nyheter i papperskorgen.',
        'featured_image' => 'Utvald bild',
        'set_featured_image' => 'Välj utvald bild',
        'remove_featured_image' => 'Ta bort utvald bild',
        'use_featured_image' => 'Använd som utvald bild',
        // 'insert_into_item' => 'Insert into item',
        // 'uploaded_to_this_item' => 'Uploaded to this item',
        // 'items_list' => 'Items list',
        // 'items_list_navigation' => 'Items list navigation',
        // 'filter_items_list' => 'Filter items list',
    ],
    'rewrite' => ['slug' => 'nyhet'],
    'menu_icon' => 'dashicons-media-document',
    'show_in_rest' => true
]);
