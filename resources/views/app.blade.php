<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" >
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    @if (app()->environment('local'))
        <script src="{{ mix('js/app.js') }}" defer></script>
        <link href="{{ mix('css/main.css') }}" rel="stylesheet">

    @else
        <script src="{{ asset('js/app.js') }}" defer></script>
        <link href="{{ asset('css/main.css') }}" rel="stylesheet">
        <link rel="dns-prefetch" href="//fonts.gstatic.com">
    @endif

</head>
<body class="font-opensans antialiased bg-gray-200 h-full w-full">
<div id="app">
    <app user="{{ auth()->user() }}"></app>
</div>
</body>
</html>
