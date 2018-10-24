<?php

declare (strict_types=1);

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
        'term_title' => __('Titel'),
    ]);
}
add_filter('manage_page_posts_columns', 'add_page_columns');


/*
 * Add columns to exhibition post list
 */
function page_custom_column($column, $post_id)
{
    switch ($column) {
        case 'term_title':
            $term = get_the_terms($post_id, 'page-category');
            echo $term[0] ? '<b>'.$term[0]->name.'</b>' : '';
            break;
    }
}
add_action('manage_page_posts_custom_column', 'page_custom_column', 10, 2);
