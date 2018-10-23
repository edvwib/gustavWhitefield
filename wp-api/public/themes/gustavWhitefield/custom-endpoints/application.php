<?php

declare(strict_types=1);

// Handle applications from organisations and individuals

add_action('rest_api_init', function () {
    register_rest_route('api/v1', '/application/', [
        'methods' => 'POST',
        'callback' => 'sendApplicationToEmail'
    ]);
});

function sendApplicationToEmail($request){

}
