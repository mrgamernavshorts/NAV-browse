import sys
from PyQt5.QtWidgets import *
from PyQt5.QtCore import *
from PyQt5.QtWebEngineWidgets import * 

class MainWindow(QMainWindow):
    def __init__(self):
        super(MainWindow, self).__init__()
        self.browser = QWebEngineView()
        self.browser.setUrl(QUrl('https://google.com'))
        self.setCentralWidget(self.browser)
        self.showMaximized()
        #--------navbar--------#
        navbar = QToolBar()
        self.addToolBar(navbar)
        
        back_btn = QAction('←', self)
        back_btn.triggered.connect(self.browser.back)
        navbar.addAction(back_btn)

        back_btn = QAction('→', self)
        back_btn.triggered.connect(self.browser.forward)
        navbar.addAction(back_btn)

        back_btn = QAction('↻', self)
        back_btn.triggered.connect(self.browser.reload)
        navbar.addAction(back_btn)

        home_btn = QAction('⌂', self)
        home_btn.triggered.connect(self.navigate_home)
        navbar.addAction(home_btn)

        mywebsite_btn = QAction('----my website----', self)
        mywebsite_btn.triggered.connect(self.navigate_my_web)
        navbar.addAction(mywebsite_btn)

        self.url_bar = QLineEdit()
        self.url_bar.returnPressed.connect(self.navigate_to_url)
        navbar.addWidget(self.url_bar)

    def navigate_home(self):
        self.browser.setUrl(QUrl('https://google.com'))
    def navigate_my_web(self):
        self.browser.setUrl(QUrl('https://mrgamernavshorts.github.io/mgnsyt.com'))
    def navigate_to_url(self):
        url = self.url_bar.text()
        if url.startswith('http://') or url.startswith('https://'):
            self.browser.setUrl(QUrl(url))
        else:
            self.browser.setUrl(QUrl('https://' + url))
app = QApplication(sys.argv)
QApplication.setApplicationName('nav browse')
window = MainWindow()
app.exec_()
