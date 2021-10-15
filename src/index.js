const express = require("express");
const app = express();
const morgan = require('morgan')

//SERVIDOR Y MIDDLEWARS
app.set("port", 3000);
app.use(morgan("tiny"))
app.use(express.json());
app.listen(app.get("port"), () => {

    console.log("SERVER ON PORT", app.get("port"));

})

var a = [];
var v = [];
var index;
var pruebag;
var pruebap = true;
var count = 0;
var c = true;
var limpieza
    //FUNCIONES

function eliminador(edif, z) {



    let obj = edif.find((x, i) => {


        if (x.id === z) {


            var eliminacion = edif.splice(i, 1);
            c = false;
            prueba = true;


            return true;
        } else {
            prueba = false;
        }
    });

    return true;
}

function buscador(a, z) {
    let obj = a.find((x, i) => {

        if (x.id === z) {

            pruebag = true;
            index = i;
            return true;
        } else {
            pruebag = false;
        }
    });

    return true;
}

function actualizar(a, z, array) {
    let obj = a.find((x, i) => {

        if (x.id === z) {

            a[i] = array;

            pruebap = true;
            return true;
        } else {
            pruebap = false;
        }

    });

    return true;
}


function clean(a) {

    limpieza = a.filter(function(d) {
        return d != null;
    });

    return true;
}


//MÉTODOS CASA

//GET BIENVENIDA





app.get("/:nombre?/:apellido?", function(req, res) {


    valor = req.params.nombre;
    valor2 = req.params.apellido;


    if (valor == undefined && valor2 == undefined) {

        res.send("Bienvenido al administrador de ciudad! Aún me falta saber tu nombre y apellido");
    } else {

        res.send("¡Bienvenido " + valor + " " + valor2 + " al administrador de la cuidad!");

    }



})

//POST ENTRADA DE DATOS

var i = 0;

app.post("/controlador/casa", function(req, res) {

    a[i] = req.body;
    i = i + 1;

    clean(a)

    a = limpieza;
    count = count + 1;
    res.send(a);


})

var z;
var array = {};

//GET BUSCA UNA CASA POR SU ID

app.get("/controlador/casa/:id", function(req, res) {

    z = parseInt(req.params.id);

    buscador(a, z);
    if (pruebag == true) {
        res.send(a[index]);
    } else {
        res.send("No existe estructura con ese id: " + z);
    }
    res.end();

})

//PUT CASA

app.put("/controlador/casa", function(req, res) {

    z = parseInt(req.body.id);
    array = req.body;

    actualizar(a, z, array);

    if (pruebap === true) {

        res.send({ a });


    } else {
        res.send("No existe estructura con ese id: " + z);
    }



})

//DELETE CASA
app.delete("/controlador/casa/:id", function(req, res) {

    z = parseInt(req.params.id);

    eliminador(a, z);

    if (prueba == false) {
        res.send("No existe ninguna estructura con ese id: " + z);
    } else {

        count = count - 1;
        if (Object.keys(a).length === 0) {
            res.send("Se ha eliminado la unica estructura existente.");
        } else {

            res.send(a);
        }
    }








})

//METODOS-EDIFICIO
var e = 0;
var edif = [{}];

//POST

app.post("/controlador/edificio", function(req, res) {


    edif[e] = req.body;
    e = e + 1;

    clean(edif);
    edif = limpieza;

    count = count + 1;
    res.send({ edif });


});


//GET

app.get("/controlador/edificio/:id", function(req, res) {

    z = parseInt(req.params.id);

    buscador(edif, z);
    if (pruebag == true) {
        res.send(edif[index]);
    } else {
        res.send("No existe ninguna estructura con ese id: " + z);
    }

    res.end();

})

//PUT edificio

app.put("/controlador/edificio", function(req, res) {

    z = parseInt(req.body.id);
    array = req.body;


    actualizar(edif, z, array);

    if (pruebap === true) {

        res.send({ edif });


    } else {
        res.send("No existe ninguna estructura con ese id: " + z);
    };






})

