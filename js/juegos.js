let tam_juegos = 2;
let filas_juegos = ['A', 'B', 'C'];
let columnas_juegos = ['X', 'Y', 'Z'];

function crearColumna() {
    let elemento_input1 = document.createElement('input');
    let elemento_input2 = document.createElement('input');
    elemento_input1.setAttribute('class', 'txtvalor');
    elemento_input2.setAttribute('class', 'txtvalor');
    let elemento_label = document.createElement('label');
    elemento_label.textContent = ';';
    let elemento_td = document.createElement('td');
    elemento_td.setAttribute('class', 'cuerpo-columna');
    elemento_td.appendChild(elemento_input1);
    elemento_td.appendChild(elemento_label);
    elemento_td.appendChild(elemento_input2);

    return elemento_td;
}

function crearFila(value) {
    let elemento_tr = document.createElement('tr');
    elemento_tr.setAttribute('class', 'cuerpo-fila');
    let elemento_th = document.createElement('th');
    elemento_th.setAttribute('class', 'fila table-dark');
    elemento_th.setAttribute('scope', 'row');
    elemento_th.textContent = value;
    elemento_tr.appendChild(elemento_th);
    for (let i = 0; i < tam_juegos; i++) {
        elemento_tr.appendChild(crearColumna());
    }
    return elemento_tr;
}

function crearCabeza(value) {
    let cabeza_columna = document.createElement('th');
    cabeza_columna.setAttribute('class', 'cabeza-columna');
    cabeza_columna.setAttribute('scope', 'col');
    cabeza_columna.textContent = value;
    return cabeza_columna;
}

function GenerarTabla(value) {

    if (value == '+') tam_juegos++;
    else if (value == '-') tam_juegos--;

    if (tam_juegos > 3) tam_juegos--;
    if (tam_juegos < 2) tam_juegos++;

    let elemento_tbody = document.querySelector('.cuerpo');
    let cuerpo_lista = document.querySelectorAll('.cuerpo-fila');
    cuerpo_lista.forEach(element => {
        elemento_tbody.removeChild(element);
    });
    for (let i = 0; i < tam_juegos; i++) {
        elemento_tbody.appendChild(crearFila(filas_juegos[i]));
    }

    let cabeza = document.querySelector('.cabeza');
    let lista_cabeza = document.querySelectorAll('.cabeza-columna');
    lista_cabeza.forEach(element => {
        cabeza.removeChild(element);
    });
    for (let i = 0; i < tam_juegos; i++) {
        cabeza.appendChild(crearCabeza(columnas_juegos[i]));
    }
}
GenerarTabla('');

function mayor(a, b) {
    if (a > b) return '';
    else if (b > a) return b;
    return 'iguales';
}

function mayor2(a, b, c) {
    if (a > b && a > c) return 'a';
    else if (b > a && b > c) return 'b';
    else if (c > a && c > b) return 'c';
    else if (a == b && a > c) return 'ab';
    else if (a == c && a > b) return 'ac'
    else if (b == c && b > a) return 'bc';
    else return 'abc';
}

