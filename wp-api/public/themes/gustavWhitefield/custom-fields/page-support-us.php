<?php

declare(strict_types=1);

$fields = [
    acf_group([
        'name' => 'supportUs',
        'label' => 'Stöd oss',
        'sub_fields' => [
            acf_tab([
                'name' => 'SV',
                'label' => 'Svenska',
            ]),
            acf_wysiwyg([
                'name' => 'introSV',
                'label' => 'Introduktion',
                'media_upload' => false,
                'tabs' => 'visual',
                'toolbar' => 'simple',
            ]),
            acf_tab([
                'name' => 'ENG',
                'label' => 'Engelska',
            ]),
            acf_wysiwyg([
                'name' => 'introENG',
                'label' => 'Introduktion',
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
                'name' => 'paymentMethods',
                'label' => 'Betalmetoder',
                'instructions' => 'Här kan ni lägga till olika betalmetoder, exempelvis Swish.',
                'layout' => 'block',
                'sub_fields' => [
                    acf_image([
                        'name' => 'image',
                        'label' => 'Bild',
                        'instructions' => 'Lägg till en bild med något av formaten <strong>jpg</strong>, <strong>jpeg</strong> eller <strong>png</strong>. Lägger ni inte till någon bild kommer en generisk bild läggas till automatiskt.',
                        'library' => 'all',
                        'mime_types' => 'jpeg, jpg, png',
                        'preview_size' => 'thumbnail',
                        'return_format' => 'array',
                    ]),
                    acf_tab([
                        'name' => 'SV',
                        'label' => 'Svenska',
                    ]),
                    acf_text([
                        'name' => 'titleSV',
                        'label' => 'Titel',
                    ]),
                    acf_textarea([
                        'name' => 'contentSV',
                        'label' => 'Innehåll',
                        'rows' => 3,
                    ]),
                    acf_textarea([
                        'name' => 'detailsSV',
                        'label' => 'Detaljer',
                        'rows' => 3,
                    ]),
                    acf_tab([
                        'name' => 'ENG',
                        'label' => 'Engelska',
                    ]),
                    acf_text([
                        'name' => 'titleENG',
                        'label' => 'Titel',
                    ]),
                    acf_textarea([
                        'name' => 'contentENG',
                        'label' => 'Innehåll',
                        'rows' => 3,
                    ]),
                    acf_textarea([
                        'name' => 'detailsENG',
                        'label' => 'Detaljer',
                        'rows' => 3,
                    ]),
                    acf_tab([
                        'name' => 'endpoint',
                        'label' => '',
                        'endpoint' => true,
                    ]),
                ],
            ]),
            acf_tab([
                'name' => 'SV2',
                'label' => 'Svenska',
                'endpoint' => true,
            ]),
            acf_wysiwyg([
                'name' => 'otherSV',
                'label' => 'Övrigt',
                'media_upload' => false,
                'tabs' => 'visual',
                'toolbar' => 'simple',
            ]),
            acf_tab([
                'name' => 'ENG2',
                'label' => 'Engelska',
            ]),
            acf_wysiwyg([
                'name' => 'otherENG',
                'label' => 'Övrigt',
                'media_upload' => false,
                'tabs' => 'visual',
                'toolbar' => 'simple',
            ]),
        ],
    ]),
];

$location = [
    [
        acf_location('post_taxonomy', 'page-category:stod-oss')
    ]
];

acf_field_group([
    'title' => 'supportUs',
    'fields' => $fields,
    'style' => 'seamless',
    'location' => $location,
    'hide_on_screen' => [
        'the_content',
        'featured_image',
    ],
]);
