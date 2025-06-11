/**
 * Sepa 2022
 * INT Meetings 2022
 * José Blanco - blanco.name.es
 * ==================================================================================
 */

var totalSangrado  = 0;
var totalPlaca     = 0;
var totalAnchura   = 0;
var totalDientes   = 32;
var charts         = [];
var datosCharts    = [];

var datosPaciente = {
    "FechaRegistro":"",
    "NumExp":"", 
    "Apellidos":"", 
    "Nombre":"",
    "FechaNacimiento":"",
    "Comentarios":""
}

var piezas = {
    "11":{"status":1,"implante":0,"movilidad":0,"pronóstico":"","encia":0,"nota":"",
        "vest":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0},
        "pala":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0}
        },
    "12":{"status":1,"implante":0,"movilidad":0,"pronóstico":"","encia":0,"nota":"",
        "vest":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0},
        "pala":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0}
        },
    "13":{"status":1,"implante":0,"movilidad":0,"pronóstico":"","encia":0,"nota":"",
        "vest":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0},
        "pala":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0}
        },
    "14":{"status":1,"implante":0,"movilidad":0,"pronóstico":"","encia":0,"nota":"","furca-a":0,"furca-b":0,
        "vest":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0},
        "pala":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0}
        },
    "15":{"status":1,"implante":0,"movilidad":0,"pronóstico":"","encia":0,"nota":"",
        "vest":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0},
        "pala":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0}
        },
    "16":{"status":1,"implante":0,"movilidad":0,"pronóstico":"","encia":0,"nota":"","furca":0,"furca-a":0,"furca-b":0,
        "vest":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0},
        "pala":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0}
        },
    "17":{"status":1,"implante":0,"movilidad":0,"pronóstico":"","encia":0,"nota":"","furca":0,"furca-a":0,"furca-b":0,
        "vest":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0},
        "pala":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0}
        },
    "18":{"status":1,"implante":0,"movilidad":0,"pronóstico":"","encia":0,"nota":"","furca":0,"furca-a":0,"furca-b":0,
        "vest":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0},
        "pala":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0}
        },
    

    "21":{"status":1,"implante":0,"movilidad":0,"pronóstico":"","encia":0,"nota":"",
        "vest":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0},
        "pala":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0}
        },
    "22":{"status":1,"implante":0,"movilidad":0,"pronóstico":"","encia":0,"nota":"",
        "vest":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0},
        "pala":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0}
        },
    "23":{"status":1,"implante":0,"movilidad":0,"pronóstico":"","encia":0,"nota":"",
        "vest":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0},
        "pala":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0}
        },
    "24":{"status":1,"implante":0,"movilidad":0,"pronóstico":"","encia":0,"nota":"","furca-a":0,"furca-b":0,
        "vest":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0},
        "pala":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0}
        },
    "25":{"status":1,"implante":0,"movilidad":0,"pronóstico":"","encia":0,"nota":"",
        "vest":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0},
        "pala":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0}
        },
    "26":{"status":1,"implante":0,"movilidad":0,"pronóstico":"","encia":0,"nota":"","furca":0,"furca-a":0,"furca-b":0,
        "vest":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0},
        "pala":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0}
        },
    "27":{"status":1,"implante":0,"movilidad":0,"pronóstico":"","encia":0,"nota":"","furca":0,"furca-a":0,"furca-b":0,
        "vest":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0},
        "pala":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0}
        },
    "28":{"status":1,"implante":0,"movilidad":0,"pronóstico":"","encia":0,"nota":"","furca":0,"furca-a":0,"furca-b":0,
        "vest":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0},
        "pala":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0}
        },


    "31":{"status":1,"implante":0,"movilidad":0,"pronóstico":"","encia":0,"nota":"",
        "ling":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0},
        "vest":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0}
    },
    "32":{"status":1,"implante":0,"movilidad":0,"pronóstico":"","encia":0,"nota":"",
        "ling":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0},
        "vest":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0}
        },
    "33":{"status":1,"implante":0,"movilidad":0,"pronóstico":"","encia":0,"nota":"",
        "ling":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0},
        "vest":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0}
        },
    "34":{"status":1,"implante":0,"movilidad":0,"pronóstico":"","encia":0,"nota":"",
        "ling":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0},
        "vest":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0}
        },
    "35":{"status":1,"implante":0,"movilidad":0,"pronóstico":"","encia":0,"nota":"",
        "ling":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0},
        "vest":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0}
        },
    "36":{"status":1,"implante":0,"movilidad":0,"pronóstico":"","encia":0,"nota":"","furca":0,"furca-a":0,
        "ling":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0},
        "vest":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0}
    },
    "37":{"status":1,"implante":0,"movilidad":0,"pronóstico":"","encia":0,"nota":"","furca":0,"furca-a":0,
        "ling":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0},
        "vest":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0}
    },
    "38":{"status":1,"implante":0,"movilidad":0,"pronóstico":"","encia":0,"nota":"","furca":0,"furca-a":0,
        "ling":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0},
        "vest":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0}
    },

    "41":{"status":1,"implante":0,"movilidad":0,"pronóstico":"","encia":0,"nota":"",
        "ling":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0},
        "vest":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0}
        },
    "42":{"status":1,"implante":0,"movilidad":0,"pronóstico":"","encia":0,"nota":"",
        "ling":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0},
        "vest":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0}
        },
    "43":{"status":1,"implante":0,"movilidad":0,"pronóstico":"","encia":0,"nota":"",
        "ling":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0},
        "vest":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0}
        },
    "44":{"status":1,"implante":0,"movilidad":0,"pronóstico":"","encia":0,"nota":"",
        "ling":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0},
        "vest":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0}
        },
    "45":{"status":1,"implante":0,"movilidad":0,"pronóstico":"","encia":0,"nota":"",
        "ling":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0},
        "vest":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0}
        },
    "46":{"status":1,"implante":0,"movilidad":0,"pronóstico":"","encia":0,"nota":"","furca":0,"furca-a":0,
        "ling":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0},
        "vest":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0}
        },
    "47":{"status":1,"implante":0,"movilidad":0,"pronóstico":"","encia":0,"nota":"","furca":0,"furca-a":0,
        "ling":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0},
        "vest":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0}
        },
    "48":{"status":1,"implante":0,"movilidad":0,"pronóstico":"","encia":0,"nota":"","furca":0,"furca-a":0,
        "ling":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0},
        "vest":{"sangrado-a":0,"sangrado-b":0,"sangrado-c":0,"supuracion-a":0,"supuracion-b":0,"supuracion-c":0,"placa-a":0,"placa-b":0,"placa-c":0,"margen-a":0,"margen-b":0,"margen-c":0,"sondaje-a":0,"sondaje-b":0,"sondaje-c":0}
        },

    
};

const camposPiezas = [
    "m__n__",
    "i__n__",
    "f__n__",
    "n__n__",
    "sa__n__-a",
    "sa__n__-b",
    "sa__n__-c",
    "su__n__-a",
    "su__n__-b",
    "su__n__-c",
    "p__n__-a",
    "p__n__-b",
    "p__n__-c",
    "mg__n__-a",
    "mg__n__-b",
    "mg__n__-c",
    "ps__n__-a",
    "ps__n__-b",
    "ps__n__-c",
    "mg__n__-a",
    "mg__n__-b",
    "mg__n__-c",
    "ps__n__-a",
    "ps__n__-b",
    "ps__n__-c",
    "diente__n__b-a",
    "m__n__b",
    "i__n__b",
    "f__n__",
    "f__n__b", /**/
    "f__n__-a",
    "f__n__-b",
    "f__n__b-a",
    "f__n__b-b",
    "sa__n__b-a",
    "sa__n__b-b",
    "sa__n__b-c",
    "su__n__b-a",
    "su__n__b-b",
    "su__n__b-c",
    "p__n__b-a",
    "p__n__b-b",
    "p__n__b-c",
    "mg__n__b-a",
    "mg__n__b-b",
    "mg__n__b-c",
    "ps__n__b-a",
    "ps__n__b-b",
    "ps__n__b-c",
    "mg__n__b-a",
    "mg__n__b-b",
    "mg__n__b-c",
    "ps__n__b-a",
    "ps__n__b-b",
    "ps__n__b-c",
    "furca__n__",
    "furca__n__-a",
    "furca__n__-b",
    "ae__n__",
    ".pi__n__",
    ".pi__n__b"
];