function MostrarResultado() {
    let lista = document.querySelectorAll('.txtvalor');
    if (tam_juegos == 2) {
        let aux = ['(A;A)', '(A;B)', '(B;A)', '(B;B)'];
        let cont = [0, 0, 0, 0];

        if (mayor(parseInt(lista[0].value), parseInt(lista[4].value)) == lista[0].value) cont[0]++;
        else if (mayor(parseInt(lista[0].value), parseInt(lista[4].value)) == lista[4].value) cont[2]++;
        else {
            cont[0]++;
            cont[2]++;
        }

        if (mayor(parseInt(lista[2].value), parseInt(lista[6].value)) == lista[2].value) cont[1]++;
        else if (mayor(parseInt(lista[2].value), parseInt(lista[6].value)) == lista[6].value) cont[3]++;
        else {
            cont[1]++;
            cont[3]++;
        }

        if (mayor(parseInt(lista[1].value), parseInt(lista[3].value)) == lista[1].value) cont[0]++;
        else if (mayor(parseInt(lista[1].value), parseInt(lista[3].value)) == lista[3].value) cont[1]++;
        else {
            cont[0]++;
            cont[1]++;
        }

        if (mayor(parseInt(lista[5].value), parseInt(lista[7].value)) == lista[5].value) cont[2]++;
        else if (mayor(parseInt(lista[5].value), parseInt(lista[7].value)) == lista[7].value) cont[3]++;
        else {
            cont[2]++;
            cont[3]++;
        }

        let resultado = document.querySelector('.resultado-juegos');
        resultado.textContent = "Equilibrio de Nash: ";
        for (let i = 0; i < 4; i++) {
            if (cont[i] == 2) {
                resultado.textContent += aux[i] + "  ";
            }
        }
    } else {
        let aux = ['(A;A)', '(A;B)', '(A;C)', '(B;A)', '(B;B)', '(B;C)', '(C;A)', '(C;B)', '(C;C)'];
        let cont = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        if (mayor2(parseInt(lista[0].value), parseInt(lista[6].value), parseInt(lista[12].value)) == 'a') cont[0]++;
        else if (mayor2(parseInt(lista[0].value), parseInt(lista[6].value), parseInt(lista[12].value)) == 'b') cont[3]++;
        else if (mayor2(parseInt(lista[0].value), parseInt(lista[6].value), parseInt(lista[12].value)) == 'c') cont[6]++;
        else if (mayor2(parseInt(lista[0].value), parseInt(lista[6].value), parseInt(lista[12].value)) == 'ab') {
            cont[0]++;
            cont[3]++;
        } else if (mayor2(parseInt(lista[0].value), parseInt(lista[6].value), parseInt(lista[12].value)) == 'ac') {
            cont[0]++;
            cont[6]++;
        } else if (mayor2(parseInt(lista[0].value), parseInt(lista[6].value), parseInt(lista[12].value)) == 'bc') {
            cont[3]++;
            cont[6]++;
        } else {
            cont[0]++;
            cont[3]++;
            cont[6]++;
        }

        if (mayor2(parseInt(lista[2].value), parseInt(lista[8].value), parseInt(lista[14].value)) == 'a') cont[1]++;
        else if (mayor2(parseInt(lista[2].value), parseInt(lista[8].value), parseInt(lista[14].value)) == 'b') cont[4]++;
        else if (mayor2(parseInt(lista[2].value), parseInt(lista[8].value), parseInt(lista[14].value)) == 'c') cont[7]++;
        else if (mayor2(parseInt(lista[2].value), parseInt(lista[8].value), parseInt(lista[14].value)) == 'ab') {
            cont[1]++;
            cont[4]++;
        } else if (mayor2(parseInt(lista[2].value), parseInt(lista[8].value), parseInt(lista[14].value)) == 'ac') {
            cont[1]++;
            cont[7]++;
        } else if (mayor2(parseInt(lista[2].value), parseInt(lista[8].value), parseInt(lista[14].value)) == 'bc') {
            cont[4]++;
            cont[7]++;
        } else {
            cont[1]++;
            cont[4]++;
            cont[7]++;
        }

        if (mayor2(parseInt(lista[4].value), parseInt(lista[10].value), parseInt(lista[16].value)) == 'a') cont[2]++;
        else if (mayor2(parseInt(lista[4].value), parseInt(lista[10].value), parseInt(lista[16].value)) == 'b') cont[5]++;
        else if (mayor2(parseInt(lista[4].value), parseInt(lista[10].value), parseInt(lista[16].value)) == 'c') cont[8]++;
        else if (mayor2(parseInt(lista[4].value), parseInt(lista[10].value), parseInt(lista[16].value)) == 'ab') {
            cont[2]++;
            cont[5]++;
        } else if (mayor2(parseInt(lista[4].value), parseInt(lista[10].value), parseInt(lista[16].value)) == 'ac') {
            cont[2]++;
            cont[8]++;
        } else if (mayor2(parseInt(lista[4].value), parseInt(lista[10].value), parseInt(lista[16].value)) == 'bc') {
            cont[5]++;
            cont[8]++;
        } else {
            cont[2]++;
            cont[5]++;
            cont[8]++;
        }

        if (mayor2(parseInt(lista[1].value), parseInt(lista[3].value), parseInt(lista[5].value)) == 'a') cont[0]++;
        else if (mayor2(parseInt(lista[1].value), parseInt(lista[3].value), parseInt(lista[5].value)) == 'b') cont[1]++;
        else if (mayor2(parseInt(lista[1].value), parseInt(lista[3].value), parseInt(lista[5].value)) == 'c') cont[2]++;
        else if (mayor2(parseInt(lista[1].value), parseInt(lista[3].value), parseInt(lista[5].value)) == 'ab') {
            cont[0]++;
            cont[1]++;
        } else if (mayor2(parseInt(lista[1].value), parseInt(lista[3].value), parseInt(lista[5].value)) == 'ac') {
            cont[0]++;
            cont[2]++;
        } else if (mayor2(parseInt(lista[1].value), parseInt(lista[3].value), parseInt(lista[5].value)) == 'bc') {
            cont[1]++;
            cont[2]++;
        } else {
            cont[0]++;
            cont[1]++;
            cont[2]++;
        }

        if (mayor2(parseInt(lista[7].value), parseInt(lista[9].value), parseInt(lista[11].value)) == 'a') cont[3]++;
        else if (mayor2(parseInt(lista[7].value), parseInt(lista[9].value), parseInt(lista[11].value)) == 'b') cont[4]++;
        else if (mayor2(parseInt(lista[7].value), parseInt(lista[9].value), parseInt(lista[11].value)) == 'c') cont[5]++;
        else if (mayor2(parseInt(lista[7].value), parseInt(lista[9].value), parseInt(lista[11].value)) == 'ab') {
            cont[3]++;
            cont[4]++;
        } else if (mayor2(parseInt(lista[7].value), parseInt(lista[9].value), parseInt(lista[11].value)) == 'ac') {
            cont[3]++;
            cont[5]++;
        } else if (mayor2(parseInt(lista[7].value), parseInt(lista[9].value), parseInt(lista[11].value)) == 'bc') {
            cont[4]++;
            cont[5]++;
        } else {
            cont[3]++;
            cont[4]++;
            cont[5]++;
        }

        if (mayor2(parseInt(lista[13].value), parseInt(lista[15].value), parseInt(lista[17].value)) == 'a') cont[6]++;
        else if (mayor2(parseInt(lista[13].value), parseInt(lista[15].value), parseInt(lista[17].value)) == 'b') cont[7]++;
        else if (mayor2(parseInt(lista[13].value), parseInt(lista[15].value), parseInt(lista[17].value)) == 'c') cont[8]++;
        else if (mayor2(parseInt(lista[13].value), parseInt(lista[15].value), parseInt(lista[17].value)) == 'ab') {
            cont[6]++;
            cont[7]++;
        } else if (mayor2(parseInt(lista[13].value), parseInt(lista[15].value), parseInt(lista[17].value)) == 'ac') {
            cont[6]++;
            cont[8]++;
        } else if (mayor2(parseInt(lista[13].value), parseInt(lista[15].value), parseInt(lista[17].value)) == 'bc') {
            cont[7]++;
            cont[8]++;
        } else {
            cont[6]++;
            cont[7]++;
            cont[8]++;
        }

        let resultado = document.querySelector('.resultado-juegos');
        resultado.textContent = "Equilibrio de Nash: ";
        for (let i = 0; i < 9; i++) {
            if (cont[i] == 2) {
                resultado.textContent += aux[i] + '  ';
            }
        }
    }
}

