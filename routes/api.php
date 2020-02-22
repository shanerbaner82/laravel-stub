<?php

Route::any('orders/{params}', 'DecipherSkuController@import');

Route::middleware('auth:airlock')->group(function () {

});

