<?php

declare (strict_types = 1);


$fields = [
    acf_group([
        'name' => 'apply',
        'label' => 'Sök bidrag',
        'sub_fields' => [

        ],
    ]),
];

$location = [
    [
        acf_location('post_taxonomy', 'page-category:sok-bidrag')
    ]
];

acf_field_group([
    'title' => 'apply',
    'fields' => $fields,
    'style' => 'seamless',
    'location' => $location,
    'hide_on_screen' => [
        'the_content',
        'featured_image',
    ],
]);