function EstrategiaMixta() {
    if (tam_juegos !== 2) {
        alert("La estrategia mixta solo está implementada para juegos 2x2.");
        return;
    }
    let lista = document.querySelectorAll('.txtvalor');
    let A = [
        [parseFloat(lista[0].value), parseFloat(lista[2].value)],
        [parseFloat(lista[4].value), parseFloat(lista[6].value)]
    ];

    function decimalAFraccion(decimal, maxDen = 1000) {
        if (isNaN(decimal)) return "NaN";
        let sign = decimal < 0 ? "-" : "";
        decimal = Math.abs(decimal);
        let num = decimal, den = 1;
        while (Math.abs(num - Math.round(num)) > 1e-8 && den < maxDen) {
            num *= 10;
            den *= 10;
        }
        let gcd = function(a, b) { return b ? gcd(b, a % b) : a; };
        let numerador = Math.round(num);
        let denominador = den;
        let divisor = gcd(numerador, denominador);
        return sign + (numerador / divisor) + "/" + (denominador / divisor);
    }

    function eliminarDominadas2x2(A) {
        // filas
        for (let i = 0; i < 2; i++) {
            let j = 1 - i;
            if (A[i][0] <= A[j][0] && A[i][1] <= A[j][1] && (A[i][0] < A[j][0] || A[i][1] < A[j][1])) {
                return {tipo: 'fila', idx: i};
            }
        }
        // columnas
        for (let i = 0; i < 2; i++) {
            let j = 1 - i;
            if (A[0][i] >= A[0][j] && A[1][i] >= A[1][j] && (A[0][i] > A[0][j] || A[1][i] > A[1][j])) {
                return {tipo: 'columna', idx: i};
            }
        }
        return null;
    }

let filas = ['A', 'B'];
let columnas = ['X', 'Y'];
let equilibrioPuro = null;
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
        let esMaxCol = (A[i][j] >= A[1 - i][j]);
        let esMaxFila = (A[i][j] >= A[i][1 - j]);
        if (esMaxCol && esMaxFila) {
            equilibrioPuro = {fila: filas[i], columna: columnas[j], valor: A[i][j]};
        }
    }
}

    let a = A[0][0], b = A[0][1], c = A[1][0], d = A[1][1];
    let denominador = (a - b - c + d);
    let p = denominador !== 0 ? (d - b) / denominador : null;
    let q = denominador !== 0 ? (d - c) / denominador : null;

    let resultado = document.querySelector('.resultado-juegos');
    resultado.innerHTML = "<b>Estrategia mixta Nash:</b><br>";

    let dominada = eliminarDominadas2x2(A);
    if (dominada) {
        if (dominada.tipo === 'fila') {
            resultado.innerHTML += `Primero se elimina la fila <b>${filas[dominada.idx]}</b>.<br>`;
        } else {
            resultado.innerHTML += `Primero se elimina la columna <b>${columnas[dominada.idx]}</b>.<br>`;
        }
    } else {
        resultado.innerHTML += "No hay estrategias puras dominadas.<br>";
    }

    if (equilibrioPuro) {
        resultado.innerHTML += `<br><span class="text-success">Equilibrio de Nash en estrategias puras: (<b>${equilibrioPuro.fila}, ${equilibrioPuro.columna}</b>) con valor <b>${equilibrioPuro.valor}</b></span><br>`;
    } else {
        resultado.innerHTML += `<br><span class="text-warning">No hay equilibrio de Nash en estrategias puras.</span><br>`;
    }

    resultado.innerHTML += `<br>Probabilidades:<br>`;
    resultado.innerHTML += `Jugador 1 (A, B): [${p !== null ? decimalAFraccion(p) : 'No calculable'}, ${p !== null ? decimalAFraccion(1 - p) : 'No calculable'}]<br>`;
    resultado.innerHTML += `Jugador 2 (X, Y): [${q !== null ? decimalAFraccion(q) : 'No calculable'}, ${q !== null ? decimalAFraccion(1 - q) : 'No calculable'}]<br>`;

    resultado.innerHTML += `<br>Punto de equilibrio:<br>`;
    resultado.innerHTML += `(<b>${p !== null ? decimalAFraccion(p) + 'A' : '-'} + ${p !== null ? decimalAFraccion(1 - p) + 'B' : '-'}</b> ; <b>${q !== null ? decimalAFraccion(q) + 'X' : '-'} + ${q !== null ? decimalAFraccion(1 - q) + 'Y' : '-'}</b>)<br>`;

    if (p === null || q === null || isNaN(p) || isNaN(q)) {
        resultado.innerHTML += `<span class="text-danger">No existe solución mixta válida para estos valores.</span>`;
    } else if (p < 0 || p > 1 || q < 0 || q > 1) {
        resultado.innerHTML += `<span class="text-warning">Las probabilidades no forman una distribución válida (hay valores negativos o mayores a 1).</span>`;
    } else {
        resultado.innerHTML += `<span class="text-success">Solución mixta válida.</span>`;
    }
}

