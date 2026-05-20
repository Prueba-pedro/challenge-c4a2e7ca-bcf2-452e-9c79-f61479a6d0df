# Fortalecimiento de Habilidades en Manejo de Excepciones

En el contexto de una aplicación financiera, el sistema necesita registrar transacciones de forma segura y eficiente. Cada transacción tiene un identificador, monto, fecha y tipo. El sistema debe manejar posibles errores durante el registro, como transacciones duplicadas, montos negativos o fechas inválidas. El objetivo es garantizar que el sistema siga operando correctamente a pesar de estos errores.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | manejo de excepciones |
| **Nivel** | junior-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 3-4 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Registro de Transacciones

**Objetivo:** Implementar la funcionalidad básica para registrar transacciones.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Diseña la estructura de datos para una transacción.
- Implementa la funcionalidad para registrar una transacción.

**Entregable:** Funcionalidad para registrar transacciones sin manejo de errores.

<details>
<summary>Pistas de conocimiento</summary>

- Piensa en cómo representar los datos de una transacción.
- Considera cómo validar los datos antes de registrar una transacción.

</details>

### Fase 2: Manejo de Excepciones

**Objetivo:** Implementar el manejo de excepciones para las transacciones.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Identifica posibles errores durante el registro de transacciones.
- Implementa el manejo de excepciones para manejar estos errores.

**Entregable:** Funcionalidad para registrar transacciones con manejo de excepciones.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo manejar transacciones duplicadas, montos negativos y fechas inválidas.
- Piensa en cómo comunicar los errores al usuario.

</details>

### Fase 3: Optimización y Refactoring

**Objetivo:** Optimizar el código y realizar refactoring para mejorar la manejabilidad de excepciones.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Analiza el código implementado y busca oportunidades de optimización y refactoring.
- Aplica las mejoras identificadas al código.

**Entregable:** Código refactorizado y optimizado para el manejo de excepciones.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo hacer el código más legible y mantenible.
- Piensa en cómo reducir la redundancia en el manejo de excepciones.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es una excepción en el contexto de nuestro sistema de registro de transacciones?
- **paraQueSirve**: ¿Para qué sirve el manejo de excepciones en nuestro sistema?
- **comoSeUsa**: ¿Cómo se usa el manejo de excepciones para manejar transacciones duplicadas?
- **erroresComunes**: ¿Cuáles son los errores comunes que debemos manejar en el registro de transacciones?
- **queDecisionesImplica**: ¿Qué decisiones implica el refactoring del código para mejorar el manejo de excepciones?

## Criterios de Evaluacion

- Implementación de la funcionalidad básica para registrar transacciones.
- Implementación del manejo de excepciones para las transacciones.
- Optimización y refactoring del código para mejorar la manejabilidad de excepciones.

---

*Reto generado automaticamente por Challenge Generator - Pragma*
