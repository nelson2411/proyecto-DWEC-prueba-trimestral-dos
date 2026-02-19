# 📺 API Series - Angular SPA

Este proyecto es una aplicación de página única (SPA) desarrollada en **Angular** para la gestión de series de TV. Consume una API REST externa para listar contenidos y permite el registro de nuevas series mediante formularios reactivos.

## 🚀 Características

- **Listado de Series**: Consumo de API externa mediante servicios y Observables (GET).
- **Formulario Reactivo**: Sistema de alta de series con validaciones personalizadas (POST).
- **Navegación**: Sistema de rutas dinámicas con `Angular Router`.
- **Diseño**: Interfaz moderna utilizando **Bootstrap** y **ng-bootstrap**.
- **Arquitectura**: Separación estricta de responsabilidades (Layout, Pages, Services).

## 🛠️ Tecnologías utilizadas

- [Angular](https://angular.io/) (v17+)
- [Bootstrap](https://getbootstrap.com/) & [ng-bootstrap](https://ng-bootstrap.github.io/)
- [RxJS](https://rxjs.dev/) para el manejo de flujos asíncronos.
- [HttpClient](https://angular.io/guide/http) para el consumo de API REST.

## 📂 Estructura del Proyecto

Siguiendo los requisitos de la actividad, el proyecto se organiza de la siguiente forma:

```text
src/app/
├── components/
│   └── layout/
│       ├── header/        # Barra de navegación con routerLink
│       └── footer/        # Información institucional y del alumno
├── pages/
│   ├── home/              # Página principal: Listado de series (GET)
│   └── new/               # Página de alta: Formulario reactivo (POST)
├── services/
│   └── series.service.ts  # Lógica de comunicación con la API (HttpClient)
├── app.routes.ts          # Configuración de rutas (/home, /new)
└── app.component.html     # Estructura común (Header + Router + Footer)
```