const camposImplante = ["furca__n__","furca__n__-a","furca__n__-b","f__n__","f__n__b","f__n__b-a","f__n__b-b","f__n__-a","f__n__-b"];






(function($) {          



    // Tooltips. Instantiate all tooltips
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
    .forEach(tooltip => {
        new bootstrap.Tooltip(tooltip)
    });



    // Inputs. Simula TAB al pulsar ENTER
    var tabla = document.getElementById('datos-periodontograma');
    var inputs = tabla.querySelectorAll('input[tabindex]');
   
    inputs.forEach(input => {
        input.addEventListener("keydown", (event) => {
            if (event.key == "Enter" || event.code == "Enter" ) {
                var tabindex = $(event.target).prop('tabIndex');
                var next = tabindex+1;
                $('[tabindex="'+next+'"]').focus();
            }       
        }, true);
    });


    // Profundidad de sonsaje. 
    // Focus automático al siguiente input después de introducir valor
    var inputsPS = document.querySelectorAll('[id^="ps"]');   
    inputsPS.forEach(input => {
        input.addEventListener("keyup", (event) => {
            if (event.key == "-" || 
                event.key == "Backspace" || 
                event.key == "Delete"  || 
                event.key == "ArrowLeft" || 
                event.key == "ArrowRight"  || 
                event.key == "Enter"   || 
                event.key == "Tab"){
                // Símbolo negativo y teclas especiales: no hacemos nada
            }else{     
                var tabindex = $(event.target).prop('tabIndex');
                var next = tabindex+1;
                $('[id^="ps"][tabindex="'+next+'"]').focus();    
            }            
        }, true);
    });


    // Margen gingival. 
    // Focus automático al siguiente input después de introducir valor
    var inputsMG = document.querySelectorAll('[id^="mg"]');   
    inputsMG.forEach(input => {
        input.addEventListener("keyup", (event) => {             
            if (event.key == "-" || 
                event.key == "Backspace" || 
                event.key == "Delete"  || 
                event.key == "ArrowLeft" || 
                event.key == "ArrowRight"  || 
                event.key == "Enter"   || 
                event.key == "Tab") { 
                // Símbolo negativo y teclas especiales: no hacemos nada
            }else{    
                var tabindex = $(event.target).prop('tabIndex');
                var next = tabindex+1;
                $('[id^="mg"][tabindex="'+next+'"]').focus();  
            }              
        }, true);
    });




    // Acción: Imprimir periodontograma
    $("#btn-imprimir").on('click',function(e){
        e.preventDefault();
    });

    $("#btn-modal-print").on("click",function(e){
        e.preventDefault();
        
        const modal_print = document.querySelector('#modal-print');
        const modalPrint = bootstrap.Modal.getInstance(modal_print);
        modalPrint.hide();

        printPeriodontograma();
    });

    // Acción: Exportar/Descargar archivo JSON
    $("#btn-exportar").on('click',function(e){
        e.preventDefault();
        downloadJSON();
    });    

    // Acción: Importar/cargar archivo JSON
    $("#btn-importar").on("click",function(e){
        e.preventDefault();
    });
    $("#btn-modal-import-json").on("click",function(e){
        e.preventDefault();
        importJSONFile();
    });

     // Acción: Cancelar Importar/cargar archivo JSON
    $("#btn-modal-cancel-import-json").on("click",function(e){
        e.preventDefault();
        cancelImportJSONFile();
    });

     // Acción: Instrucciones
     $("#btn-instrucciones").on("click",function(e){
        e.preventDefault();
    });




    // Default valor input text vacío on Focus/blur
    $('input[type="text"]','#datos-periodontograma').on('focus',function(){
        if (this.value === '0') {this.value = '';}
    });
    $('input[type="text"]','#datos-periodontograma').on('blur',function(){
        if (this.value === '') {this.value = '0';}
    });


    // Habilita/Deshabilita Pieza dental
    $('.num-tooth').on('click',function(){ 
        var id = this.id; 
        var pieza = id.replace(/\D/g,'');

        if( piezas[pieza]["status"] > 0){
            quitaPieza(pieza);
        }else{
            ponePieza(pieza);
        }
    });

    
    // Habilita/Deshabilita Implante
    $('[id^="i"].bot').on('click',function(){
        var id = this.id; 
        var pieza = id.replace(/\D/g,'');
        
        if( piezas[pieza]["implante"] > 0){
            quitaImplante(pieza);
        }else{
            poneImplante(pieza);
        }
    });



    // Datos del paciente
    $('input[type="text"],input[type="date"],textarea','#form-datos-paciente').on('change',function(){
        var id = this.id; 
        setDatosPaciente(id);
    });


    
    // Movilidad
    $('input[type="text"].movilidad').on('change',function(){
        var id = this.id; 
        setMovilidad(id); 
    });


    // Pronóstico individual
    $('select[id^="pi"]').on('change',function(){
        var id = this.id; 
        setPronostico(id);
    });


    // Habilita/Deshabilita Furca
    $('[id^="f"].bot').on('click',function(){
        var id = this.id; 
        setFurca(id); 
    });

   
    // Habilita/Deshabilita Sangrado 
    $('[id^="sa"].bot').on('click',function(){
        var id = this.id; 
        setSangrado(id); 
    });

    // Habilita/Deshabilita Supuración 
    $('[id^="su"].bot').on('click',function(){
        var id = this.id; 
        setSupuracion(id); 
    });


    // Habilita/Deshabilita Placa
    $('[id^="p"].bot').on('click',function(){
        var id = this.id; 
        setPlaca(id); 
    });

    
    // Anchura de encía
    $('input[id^="ae"]').on('change',function(){
        var id = this.id; 
        setAnchuraEncia(id); 
    });


    // Margen Gingival
    $('[id^="mg"][id$="-a"], [id^="mg"][id$="-b"], [id^="mg"][id$="-c"]').on('change',function(){
        var id = this.id; 
        setMargenGingival(id);
    });


    // Profundidad de sondaje
    $('[id^="ps"][id$="-a"], [id^="ps"][id$="-b"], [id^="ps"][id$="-c"]').on('change',function(){
        var id = this.id; 
        setProfundidadSondaje(id);
    });


    // Nota
    $('[id^="n"].nota').on('change',function(){
        var id = this.id; 
        setNota(id); 
    });
    
        
        
    // Textarea Comentarios - limita líneas 
    $('#Comentarios').keydown(function(e) {
        var lines = 4;
            newLines = $(this).val().split("\n").length;            
        
        if(e.keyCode == 13 && newLines >= lines) {
            $(this).addClass('border-error');
            return false;
        }else {
            $(this).removeClass('border-error');
        }
    });
    $('#Comentarios').on('blur',function(e) {
        $(this).removeClass('border-error');
    });
    



})(jQuery);




/**
 * Guarda datos del paciente
 * @param {string} id 
 */
const setDatosPaciente = (id) => {
    datosPaciente[id] = document.getElementById(id).value; 
}


/**
 * Imprime Periodontograma
 */
