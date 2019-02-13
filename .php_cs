<?php

declare(strict_types = 1);

return PhpCsFixer\Config::create()
    ->setIndent('    ')
    ->setRules([
        '@PSR2' => true,
        'unary_operator_spaces' => true, // '$var ++' => '$var++'
        'binary_operator_spaces' => true, // '$var= 5' => '$var = 5'
    ])
    ->setFinder(PhpCsFixer\Finder::create()
        ->name('*.php')
        ->exclude('vendor')
        ->exclude('wordpress')
        ->exclude('mu-plugins')
        ->in(__DIR__ . '/wp-api'));
