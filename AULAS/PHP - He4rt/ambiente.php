<?php

// echo 'Patrick Brining' . PHP_EOL;

/*
comentario
de varias
linhas - vulgo DockBlock
*/

// var_dump('Patrick');
// var_dump(true); //Booleans NÃO são CaseSensitive
// var_dump(1234.12312);

// $arr = ['Patrick', 19, true];

// var_dump($arr);

// $patrick = [
//     'nome' => 'Patrick',
//     'idade' => 19,
//     'cidade' => 'itajai'
// ];

// echo $patrick['idade'];

// define('idadeDoPatrick', 19);

// echo idadeDoPatrick;

// $um = [
//     'nome' => 'Patrick',
//     'idade' => 19
// ];

// $dois = [
//     'profissao' => 'Programador',
//     'empresa' => 'Dataclick'
// ];

// $concatenado = $um + $dois;

// print_r($concatenado);

// print_r('abcdef' . PHP_EOL);



var_dump($argv);
$comando = `code .`;

if ($argv[1] == 'Patrick') {
    echo 'Olá Patrick, eu sou o PHP e abri o VSCode.' . PHP_EOL;
    echo $comando;
}