function printPeriodontograma(){
    var content = $("#Comentarios").val();
    $('#textarea-toPrint-Comentarios').html(content);

    // si los comentarios son extensos los pone al final de la página
    var hTextArea = $('#textarea-toPrint-Comentarios').outerHeight();
    if( hTextArea > 100 ){
        $('#textarea-toPrint-Comentarios').appendTo("#datos-periodontograma");
    }

    // extrae valor de Pronóstico Individual para imprimirlo correctamente
    $('select[id^="pi"]').each(function() {
        var pi= $(this).find("option:selected").text();
        $(this).siblings(".fake-select-pi").html(pi);
    });

    // Recoge Notas de piezas para mostrarlas completas en la impresión
    var notasContainer = document.getElementById("notas");
        notasContainer.innerHTML = "<strong>"+jsmsg['NOTAS']+"</strong> ";

    Object.keys(piezas).forEach(pieza => {
        var txt = piezas[pieza]['nota'];
        if(txt.length > 0){
            var cleanTxt = txt.replace(/(\r\n|\n|\r)/gm, " ");
            notasContainer.innerHTML += "| <strong>"+pieza+"</strong> "+cleanTxt+" ";
        }
    });

    // Imprime!!
    window.print();
}




/**
 * Cálculos de resultados generales
 */

function calculaResultSangrado(){
    $("#result-porcentajeSangrado").text(Math.round((totalSangrado/(totalDientes*6)*100)));    
}

function calculaResultPlaca(){
    $("#result-porcentajePlaca").text(Math.round((totalPlaca/(totalDientes*6)*100)));
}

function calculaResultDefectos(){

    var totalPS = 0;
    $('[id^="ps"][id$="-a"], [id^="ps"][id$="-b"], [id^="ps"][id$="-c"]').each(function() {
        totalPS += parseInt(this.value);
    });
    var mediaps=totalPS/(totalDientes*3);
    var redondeado = Math.round(mediaps*Math.pow(10,2))/Math.pow(10,2);
    $("#result-mediaSondaje").text(redondeado);
    
    
    var totalMG = 0;
    $('[id^="mg"][id$="-a"], [id^="mg"][id$="-b"], [id^="mg"][id$="-c"]').each(function() {
        totalMG += parseInt(this.value);
    });
    var mediapsmg=(totalPS+totalMG)/(totalDientes*3);
    var redondeadopsmg = Math.round(mediapsmg*Math.pow(10,2))/Math.pow(10,2);    
    $("#result-mediaInsercion").text(redondeadopsmg);   
    
    /*DEV DEBUG
    var datosDebug = {
        'totalMG':totalMG,
        'totalPS':totalPS,
        'totalDientes':totalDientes,
        'mediapsmg':mediapsmg,
        'redondeadopsmg':redondeadopsmg
    }
    console.table(datosDebug);*/
}




/**
 * Deshabilita pieza dental del gráfico.
 * Oculta/desconecta campos y vacía valores
 *
 * @param {string} pieza 
 * @returns 
 */
function quitaPieza(pieza){
    if (typeof pieza == 'undefined'){ return false; }
 
    // cambiamos status
    piezas[pieza]["status"] = 0;

    var n = pieza.replace(/\D/g,'');
    
    // quita Implante
    quitaImplante(pieza);

    // borra Movilidad
    removeMovilidad(pieza);

    // borra Furcas
    removeFurcas(pieza);

    // borra Placa
    removePlacas(pieza);
    
    // borra Sangrado
    removeSangrado(pieza);

    // borra Supuración
    removeSupuracion(pieza);

    // borra Pronóstico individual
    removePronostico(pieza);

    // borra Nota
    removeNota(pieza);

    // borra Margen Gingival
    removeMargenGingival(pieza);

    // borra Profundidad Sondaje
    removeProfundidadSondaje(pieza);

    // borra Anchura Encía
    removeAnchuraEncia(pieza);


    // Apagamos diente
    $('#d'+pieza).addClass('bot-off');
    $('#diente'+n+'-a').addClass('diente-eliminado');
    $('#diente'+n+'b-a').addClass('diente-eliminado');

    // #hack para impresión
    // añade espacios a una celda de la tabla,
    // para que, en la impresión, la celda mantenga el ancho
    var txt = "&nbsp;&nbsp;&nbsp;&nbsp;" + $('#d'+pieza).html() + "&nbsp;&nbsp;&nbsp;&nbsp;";
    $('#d'+pieza).html(txt);
    $('<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>').insertAfter('#n'+pieza);

    // Recorremos campos para desactivarlos y poner a cero
    camposPiezas.forEach(
        function (item) {
            var i = item.replace("__n__", n);
            var firstChar = i.slice(0, 1);
            var sel = firstChar == "." ? "" : "#";           
            var el = sel+i;                            
            if(!item.includes("diente")){
                $(el).parents('.borde').addClass('bg-stripped-off');
                $(el).addClass('hide');
            }
            if(i.slice(0, 2) == "mg" || i.slice(0, 2) == "ps"){
                $(el).val('0');
            }
            if(i.slice(0, 1) == "n"){
                $(el).val('');
            }           
        }
    );
    
    // Restamos pieza
    totalDientes--; 
   
    // Actualizamos general
    calculaResultDefectos();
    calculaResultSangrado();
    calculaResultPlaca();
    
    // borramos chart   
    deleteChart('visualization'+n);
    deleteChart('visualization'+n+'b');
}





/**
 * Habilita pieza dental del gráfico.
 * Oculta/desconecta campos y vacía valores
 *
 * @param {string} pieza 
 * @returns 
 */
function ponePieza(pieza){ 
    if (typeof pieza == 'undefined'){ return false; } 

    // cambiamos status
    piezas[pieza]["status"] = 1;

    var n = pieza.replace(/\D/g,'');

    // Encendemos diente
    $('#d'+pieza).removeClass('bot-off');
    $('#diente'+n+'-a').removeClass('diente-eliminado');
    $('#diente'+n+'b-a').removeClass('diente-eliminado');

    //# quita hack para impresión
    var txt = $('#d'+pieza).html();
        txt = txt.split("&nbsp;").join("");
    $('#d'+pieza).html(txt);
    $('#n'+pieza).next('div').remove();
   

    

    // Recorremos campos para desactivarlos
    camposPiezas.forEach(

        function (item) {            
            var i = item.replace("__n__", n);
            var firstChar = i.slice(0, 1);
            var sel = firstChar == "." ? "" : "#";           
            var el = sel+i;
            if(!item.includes("diente")){
                $(el).parents('.borde').removeClass('bg-stripped-off');
                $(el).removeClass('hide');
            }           
        }
    );

    // Sumamos pieza
    totalDientes++; 
  
    // Actualizamos general
    calculaResultDefectos();
    calculaResultSangrado();    
    calculaResultPlaca();
}



/**
 * Habilita implante en pieza
 * Desconecta campos que no se utilizarán
 * @param {string} pieza 
 * @returns 
 */
function poneImplante(pieza){ 
    if (typeof pieza == 'undefined'){ return false; }

    // cambiamos status
    piezas[pieza]["implante"] = 1;

    // Encendemos marca de implante
    $('#i'+pieza).addClass('bot-checked-dot');

    var n = pieza.replace(/\D/g,'');

    // Ocultamos diente
    $('#diente'+n+'-a img.d').addClass('hide');
    $('#diente'+n+'b-a img.d').addClass('hide');
    // Mostramos implante
    $('#diente'+n+'-a img.i').removeClass('hide');
    $('#diente'+n+'b-a img.i').removeClass('hide');
    
    // Desactivamos campos que no se utilizarán
    camposImplante.forEach(
        function (item) {            
            var i = item.replace("__n__", n);
            var firstChar = i.slice(0, 1);
            var sel = firstChar == "." ? "" : "#";           
            var el = sel+i;           
            $(el).parents('.borde').addClass('bg-stripped-off');
            $(el).addClass('hide');                    
        }
    );

    // Borra furcas
    removeFurcas(pieza);
}


/**
 * Deshabilita implante en pieza
 * Oculta / desconecta campos que no se utiliarán
 * @param {string} pieza 
 * @returns 
 */
