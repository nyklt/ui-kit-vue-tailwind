<template>
<div class="container max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
            <div class="section-title col-lg-8 col-md-10 ml-auto mr-auto">
                <h1 class="font-sans font-bold text-black text-3xl mb-3">Buttons</h1>
                <p class="mb-4">Two new button modifiers are introduced in this project that allow you to create <strong>pill-shaped</strong> and <strong>squared</strong> buttons for both filled and outlined variations for an extended range of possible combinations.</p>
            </div>

            <div class="example example-buttons">
                <div class="ml-auto mr-auto">
                    <h2 class="font-sans font-bold text-black text-xl mb-3">Normal</h2>
                </div>

                <!-- Normal Buttons -->
                <div class="row mb-4">
                    <div class="ml-auto mr-auto d-flex justify-content-around buttons-wrapper">
                        <button type="button" class="btn btn-primary">Primary</button>
                        <button type="button" class="btn btn-secondary">Secondary</button>
                        <button type="button" class="btn btn-success">Success</button>
                        <button type="button" class="btn btn-danger">Danger</button>
                        <button type="button" class="btn btn-warning">Warning</button>
                        <button type="button" class="btn btn-info">Info</button>
                        <button type="button" class="btn btn-light">Light</button>
                        <button type="button" class="btn btn-dark">Dark</button>
                    </div>
                </div>

                <!-- Outlined Buttons -->
                <div class="mb-5 row">
                    <div class="ml-auto mr-auto d-flex justify-content-around buttons-wrapper">
                        <button type="button" class="btn btn-outline-primary">Primary</button>
                        <button type="button" class="btn btn-outline-secondary">Secondary</button>
                        <button type="button" class="btn btn-outline-success">Success</button>
                        <button type="button" class="btn btn-outline-danger">Danger</button>
                        <button type="button" class="btn btn-outline-warning">Warning</button>
                        <button type="button" class="btn btn-outline-info">Info</button>
                        <button type="button" class="btn btn-outline-light">Light</button>
                        <button type="button" class="btn btn-outline-dark">Dark</button>
                    </div>
                </div>

                <div class="ml-auto mr-auto">
                    <h2 class="font-sans font-bold text-black text-xl mb-3">Squared</h2>
                </div>

                <!-- Squared Buttons -->
                <div class="mb-4 row">
                    <div class="ml-auto mr-auto d-flex justify-content-around buttons-wrapper">
                        <button type="button" class="btn btn-primary btn-squared">Primary</button>
                        <button type="button" class="btn btn-secondary btn-squared">Secondary</button>
                        <button type="button" class="btn btn-success btn-squared">Success</button>
                        <button type="button" class="btn btn-danger btn-squared">Danger</button>
                        <button type="button" class="btn btn-warning btn-squared">Warning</button>
                        <button type="button" class="btn btn-info btn-squared">Info</button>
                        <button type="button" class="btn btn-light btn-squared">Light</button>
                        <button type="button" class="btn btn-dark btn-squared">Dark</button>
                    </div>
                </div>

                <!-- Squared and Outlined Buttons -->
                <div class="mb-5 row">
                    <div class="ml-auto mr-auto d-flex justify-content-around buttons-wrapper">
                        <button type="button" class="btn btn-outline-primary btn-squared">Primary</button>
                        <button type="button" class="btn btn-outline-secondary btn-squared">Secondary</button>
                        <button type="button" class="btn btn-outline-success btn-squared">Success</button>
                        <button type="button" class="btn btn-outline-danger btn-squared">Danger</button>
                        <button type="button" class="btn btn-outline-warning btn-squared">Warning</button>
                        <button type="button" class="btn btn-outline-info btn-squared">Info</button>
                        <button type="button" class="btn btn-outline-light btn-squared">Light</button>
                        <button type="button" class="btn btn-outline-dark btn-squared">Dark</button>
                    </div>
                </div>

                <div class="ml-auto mr-auto">
                    <h2 class="font-sans font-bold text-black text-xl mb-3">Pill-shaped</h2>
                </div>

                <!-- Pill Shaped Buttons -->
                <div class="mb-4 row">
                    <div class="ml-auto mr-auto d-flex justify-content-around buttons-wrapper">
                        <button type="button" class="btn btn-primary btn-pill">Primary</button>
                        <button type="button" class="btn btn-secondary btn-pill">Secondary</button>
                        <button type="button" class="btn btn-success btn-pill">Success</button>
                        <button type="button" class="btn btn-danger btn-pill">Danger</button>
                        <button type="button" class="btn btn-warning btn-pill">Warning</button>
                        <button type="button" class="btn btn-info btn-pill">Info</button>
                        <button type="button" class="btn btn-light btn-pill">Light</button>
                        <button type="button" class="btn btn-dark btn-pill">Dark</button>
                    </div>
                </div>

                <!-- Pill-shaped and Outlined Buttons -->
                <div class="mb-5 row">
                    <div class="ml-auto mr-auto d-flex justify-content-around buttons-wrapper">
                        <button type="button" class="btn btn-outline-primary btn-pill">Primary</button>
                        <button type="button" class="btn btn-outline-secondary btn-pill">Secondary</button>
                        <button type="button" class="btn btn-outline-success btn-pill">Success</button>
                        <button type="button" class="btn btn-outline-danger btn-pill">Danger</button>
                        <button type="button" class="btn btn-outline-warning btn-pill">Warning</button>
                        <button type="button" class="btn btn-outline-info btn-pill">Info</button>
                        <button type="button" class="btn btn-outline-light btn-pill">Light</button>
                        <button type="button" class="btn btn-outline-dark btn-pill">Dark</button>
                    </div>
                </div>

                <div class="ml-auto mr-auto">
                    <h2 class="font-sans font-bold text-black text-xl mb-3">Using Icons</h2>
                </div>

                <!-- Buttons with Icons : Material Icons -->
                <div class="mb-4 row">
                    <div class="ml-auto mr-auto d-flex justify-content-around buttons-wrapper">
                        <button type="button" class="btn btn-pill btn-primary"><i class="fa fa-download mr-1"></i> Download</button>
                        <button type="button" class="btn btn-pill btn-secondary"><i class="fa fa-lock mr-1"></i>Authorize</button>
                        <button type="button" class="btn btn-pill btn-success"><i class="fa fa-check mr-1"></i>Success</button>
                        <button type="button" class="btn btn-pill btn-danger"><i class="fa fa-remove mr-1"></i>Delete</button>
                        <button type="button" class="btn btn-pill btn-info"><i class="fa fa-envelope mr-1"></i> Message</button>
                        <button type="button" class="btn btn-pill btn-warning"><i class="fa fa-star mr-1"></i>Favourite</button>
                    </div>
                </div>

                <!-- Buttons with Icons : FontAwesome -->
                <div class="mb-5 row">
                    <div class="ml-auto mr-auto d-flex justify-content-around buttons-wrapper">
                        <button type="button" class="btn btn-pill btn-outline-primary"><i class="fa fa-download mr-1"></i> Download</button>
                        <button type="button" class="btn btn-pill btn-outline-secondary"><i class="fa fa-lock mr-1"></i>Authorize</button>
                        <button type="button" class="btn btn-pill btn-outline-success"><i class="fa fa-check mr-1"></i>Success</button>
                        <button type="button" class="btn btn-pill btn-outline-danger"><i class="fa fa-remove mr-1"></i>Delete</button>
                        <button type="button" class="btn btn-pill btn-outline-info"><i class="fa fa-envelope mr-1"></i> Message</button>
                        <button type="button" class="btn btn-pill btn-outline-warning"><i class="fa fa-star mr-1"></i>Favourite</button>
                    </div>
                </div>
            </div>
        </div>
</template>
