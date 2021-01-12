interpret = (args) => {
    if (args[0].toLowerCase() === 'echo') {
        if (args[1].toLowerCase() === 'singular') {
            message = args.slice(2).join(' ')
            interpreted = `console.log(${message});`
        } else if (args[1].toLowerCase() === 'variables') {
            args = args.slice(2);
            message = `""` 
            index = 0;
            for (const t of args) {
                if (index === 0) {
                    message = `${message} + ${t}`
                } else {
                    message = `${message} + ' ' + ${t}`
                }
                index += 1;
            }
            interpreted = `console.log(${message});`
        } else if (args[1].toLowerCase() === 'object') {
            variable = args.slice(2);
            interpreted = `console.log(${variable});`
        } else if (args[1].toLowerCase() === 'list') {
            variable = args.slice(2);
            interpreted = "console.log(" + `${variable.join(', ')}` + ");"
        }
    }
    return interpreted;
}

module.exports = {
    name: 'console',
    'interpret': interpret
}