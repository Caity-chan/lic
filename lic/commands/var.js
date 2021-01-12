interpret = (args) => {
    if (args[0].toLowerCase() === 'modular') {
        if (args[1].toLowerCase() === 'lic') {
            if (args[2].toLowerCase() === 'import') {
                command_and_args = line.slice(1).split(' ');
                c = command_and_args[0];
                a = command_and_args.slice(1);
                interpret(command, args);

            } else if (args[2].toLowerCase() === 'define') {
                interpreted = `${args[3]} = (${args.slice(5).join(', ')}) => {`;
                //console.log(interpreted)
            }
        } else if (args[1].toLowerCase() === 'js') {
            if (args[2].toLowerCase() === 'import') {
                if (!args[4]) {
                    interpreted = `require('${args[3]}');`;
                } else {
                    interpreted = `${args[5]} = require('${args[3]}');`;
                }
                

            } else if (args[1].toLowerCase() === 'install') {
                command_and_args = line.slice(1).split(' ');
                c = command_and_args[0];
                a = command_and_args.slice(1);

            }
        }
    } else if (args[0].toLowerCase() === 'tree') {
        if (args[1].toLowerCase() === 'root') {
            interpreted = `${args[2]} = {};`
        } else if (args[1].toLowerCase() === 'branch') {
            interpreted = `${args[4]}['${args[2]}'] = {};`
        } else if (args[1].toLowerCase() === 'list') {
            interpreted = `${args[4]}['${args[2]}'] = [];`
        }
    } else if (args[0].toLowerCase() === 'list') {
        vars = args.slice(2)
        interpreted = `var ${args[1]} = [${vars.join(', ')}]`;
        
    } else if (args[0].toLowerCase() === 'singular') {
        interpreted = `var ${args[1]} = ${args.slice(2).join(' ')};`
    }
    return interpreted;
}

module.exports = {
    name: 'var',
    'interpret': interpret
}