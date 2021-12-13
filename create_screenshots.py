import os
from datetime import datetime
from getpass import getpass
from pathlib import Path

from selenium import webdriver
from selenium.webdriver import FirefoxOptions, ChromeOptions
from selenium.webdriver.remote.webdriver import WebDriver


# noinspection PyBroadException
def get_driver() -> WebDriver:
    """
    Возвращает экземпляр драйвера запущенного браузера.
    Если не получается запустить ни один браузер - выкидывает исключение.

    Returns:
        WebDriver: запущенный браузер.

    Raises:
        Exception: если не удалось подключиться ни к одному поддерживаемому браузеру.
    """
    try:
        options = FirefoxOptions()
        options.headless = True
        driver = webdriver.Firefox(
            options=options,
        )
        return driver
    except Exception:
        print("Не удалось запустить Firefox")

    try:
        options = ChromeOptions()
        options.headless = True
        driver = webdriver.Chrome(
            options=options,
        )
        return driver
    except Exception:
        print("Не удалось запустить Chrome")

    raise Exception("Не найден поддерживаемый браузер")


def sign_in(driver: WebDriver, *, username: str, password: str) -> None:
    """
    Авторизация на openedu.

    Args:
        driver (WebDriver): запущенный браузер
        username (str): логин от openedu
        password (str): пароль от openedu
    """

    driver.get('https://sso.openedu.ru/login/')

    username_input = driver.find_element_by_css_selector("#id_username")
    username_input.click()
    username_input.clear()
    username_input.send_keys(username)

    password_input = driver.find_element_by_css_selector("#id_password")
    password_input.click()
    password_input.clear()
    password_input.send_keys(password)

    submit_button = driver.find_element_by_css_selector("#auth_form_sub")
    submit_button.click()


def create_screenshots(
        driver: WebDriver,
        *,
        username: str,
        email: str,
        count: int = 10,
) -> None:
    """
    Перерисовывает статистику и сохраняет скриншоты.

    Args:
        driver (WebDriver): запущенный браузер
        username (str): логин от openedu
        email (str): почта от openedu
        count (int): кол-во скриншотов
    """

    driver.get('https://courses.openedu.ru/courses/course-v1:mipt+TEORCOD+fall_2021/progress')

    with open('display_progress.js', 'r') as f:
        script_template = f.read()

    for i in range(1, count + 1):
        js = script_template
        js = js.replace('__STUDENT_NICK__', username)
        js = js.replace('__STUDENT_MAIL__', email)
        js = js.replace('__COMPLETE_PERCENT__', f'{i / count:0.2f}')

        driver.refresh()
        driver.execute_script(js)

        screenshot_filename = f'screenshots/s_{i:02n}_{datetime.now()!s}.png'
        # create folders if not exists
        os.makedirs(Path(screenshot_filename).parent, exist_ok=True)
        driver.save_screenshot(screenshot_filename)


def main() -> None:
    """
    Читает логин и пароль пользователя из переменных окружения.
    Если они не определены, просит ввести их вручную.
    После этого создаёт скриншоты выполнения курса.
    """

    username = os.environ.get('USERNAME')
    password = os.environ.get('PASSWORD')
    email = os.environ.get('EMAIL')

    if username is None:
        username = input("Введите ник от openedu:")
    if password is None:
        password = getpass("Введите пароль от openedu:")
    if email is None:
        email = input("Введите почту от openedu:")

    with get_driver() as driver:
        window_size = dict(width=1920, height=1080)
        driver.set_window_size(**window_size)

        sign_in(driver, username=username, password=password)
        create_screenshots(driver, username=username, email=email)


if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        print("Прервано пользователем")
