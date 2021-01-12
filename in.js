for (const line of data) {
    command_and_args = line.split(' ');
    command = command_and_args[0];
    args = command_and_args.slice(1);
    interpreted = interpret(command, args);
    test.push(interpreted)
}