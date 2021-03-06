var lng = 'pt_BR';

i18next.use(i18nextXHRBackend);

// INICIA A TRADUÇÃO
function initI18n() {
    i18next.init({
        lng: lng,
        'fallbackLng': 'pt_BR',
        backend: {
            loadPath: 'locales/{{lng}}/{{ns}}.json'
        }
    }, function () {
        jqueryI18next.init(i18next, $);
        $('body').localize();
    });
}
// INICIA A TRADUÇÃO

$(document).ready(function () {
    initI18n();
});

$('#langEN').on('click', function () {
    lng = 'en_US';

    initI18n();
});

$('#langES').on('click', function () {
    lng = 'es';

    initI18n();
});

$('#langBR').on('click', function () {
    lng = 'pt_BR';

    initI18n();
});

