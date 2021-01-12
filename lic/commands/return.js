interpret = (variable) => {
    if (!variable) {
        return 'return;';
    } else {
        try {
            return `return ${variable.join(' ')}`
        } catch (err) {
            return `return ${variable}`
        }
    }
        
}

module.exports = {
    name: 'return',
    'interpret': interpret
}