<?php

declare (strict_types = 1);


$fields = [
    acf_group([
        'name' => 'footer',
        'label' => 'Footer',
        'sub_fields' => [
            acf_group([
                'name' => 'social',
                'label' => '',
                'sub_fields' => [
                    acf_repeater([
                        'name' => 'socialMedia',
                        'label' => 'Sociala medier',
                        'layout' => 'table',
                        'sub_fields' => [
                            acf_text([
                                'name' => 'name',
                                'label' => 'Namn',
                                'required' => true,
                            ]),
                            acf_url([
                                'name' => 'url',
                                'label' => 'URL',
                                'required' => true,
                            ]),
                            acf_image([
                                'name' => 'icon',
                                'label' => 'Ikon',
                                'instructions' => 'Lägg till en ikon med något av formaten <strong>jpg</strong>, <strong>jpeg</strong> eller <strong>png</strong>.',
                                'required' => true,
                                'library' => 'all',
                                'mime_types' => 'jpeg, jpg, png, svg',
                                'preview_size' => 'thumbnail',
                                'return_format' => 'array',
                            ]),
                        ],
                    ]),
                ],
            ]),
            acf_group([
                'name' => 'weThank',
                'label' => 'Vi tackar',
                'sub_fields' => [
                    acf_tab([
                        'name' => 'SV',
                        'label' => 'Svenska',
                    ]),
                    acf_text([
                        'name' => 'contentSV',
                        'label' => 'Innehåll',
                        'instructions' => 'Text som visas över företagens logotyper.',
                        'required' => true,
                    ]),
                    acf_tab([
                        'name' => 'ENG',
                        'label' => 'Engelska',
                    ]),
                    acf_text([
                        'name' => 'contentENG',
                        'label' => 'Innehåll',
                        'instructions' => 'Text som visas över företagens logotyper.',
                        'required' => true,
                    ]),
                    acf_tab([
                        'name' => 'endpoint',
                        'label' => '',
                        'endpoint' => true,
                    ]),
                    acf_repeater([
                        'name' => 'images',
                        'label' => 'Logotyper',
                        'instructions' => 'Företagens logotyper.',
                        'layout' => 'block',
                        'sub_fields' => [
                            acf_image([
                                'name' => 'image',
                                'label' => 'Bild',
                                'instructions' => 'Lägg till en bild med något av formaten <strong>jpg</strong>, <strong>jpeg</strong> eller <strong>png</strong>.',
                                'required' => true,
                                'library' => 'all',
                                'mime_types' => 'jpeg, jpg, png',
                                'preview_size' => 'thumbnail',
                                'return_format' => 'array',
                            ]),
                            acf_url([
                                'name' => 'url',
                                'label' => 'Företagets hemsida',
                            ]),
                        ],
                    ]),
                ],
            ]),
            acf_group([
                'name' => 'contactUs',
                'label' => 'Kontakta oss',
                'sub_fields' => [
                    acf_repeater([
                        'name' => 'contact',
                        'label' => 'Kontaktpersoner',
                        'layout' => 'table',
                        'sub_fields' => [
                            acf_text([
                                'name' => 'name',
                                'label' => 'Namn',
                                'required' => true,
                            ]),
                            acf_text([
                                'name' => 'phone',
                                'label' => 'Telefon',
                                'required' => true,
                            ]),
                        ],
                    ]),
                    acf_email([
                        'name' => 'email',
                        'label' => 'E-post',
                        'required' => true,
                    ]),
                ],
            ]),
        ]
    ]),
];

$location = [
    [
        acf_location('post_taxonomy', 'page-category:footer')
    ]
];

acf_field_group([
    'title' => 'footer',
    'fields' => $fields,
    'style' => 'seamless',
    'location' => $location,
    'hide_on_screen' => [
        'the_content',
        'featured_image',
    ],
]);
