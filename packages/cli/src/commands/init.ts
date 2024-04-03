import ora from 'ora'

const spinner = ora('Loading unicorns').start()

setTimeout(() => {
  spinner.succeed(`Done.`)
}, 5000)