function quitaImplante(pieza){ 
    if (typeof pieza == 'undefined'){ return false; }

    // cambiamos status
    piezas[pieza]["implante"] = 0;

    // Encendemos marca de implante
    $('#i'+pieza).removeClass('bot-checked-dot');

    var n = pieza.replace(/\D/g,'');
   
    // Mostramos diente
    $('#diente'+n+'-a img.d').removeClass('hide');
    $('#diente'+n+'b-a img.d').removeClass('hide');
    // Ocultamos implante
    $('#diente'+n+'-a img.i').addClass('hide');
    $('#diente'+n+'b-a img.i').addClass('hide');
    
    // Desactivamos campos que no se utilizarán
    camposImplante.forEach(
        function (item) {            
            var i = item.replace("__n__", n);
            var firstChar = i.slice(0, 1);
            var sel = firstChar == "." ? "" : "#";           
            var el = sel+i;           
            $(el).parents('.borde').removeClass('bg-stripped-off');
            $(el).removeClass('hide');                    
        }
    );    
}


/* NOTA !! 01-ago-2022
 * ¿Eliminar campo "Anchura encía"?
 *
 * Esta función no existe (se comentó) en el código original.
 * El calor de este campo "Anchura encía", no se calcula en ningún sitio. 
 * Este campo "Anchura encía" no existe en el periodontograma internacional.
*/
/**
 * Comprueba campo Anchura de encía
 * @param {string} id 
 */
const checkAnchuraEncia = (id) => {
    var result = true;
    var dato = parseInt(document.getElementById(id).value);
   
    if(isNaN(dato)){
        muestraAlert(jsmsg["checkAnchuraEncia"], 'danger');
        document.getElementById(id).value = 0;
        $('#'+id).addTempClass('error-field', 3000);
        document.getElementById(id).classList.remove("text-danger");

        result = false;
    }

    return result;
}



/**
 * Guarda valor Anchura Encía
 * @param {string} id 
 * @returns 
 */
const setAnchuraEncia = (id) => { 
    if( checkAnchuraEncia(id) == false ) { return false; }

    var pieza = id.replace(/\D/g,'');
    piezas[pieza]['encia'] = parseInt(document.getElementById(id).value); 

    var valor = parseInt(document.getElementById(id).value);    
    if(valor < 3){
        document.getElementById(id).classList.add("text-danger");
    }else{
        document.getElementById(id).classList.remove("text-danger");
    }
}

/**
 * Borra valor Anchura Encía
 * @param {string} id 
 * @returns 
 */
const removeAnchuraEncia = (id) => { 
    var pieza = id.replace(/\D/g,'');
    piezas[pieza]['encia'] = 0; 
    document.getElementById("ae"+id).value = 0;
    document.getElementById("ae"+id).classList.remove("text-danger");
}





/**
 * Comprueba campo Movilidad
 * 
 * @param {string} id 
 */
const checkMovilidad = (id) => {
    var result = true;
    var dato = parseInt(document.getElementById(id).value);
   
    if(dato<(0) || dato>3 || isNaN(dato)){
        muestraAlert(jsmsg["checkMovilidad"], 'danger');
        document.getElementById(id).value = 0;
        $('#'+id).addTempClass('error-field', 3000);

        result = false;
    }

    return result;
}



/**
 * Guarda valor Movilidad
 * @param {string} id 
 * @returns 
 */
const setMovilidad = (id) => { 
    if( checkMovilidad(id) == false ) { return false; }

    var pieza = id.replace(/\D/g,'');
    piezas[pieza]['movilidad'] = parseInt(document.getElementById(id).value); 
}

/**
 * Borra valor Movilidad
 * @param {string} id 
 * @returns 
 */
const removeMovilidad = (id) => { 
    var pieza = id.replace(/\D/g,'');
    piezas[pieza]['movilidad'] = 0; 

    document.getElementById("m"+id).value = 0;
}




/**
 * Comprueba campo Margen Gingival
 * 
 * @param {string} id 
 */
const checkMargenGingival = (id) => {
    var result = true;
    var dato = parseInt(document.getElementById(id).value);
   
    if(dato < (-9) || dato > 9 || isNaN(dato)){
        muestraAlert(jsmsg["checkMargenGingival"], 'danger');
        document.getElementById(id).value='0';
        $('#'+id).addTempClass('error-field', 3000);

        result = false;
    }

    return result;
}



/**
 * Guarda Margen Gingival
 * y actualiza gráfica y totales
 * @param {string} id 
 */
const setMargenGingival = (id) => {

    if( checkMargenGingival(id) == false ) { return false; }

    var pieza = id.replace(/\D/g,'');
    var tipoMargen = (id.length > 3) ? id.substring(id.indexOf('-')) : '' ;       
    var tipoPieza = id.substring(id.indexOf('-')-1,id.indexOf('-'));

    // comprueba de qué sector es la pieza, 
    // para poder guardarla en json
    if (pieza > 30){
        if(tipoPieza == "b"){
            tipoPieza = "vest";
        }else{
            tipoPieza = "ling";
        }
    }else{
        //pieza < 30
        if(tipoPieza == "b"){
            tipoPieza = "pala";
        }else{
            tipoPieza = "vest";
        }
    }
      
    var margenNombre = "margen"+tipoMargen;
    piezas[pieza][tipoPieza][margenNombre] = parseInt(document.getElementById(id).value);   

    // Actualizamos general
    calculaResultDefectos();

    // Actualizamos gráfico
    updatesMargenAndProfundidad(id);
    
}




/**
 * Borra los márgenes de la pieza.
 * Resetea valores y borra marcas.
 * @param {string} id 
 */
const removeMargenGingival = (id) =>{
    
    var pieza = id.replace(/\D/g,'');

    // determina el sector del márgen según el número de pieza
    var camposSector = (pieza > 30) ? ["ling","vest"] : ["pala","vest"] ;

    // resetea valores de márgenes de la pieza
    camposSector.forEach(
        function (item) {                       
            piezas[pieza][item]['margen-a'] = 0;
            piezas[pieza][item]['margen-b'] = 0;
            piezas[pieza][item]['margen-c'] = 0;            
        }
    );

    // borra valores de márgenes    
    $('[id^="mg'+id+'"]').val(0);    
}




/**
 * Comprueba campo Profundidad Sondaje
 * 
 * @param {string} id 
 */
const checkProfundidadSondaje = (id) => {
    var result = true;
    var dato = parseInt(document.getElementById(id).value);

    if(isNaN(dato)){
        muestraAlert(jsmsg["checkProfundidadSondaje"], 'danger');
        document.getElementById(id).value = 0;
        $('#'+id).addTempClass('error-field', 3000);
        document.getElementById(id).classList.remove("text-danger");
        
        result = false;
    }

    return result;
}



/**
* Guarda Profundidad Sondaje
* y actualiza gráfica y totales
* @param {string} id 
*/
const setProfundidadSondaje = (id) => {

    if( checkProfundidadSondaje(id) == false ) { return false; }

    var pieza = id.replace(/\D/g,'');
    var tipoSondaje = (id.length > 3) ? id.substring(id.indexOf('-')) : '' ;       
    var tipoPieza = id.substring(id.indexOf('-')-1,id.indexOf('-'));

    // comprueba de qué sector es la pieza, 
    // para poder guardarla en json
    if (pieza > 30){
        if(tipoPieza == "b"){
            tipoPieza = "vest";
        }else{
            tipoPieza = "ling";
        }
    }else{
        //pieza < 30
        if(tipoPieza == "b"){
            tipoPieza = "pala";
        }else{
            tipoPieza = "vest";
        }
    }
    
    var sondajeNombre = "sondaje"+tipoSondaje;
    piezas[pieza][tipoPieza][sondajeNombre] = parseInt(document.getElementById(id).value);   

    // Marca el campo con clase "danger" si su valor supera el límite.
    // Si es implante: el valor "danger" es 5
    // Si es diente normal: el valor "danger" es 3
    var valorDanger = $('#i'+pieza).hasClass('bot-checked-dot') ? 5 : 3 ;    
    var val = document.getElementById(id).value; 

    if( val > valorDanger){
        document.getElementById(id).classList.add("text-danger");
    }else{
        document.getElementById(id).classList.remove("text-danger");
    }


    // Actualizamos general
    calculaResultDefectos();

    // Actualizamos gráfico
    updatesMargenAndProfundidad(id);

}




