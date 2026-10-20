---
title: "Tu primer día"
sidebar:
  order: 2
---

Ya instalaste ArmonIA ([Antes de empezar](01-antes-de-empezar.html)) y se abrió VS Code. Esto es lo
que pasa a continuación, en orden. **Tarda unos minutos**, y casi todo lo hace ArmonIA.

## El panel de ArmonIA

Pulsa el **ícono de ArmonIA** en la barra de la izquierda. Se abre un panel con tres partes:

| Parte | Para qué |
|---|---|
| **Comandos** | Arriba, **Requisitos**: lo que hace falta en tu computador (en verde lo que está, con un círculo lo que falta). Debajo, todo lo que ArmonIA sabe hacer, a un clic |
| **Mis proyectos** | Tu espacio privado y tus proyectos: los que te esperan, los que ya están en tu computador y los que puedes descargar |
| **Mensajes** | Lo que te escriben en tus proyectos, y tus tareas |

Si no ves el panel, pulsa **F1**, escribe `ArmonIA` y elige **"ArmonIA: Abrir el panel de ArmonIA"**.

:::note
**Al abrir VS Code por primera vez** puede salir una pantalla en inglés, *«Sign in to use GitHub Copilot»*.
Copilot no es parte de ArmonIA: pulsa **Continue without Signing In**.
:::

## 1. Requisitos: todo en verde

En **Comandos → Requisitos**, pulsa lo que falte:

- **Cuenta de GitHub** → **Entrar con GitHub**. Se abre el navegador y entras con tu cuenta, **una
  sola vez**. VS Code la recuerda, y ArmonIA pone tu nombre en Git con esa misma cuenta.
- **Claude Code**: ya lo puso el instalador. Falta lo que solo puedes hacer tú: **entrar con tu
  cuenta de Claude** (ver abajo).
- **Git** y **VS Code en español**: si alguna falta, su botón lo arregla. Poner VS Code en español
  pide **cerrarlo y volver a abrirlo una vez**.
- **Confianza en tu carpeta de ArmonIA**: el paso siguiente.

## 2. Confía una vez en tu carpeta de ArmonIA

Tus proyectos se guardan en la carpeta **ws** del disco **C:**. VS Code abre cada carpeta nueva en
**modo restringido** hasta que le digas que es tuya, y mientras tanto Claude no puede trabajar.

Por eso ArmonIA te propone confiar **una sola vez** en tu carpeta de ArmonIA, y vale para todos tus
proyectos:

1. Pulsa **Confiar ahora**. ArmonIA te avisa de lo que va a pasar y abre tu carpeta **ws**.
2. Arriba sale una banda azul de «modo restringido»: pulsa **Administrar** («Manage»).
3. En la pantalla que se abre, pulsa **Confiar** («Trust»). Ya está.

:::note
**Si ves la banda de «modo restringido» en un proyecto**, tu proyecto **no se ha borrado**: VS Code
espera esa respuesta. Pulsa **"ArmonIA: Confiar en tu carpeta de ArmonIA (cómo hacerlo)"**.
:::

## 3. Tu espacio privado

Tu espacio para empezar se llama **Mis proyectos**: el mapa de tu vida y de tus proyectos. En el panel,
pulsa **Crear mi espacio privado**. ArmonIA lo crea **en tu cuenta de GitHub**: privado, a tu nombre y
guardado, con David como colaborador para acompañarte. Antes de crearlo, te dice quién lo ve.

:::note
Si ya lo tienes (por ejemplo, porque estrenas computador), ArmonIA lo trae tal cual.
:::

## 4. Tus proyectos con David

Cuando David monta un proyecto contigo, te llega de una de estas dos maneras, y las dos acaban en
**Mis proyectos**:

- **Una invitación de GitHub.** Sale arriba, en **Te esperan**. Pulsa **Aceptar y abrir**: ArmonIA
  acepta la invitación, lo descarga y lo abre. No necesitas código.
- **Un código por correo** (8 letras y números, por ejemplo `K7Q2-9XPD`). En **Comandos**, pulsa
  **"ArmonIA: Tengo un código"**. Antes de descargar nada, ArmonIA te enseña **para quién es y qué
  proyectos trae**; si es correcto, pulsa **Descargar**. El código vale 7 días; si caducó, pídele otro
  a David.

:::note
**Solo salen proyectos de ArmonIA**: los de David, los tuyos y los de las organizaciones de las que
formas parte. Un proyecto de GitHub que no es de ArmonIA no aparece.
:::

:::note
**Si un código no te lo mandó David, no lo uses.** Borra el correo y avísale.
:::

## 5. Entra en Claude: el paso que solo puedes hacer tú

La primera vez que se abre Claude, **tienes que entrar con tu cuenta de Claude**: se abre el navegador
y entras como en cualquier sitio.

:::note
**ArmonIA no puede hacer este paso por ti, ni saber si lo has hecho.** Si Claude no te saluda, lo
más probable es que falte esto, o que tu cuenta no tenga plan de pago.
:::

## 6. Habla con tu armonizador

Tu armonizador es el agente de Claude de tu proyecto. Pulsa **"ArmonIA: Hablar con mi armonizador"**:
abre a Claude y te copia la primera frase. Pégala en el recuadro de Claude y pulsa Enter.

A partir de ahí, háblale como le escribirías a una persona que acaba de entrar a trabajar contigo:
pídele que te cuente qué hay, que te explique algo, o que haga lo que necesites. **No hace falta
escribir bien ni usar palabras técnicas.**

---

## Mensajes

En **Mensajes** ves lo que se escribe en cada uno de tus proyectos, los más recientes primero, y los
ya cerrados aparte. **Tus tareas** abre lo que te toca hacer a ti.

## Claude te va a pedir permiso. Es a propósito

Las primeras veces que Claude haga algo —guardar un archivo, subir tus cambios— **te pedirá
permiso**. No es un fallo: **la decisión es tuya**. Si le contestas que sí y que no vuelva a
preguntar, lo recuerda, así que las preguntas se acaban en los primeros minutos.

## Lo que ya está en tu computador no se toca

ArmonIA **nunca borra nada** en tu computador. Si una carpeta de tu proyecto ya tiene trabajo tuyo,
no la cambia y te lo dice.

## Más adelante

- **Para traer lo nuevo de tus proyectos**: **"ArmonIA: Actualizar mis proyectos"**.
- **Si te invitan a otro proyecto**, aparece en **Te esperan**. Lo que ya tienes no se toca.
- **Si algo se queda a medias**: **"ArmonIA: ¿Qué me falta?"**, o mira
  [Si algo falla](06-si-algo-falla.html).
