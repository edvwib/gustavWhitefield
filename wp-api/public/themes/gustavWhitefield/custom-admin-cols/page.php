<?php

declare(strict_types=1);

/*
 * Add columns to page list, and remove some defaults
 */
function add_page_columns($columns)
{
    unset($columns['title']);
    unset($columns['author']);
    unset($columns['date']);
    unset($columns['comments']);

    return array_merge($columns, [
        'title' => __('Titel'),
        'last_modified' => __('Senaste ändringen'),
    ]);
}
add_filter('manage_page_posts_columns', 'add_page_columns');


/*
 * Add columns to page list
 */
function page_custom_column($column, $post_id)
{
    switch ($column) {
        case 'title':
            $term = get_the_terms($post_id, 'page-category');
            echo $term[0] ? '<a href="'. get_edit_post_link($post_id) .'"><b>'.$term[0]->name.'</b></a>' : '';
            break;
        case 'last_modified':
            the_modified_date('Y-m-d (H:i)');
            break;
    }
}
add_action('manage_page_posts_custom_column', 'page_custom_column', 10, 2);

function page_column_sortable($columns)
{
    $columns['title'] = 'title';
    $columns['last_modified'] = 'last_modified';

    return $columns;
}
add_filter('manage_edit-page_sortable_columns', 'page_column_sortable');