/**
* Borra los sondajes de la pieza.
* Resetea valores y borra marcas.
* @param {string} id 
*/
const removeProfundidadSondaje = (id) =>{

    var pieza = id.replace(/\D/g,'');

    // determina el sector del márgen según el número de pieza
    var camposSector = (pieza > 30) ? ["ling","vest"] : ["pala","vest"] ;

    // resetea valores de márgenes de la pieza
    camposSector.forEach(
        function (item) {                       
            piezas[pieza][item]['sondaje-a'] = 0;
            piezas[pieza][item]['sondaje-b'] = 0;
            piezas[pieza][item]['sondaje-c'] = 0;            
        }
    );

    // borra valores de márgenes    
    $('[id^="ps'+id+'"]').val(0);    
}





/**
 * Habilita / Deshabilita los ditintos tipos de Furca
 * 4 estados: apagada, 1 encendida, 2 medio, 3 completa.
 *
 * @param {string} id 
 */
const setFurca = (id) =>{ 

    var pieza = id.replace(/\D/g,'');
    var tipoFurca = (id.length > 3) ? id.substring(id.indexOf('-')) : '' ;      

    var furcaNombre = "furca"+tipoFurca;
    var furcaStatus = piezas[pieza][furcaNombre];
    var itemFurca   = '#furca'+pieza+tipoFurca;
    var botonFurca  = '#'+id;

    if( furcaStatus == 0){
        piezas[pieza][furcaNombre] = 1;
        $(itemFurca).addClass("furca-1");
        $(botonFurca).addClass("furca-1");

    }else if( furcaStatus == 1){
        piezas[pieza][furcaNombre] = 2;
        $(itemFurca).addClass("furca-2");
        $(botonFurca).addClass("furca-2");

    }else if( furcaStatus== 2){
        piezas[pieza][furcaNombre] = 3;
        $(itemFurca).addClass("furca-3");
        $(botonFurca).addClass("furca-3");

    }else if( furcaStatus== 3){
        piezas[pieza][furcaNombre] = 0;
        $(itemFurca).removeClass("furca-1 furca-2 furca-3");
        $(botonFurca).removeClass("furca-1 furca-2 furca-3");
    }

}



/**
 * Borra las furcas de la pieza
 * Resetea valores y borra marcas
 * @param {string} id 
 */
const removeFurcas = (id) =>{ 

    var pieza = id.replace(/\D/g,'');

    // reset valores
    piezas[pieza]['furca']   = 0;
    piezas[pieza]['furca-a'] = 0;
    piezas[pieza]['furca-b'] = 0;
    
    camposImplante.forEach(
        function (item) {            
            var i = item.replace("__n__", pieza);
            var firstChar = i.slice(0, 1);
            var sel = firstChar == "." ? "" : "#";           
            var el = sel+i;           
            $(el).removeClass("furca-1 furca-2 furca-3");                  
        }
    );

}




/**
 * Habilita / Desabilita marca de Sangrado 
 * 4 estados : 0 apagada, 1 sangrado grado 1, 2 sangrado grado 2, 3 sangrado grado 3
 * @param {string} id 
 */
const setSangrado = (id) =>{ 

    var pieza = id.replace(/\D/g,'');
    var tipoSangrado = (id.length > 3) ? id.substring(id.indexOf('-')) : '' ;       
    var tipoPieza = id.substring(id.indexOf('-')-1,id.indexOf('-'));

    // comprueba de qué sector es la pieza, 
    // para poder guardarla en json
    if (pieza > 30){
        if(tipoPieza == "b"){
            tipoPieza = "vest";
        }else{
            tipoPieza = "ling";
        }
    }else{
        //pieza < 30
        if(tipoPieza == "b"){
            tipoPieza = "pala";
        }else{
            tipoPieza = "vest";
        }
    }
      
    var sangradoNombre = "sangrado"+tipoSangrado;
    var sangradoStatus = piezas[pieza][tipoPieza][sangradoNombre];
    var boton  = '#'+id;

    if( sangradoStatus == 0){
        piezas[pieza][tipoPieza][sangradoNombre] = 1;       
        $(boton).addClass("sangrado");

        totalSangrado++;

    }else if( sangradoStatus == 1){
        piezas[pieza][tipoPieza][sangradoNombre] = 2;
        $(boton).removeClass("sangrado");
        $(boton).addClass("sangrado2");

    }else if( sangradoStatus == 2){
        piezas[pieza][tipoPieza][sangradoNombre] = 3;
        $(boton).removeClass("sangrado2");
        $(boton).addClass("sangrado3");

        totalSangrado--;

    }else if( sangradoStatus == 3){
        piezas[pieza][tipoPieza][sangradoNombre] = 0;
        $(boton).removeClass("sangrado sangrado2 sangrado3");

        //totalSangrado--;
    }

    // Actualizamos valor mostrado en suma general
    calculaResultSangrado();

}

/**
 * Borra los sangrados  de la pieza.
 * Resetea valores y borra marcas.
 * @param {string} id 
 */
const removeSangrado = (id) =>{
    
    var pieza = id.replace(/\D/g,'');

    // determina el sector del sangrado según el número de pieza
    var camposSector = (pieza > 30) ? ["ling","vest"] : ["pala","vest"] ;

    // resetea valores de sangrado de la pieza
    camposSector.forEach(
        function (item) {
            if ( piezas[pieza][item]['sangrado-a'] > 0){ totalSangrado--; }
            if ( piezas[pieza][item]['sangrado-b'] > 0){ totalSangrado--; }
            if ( piezas[pieza][item]['sangrado-c'] > 0){ totalSangrado--; }
            
            piezas[pieza][item]['sangrado-a'] = 0;
            piezas[pieza][item]['sangrado-b'] = 0;
            piezas[pieza][item]['sangrado-c'] = 0;            
        }
    );

    // quita marcas de sangrado    
    $('[id^="sa'+id+'"]').removeClass("sangrado sangrado2 sangrado3");    
}





/**
 * Habilita / Desabilita marca de supuración 
 * 2 estados : 0 apagada, 1 supuracion
 * @param {string} id 
 */
const setSupuracion = (id) =>{ 

    var pieza = id.replace(/\D/g,'');
    var tipoSupuracion = (id.length > 3) ? id.substring(id.indexOf('-')) : '' ;       
    var tipoPieza = id.substring(id.indexOf('-')-1,id.indexOf('-'));

    // comprueba de qué sector es la pieza, 
    // para poder guardarla en json
    if (pieza > 30){
        if(tipoPieza == "b"){
            tipoPieza = "vest";
        }else{
            tipoPieza = "ling";
        }
    }else{
        //pieza < 30
        if(tipoPieza == "b"){
            tipoPieza = "pala";
        }else{
            tipoPieza = "vest";
        }
    }
      
    var supuracionNombre = "supuracion"+tipoSupuracion;
    var supuracionStatus = piezas[pieza][tipoPieza][supuracionNombre];
    var boton  = '#'+id;

    if( supuracionStatus == 0){
        piezas[pieza][tipoPieza][supuracionNombre] = 1;       
        $(boton).addClass("supuracion");

    }else if( supuracionStatus == 1){
        piezas[pieza][tipoPieza][supuracionNombre] = 0;
        $(boton).removeClass("supuracion");

    }



}



/**
 * Borra supuracion de la pieza.
 * Resetea valores y borra marcas.
 * @param {string} id 
 */
const removeSupuracion = (id) =>{
    
    var pieza = id.replace(/\D/g,'');

    // determina el sector de supuracion según el número de pieza
    var camposSector = (pieza > 30) ? ["ling","vest"] : ["pala","vest"] ;

    // resetea valores de supuracion de la pieza
    camposSector.forEach(
        function (item) {            
            piezas[pieza][item]['supuracion-a'] = 0;
            piezas[pieza][item]['supuracion-b'] = 0;
            piezas[pieza][item]['supuracion-c'] = 0;            
        }
    );

    // quita marcas de supuracion    
    $('[id^="su'+id+'"]').removeClass("supuracion");    
}




