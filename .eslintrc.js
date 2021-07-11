module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/prettier'],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        quotes: ['error', 'single'],
        curly: 'error',
        eqeqeq: ['error', 'always'],
        'dot-notation': 'error',
        'no-else-return': 'error',
        'prefer-template': 'error',
        'lines-between-class-members': [
            'error',
            'always',
            {
                exceptAfterSingleLine: true,
            },
        ],
        'padding-line-between-statements': [
            'error',
            {blankLine: 'always', prev: '*', next: 'return'},
            {blankLine: 'always', prev: 'block-like', next: '*'},
            {
                blankLine: 'any',
                prev: ['const', 'let', 'var'],
                next: ['const', 'let', 'var'],
            },
            {
                blankLine: 'always',
                prev: '*',
                next: ['break', 'if', 'try', 'throw', 'for', 'while', 'switch', 'function'],
            },
            {
                blankLine: 'always',
                prev: ['break', 'if', 'try', 'throw', 'for', 'while', 'switch', 'function'],
                next: '*',
            },
        ],
        'no-multiple-empty-lines': [
            'error',
            {
                max: 1,
                maxBOF: 0,
                maxEOF: 0,
            },
        ],
    },
    overrides: [
        {
            files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
            env: {
                jest: true,
            },
        },
    ],
};
