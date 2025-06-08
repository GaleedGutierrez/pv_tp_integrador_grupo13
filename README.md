# 🎓 Sistema de Gestión Estudiantil - Facultad de Ingeniería

> **Programación Visual** - Segundo Año 2025
>
> **Grupo 13** - Trabajo Práctico N°5

Un sistema web moderno para la gestión integral de estudiantes de la Facultad de
Ingeniería.

## 🚀 Características Principales

- ✅ **Gestión Completa de Estudiantes**: Crear, visualizar, editar y eliminar
  información sobre los estudiantes.
- 🎨 **Interfaz Moderna**: Diseño responsive con Chakra UI v3.
- 🔍 **Navegación Intuitiva**: Router con rutas dinámicas y manejo de
  errores 404.
- 💾 **Persistencia Local**: Almacenamiento de datos con localStorage.
- 🎭 **Avatares Dinámicos**: Generación automática de avatares con paletas de
  colores aleatorias.
- ⚡ **Desarrollo Rápido**: Configuración con Vite para desarrollo y compilación
  optimizados.
- 🧪 **Calidad de Código**: ESLint, Prettier, Husky para mantener estándares de
  código.

## 👥 Integrantes del Grupo

- **[Alfredo Ezequiel Gonzalez Lopez](https://github.com/Ezequiel12354s)**
  (@Ezequiel12354s)
- **[Axel Enrique Galeed Gutierrez](https://github.com/GaleedGutierrez)**
  (@GaleedGutierrez)
- **[Enzo Isaías Condori](https://github.com/IsaiasCondori)** (@IsaiasCondori)
- **[Franklin Fernando Alexander Vazquez](https://github.com/VasquezFranklin)**
  (@VasquezFranklin)

## 🛠️ Stack Tecnológico

### Frontend Framework

- **React** - Biblioteca principal para la interfaz de usuario.
- **React Router** - Navegación y enrutamiento SPA.
- **Vite** - Herramienta de desarrollo y build tool.

### Interfaz de Usuario

- **Chakra UI** - Sistema de componentes y diseño
- **React Icons** - Biblioteca de iconos

## 📁 Arquitectura del Proyecto

```bash
src/
├── 📄 main.jsx                         ├── # Punto de entrada de la aplicación
├── 🌐 AppRouter.jsx                    ├── # Configuración de rutas principales
├── 📁 views/                           ├── # Páginas/Vistas de la aplicación
│   ├── 🏠 Home.jsx                     │   ├── # Página principal
│   ├── 📋 ListOfStudents.jsx           │   ├── # Lista de estudiantes
│   ├── ➕ AddNewStudent.jsx            │   ├── # Formulario de nuevo estudiante
│   ├── ✏️ UpdateStudent.jsx            │   ├── # Formulario de edición
│   ├── 👁️ DetailsStudent.jsx           │   ├── # Detalles del estudiante
│   ├── ℹ️ About.jsx                    │   ├── # Información del proyecto
│   └── ❌ NotFoundPage.jsx             │   └── # Página de error 404
├── 🧩 components/                      ├── # Componentes reutilizables
│   ├── 🧭 NavBar.jsx                   │   ├── # Barra de navegación
│   ├── 📝 StudentForm/                 │   ├── # Formulario de estudiantes
│   ├── 📊 TablesTableRow/              │   ├── # Filas de tabla
│   ├── ✅ SuccessModal.jsx             │   ├── # Modal de éxito
│   ├── ⚠️ ConfirmationModal.jsx        │   ├── # Modal de confirmación
│   ├── 🚨 ErrorBoundary.jsx            │   ├── # Manejo de errores
│   └── 🎨 ui/                          │   └── # Componentes UI base
├── 🌍 context/                         ├── # Estado global de la aplicación
│   ├── 📊 global.context.js            │   ├── # Contexto principal
│   └── 🏗️ global.provider.jsx          │   └── # Proveedor de estado
├── 📦 data/                            ├── # Datos de ejemplo y mock
│   └── 👥 studentsExample.js           │   └── # Datos de estudiantes de prueba
├── 🎯 models/                          ├── # Modelos y tipos de datos
│   ├── 👤 student.model.js             │   ├── # Modelo de estudiante
│   └── 🛣️ routers.model.js             │   └── # Definición de rutas
├── 🔧 utils/                           ├── # Utilidades y helpers
│   └── 🎨 getRandomColorPalette.js     │   └── # Generador de paletas
├── 🪝 hooks/                           ├── # Custom hooks
│   └── 💾 useLocalStorage.js           │   └── # Hook para localStorage
├── 📊 constants/                       ├── # Constantes de la aplicación
│   └── 🎨 colorPalettes.js             │   └── # Paletas de colores
└── 🖼️ assets/                          └── # Recursos estáticos
```

## 🎯 Funcionalidades Implementadas

### 📋 Gestión de Estudiantes

- **Listar Estudiantes**: Tabla interactiva con información completa.
- **Agregar Estudiante**: Formulario para ingresar un nuevo estudiante al
  sistema.
- **Editar Estudiante**: Modificación de datos existentes.
- **Eliminar Estudiante**: Confirmación segura antes de eliminación.
- **Ver Detalles**: Vista detallada de información estudiantil.

### 🎨 Interfaz de Usuario

- **Avatares Personalizados**: Generación automática con iniciales.
- **Navegación Fluida**: Transiciones suaves entre páginas.
- **Feedback Visual**: Modales de confirmación y éxito.

### 💾 Gestión de Datos

- **Persistencia Local**: Los datos se guardan en localStorage.
- **Validación de Datos**: Verificación de campos requeridos.
- **Prevención de Duplicados**: Control de L.U. únicos.
- **Estado Global**: Contexto React para manejo centralizado.

## 🚀 Instalación y Configuración

### Pasos de Instalación

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/GaleedGutierrez/pv_tp5_grupo13.git
   cd pv_tp5_grupo13
   ```

2. **Instalar dependencias**

   Asegúrate de tener Node.js y npm instalados.

   Para cambiar a la versión especificada en el .nvmrc

   ```bash
    nvm use
   ```

   Para instalar la versión especificada si no la tienes instalada

   ```bash
    nvm install
   ```

   Instala las dependencias necesarias para el proyecto

   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**

   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**

   ```bash
   http://localhost:5173
   ```

## 📊 Modelo de Datos

### Estudiante (Student)

```javascript
{
  lu: string,           // Libreta Universitaria (único)
  name: string,         // Nombre del estudiante
  lastName: string,     // Apellido del estudiante
  yearOfStudy: number,  // Año de estudio (1-5)
  email: string,        // Correo electrónico
  address: string,      // Dirección
  phone: string         // Teléfono
}
```

## 🌐 Rutas de la Aplicación

```javascript
/                                    # Página principal
/alumnos                             # Lista de estudiantes
/alumnos/nuevo                       # Agregar nuevo estudiante
/alumnos/:alumnoId                   # Detalles del estudiante
/alumnos/:alumnoId/editar            # Editar estudiante
/about                               # Información del proyecto
/*                                   # Página 404 (cualquier ruta no encontrada)
```

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT** - ver el archivo [LICENSE](LICENSE)
para más detalles

---

**📚 Universidad Nacional de Jujuy - Facultad de Ingeniería - Analista
Programador Universitario - 2do año - _Programación Visual - 2025_**
