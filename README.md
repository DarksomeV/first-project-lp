# Проект "Thomas Rhythm"

## Структура проекта
Название папки | Описание
------------ | -------------
css | Подключаем *.css файлы к проекту, а именно: style.css, slicknav.css, grid.css, font-awesome.min.css, et-line.css
fonts | Подключаем шрифты к проекту. Здесь имеем иконочные шрифты et-line и font-awesome
img | Храним изображения в данной папке
js | Подключаем javascript файлы, такие как google-maps.js, header-scroll.js, файл инициализации плагинов init.js, jquery.slicknav.min.js, scroll-to.js
Корневая | Имеем вспомогательный файл guide.html, который демонстрирует элементы по-умолчанию проекта

## Подключаемые библиотеки и плагины
### **Библиотеки**
	1. jQuery
  2. jQuery UI

### **Макет сетки**
Колоночная структура показана в файле **grid.css**

### **Иконочные шрифты**
	1. Font-Awesome
  2. Et line

### **Используемые плагины**
Название плагина | Описание
------------ | -------------
Google Maps | Подключаем Гугл-карты. Используем файл google-maps.js
Scroll | Подключаем плавный скролл к проекту. Используем файлы header-scroll.js и scroll-to.js (В котором мы и создаем атрибут data-scroll который отвечает за скролл к определенному элементу)
Tabs | Подключаем табы, используя jQuery и jQuery UI
Slick Carousel | Подключаем карусель Slick
Slick Nav | Подключаем навигацию Slick Nav для отображения на мобильных устройствах. Используем файлы jquery.slicknav.min.js и slicknav.css

_Инициализируем плагины Tabs, Slick Carousel, Slick Nav в файле init.js_

### **Шрифты для текста**

  1. Dosis Regular
  2. Dosis Light
  3. OpenSans
  4. OpenSans Light

## **Стандартные компоненты и классы**
_Стандартные компоненты и классы продемонстрированы в файле **guide.html**_
### ***Компоненты***
***1. Задаем отступы между стандартными блоками:***

	.default-section
  .small-section

***2. Контейнеры***

	.container
	.container-fluid

***3. Создаем и стилизируем заголовки:***

  .title
  .title-white
  .section-title
  .section-title-light

***4. Стандартный текст:***

	.default-text

***5. Стилизируем стандартные кнопки::***

  .btn
  .btn[disabled]
  .btn-default
  .btn-black
  .btn-xs

***6. Класс для стандартной стилизации форм:***

	.form-control

***7. Ромбовидные иконки:***

	.rhomb-icon
	.rhomb-icon.black-icon
  .rhomb-icon.white-icon
  .rhomb-icon.transparent-icon

### ***Классы***
***1. Выравнивание:***

		.text-center 
		.text-right
		.text-justify 
       
***2. Задаем фон:***

		.bg-black
		.bg-grey

***2. Обтекание:***

		.pull-left
		.pull-right
		.m-auto

## Используемые медиа-запросы
### Используем следующие контрольные точки для перестроения и изменения стилей 
     @media (max-width:991px)
     @media (max-width:767px)
     @media (max-width: 576px)
     @media (max-width:479px)
