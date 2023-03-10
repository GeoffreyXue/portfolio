import { publish } from 'gh-pages';

publish(
    'build',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/GeoffreyXue/portfolio.git',
        user: {
            name: 'Geoffrey Xue',
            email: 'xuegeoff@gmail.com'
        },
        dotfiles: true,
    },
    () => {
        console.log('Deploy Complete!')
    }
)