/**
 * Habilita / Desabilita marca de Placa
 * 2 estados : 0 apagada, 1 encendida
 * @param {string} id 
 */
const setPlaca = (id) =>{

    var pieza = id.replace(/\D/g,'');
    var tipoPlaca = (id.length > 3) ? id.substring(id.indexOf('-')) : '' ;       
    var tipoPieza = id.substring(id.indexOf('-')-1,id.indexOf('-'));

    // comprueba de qué sector es la pieza, 
    // para poder guardarla en json
    if (pieza > 30){
        if(tipoPieza == "b"){
            tipoPieza = "vest";
        }else{
            tipoPieza = "ling";
        }
    }else{
        //pieza < 30
        if(tipoPieza == "b"){
            tipoPieza = "pala";
        }else{
            tipoPieza = "vest";
        }
    }
      
    var placaNombre = "placa"+tipoPlaca;
    var placaStatus = piezas[pieza][tipoPieza][placaNombre];
    var boton  = '#'+id;

    if( placaStatus == 0){
        piezas[pieza][tipoPieza][placaNombre] = 1;       
        $(boton).addClass("placa-on");

        totalPlaca++;

    }else if( placaStatus == 1){
        piezas[pieza][tipoPieza][placaNombre] = 0;
        $(boton).removeClass("placa-on");

        totalPlaca--;
    }

    // Actualizamos valor mostrado en suma general
    calculaResultPlaca();

}

/**
 * Borra las placas de la pieza.
 * Resetea valores y borra marcas.
 * @param {string} id 
 */
const removePlacas = (id) =>{
    
    var pieza = id.replace(/\D/g,'');

    // determina el sector de la placa según el número de pieza
    var camposSector = (pieza > 30) ? ["ling","vest"] : ["pala","vest"] ;

    // resetea valores placas de la pieza
    camposSector.forEach(
        function (item) {
            if ( piezas[pieza][item]['placa-a'] > 0){ totalPlaca--; }
            if ( piezas[pieza][item]['placa-b'] > 0){ totalPlaca--; }
            if ( piezas[pieza][item]['placa-c'] > 0){ totalPlaca--; }
            
            piezas[pieza][item]['placa-a'] = 0;
            piezas[pieza][item]['placa-b'] = 0;
            piezas[pieza][item]['placa-c'] = 0;            
        }
    );

    // quita marcas de placa    
    $('[id^="p'+id+'"]').removeClass("placa-on");    
}





/**
 * Recoge datos de Margen Gingival y Profundidad de Sondaje
 * Guarda datos y pinta el gráfico
 *
 * @param {string} id 
 */
function updatesMargenAndProfundidad(id){

    var numPieza  = id.substring(2,id.indexOf('-'));

    var datos = {
        "mg":{"a":0,"b":0,"c":0},
        "ps":{"a":0,"b":0,"c":0}
    }  
    
    // Recogemos datos de Margen Gingival
    $('#mg'+numPieza+'-a, #mg'+numPieza+'-b, #mg'+numPieza+'-c').each(function(){  
        i = this.id.substring(this.id.indexOf('-')+1);
        datos.mg[i] = parseInt(document.getElementById(this.id).value);
    });

    // Recogemos datos de Profundidad de Sondaje
    $('#ps'+numPieza+'-a, #ps'+numPieza+'-b, #ps'+numPieza+'-c').each(function(){ 
        i = this.id.substring(this.id.indexOf('-')+1);
        val = document.getElementById(this.id).value;
        datos.ps[i] = parseInt(document.getElementById(this.id).value);   
     });

     
    // Guardamos
    datosCharts['visualization'+numPieza] = datos;
  
    if( datos.mg.a + datos.mg.b + datos.mg.c + datos.ps.a + datos.ps.b + datos.ps.c == 0){ return; }

    // si el chart ya existe lo actualizamos
    if( charts.hasOwnProperty('visualization'+numPieza) ){
                
        var chart = charts['visualization'+numPieza];

        chart.data.datasets[0].data = [{x: "a", y: datos.mg.a}, {x: "b", y: datos.mg.b}, {x: "c", y: datos.mg.c}];
        chart.data.datasets[1].data = [{x: "a", y: datos.ps.a}, {x: "b", y: datos.ps.b}, {x: "c", y: datos.ps.c}];
        chart.update()

    }else{ 
        dibujaChart('visualization'+numPieza,datos);
    }
}




/**
 * Almacena Pronóstico Individual
 * @param {string} id 
 */
const setPronostico = (id) =>{
    var pieza = id.replace(/\D/g,'');
    piezas[pieza]['pronóstico'] = $("#"+id).val();  
}


/**
 * Borra Pronóstico Individual de la pieza
 * Borra marca y resetea valor guardado
 * @param {string} id 
 */
const removePronostico = (id) =>{    
    var pieza = id.replace(/\D/g,'');

    $('[id^="pi'+id+'"]').prop('selectedIndex', 0);
    piezas[pieza]['pronóstico'] = "";      
 
}



/**
 * Almacena Nota de la pieza
 * @param {string} id 
 */
const setNota = (id) =>{
    var pieza = id.replace(/\D/g,'');
    piezas[pieza]['nota'] = $("#"+id).val();  
}

/**
 * Bora nota de la pieza
 * @param {string} id 
 */
const removeNota = (id) =>{    
    var pieza = id.replace(/\D/g,'');

    $('[id^="n'+id+'"].nota').val('');
    piezas[pieza]['nota'] = "";      
 
}







/**
 * CONFIGURACIÓN Y MÉTODO PARA GRÁFICAS
 * ==================================================================================
 * https://www.chartjs.org/
 */

/**
 * Defaults Charts
 */

Chart.defaults.datasets.line.fill = true;
Chart.defaults.datasets.line.showLine = true;
Chart.defaults.datasets.line.borderWidth = 2;
Chart.defaults.datasets.line.tension = 0;
Chart.defaults.datasets.line.pointBorderWidth = 0;
Chart.defaults.datasets.line.pointHoverBorderWidth = 0;
Chart.defaults.datasets.line.pointBackgroundColor = 'rgba(0,0,0,0)';

var ChartLineColors = {
    "BorderColor1":"rgb(255, 99, 132)",
    "BackgroundColor1":"rgba(255, 99, 132,0.4)",
    "BorderColor2":"rgb(100, 149, 237)",
    "BackgroundColor2":"rgba(100, 149, 237, 0.4)",
    }



/**
 * Dibuja chart en pieza.
 * Con valores de 'Margen Gingival' y 'Profundidad de sondaje'
 * Tres valores para cada uno, en formato json:
 * datos.mg.a,datos.mg.b,datos.mg.c,
 * datos.ps.a,datos.ps.b,datos.ps.c,
 *
 * @param {string} id 
 * @param {json} datos 
 */
function dibujaChart(id,datos){

    // Almacenamos charts en array 
    var chartID = id;

  
    charts[chartID] = new Chart(
        document.getElementById(id),
        {
            type: 'line',
            data: {  
                labels: false,
                datasets: [
                    {
                    data: [{x: "a", y: datos.mg.a}, {x: "b", y: datos.mg.b}, {x: "c", y: datos.mg.c}],      
                    borderColor: ChartLineColors.BorderColor1,
                    backgroundColor: ChartLineColors.BackgroundColor1,
                    },
                    {
                    data: [{x: "a", y: datos.ps.a}, {x: "b", y: datos.ps.b}, {x: "c", y: datos.ps.c}],    
                    borderColor: ChartLineColors.BorderColor2,
                    backgroundColor: ChartLineColors.BackgroundColor2,  
                    }
                ]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        enabled: false
                    },
                },
                scales: {
                    x: {
                        display: false                   
                    },
                    y: {
                        stacked: true,
                        display: false,
                        min: -10,
                        max: 10,
                    }
                }
            }
        }
    );    
}



/**
 * Borra chart
 * Destruye chart y datos almacenados
 * @param {string} id 
 */
