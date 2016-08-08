class AppStore {
    constructor() {
        this.accountId = 'g1brqz0a54b';
        this.flows = [
            {
                'id': '2gzz24abasd',
                'flowName': 'Flow Numero Uno',
                'steps': [
                    {
                        'actionType': 'pageLoad',
                        'url': 'http://google.com'
                    },
                    {
                        'actionType': 'input',
                        'inputType': 'text',
                        'selectorType': 'class',
                        'selectorValue': 'content-section-view-trip-input',
                        'inputValue': '1830713AH'
                    },
                    {
                        'actionType': 'click',
                        'selectorType': 'class',
                        'selectorValue': 'content-section-view-trip-button'
                    },
                    {
                        'actionType': 'confirmElementExists',
                        'selectorType': 'class',
                        'selectorValue': 'tour-header-wrapper'
                    }
                ]
            },
            {
                'id': 'tffd3a433eef',
                'flowName': 'Flow Two',
                'steps': [
                    {
                        'actionType': 'pageLoad',
                        'url': 'http://google.com'
                    },
                    {
                        'actionType': 'input',
                        'inputType': 'text',
                        'selectorType': 'class',
                        'selectorValue': 'content-section-view-trip-input',
                        'inputValue': '1830713AH'
                    },
                    {
                        'actionType': 'click',
                        'selectorType': 'class',
                        'selectorValue': 'content-section-view-trip-button'
                    },
                    {
                        'actionType': 'confirmElementExists',
                        'selectorType': 'class',
                        'selectorValue': 'tour-header-wrapper'
                    }
                ]
            }
        ];
    }
}

const singleton = new AppStore();
export default singleton;
