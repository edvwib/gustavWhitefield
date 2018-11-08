<?php

declare (strict_types = 1);

$fields = [
    acf_group([
        'name' => 'weSupport',
        'label' => 'Vi stödjer',
        'sub_fields' => [
            acf_tab([
                'name' => 'SV',
                'label' => 'Svenska',
            ]),
            acf_wysiwyg([
                'name' => 'contentSV',
                'label' => 'Innehåll',
                'media_upload' => false,
                'tabs' => 'visual',
                'toolbar' => 'simple',
            ]),
            acf_tab([
                'name' => 'ENG',
                'label' => 'Engelska',
            ]),
            acf_wysiwyg([
                'name' => 'contentENG',
                'label' => 'Innehåll',
                'media_upload' => false,
                'tabs' => 'visual',
                'toolbar' => 'simple',
            ]),
            acf_tab([
                'name' => 'endpoint',
                'label' => '',
                'endpoint' => true,
            ]),
            acf_repeater([
                'name' => 'item',
                'label' => 'Här kan ni lägga till exempel på tidigare aktiviteter som ni har bidragit till.',
                'layout' => 'block',
                'sub_fields' => [
                    acf_tab([
                        'name' => 'SV',
                        'label' => 'Svenska',
                    ]),
                    acf_textarea([
                        'name' => 'contentSV',
                        'label' => 'Om',
                        'instructions' => 'Kort text om aktiviteten.',
                        'rows' => 3,
                    ]),
                    acf_tab([
                        'name' => 'ENG',
                        'label' => 'Engelska',
                    ]),
                    acf_textarea([
                        'name' => 'contentENG',
                        'label' => 'Om',
                        'instructions' => 'Kort text om aktiviteten.',
                        'rows' => 3,
                    ]),
                ],
            ]),
        ],
    ]),
];

$location = [
    [
        acf_location('post_taxonomy', 'page-category:vi-stodjer')
    ]
];

acf_field_group([
    'title' => 'weSupport',
    'fields' => $fields,
    'style' => 'seamless',
    'location' => $location,
    'hide_on_screen' => [
        'the_content',
        'featured_image',
    ],
]);
