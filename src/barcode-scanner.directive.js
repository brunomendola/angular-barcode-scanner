export default ($window) => {
    'ngInject';

    return {
        restrict: 'AE',
        scope: {
            separatorChar: '=',
            triggerChar: '=',
            scanCallback: '=',
            triggerCallback: '='
        },
        link: (scope, element) => {
            let buffer = '';
            const handler = (e) => {
                const key = e.key;
                const keyCode = e.which || e.keyCode;
                const triggerChar = parseInt(scope.triggerChar, 10);
                const separatorChar = parseInt(scope.separatorChar, 10);

                if (keyCode === triggerChar) {
                    scope.triggerCallback();
                    e.preventDefault();
                } else {
                    const valid = keyCode >= 32 && keyCode <= 255;
                    if (valid === true && keyCode !== separatorChar) {
                        buffer += key || String.fromCharCode(keyCode);
                    } else if (keyCode === separatorChar) {
                        if (buffer.length > 0) {
                            scope.scanCallback(buffer);
                        }
                        buffer = '';
                    }
                }
            };
            angular.element($window).on('keydown', handler);
            element.on('$destroy', () => {
                angular.element($window).off('keydown', handler);
            });
        }
    }
}