function EstrategiaMixta3x3() {
    if (tam_juegos !== 3) {
        alert("La estrategia mixta solo está implementada para juegos 3x3.");
        return;
    }
    let lista = document.querySelectorAll('.txtvalor');
    let A = [
        [parseFloat(lista[0].value), parseFloat(lista[2].value), parseFloat(lista[4].value)],
        [parseFloat(lista[6].value), parseFloat(lista[8].value), parseFloat(lista[10].value)],
        [parseFloat(lista[12].value), parseFloat(lista[14].value), parseFloat(lista[16].value)]
    ];

    function solveMixedStrategy3x3(A) {
        let M = [
            [A[0][0] - A[0][1], A[1][0] - A[1][1], A[2][0] - A[2][1]],
            [A[0][0] - A[0][2], A[1][0] - A[1][2], A[2][0] - A[2][2]],
            [1, 1, 1]
        ];
        let B = [0, 0, 1];
        function det3(m) {
            return m[0][0]*(m[1][1]*m[2][2] - m[1][2]*m[2][1])
                 - m[0][1]*(m[1][0]*m[2][2] - m[1][2]*m[2][0])
                 + m[0][2]*(m[1][0]*m[2][1] - m[1][1]*m[2][0]);
        }
        function solve3x3(M, B) {
            let D = det3(M);
            if (D === 0) return null;
            let M1 = [
                [B[0], M[0][1], M[0][2]],
                [B[1], M[1][1], M[1][2]],
                [B[2], M[2][1], M[2][2]]
            ];
            let M2 = [
                [M[0][0], B[0], M[0][2]],
                [M[1][0], B[1], M[1][2]],
                [M[2][0], B[2], M[2][2]]
            ];
            let M3 = [
                [M[0][0], M[0][1], B[0]],
                [M[1][0], M[1][1], B[1]],
                [M[2][0], M[2][1], B[2]]
            ];
            let p1 = det3(M1) / D;
            let p2 = det3(M2) / D;
            let p3 = det3(M3) / D;
            return [p1, p2, p3];
        }
        let p = solve3x3(M, B);
        return p;
    }

    function transpose(M) {
        return M[0].map((_, i) => M.map(row => row[i]));
    }

    function decimalAFraccion(decimal, maxDen = 1000) {
        if (isNaN(decimal)) return "NaN";
        let sign = decimal < 0 ? "-" : "";
        decimal = Math.abs(decimal);
        let num = decimal, den = 1;
        while (Math.abs(num - Math.round(num)) > 1e-8 && den < maxDen) {
            num *= 10;
            den *= 10;
        }
        let gcd = function(a, b) { return b ? gcd(b, a % b) : a; };
        let numerador = Math.round(num);
        let denominador = den;
        let divisor = gcd(numerador, denominador);
        return sign + (numerador / divisor) + "/" + (denominador / divisor);
    }

    function eliminarDominadas(A) {
        // filas
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (i !== j) {
                    let dominada = true;
                    for (let k = 0; k < 3; k++) {
                        if (A[i][k] > A[j][k]) dominada = false;
                    }
                    if (dominada) return {tipo: 'fila', idx: i};
                }
            }
        }
        // columnas
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (i !== j) {
                    let dominada = true;
                    for (let k = 0; k < 3; k++) {
                        if (A[k][i] < A[k][j]) dominada = false;
                    }
                    if (dominada) return {tipo: 'columna', idx: i};
                }
            }
        }
        return null;
    }

    let p = solveMixedStrategy3x3(A); // Jugador 1 (A,B,C)
    let q = solveMixedStrategy3x3(transpose(A)); // Jugador 2 (X,Y,Z)

    let filas = ['A', 'B', 'C'];
    let columnas = ['X', 'Y', 'Z'];

    let resultado = document.querySelector('.resultado-juegos');
    resultado.innerHTML = "<b>Estrategia mixta Nash:</b><br>";

    let dominada = eliminarDominadas(A);
    let filaEliminada = "-";
    let columnaEliminada = "-";
    if (dominada) {
        if (dominada.tipo === 'fila') {
            filaEliminada = filas[dominada.idx];
            resultado.innerHTML += `Primero se elimina la fila <b>${filaEliminada}</b>.<br>`;
            let A2 = A.filter((_, idx) => idx !== dominada.idx);
            let colDominada = eliminarDominadas(transpose(A2));
            if (colDominada && colDominada.tipo === 'fila') {
                columnaEliminada = columnas[colDominada.idx];
                resultado.innerHTML += `Luego eliminamos la columna <b>${columnaEliminada}</b>.<br>`;
            }
        } else {
            columnaEliminada = columnas[dominada.idx];
            resultado.innerHTML += `Primero se elimina la columna <b>${columnaEliminada}</b>.<br>`;
            let A2 = A.map(row => row.filter((_, idx) => idx !== dominada.idx));
            let filaDominada = eliminarDominadas(A2);
            if (filaDominada && filaDominada.tipo === 'fila') {
                filaEliminada = filas[filaDominada.idx];
                resultado.innerHTML += `Luego eliminamos la fila <b>${filaEliminada}</b>.<br>`;
            }
        }
    } else {
        resultado.innerHTML += "No hay estrategias puras dominadas.<br>";
    }

    resultado.innerHTML += `<br>Probabilidades:<br>`;
    resultado.innerHTML += `Jugador 1 (A, B, C): [${p ? p.map(x => decimalAFraccion(x)).join(', ') : 'No calculable'}]<br>`;
    resultado.innerHTML += `Jugador 2 (X, Y, Z): [${q ? q.map(x => decimalAFraccion(x)).join(', ') : 'No calculable'}]<br>`;

    resultado.innerHTML += `<br>Punto de equilibrio:<br>`;
    resultado.innerHTML += `(<b>${p ? p.map((x, i) => decimalAFraccion(x) + filas[i]).join(' + ') : '-'}</b> ; <b>${q ? q.map((x, i) => decimalAFraccion(x) + columnas[i]).join(' + ') : '-'}</b>)<br>`;

    if (!p || !q || p.some(x => isNaN(x)) || q.some(x => isNaN(x))) {
        resultado.innerHTML += `<span class="text-danger">No existe solución mixta válida para estos valores.</span>`;
    } else if (p.some(x => x < 0 || x > 1) || q.some(x => x < 0 || x > 1)) {
        resultado.innerHTML += `<span class="text-warning">Las probabilidades no forman una distribución válida (hay valores negativos o mayores a 1).</span>`;
    } else {
        resultado.innerHTML += `<span class="text-success">Solución mixta válida.</span>`;
    }
}
