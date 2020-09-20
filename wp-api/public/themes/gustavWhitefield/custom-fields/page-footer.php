<?php

declare(strict_types=1);

use WordPlate\Acf\Fields\Email;
use WordPlate\Acf\Fields\File;
use WordPlate\Acf\Fields\Group;
use WordPlate\Acf\Fields\Image;
use WordPlate\Acf\Fields\Repeater;
use WordPlate\Acf\Fields\Tab;
use WordPlate\Acf\Fields\Text;
use WordPlate\Acf\Fields\Url;
use WordPlate\Acf\Location;

register_extended_field_group([
    'title' => 'footer',
    'fields' => [
        Group::make('Footer', 'footer')
            ->fields([
                Group::make('', 'social')
                    ->fields([
                        Repeater::make('Sociala medier', 'socialMedia')
                            ->layout('table')
                            ->fields([
                                Text::make('Namn', 'name')
                                    ->required(),
                                Url::make('URL', 'url')
                                    ->required(),
                                Image::make('Ikon', 'icon')
                                    ->instructions('Lägg till en ikon med något av formaten <strong>jpg</strong>, <strong>jpeg</strong> eller <strong>png</strong>.')
                                    ->library('all')
                                    ->mimeTypes(['jpeg', 'jpg', 'png', 'svg'])
                                    ->previewSize('thumbnail')
                                    ->returnFormat('array')
                                    ->required(),
                            ])
                    ]),
                Group::make('Vi tackar', 'weThank')
                    ->fields([
                        Tab::make('Svenska', 'SV'),
                        Text::make('Innehåll', 'contentSV')
                            ->instructions('Text som visas över företagens logotyper.')
                            ->required(),
                        Tab::make('Engelska', 'ENG'),
                        Text::make('Innehåll', 'contentENG')
                            ->instructions('Text som visas över företagens logotyper.')
                            ->required(),
                        Tab::make('', 'endpoint')->endpoint(),
                        Repeater::make('Logotyper', 'images')
                            ->instructions('Företagens logotyper.')
                            ->layout('block')
                            ->fields([
                                Image::make('Bild', 'image')
                                    ->instructions('Lägg till en bild med något av formaten <strong>jpg</strong>, <strong>jpeg</strong> eller <strong>png</strong>.')
                                    ->library('all')
                                    ->mimeTypes(['jpeg', 'jpg', 'png',])
                                    ->previewSize('thumbnail')
                                    ->returnFormat('array')
                                    ->required(),
                                Url::make('Företagets hemsida', 'url')
                                    ->required(),
                            ]),
                    ]),
                Group::make('Kontakta oss', 'contactUs')
                    ->fields([
                        Repeater::make('Kontaktpersoner', 'contact')
                            ->layout('table')
                            ->fields([
                                Text::make('Namn', 'name')
                                    ->required(),
                                Text::make('Telefon', 'phone')
                                    ->required(),
                            ]),
                        Email::make('E-post', 'email')
                            ->required(),
                    ]),
                Group::make('', 'policy')
                    ->fields([
                        File::make('Integritetspolicy', 'policy')
                            ->instructions('Lägg till fil som <strong>pdf</strong>.')
                            ->library('all')
                            ->mimeTypes(['pdf'])
                            ->returnFormat('array')
                            ->required(),
                    ]),
            ]),
    ],
    'style' => 'seamless',
    'location' => [
        Location::if('post_taxonomy', 'page-category:footer'),
    ],
    'hide_on_screen' => [
        'the_content',
        'featured_image',
    ],
]);
