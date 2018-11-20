<?php

declare (strict_types = 1);


$fields = [
    acf_group([
        'name' => 'apply',
        'label' => 'Sök bidrag',
        'sub_fields' => [
            acf_tab([
                'name' => 'SV',
                'label' => 'Svenska'
            ]),
            acf_wysiwyg([
                'name' => 'contentSV',
                'label' => 'Innehåll',
                'required' => true,
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
                'required' => true,
                'tabs' => 'visual',
                'toolbar' => 'simple',
            ]),
            acf_tab([
                'name' => 'endpoint',
                'label' => '',
                'endpoint' => true,
            ]),
            acf_file([
                'name' => 'concent',
                'label' => 'Samtycke',
                'instructions' => 'Lägg till fil som <strong>pdf</strong>.',
                'required' => true,
                'library' => 'all',
                'mime_types' => 'pdf',
                'return_format' => 'array',
            ]),
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
