# Angular

## Nuevas actualizaciones:  https://angular.dev/

ng new mi-primera-app --standalone false

## Conceptos generales

Angular cada 6 meses libera versiones mayores.
AngularJs version 1, en desuso, obsoleto y no tiene que usarse
Angular 2 en adelante...

La curva de aprendizaje es muy alta, pasada la curva es igual...

# TypeScript
TypeScript es un super set de JavaScript, extiende caracteristicas y suma nuevas.
Microsoft le da soporte a TypeScript
Se diferencian por la extension .js y .ts

Ofrece tipado estricto y flexible
Mejora enormemente la legibilidad del codigo
Nos permite usar caracteristicas modernas
Mejora el intellisense (autocompletado), cualquier IDE lo ofrece, te permite ver los tipos, si es opcional (lleva ?), dejar cursor sobre un metodo para conocer su firma (parametros y retornos)
Nos permite la inyeccion de dependencias (lo necesito y lo utilizo)

Angular usa TypeScript para tener todos los beneficios de TypeScript
Decorador concepto propio de TypeScript, te permiten diferenciar cada clase para que sea de un tipo especial

### Mitos y realidades de Angular
Angular es mejor que React, Vue y Svelte -> Falso
No ocupa paquete de terceros

Angular es mas ordenado que React, Vue y Svelte -> Falso
Si bien Angular tiene una estructura estricta no es mas ordenado

Angular es complicado de aprender -> Falso
Depende del background de cada uno, importante tener bases de JavaScript

Angular libera nuevas versiones a cada rato -> Verdadero
Cada 6 meses libera versiones mayores con nuevas caracteristicas

Las aplicaciones de Angular son muy pesados -> falso
99% de codigo no va al bundle final de la aplicación
Entre 35 a 100kb, puede ser menor si usamos bien la carga perezosa

Angular no es SEO Friendly -> falso
Angular crea SPA

Angular no soporta diferentes patrones como REDUX -> falso
Redux te permite trabajar con cualquier patron

Angular 2,4,5,6,7,8,9,10.... es el mismo Angular -> Verdadero
Es el mismo framework, cosas quedaron obsoletos

Solo puedo correr codigo de Typscript en mis aplicaciones de Angular -> falso
Cualquier libreria escrita en JavaScript puede correr en Angular

## Bases de TypeScript
Usualmente todo lo que usamos de Js esta incluido en ts.

1. Creamos una carpeta Angular
2. Abrimos Git bash en la ubicacion de la carpeta y escribimos
`npm create vite` 
Colocamos el nombre dle proyecto 01-typescript-intro
Seleccionamos Vanilla
Seleccionamos TypeScript
3. Navegamos hasta la carpeta y ahi escrimo `npm install`
4. Abrimos esta carpeta desde VSC, es una aplicacion de Vite (de node) podemos saberlo porque tiene el archivo package.json
package.json: definicion global del proyecto
5. Hacemos en la terminal `npm run dev` para que se levante el proyecto

### Tipos basicos y conceptos

Hace inferencia de tipos cuando le asignas un valor.
Es buena practica indicarle el tipo.
Si se sabe que una variable no va a variar definirla como constante **const**.
Las constantes son mas ligeras que let
Puede hber casos donde se le quiera permitir que sea de mas de un tipo y para eso usamos **|**
Si queremos tambien le podemos asignar algo pdefinido
`let hpPoints : number | string = 95;`
`let hpPoints : number | 'Full' = 95;`

Hay que mandar una referencia desde el main para que aparezca en la pantalla.
Lo importamos
`import './topics/01-basic-types.ts'`

y ahora abrir el f12 en el chrome y el bojeto se ve

### Objetos, arreglos e interfaces
`let skills = ['Bash','Counter','Healing', true, 123]`
frunciona pero te indica que es un array que puede recibir string, number o boolean

Tiparlo, para obligar al programador y evitar errores
`let skills : string[] = ['Bash','Counter','Healing']`

La interface te sirve para poder tipar los atributos de un objeto.
El beneficio es que la interface no tienen ninguna representacion fisica

? indica que no es requerido o que es undefined

### Funciones basicas
En una funcion despues de los : va el valor de retorno.
No es lo mismo **: void**, **: undefined**
**: void** indica explicitamente no va a retornar nada
any -> tipo de dato cualquiera, no recomendable.

Para imprimirlo como un objeto le colocas {}
`console.log({result});`

Nos permite textos literales (template literal)
`return (a+b).toString()`
`return `${a + b}`;`

En los parametros: 
1. poner los obligatorios
2. poner los opcionales
3. poner los opcionales con valores por defecto

### Funciones con objetos como argumentos
Tipamos creando una interface
Si dentro de una interface quiero asignarle una funcion

