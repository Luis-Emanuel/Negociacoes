export function domInjetor(seletor) {
    return function (target, propertyKey) {
        const getter = function () {
            const elemento = document.querySelector(seletor);
            return elemento;
        };
    };
}