var prueba = true;

//DELETE edificio




app.delete("/controlador/edificio/:id", function(req, res) {

    z = parseInt(req.params.id);


    eliminador(edif, z);

    if (prueba == false) {
        res.send("No existe ninguna estructura con ese i: " + z);
    } else {
        count = count - 1;

        if (Object.keys(edif).length === 0) {
            res.send("Se ha eliminado la unica estructura existente.");
        } else {

            res.send({ edif });
        }
    }


})

//APT
var apt = [{}];
var o = 0;

app.post("/controlador/apt", function(req, res) {


    apt[o] = req.body;
    o = o + 1;

    clean(apt);
    apt = limpieza;


    count = count + 1;
    res.send({ apt });


});

var z;
var array = {};

//GET BUSCA UNA APT POR SU ID

app.get("/controlador/apt/:id", function(req, res) {

    z = parseInt(req.params.id);

    buscador(apt, z);
    if (pruebag == true) {
        res.send(apt[index]);
    } else {
        res.send("No existe ninguna estructura con ese id: " + z);
    }
    res.end();



})

//PUT APT

app.put("/controlador/apt", function(req, res) {

    z = parseInt(req.body.id);
    array = req.body;

    actualizar(apt, z, array);

    if (pruebap === true) {

        res.send({ apt });


    } else {
        res.send("No existe ninguna estructura con ese id: " + z);
    }



})

//DELETE APT
app.delete("/controlador/apt/:id", function(req, res) {

    z = parseInt(req.params.id);

    eliminador(apt, z);

    if (prueba == false) {
        res.send("No existe ninguna estructura con ese id: " + z);
    } else {

        count = count - 1;

        if (Object.keys(apt).length === 0) {
            res.send("Se ha eliminado la unica estructura existente.");
        } else {

            res.send({ apt });
        }
    }

})

//PARQUESS

var par = [{}];
var u = 0;


app.post("/controlador/par", function(req, res) {


    par[u] = req.body;
    u = u + 1;

    clean(par);
    par = limpieza;

    res.send({ par });

})

var z;
var array = {};

//GET BUSCA UNA PAR POR SU ID

app.get("/controlador/par/:id", function(req, res) {

    z = parseInt(req.params.id);

    buscador(par, z);
    if (pruebag == true) {
        res.send(par[index]);
    } else {
        res.send("No existe ninguna estructura con ese id: " + z);
    }
    res.end();



})

//PUT PAR

app.put("/controlador/par", function(req, res) {

    z = parseInt(req.body.id);
    array = req.body;



    actualizar(par, z, array);

    if (pruebap === true) {

        res.send({ par });


    } else {
        res.send("No existe ninguna estructura con ese id: " + z);
    }


})

//DELETE PAR
app.delete("/controlador/par/:id", function(req, res) {

    z = parseInt(req.params.id);

    eliminador(par, z);

    if (prueba == false) {
        res.send("No existe ninguna estructura con ese id: " + z);
    } else {
        if (Object.keys(par).length === 0) {
            res.send("Se ha eliminado la unica estructura existente.");
        } else {

            res.send({ par });
        }
    }

})

//ZONA COMERCIAL

var zcomercio = [{}];
var r = 0;

app.post("/controlador/zcomercio", function(req, res) {


    zcomercio[r] = req.body;
    r = r + 1;

    clean(zcomercio);
    zcomercio = limpieza;

    count = count + 1;
    res.send({ zcomercio });


})

var z;
var array = {};

//GET BUSCA UNA ZCOMERCIO POR SU ID

app.get("/controlador/zcomercio/:id", function(req, res) {

    z = parseInt(req.params.id);

    buscador(zcomercio, z);
    if (pruebag == true) {
        res.send(zcomercio[index]);
    } else {
        res.send("No existe ninguna estructura con ese id: " + z);
    }
    res.end();



})

