# Webpack Base Template

Шаблон для сборки статики:
* TypeScript
* Stylus
* Eslint(Standard)

---
## Старт работ

#### Install the dependencies
```bash
npm install
```

#### Start in the development mode
```bash
npm run dev
```

#### Build for production
```bash
npm run build
```

#### Гайд по настройке линтера в VSCode
 - Зажать "Ctrl" + "Shift" + "p"
 - Выбрать "Preferences: Open Settings(JSON)"
 - Добавить 
    <pre>
      editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
      }
    </pre>
  - Вы восхитительны!(при сохранении кода в редакторе линтер пофиксит возможные issue)

---

## Описание структуры

В разработке

---

## Краткий Code Guide

#### Базовые правила для верстки
* При верстке блоков используется БЭМ
* Не используются инлайновые стили
* Используются переменные из файла `variables.styl` для повторяющихся значений
* Названия классов пишутся в kebab-case, например `.main-screen`
* Модификатор для класса обозначается добавлением двойного тире: `--`


---

## Полезные ссылки
* [Руководство по качеству кода](https://gitlab.redramka.ru/missingsince1983/meetup-info/tree/main/1.%20codestyle-frontend/BASE)
* [Правила работы с GIT](https://gitlab.redramka.ru/missingsince1983/meetup-info/tree/main/1.%20codestyle-frontend/GIT)
* [Стандарты в JS](https://gitlab.redramka.ru/missingsince1983/meetup-info/tree/main/1.%20codestyle-frontend/JS)
