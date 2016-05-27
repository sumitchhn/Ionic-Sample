/* replace www root folder in your application folder by the git www root folder */
as www folder contain the by default application file like index.html



Steps to setup cordova and ionic in windows:
1.	Install node.js (download it from: https://nodejs.org/en/download/).
2.	Install python (download it from: https://www.python.org/downloads/).
3.	Install sdk with android build tools from https://developer.android.com/studio/index.html
4.	Open cmd 
5.	For specific folder install 
•	Go to the containing folder 
Eg:/ c:\> cd Application
•	Run command 
C:\Application > npm install cordova
C:\ Application > npm install ionic
•	To start new project
C:\ Application > ionic start <project id> <project name><to do>
Eg: ionic start com.fonantric MyApplication blank
(That will create a folder called MyApplication in the directory the command was run. Next, we will go into that directory)
•	Add platform to projects
C:\ Application \MyApplication> ionic platform add android 
(Replace android with ios if needed to install platform for android.)
•	Building application(first go )
C:\ Application \MyApplication > ionic build android (replace android with ios if we need to build for mac)
•	To run application
C:\ Application \MyApplication > ionic run android
It will start android emulator .
(for global installation use –g).
(after loading slide the menu from left side for more options)

