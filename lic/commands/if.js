interpret = (args) => {
    if (args[1] === 'is') {
        interpreted = `if (${args[0]} === ${args[2]}) {`
    } else if (args[1] === 'contains') {
        interpreted = `if (${args[0]}.includes(${args[2]})) {`
    } else if (args[1] === 'starts') {
        interpreted = `if (${args[2]}.startsWith(${args[0]})) {`
    }
    return interpreted;
}

module.exports = {
    name: 'if',
    'interpret': interpret
}