<?php

declare (strict_types = 1);


$fields = [
    acf_group([
        'name' => 'annualReports',
        'label' => 'Årsredovisningar',
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
                'name' => 'files',
                'label' => 'Filer',
                'layout' => 'block',
                'sub_fields' => [
                    acf_file([
                        'name' => 'report',
                        'label' => 'Fil',
                        'instructions' => 'Lägg till filer som <strong>pdf</strong>.',
                        'required' => true,
                        'library' => 'all',
                        'mime_types' => 'pdf',
                        'return_format' => 'array',
                    ]),
                ],
            ]),
        ],
    ]),
];

$location = [
    [
        acf_location('post_taxonomy', 'page-category:arsredovisningar')
    ]
];

acf_field_group([
    'title' => 'annualReports',
    'fields' => $fields,
    'style' => 'seamless',
    'location' => $location,
    'hide_on_screen' => [
        'the_content',
        'featured_image',
    ],
]);
