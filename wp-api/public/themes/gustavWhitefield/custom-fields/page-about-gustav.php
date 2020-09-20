<?php

declare(strict_types=1);

use WordPlate\Acf\Fields\Group;
use WordPlate\Acf\Fields\Image;
use WordPlate\Acf\Fields\Tab;
use WordPlate\Acf\Fields\Wysiwyg;
use WordPlate\Acf\Location;

register_extended_field_group([
    'title' => 'aboutGustav',
    'fields' => [
        Group::make('Om Gustav', 'aboutGustav')
            ->instructions('Sidan är uppbyggd i tre delar, för att tillåta att bilder läggs till bredvid texten. Bilderna alternerar mellan vilken sida som dem visas på.')
            ->fields([
                Group::make('Första stycket', 'part1')
                    ->fields([
                        Tab::make('Svenska', 'SV'),
                        Wysiwyg::make('Text', 'contentSV')
                            ->mediaUpload(false)
                            ->tabs('visual')
                            ->toolbar('simple')
                            ->required(),
                        Tab::make('Engelska', 'ENG'),
                        Wysiwyg::make('Text', 'contentENG')
                            ->mediaUpload(false)
                            ->tabs('visual')
                            ->toolbar('simple')
                            ->required(),
                        Tab::make('', 'endpoint')->endpoint(),
                        Image::make('Bild', 'image')
                            ->instructions('Den här bilden visas uppe till höger om stycket.')
                            ->library('all')
                            ->mimeTypes(['jpeg', 'jpg', 'png',])
                            ->previewSize('medium')
                            ->returnFormat('array')
                            ->required(),
                    ]),
                Group::make('Andra stycket', 'part2')
                    ->fields([
                        Tab::make('Svenska', 'SV'),
                        Wysiwyg::make('Text', 'contentSV')
                            ->mediaUpload(false)
                            ->tabs('visual')
                            ->toolbar('simple')
                            ->required(),
                        Tab::make('Engelska', 'ENG'),
                        Wysiwyg::make('Text', 'contentENG')
                            ->mediaUpload(false)
                            ->tabs('visual')
                            ->toolbar('simple')
                            ->required(),
                        Tab::make('', 'endpoint')->endpoint(),
                        Image::make('Bild', 'image')
                            ->instructions('Den här bilden visas uppe till vänster om stycket.')
                            ->library('all')
                            ->mimeTypes(['jpeg', 'jpg', 'png',])
                            ->previewSize('medium')
                            ->returnFormat('array')
                            ->required(),
                    ]),
                Group::make('Tredje stycket', 'part3')
                    ->fields([
                        Tab::make('Svenska', 'SV'),
                        Wysiwyg::make('Text', 'contentSV')
                            ->mediaUpload(false)
                            ->tabs('visual')
                            ->toolbar('simple')
                            ->required(),
                        Tab::make('Engelska', 'ENG'),
                        Wysiwyg::make('Text', 'contentENG')
                            ->mediaUpload(false)
                            ->tabs('visual')
                            ->toolbar('simple')
                            ->required(),
                        Tab::make('', 'endpoint')->endpoint(),
                        Image::make('Bild', 'image')
                            ->instructions('Den här bilden visas uppe till höger om stycket.')
                            ->library('all')
                            ->mimeTypes(['jpeg', 'jpg', 'png',])
                            ->previewSize('medium')
                            ->returnFormat('array')
                            ->required(),
                    ]),
            ]),
    ],
    'style' => 'seamless',
    'location' => [
        Location::if('post_taxonomy', 'page-category:om-gustav'),
    ],
    'hide_on_screen' => [
        'the_content',
        'featured_image',
    ],
]);
