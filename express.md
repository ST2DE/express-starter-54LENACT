> what is express:

Express是一個基於Node.js平台的極簡、靈活的web應用開發框架，它提供一系列強大的特性，幫助你創建各種Web和移動設備應用。
基於Node.js，Node.js對文件、字符串、流等操作都封裝了一套API，Express不是在這些API基礎之上進一步封裝。只是在它基礎之上擴展了開發web應用所需要的基本功能。

>>中間件很重要？

在Express中，中間件又可分為內置中間件，自定義中間件，第三方中間件。有關內置中間件就一個static，有關自定義中間件你需要知道自定義的參數Function函數怎麼處理。有關第三方中間件需要先安裝，在使用，每一個第三方中間件都有一個特定的用途。

eg.express.static 是用來處理靜態文件
>>在 Express 中提供靜態檔案
>>如果要提供影像、CSS 檔案和 JavaScript 檔案等之類的靜態檔案，請使用 Express 中的 express.static 內建中介軟體函數。將含有靜態資產的目錄名稱傳遞給 express.static 中介軟體函數，就能直接開始提供檔案。舉例來說，使用下列程式碼在名稱是 public 的目錄中，提供影像、CSS 檔案和 JavaScript 檔案：
app.use(express.static('public'));

>> get started:

>首先從頭開始創建一個 node 專案。在桌面建立一個叫做 express 的資料夾作為專案名稱(或任何你想要的名字)。建立完後在資料夾中運行 npm init、將該資料夾轉成一個 node 專案。
下列為輸入prompt的命令：
cd workspace
mkdir express
cd express
npm init

**npm init 的動作會為此專案創建一些設定，並將這些資訊存在一個叫 package.json 的檔案中。
在 package.json 這個檔案中，使用者可以定義應用名稱 (name)、應用描述 (description)、關鍵字 (keywords)、版本號 (version)、應用配置 (config)、主頁 (homepage)、作者(author)、版本庫 (repository)、bug的提交地址 (bugs)、授權方式(licenses)… 等。

>安裝Express
npm install express --save
npm install express-generator -g

在 npm 中，「Dependency」(依賴模組)是一個非常重要的概念，–save 的意思是將這個 package 設定為此專案的 dependency。
npm 意即node package manager、node 套件管理器，npm 的默認設定是將一個套件 (package) 安裝在 node 模組下。所以當我們在安裝其他人寫的 package 後，必須再設定這個 package 是這個專案的 dependency (依賴模組)，告訴這個專案說：這次的專案需要依賴於這個模組才能運作噢！

>建立Express App – 設定伺服器(Server)與路由(Route):

const express = require('express');
const app = express(); //建立一個Express伺服器
app.listen(3000); //告訴server聽取3000這個Port

首先用 const express、宣告 express 這個變數載入 express 函式庫，再宣告 app 變數為 express function、建立一個 Express 伺服器；最後告訴伺服器聽取 3000 這個 Port。
然後打開 Node.js Terminal，輸入 Node app.js 啟動 Node。(關掉的話就是control+c)
再打開瀏覽器、在 URL 上輸入 localhost:3000，就可以連線到伺服器。


>為了確認伺服器成功連線，在 app.listen 上加上一行訊息 “Example app is running on port 3000!”、並讓訊息在 console 上面印出來:

app.listen(3000, function () {
  console.log('Example app is running on port 3000!');}
);
重新啟動 app.js 檔案後就可以成功看到Console上的”Example app is running on port 3000!”了。這則訊息並不會讓客戶端的使用者看到、僅供開發者參考。

>>自訂路由(Routing) – 接收請求(Get Request)與回傳回應(Send Response)
>建立一個路由函數：
function (req,res) { 
//接收連線請求、並回應客戶端
};
>Get Request:
輸入新的一行程序，告訴伺服器在根目錄時需要「Get」資料、並「Response」回送一行字串(String)回去。Node.js 就是 JavaScript 寫成，故字串同樣是用單引號(‘ ‘)包起來。

app.get('/', function (req, res) {
  res.send('Express is excellent!')
});

>從URL拿到資料
「/」代表從根目錄拿到資料、「/about」代表可以拿到 About 頁面，也可以往下繼續設定路徑找到 about 下的 about-me 頁面：「/about/about-me」。

app.get('/', function(req, res) {
    res.send('Send root!')
});
app.get('/about', function(req, res) {
    res.send('Send about page!')
});
app.get('/about/about-me', function(req, res) {
    res.send('Send about-me page!')
});
**伺服器會從 URL 找到並回傳字串，包括 HTML、JSON 等都是字串的一種。

>從req.params拿到參數
我們可以進一步在URL做一些設定、並從 URL 拿到我們要的參數；這些參數的命名可由我們自己命名。首先介紹的 req.params，當伺服器拿到「/post/:id」這個路徑時，回傳id這個參數(parameter)、寫作「req.params.id」。
app.get('/post/:id', function(req, res) {
  res.send(req.params.id);}
);
req.params 會將命名過的參數以 key-value 的形式存放；比如路徑 /user/:name，name 屬性會存放在 req.params.name。
我們也可以在中間加上字串、並結合兩個參數：
app.get('/about/:name/:nickname', function(req, res) {
  res.send(req.params.name + ' is so ' + req.params.nickname);
});

>express 的運作方式:
app.js 大致上可以拆成三個部分，首先是載入相依的模組，並建立 server
app.js 第二個部分為設定檔，詳細的設定語法與參數可以參考官方文件:
1) Template  檔案放在 /views 目錄下，待會兒我們就要繼續追查這個目錄；
2)  express 預設使用的 view engine 是一個名為 jade 的樣板引擎，如果不習慣 jade 的特殊語法，別忘了這是個"設定檔"，表示我們也可以將它改成使用其他樣板引擎。
app.js 最後一個部分是 Routes，我們可以設定各種網址的 entry 並將它指定到不同的檔案。


>特別的規則：

>>Router 規則重複時，總是執行先定義的規則

當訪問任何被這兩條同樣的規則匹配到的路徑時，總是會先執行前一條規則，後面的會被忽略，原因是 Express 在處理 Router 規則時，會優先處理先定義的規則，因此後面相同的規則被忽略。

>>Router 控制權轉移 - next()

Express 提供了 Router 控制權轉移的方法，即 callback 的第三個參數 next，透過next()，可將控制權轉移給後面的規則。

>>使用模板引擎 / 樣板引擎 (Template Engine)

指定頁面模板位置，在 views 子目錄下。

app.set('views', path.join(__dirname, 'views'));
表明要使用的模板引擎是 ejs。

app.set('view engine', 'ejs');
res.render是使用模板引擎的語法，並將其產生的頁面直接返回给 client 端。

res.render( 'index', {
  title : 'To-Do List'
});
它接受兩個參數，第一個是樣板名稱（不含附檔名），第二個是傳遞給樣板的資料，帶到畫面上。下面的 title 都會被「To-Do List」所替換掉。

//<h1><%= title %></h1>//
//<p>Welcome to <%= title %></p>//
而 ejs 的語法有三種：

//<% code %>：JavaScript 程式碼。
<%= code %>：顯示替換過 HTML 特殊字符的内容。
<%- code %>：顯示原始 HTML 内容。//



reference:
https://hellolynn.hpd.io/2017/08/11/node-js-express-初入門-上集/
