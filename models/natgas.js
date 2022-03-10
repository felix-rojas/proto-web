
const db = require('../util/database');

db.execute('Consulta SQL por ejemplo: SELECT * FROM mi_tabla');

//execute the query
// this returns the promise already
static fetchAll() {
    return db.execute('SELECT * FROM table');
};

save() {
    return db.execute('INSERT INTO table (nombre_columna_1, nombre_columna_2) VALUES (?, ?)',
        [this.variable_valor_1, this.variable_valor_2]
    );
};