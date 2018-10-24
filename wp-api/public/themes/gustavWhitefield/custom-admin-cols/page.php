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
        'titleSV' => __('Titel (svensk)'),
        'titleENG' => __('Titel (engelsk)'),
    ]);
}
add_filter('manage_page_posts_columns', 'add_page_columns');


/*
 * Add columns to exhibition post list
 */
function page_custom_column($column, $post_id)
{
    switch ($column) {
        case 'titleSV':
            the_field('contentSV_titleSV', $post_id);
            break;
        case 'titleENG':
            the_field('contentENG_titleENG', $post_id);
            break;
    }
}
add_action('manage_page_posts_custom_column', 'page_custom_column', 10, 2);
