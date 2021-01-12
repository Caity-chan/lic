interpret = (args) => {
    if (args[0] === 'run') {
        if (!args[2]) {
            interpreted = `${args[1]}();`
        } else {
            interpreted = `${args[1]}(${args.slice(3).join(', ')});`
        }
    } else if (args[0] === 'instance') {
        interpreted = `${args[1]} = new ${args[3]}();`
    } else if (args[0] === 'rundefine') {
        if (!args[4]) {
            interpreted = `${args[1]} = ${args[3]}();`
        } else {
            interpreted = `${args[1]} = ${args[3]}(${args.slice(5).join(', ')});`
        }
        
    }
    return interpreted;
}

module.exports = {
    name: 'module',
    'interpret': interpret
}