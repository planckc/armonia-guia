---
title: "Si algo falla"
sidebar:
  order: 6
---

Lo que puede pasar, ordenado por **lo que ves**, y qué hacer. Si no está aquí, ve al final: **cómo
pedir ayuda**.

## Al descargar el instalador

**Busqué «instalador ArmonIA» y salen otras cosas.**
Lo que sale en Google o en Bing **no es el instalador**: no lo descargues. Usa siempre el enlace del
correo o de [Antes de empezar](01-antes-de-empezar.html), **pulsándolo**, no copiándolo a mano.

**El navegador dice que el archivo «no se descarga habitualmente».**
Es normal: el instalador es nuevo y todavía no tiene firma digital. Pulsa los tres puntos **···** y
elige **Conservar**.

**Elegí «Notificar este archivo como seguro» y salió un formulario de Microsoft.**
Ese formulario no descarga nada: ciérralo. Vuelve a los tres puntos **···** y elige **Conservar**.

**Sale una ventana cuyo botón grande dice «Eliminar».**
No lo pulses. Pulsa la **flechita** que tiene al lado y elige **Conservar de todos modos**.

## Al abrir el instalador

**«Windows protegió su PC».**
Pulsa **Más información** (el texto pequeño) y después **Ejecutar de todas formas**.

**No aparece «Ejecutar de todas formas».**
Tu computador es de una empresa que no deja instalar programas. Escríbele a David: hay otra forma,
pero la tiene que preparar él.

**La ventana negra se quedó abierta con un error.**
Algo no se pudo instalar y la ventana lo dice. Hazle una **captura** y mándasela a David. Puedes
volver a abrir el instalador: lo que ya quedó instalado no se toca.

**El instalador terminó, pero no veo VS Code.**
Escribe **ArmonIA** en el menú Inicio y ábrelo desde ahí.

## En VS Code

**VS Code está en inglés.**
En el panel de ArmonIA, en **Comandos → Requisitos**, pulsa **VS Code en español**. VS Code pide
cerrarse y volver a abrirse una vez.

**Sale una pantalla en inglés: «Sign in to use GitHub Copilot».**
Copilot no es parte de ArmonIA. Pulsa **Continue without Signing In**.

**No veo el ícono de ArmonIA en la barra de la izquierda.**
Pulsa **F1**, escribe `ArmonIA` y elige **"ArmonIA: Abrir el panel de ArmonIA"**. Si no aparece
ninguna opción de ArmonIA, vuelve a abrir el instalador: pone lo que falte.

**Arriba sale una banda de «modo restringido» y parece que se borró todo.**
**No se ha borrado nada.** VS Code espera que le digas que la carpeta es tuya, y mientras tanto Claude
no puede trabajar. Pulsa **"ArmonIA: Confiar en tu carpeta de ArmonIA (cómo hacerlo)"**: ArmonIA abre tu
carpeta **ws**; en la banda azul pulsa **Administrar** («Manage») y luego **Confiar** («Trust»). Los
pasos están en [Tu primer día](02-tu-primer-dia.html).

**Ya confié y la banda sigue ahí.**
Comprueba que la carpeta abierta cuando pulsaste **Confiar** era **ws** (su nombre sale arriba, en la
barra de VS Code) y no un proyecto de dentro. Si no, repite el paso desde el panel.

**Sale una ventana de Git en inglés que pregunta por un «credential helper».**
No debería salir con el instalador de ArmonIA. Si sale, elige **manager** y avísale a David.

## En «Mis proyectos»

**No sale ningún proyecto.**
Mira primero que en **Comandos → Requisitos** la **Cuenta de GitHub** esté en verde. Para empezar, pulsa
**Crear mi espacio privado**. Si David te invitó a un proyecto, acéptalo desde **Te esperan** o desde el
correo de GitHub (mira en spam). Si te mandó un código, usa **"ArmonIA: Tengo un código"**.

**Me invitaron por GitHub y el recorrido me pide un código.**
No lo necesitas: abre el panel, ve a **Mis proyectos** y pulsa **Aceptar y abrir** en **Te esperan**.

**Sale un proyecto que no es de ArmonIA.**
No debería. Avísale a David con una captura.

**El proyecto se descargó, pero la carpeta está vacía o VS Code dice que está «roto».**
No borres nada. Pulsa **"ArmonIA: Ver el registro (para mandárselo a David si algo falla)"** y mándale
a David lo que salga.

## Con Claude

**Claude no me saluda.**
Lo más probable: falta **entrar con tu cuenta de Claude**, o tu cuenta **no tiene plan de pago**.
ArmonIA no puede ver ninguna de las dos cosas.

**Claude me pide permiso a cada rato.**
Es a propósito: la decisión es tuya. Si le dices que sí y que no vuelva a preguntar, lo recuerda.

---

## Cómo pedir ayuda

1. **Haz una captura** de lo que ves.
2. Si puedes, pulsa **"ArmonIA: Ver el registro (para mandárselo a David si algo falla)"**: abre un
   archivo con lo que ArmonIA hizo, sin contraseñas ni datos personales.
3. **Responde al correo de bienvenida** con las dos cosas, o escribe a
   soporte.armonia@3spark.net. Te respondemos en 2 días hábiles.

Para pedir una mejora o un trabajo, mira [Cómo pedir algo](03-como-pedir-algo-a-david.html).
