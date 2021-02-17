let yourName = new Array();
let sureName = new Array();
let fullName = new Array();

function exerciseFirst(){
    result.textContent = "";
    yourName = prompt("Escriu el teu nom");
    
    var arr = yourName.split('');
    
    for (let i = 0;i<arr.length;i++){
        console.log(arr[i]);
        result.textContent = result.textContent + arr[i] + "\n";
    }
    
}

function exerciseSecond(){
    result.textContent = "";
    yourName = prompt("Escriu el teu nom");
    var arr = yourName.split('');
    
    for (let i = 0;i<arr.length;i++){
        if(arr[i].match(/[aAeEiIoOuU]/)){
            console.log("He trobat la vocal " + arr[i]);
            result.textContent = result.textContent + "He trobat la vocal " + arr[i] + "\n ";
        }else if (arr[i].match(/[1234567890]/)){
            console.log("Els noms de persones no contenen el numero " + arr[i]);
            result.textContent = result.textContent + "Els noms de persones no contenen el numero " + arr[i] + "\n ";
        }else{
            console.log("He trobat la consonant " + arr[i])
            result.textContent = result.textContent + "He trobat la consonant " + arr[i] + "\n ";
        }
    }
}

function exercisethird(){
    result.textContent = "";
    const freq = new Map();
    let times = "";
    
    yourName = prompt("Escriu el teu nom");
    let arr = yourName.split('');

    for (let i = 0;i<arr.length;i++){
        times+=arr[i];
    }
    for (let i=0; i<times.length;i++) {
        let character = times.charAt(i);
        if (freq.has(character)) {
            let valor = freq.get(character);
            valor = valor + 1;
            freq.set(character, valor);
        } else {
            freq.set(character, 1);
        }
    }
    console.log(freq)
    
    for (const [clave, valor] of freq) {
        console.log(clave, valor);
        result.textContent = result.textContent + " " + clave + valor;
      }
    
}


function exerciseFourth(){
    result.textContent = "";
    let space = " ";
    yourName = prompt("Escriu el teu nom");
    arrName = yourName.split('');
    surName = prompt("Escru el teu cognom");
    arrSure = surName.split('');
    
    fullName = arrName.concat(space,arrSure);
    
    console.log(fullName);
    for (let j=0; j<fullName.length;j++) {
        result.textContent = result.textContent + fullName[j];
    }
    
}

function exerciseFifth(){
    result.textContent = "";
    
    let string = 'Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email';
    
    var re = /\S+@\S+\.\S+/;
    //var re =  /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;

    var extractedEmail=re.exec(string);
    
    console.log(extractedEmail);
    result.textContent = result.textContent + extractedEmail;
}