# Скриншоты прогресса выполнения курса openedu

Скрипт, который создаст видимость вашей работы в уходящем семестре.

![Progress](https://i.imgur.com/jQVCYSm.gif)
[Грядёт борьба сил света с силами разума (c) Неизвестный студент]

## Подготовка

Создаём виртуальное окружение и активируем его
```bash
python3 -m venv venv
. venv/bin/activate
```

Внутри виртуального окружения устанавливаем необходимые зависимости
```bash
python -m pip install -r requirements.txt
```

## Запуск
В виртуальном окружении:
```bash
USERNAME="OPENEDU_USERNAME" PASSWORD="OPENEDU_PASSWORD" EMAIL="OPENEDU_EMAIL" python create_screenshots.py
```

## Результаты
В текущей рабочей директории будет создана папка `screenshots/` со всеми созданными скриншотами. 
