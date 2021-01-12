const fs = require('fs');

commands = {};

const cmds = fs.readdirSync('./commands');
for (const cmd of cmds) { 
    file = require('./commands/' + cmd);
    commands[file.name] = file.interpret;
}
interpret = (module) => {
    data = fs.readFileSync(`./${module}.lic`).toString().split('\n');
    interpreted = [];
    for (const line of data) {
        try {
            l = line.split(' ')
            command = l[0];
            args = l.slice(1);
            interpreted.push(commands[command](args));
        } catch (err) {

        }
    }

    interpreted = interpreted.join('\n');
    eval(interpreted);
}

module.exports = { interpret };