//PUT ZCOMERCIO
app.put("/controlador/zcomercio", function(req, res) {

    z = parseInt(req.body.id);
    array = req.body;



    actualizar(zcomercio, z, array);

    if (pruebap === true) {

        res.send({ zcomercio });


    } else {
        res.send("No existe ninguna estructura con ese id: " + z);
    }


    // res.send({ a })


})

//DELETE ZCOMERCIO
app.delete("/controlador/zcomercio/:id", function(req, res) {

    z = parseInt(req.params.id);

    eliminador(zcomercio, z);

    if (prueba == false) {
        res.send("No existe ninguna estructura con ese id: " + z);
    } else {

        count = count - 1;

        if (Object.keys(zcomercio).length === 0) {
            res.send("Se ha eliminado la unica estructura existente.");
        } else {

            res.send({ zcomercio });
        }


    }

})


//PUENTE

var pt = [{}];
var q = 0;

app.post("/controlador/pt", function(req, res) {


    pt[q] = req.body;
    q = q + 1;

    clean(pt);
    pt = limpieza;

    count = count + 1;
    res.send({ pt });


})

var z;
var array = {};

//GET BUSCA UNA APT POR SU ID

app.get("/controlador/pt/:id", function(req, res) {

    z = parseInt(req.params.id);

    buscador(pt, z);
    if (pruebag == true) {
        res.send(pt[index]);
    } else {
        res.send("No existe ninguna estructura con ese id: " + z);
    }
    res.end();



})

//PUT APT

app.put("/controlador/pt", function(req, res) {

    z = parseInt(req.body.id);
    array = req.body;



    actualizar(pt, z, array);

    if (pruebap === true) {

        res.send({ pt });


    } else {
        res.send("No existe ninguna estructura con ese id: " + z);
    }



})

//DELETE APT
app.delete("/controlador/pt/:id", function(req, res) {

    z = parseInt(req.params.id);

    eliminador(pt, z);

    if (prueba == false) {
        res.send("No existe ninguna estructura con ese id: " + z);
    } else {

        count = count - 1;
        if (Object.keys(pt).length === 0) {
            res.send("Se ha eliminado la unica estructura existente.");
        } else {

            res.send({ pt });
        }

    }

})

//CARRETERA

var carretera = [{}];
var s = 0;

app.post("/controlador/carretera", function(req, res) {


    carretera[s] = req.body;
    s = s + 1;

    clean(carretera);
    carretera = limpieza;



    count = count + 1;
    res.send({ carretera });


})

var z;
var array = {};

//GET BUSCA UNA APT POR SU ID

app.get("/controlador/carretera/:id", function(req, res) {

    z = parseInt(req.params.id);

    buscador(carretera, z);
    if (pruebag == true) {
        res.send(carretera[index]);
    } else {
        res.send("No existe ninguna estructura con ese id: " + z);
    }
    res.end();



})

//PUT APT

app.put("/controlador/carretera", function(req, res) {

    z = parseInt(req.body.id);
    array = req.body;



    actualizar(carretera, z, array);

    if (pruebap === true) {

        res.send({ carretera });


    } else {
        res.send("No existe ninguna estructura con ese id: " + z);
    }





})

//DELETE APT
app.delete("/controlador/carretera/:id", function(req, res) {

    z = parseInt(req.params.id);

    eliminador(carretera, z);

    if (prueba == false) {
        res.send("No existe ninguna estructura con ese id: " + z);
    } else {
        count = count - 1;
        if (Object.keys(carretera).length === 0) {
            res.send("Se ha eliminado la unica estructura existente.");
        } else {

            res.send({ carretera });
        }


    }

})


//CREADAS

app.get("/controlador/creadas/count", (req, res) => {

    res.send("Se han creado " + count + " estructuras");
})