Nuestros objetos vana a tener una clase o una interface que nos digan como luzcan nuestros objetos
Se aconseja que cuando un objeto tiene un atributo que es un objeto tambien se cree una interface tambien para este.

### Desestructuracion de objetos
Consiste en que podamos tomar de un objeto ciertas piezas que a mi me interesa.
`const { song : anotherSong } = audioPlayer;`
Si quiero cambiarle el nombre al objeto desestructurado
`const { song : anotherSong } = audioPlayer;`


### Desestructuracion de arreglos
Recordar que los arreglos en tx comienzan en 0
Para acceder a un objeto **nombrearreglo[posicion]**

Normalmente la destructuracion de los obejtos es mediante {}.
Los arreglos se desestructuran con [].

### Desestructuracion de funciones
Si una funcion va a recibir mas de 3 parametros es recomendable crear un objeto.

Si el atributo tiene el mismo nombre que el valor se puede prescindir de el

### Importaciones y exportaciones
Tener una funcion encapsulada
Con el export {}, lo que hacemos es transformar el archivo en **modulo** y que pueda ser importado desde afuera.
Estos modulos estan encapsulados pero unicamente lo que esta siendo exportado es lo que se exponer al mundo exterior
Mundo exterior cualquier otro archivo que no sea esta

Para eso indicarle el export delante a la funcion, interface, clases etc y desde donde se vaya a usar desestrcutura
import { objeto/funcionAimportar } from ruta donde está indicado
`import { Product } from './06-function-desestructuring'`

Cuando importas, te traes todo el archivo y lo ejecutan por lo cual aparecen los console.logs.
No importar ejecuciones (console.log) solo estrcuturas, clases, funciones, interfaces,etc.

### Clases basicas
A pesar de estar definidas no funcionan exactamente igual que en JavaScript por el tema del alcance. Aqui en TypeScript tienen mas sentido.
Clase es una manera de crear un molde para crear instancias de ese mismo molde.

Dentro de las clases los atributos se llaman propiedades y las funciones metodos.

### Constructor de una clase
El constructor es un metodo especial en nuestras clases,
Es el primer metodo que se ejecuta al crear un objeto

Existe un modo corto de crear la clase: quitando la definicion de los atributos y ponerlos directamente en el constructor con su ambito.

### Extender de una clase
Extener es expandir su funcionalidad.
Añade complejidad.
Te indica que tienes que colocar **super()** e indicar los parametros del constructor del padre ya que son obligatorios

Un nivel de herencia esta bien, más empieza a complicarse

### Priorizar composición sobre herencia

Un primer acercamiento seria quitar el extends y colocar el antiguo objeto padre como atributo de esta clase y en el constructor inicializarlo (ejercicio Hero1)
Un segundo acercamiento, para que no haya dependencia y no se vea afectado si cambia persona, seria indicarlo como parametro del constructor (ejercicio Hero2)

### Generico
Cuando no sabemos que tipo de dato viene pero tiene que ser capaz de procesar al informacion de acuerdo al tipo de parametro/argumento.
Intentar NO USAR any, ya que quita cualquier restriccion que tien typeScript apra cualquier tipo de dato.
Si usamos todo any parece que estemos trabajando en Js.
Al usar any la intellisense no te ayuda, no te muestra metodos propios 

El primero generico es <T>
Puedo obligarle a typeScript que trabaje con un tipo asignandoselo al llamar a la funcion `let amIstring = whatsMyType<string>('Hola mundo');`
Cabe decir que el tipo que le estamos asignando por generico (entre <>) prevale sobre el valor (con su tipo) que le estamos mandando entre parentesis

### Decoradores
Son funciones especiales que se adjuntan a otros objetos, puediendo modificar su comportamiento.
Se puede adjuntar a las clases, propiedades o funciones de las clases, se ponen con @
Es una caracteristica que ha estado como experimental durante mucho tiempo (puede traer errores) pero a aprtir de 2023 ya quedo fija

En versiones anteriores, donde figuren errores, en el archivo **tsconfig.json** agregar
`"experimentalDecorators": true`

En Angular, la mayoria de cosas que creamos son clases lo unico que suele cambiar es el decorador que indica si es un modulo, un servicio o que
En Angular nosotros rara vez construimos un decorador, utilizamos ya los creados por el lenguaje.

### Encadenamiento opcional (optional chaining)
Es cuando lo utlizamos para acer referencia a un valor

Hay una forma de que TypeScript le indiquemos que **confie que siempre va a traer algo y es poniendole el simbolo !**
Not Null Assertion Operator ! es una forma de decirle a TypseScript que ustedes confien en mi que nunca van a recibir un null aqui.