function deleteChart(id){
    if( charts.hasOwnProperty(id) ){
        charts[id].destroy();
        delete charts[id];
    }
    var datos = datosCharts[id];
    if( charts.hasOwnProperty(datos) ){
        delete datosCharts[id];
    }
}






/**
 * EXPORT DATOS
 *
 * ======================================================================= */



/**
 * Donwload JSON
 * Envía datos a PHP para generar el archivo de descarga
 */

function downloadJSON(){

    // Unifica datos a enviar
    var data = {
        "datosPaciente":datosPaciente,
        "piezas":piezas
    };

    // Crea form dynamically
    var form = document.createElement("form");
        form.setAttribute("method", "post");
        form.setAttribute("action", "inc/download-json.php");

    var datos = document.createElement("input");
        datos.setAttribute("type", "hidden");
        datos.setAttribute("name", "datos");      

    // añade data a campo y campo a form
    datos.setAttribute("value", JSON.stringify(data));
    form.appendChild(datos);

    // añade form a DOM y envía
    document.getElementsByTagName("body")[0].appendChild(form);
    form.submit();
}







/**
 * IMPORT DATOS
 *
 * ======================================================================= */


/**
 * Carga archivo JSON
 */
function importJSONFile() {
    var importedFile = document.getElementById('import-json-file').files[0];

    var reader = new FileReader();
        reader.onload = function() {           
            try {
                var fileContent = JSON.parse(reader.result);                
                processFileData(fileContent); 
                muestraAlert(jsmsg["importJSONFile-exito"], 'success');     
                $('#modal-import-JSON-file').modal('hide');            

            } catch (e) {  
                if (e instanceof SyntaxError) {
                    // json inválido                            
                    muestraAlert(jsmsg["importJSONFile-invalidJSON"], 'danger'); 
                    //console.log(`${e.name} ${e.message}`);  
                }else{
                    // error desconocido
                    muestraAlert(jsmsg["importJSONFile-unknowError"], 'danger');  
                    //console.log(`${e.name} ${e.message}`); 
                }             
            }             
        };
        reader.onerror = function(){
            // error de carga
            muestraAlert(jsmsg["importJSONFile-loadError"], 'danger');
        }
        reader.readAsText(importedFile); 
}

// Vacía archivo de input[type=file]
function cancelImportJSONFile(){
    document.getElementById('import-json-file').value ="";
}


// Procesa datos importados
function processFileData(fileContent){

    var importedData = fileContent; 

    datosPaciente = importedData['datosPaciente'];
    piezas = importedData['piezas'];

    removeTextDangerClass();
    updateFormDatosPaciente(); 
    updateImplantePiezas();
    updateMovilidad();
    updatePronostico();
    updateFurca();
    updateSangrado();
    updateSupuracion();
    updatePlaca();
    updateNota();
    updateMargenGingival();
    updateProfundidadSondaje();
    updateAnchuraEncia();
    updateStatusPiezas();
    
}



/**
 * Borra clases danger de inputs 
 */
const removeTextDangerClass = () => {
    $('.text-danger').removeClass();
}


/**
 * Actualiza form Datos Paciente
 */
const updateFormDatosPaciente = () => {   
    Object.keys(datosPaciente).forEach(key => {
        document.getElementById(key).value = datosPaciente[key];
    });
}

/**
 * Actualiza Status piezas
 */
const updateStatusPiezas = () => {      
    $('.num-tooth').each(function(){
        var id = this.id; 
        var pieza = id.replace(/\D/g,'');

        if( piezas[pieza]["status"] > 0){
            ponePieza(pieza);
        }else{           
            quitaPieza(pieza);
        }
    });
}
/**
 * Actualiza Implantes
 */
const updateImplantePiezas = () => {   
    $('[id^="i"].bot').each(function(){
        var id = this.id; 
        var pieza = id.replace(/\D/g,'');

        if( piezas[pieza]["implante"] > 0){
            poneImplante(pieza);
        }else{           
            quitaImplante(pieza);
        }
    });
}

/**
 * Actualiza Movilidad
 */
const updateMovilidad = () => {     
    $('input.movilidad').each(function(){
        var id = this.id; 
        var pieza = id.replace(/\D/g,'');
        document.getElementById(id).value = piezas[pieza]['movilidad']; 
    });
}

/**
 * Actualiza Pronóstico
 */
const updatePronostico = () =>{
    $('select[id^="pi"]').each(function(){
        var id = this.id;
        var pieza = id.replace(/\D/g,'');
        document.getElementById(id).value = piezas[pieza]['pronóstico'];
    });
}


/**
 * Actualiza Furca
 */
const updateFurca = () =>{ 
    $('[id^="f"].bot').each(function(){ 
        var id = this.id;
        var pieza = id.replace(/\D/g,'');
        var tipoFurca = (id.length > 3) ? id.substring(id.indexOf('-')) : '' ;      
    
        var furcaNombre = "furca"+tipoFurca;
        var furcaStatus = piezas[pieza][furcaNombre];
        var itemFurca   = '#furca'+pieza+tipoFurca;
        var botonFurca  = '#'+id;
    
        if( furcaStatus == 0){
            $(itemFurca).removeClass("furca-1 furca-2 furca-3");
            $(botonFurca).removeClass("furca-1 furca-2 furca-3");   

        }else if( furcaStatus == 1){
            $(itemFurca).addClass("furca-1");
            $(botonFurca).addClass("furca-1");
    
        }else if( furcaStatus == 2){
            $(itemFurca).addClass("furca-1 furca-2");
            $(botonFurca).addClass("furca-1 furca-2");
    
        }else if( furcaStatus == 3){
            $(itemFurca).addClass("furca-1 furca-2 furca-3");
            $(botonFurca).addClass("furca-1 furca-2 furca-3");
        }    
    });
}


/**
 * Actualiza Sangrado
 * 4 estados : 0 apagada, 1 sangrado grado 1, 2 sangrado grado 2, 3 sangrado grado 3
 */
const updateSangrado = () =>{ 

    // Reset Sangrado
    totalSangrado = 0;

    $('[id^="sa"].bot').each(function(){ 
        var id = this.id;

        var pieza = id.replace(/\D/g,'');
        var tipoSangrado = (id.length > 3) ? id.substring(id.indexOf('-')) : '' ;       
        var tipoPieza = id.substring(id.indexOf('-')-1,id.indexOf('-'));

        // comprueba de qué sector es la pieza, 
        // para poder guardarla en json
        if (pieza > 30){
            if(tipoPieza == "b"){
                tipoPieza = "vest";
            }else{
                tipoPieza = "ling";
            }
        }else{
            //pieza < 30
            if(tipoPieza == "b"){
                tipoPieza = "pala";
            }else{
                tipoPieza = "vest";
            }
        }
        
        var sangradoNombre = "sangrado"+tipoSangrado;
        var sangradoStatus = piezas[pieza][tipoPieza][sangradoNombre];
        var boton  = '#'+id;

        if( sangradoStatus == 0){
            $(boton).removeClass("sangrado sangrado2 sangrado3");

        }else if( sangradoStatus == 1){
            $(boton).removeClass("sangrado3 sangrado2");
            $(boton).addClass("sangrado");
            totalSangrado++;

        }else if( sangradoStatus == 2){
            $(boton).removeClass("sangrado sangrado3");
            $(boton).addClass("sangrado2");
            totalSangrado++;

        }else if( sangradoStatus == 3){
            $(boton).removeClass("sangrado sangrado2");
            $(boton).addClass("sangrado3");
            //totalSangrado++;
        }

        // Actualizamos valor mostrado en suma general
        calculaResultSangrado();  
    });
}



/**
 * Actualiza Supuración
 * 2 estados : 0 apagada, 1 supuracion
 */
const updateSupuracion = () =>{ 
  
    $('[id^="su"].bot').each(function(){ 
        var id = this.id;

        var pieza = id.replace(/\D/g,'');
        var tipoSupuracion = (id.length > 3) ? id.substring(id.indexOf('-')) : '' ;       
        var tipoPieza = id.substring(id.indexOf('-')-1,id.indexOf('-'));

        // comprueba de qué sector es la pieza, 
        // para poder guardarla en json
        if (pieza > 30){
            if(tipoPieza == "b"){
                tipoPieza = "vest";
            }else{
                tipoPieza = "ling";
            }
        }else{
            //pieza < 30
            if(tipoPieza == "b"){
                tipoPieza = "pala";
            }else{
                tipoPieza = "vest";
            }
        }
        
        var supuracionNombre = "supuracion"+tipoSupuracion;
        var supuracionStatus = piezas[pieza][tipoPieza][supuracionNombre];
        var boton  = '#'+id;

        if( supuracionStatus == 0){
            $(boton).removeClass("supuracion");

        }else if( supuracionStatus == 1){
            $(boton).addClass("supuracion");

        }

    });
}


/**
 * Actualiza Placas
 * 2 estados : 0 apagada, 1 supuracion
 */
const updatePlaca = () =>{ 
  
    // Reset Placa
    totalPlaca = 0;

    $('[id^="p"].bot').each(function(){ 
        var id = this.id;

        var pieza = id.replace(/\D/g,'');
        var tipoPlaca = (id.length > 3) ? id.substring(id.indexOf('-')) : '' ;       
        var tipoPieza = id.substring(id.indexOf('-')-1,id.indexOf('-'));

        // comprueba de qué sector es la pieza, 
        // para poder guardarla en json
        if (pieza > 30){
            if(tipoPieza == "b"){
                tipoPieza = "vest";
            }else{
                tipoPieza = "ling";
            }
        }else{
            //pieza < 30
            if(tipoPieza == "b"){
                tipoPieza = "pala";
            }else{
                tipoPieza = "vest";
            }
        }
        
        var placaNombre = "placa"+tipoPlaca;
        var placaStatus = piezas[pieza][tipoPieza][placaNombre];
        var boton  = '#'+id;

        if( placaStatus == 0){
            $(boton).removeClass("placa-on");
            totalPlaca--;

        }else if( placaStatus == 1){
            $(boton).addClass("placa-on");
            totalPlaca++;
        }

        calculaResultPlaca();

    });
}




/**
 * Actualiza Nota de la pieza
 */
const updateNota = () =>{
    $('[id^="n"].nota').each(function(){ 
        var id = this.id;
        var pieza = id.replace(/\D/g,'');
        document.getElementById(id).innerHTML = piezas[pieza]['nota'];
    });
}


/**
 * Actualiza Margen Gingival
 */
const updateMargenGingival = () => {

    $('[id^="mg"][id$="-a"], [id^="mg"][id$="-b"], [id^="mg"][id$="-c"]').each(function(){ 
        var id = this.id;

        var pieza = id.replace(/\D/g,'');
        var tipoMargen = (id.length > 3) ? id.substring(id.indexOf('-')) : '' ;       
        var tipoPieza = id.substring(id.indexOf('-')-1,id.indexOf('-'));

        // comprueba de qué sector es la pieza, 
        // para poder guardarla en json
        if (pieza > 30){
            if(tipoPieza == "b"){
                tipoPieza = "vest";
            }else{
                tipoPieza = "ling";
            }
        }else{
            //pieza < 30
            if(tipoPieza == "b"){
                tipoPieza = "pala";
            }else{
                tipoPieza = "vest";
            }
        }
        
        var margenNombre = "margen"+tipoMargen;
        document.getElementById(id).value = piezas[pieza][tipoPieza][margenNombre];   

        // Actualizamos general
        calculaResultDefectos();

        // Actualizamos gráfico
        updatesMargenAndProfundidad(id);
    });
}



/**
* Actualiza Profundidad Sondaje
*/
const updateProfundidadSondaje = () => {

    $('[id^="ps"][id$="-a"], [id^="ps"][id$="-b"], [id^="ps"][id$="-c"]').each(function(){
        var id = this.id; 

        var pieza = id.replace(/\D/g,'');
        var tipoSondaje = (id.length > 3) ? id.substring(id.indexOf('-')) : '' ;       
        var tipoPieza = id.substring(id.indexOf('-')-1,id.indexOf('-'));

        // comprueba de qué sector es la pieza, 
        // para poder guardarla en json
        if (pieza > 30){
            if(tipoPieza == "b"){
                tipoPieza = "vest";
            }else{
                tipoPieza = "ling";
            }
        }else{
            //pieza < 30
            if(tipoPieza == "b"){
                tipoPieza = "pala";
            }else{
                tipoPieza = "vest";
            }
        }

        var sondajeNombre = "sondaje"+tipoSondaje;
        document.getElementById(id).value = piezas[pieza][tipoPieza][sondajeNombre];   

        // Marca el campo con clase "danger" si su valor supera el límite.
        // Si es implante: el valor "danger" es 5
        // Si es diente normal: el valor "danger" es 3
        var valorDanger = $('#i'+pieza).hasClass('bot-checked-dot') ? 5 : 3 ;    
        var val = document.getElementById(id).value; 

        if( val > valorDanger){
            document.getElementById(id).classList.add("text-danger");
        }else{
            document.getElementById(id).classList.remove("text-danger");
        }


        // Actualizamos general
        calculaResultDefectos();

        // Actualizamos gráfico
        updatesMargenAndProfundidad(id);
    });
}



/**
 * Actualiza Anchura Encía
 */
const updateAnchuraEncia = () => { 
    
    $('input[id^="ae"]').each(function(){
        var id = this.id;

        var pieza = id.replace(/\D/g,'');
        document.getElementById(id).value = piezas[pieza]['encia']; 

        var valor = parseInt(document.getElementById(id).value);    
        if(valor < 3){
            document.getElementById(id).classList.add("text-danger");
        }else{
            document.getElementById(id).classList.remove("text-danger");
        }
    });
}









/**
 * ÚTILES
 * 
 * ======================================================================= */

 
/**
 * Crea ID aleatorio
 *
 * @param {number} length 
 * @returns 
 */
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
   return result;
}




/**
 * Alerts
 * Muestra mensajes de alerta
 *
 * @param {string} message 
 * @param {string} type |danger|success|info|warning
 */
const muestraAlert = (message, type) => {
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
    const alertID = makeid(5);
    const wrapper = document.createElement('div');
        wrapper.className =`alert alert-${type} alert-dismissible fade show`;
        wrapper.setAttribute('role','alert');
        wrapper.setAttribute('id',alertID);
        wrapper.innerHTML = [     
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>'
        ].join('');

    alertPlaceholder.append(wrapper);

    // cierre automático
    const autocloseTimeout = setTimeout(function() {
        bootstrap.Alert.getOrCreateInstance(document.getElementById(alertID)).close();              
    }, 4000); 
    
    // elimina cierre automático si cerró con el botón
    const alert = document.getElementById(alertID);
    alert.addEventListener('close.bs.alert', event => {
        clearTimeout(autocloseTimeout);
    });
}
    
 

/*
 * addTempClass
 * jQuery plugin for add a class to an element for a custom time.
 * Support callbacks when class is removed.
 *
 * @param   {string}    className   The class to add
 * @param   {number}    expire      Time in miliseconds before remove the new class
 * @param   {function}  callback    The function invoked after remove the class
 * @return  void
 *
 * Ej.: $( 'body' ).addTempClass( 'myClass', 2000, function () { console.log( 'tada!') } );
 * http://www.etnassoft.com/2016/10/06/snippet-anadir-una-clase-a-un-elemento-de-forma-temporal-con-jquery/
 */
( function ( $ ) {
    'use strict';
    $.fn.addTempClass = function ( className, expire, callback ) {
        className || ( className = '' );
        expire || ( expire = 1500 );
        return this.each( function () {
            $( this ).addClass( className ).delay( expire ).queue( function () {
                $( this ).removeClass( className ).clearQueue();
                callback && callback();
            } );
        } );
    };
} ( jQuery ) );


